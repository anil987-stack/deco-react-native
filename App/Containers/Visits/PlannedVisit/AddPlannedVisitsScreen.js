import React, { Component } from "react";
import {
  View,
  Alert,
  ScrollView,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { Button, Text, Icon } from "native-base";
import Entypo from "react-native-vector-icons/Entypo";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import SearchBar from "App/Components/SearchBar";

import { connect } from "react-redux";
import PropTypes from "prop-types";
import Style from "./PlannedVisitStyles";
import BlueButton from "App/Components/BlueButton";
import WhiteButton from "App/Components/WhiteButton";
import NavigationService from "App/Services/NavigationService";
import { HelperService } from "App/Services/Utils/HelperService";
import PlannedVisitCard from "App/Containers/Visits/PlannedVisitCard";
import SitesPlannedVisitCard from "App/Containers/Visits/PlannedVisitCard/SitesPlannedVisitCard";
import InfluencerPlannedVisitCard from "App/Containers/Visits/PlannedVisitCard/InfluencerPlannedVisitCard";
import Loading from "App/Components/Loading";
import GenericIcon from "App/Components/GenericIcon";
import NoDataFound from "App/Components/NoDataFound";
import RetailersActions from "App/Stores/Retailers/Actions";
import VisitsActions from "App/Stores/Visits/Actions";
import SitesActions from "App/Stores/Sites/Actions";
import InfluencersActions from "App/Stores/Influencers/Actions";
import EditVisitCard from "App/Containers/Visits/EditVisitCard";
import CommonActions from "App/Stores/Common/Actions";
import { Colors, ApplicationStyles } from "App/Theme";
import { ImageBackground } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { HeaderNew } from "App/Components/Headerbar/HeaderNewTwo";

import _ from "lodash";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import PlanVisitmodal from "../ObjectiveplanModal/index";
import { stat } from "react-native-fs";
import TaskHeader from "./TaskHeader";
import Scouting1 from "./Scouting1";
import EnrollmentScreen from "../PlannedVisitCard/EnrollmentScreen";
import VisitTaskTabs from "../PlannedVisitCard/VisitTaskTabs";
import DatesScrolling from "../../../Components/DatesScrolling/DatesScrolling_gradient";
import AddTaskModal from "./AddTaskModal";
import DealerCard from "./DealerCard";
import Scouting from "./Scouting";

class AddPlannedVisitsScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = { selectedButton: "DEALER" };
  }

  componentDidMount() {
    const {
      retailersList,
      updateSearchFilters,
      changePlannedSelectedPSM,
      agentid,
      accountType,
      token,
      fetchTodayAreaPjp,
      changeAddPlannedVisitsSearchFilters,
    } = this.props;
    changePlannedSelectedPSM(agentid);
    this.props.clearSelectRetailer();
    this.props.changePlannedStartDate(1);
    this.props.changePlannedSelectedDate(
      HelperService.getCurrentTimestamp() + 1 * 24 * 60 * 60 * 1000
    );
    this.fetchRetailersCall();
    //  if (retailersList && !_.isEmpty(retailersList)) {
    //       updateSearchFilters({ edited_field: 'type', 'edited_value': retailersList })
    //   } else {
    //     this.fetchRetailersCall();
    //    // updateSearchFilters({ edited_field: 'type', 'edited_value':value })
    //   }
    // this.props.changePlannedStartDate(1)
    // fetchTodayAreaPjp({
    // token,
    //team__c: agentid,
    //date:HelperService.getCurrentTimestamp(),
    //})
    if (accountType.length) {
      updateSearchFilters({
        edited_field: "type",
        edited_value: accountType[0],
      });
      updateSearchFilters({ edited_field: "selectedTab", edited_value: 0 });
    }

    changeAddPlannedVisitsSearchFilters({
      edited_field: "Name",
      edited_value: "",
    });
  }
  fetchRetailersCall() {
    const { token, agentid, fetchRetailers } = this.props;

    fetchRetailers({
      token,
    });
  }

  filterResults(list) {
    const { searchFilters, retailerSearchFilters } = this.props;

    // let
    let filteredList = HelperService.searchTextListFilter(
      list,
      "Name",
      searchFilters["name"]
    );
    filteredList = HelperService.sortListFilter(filteredList, "Name", "ASC");
    filteredList = HelperService.searchTextListFilter(
      filteredList,
      "Area_Master__c",
      searchFilters["beat"]
    );
    return filteredList;
  }

  fetchDataFromAreaList() {
    const { agentAreaPjp, agentBeatPjp, agentPjp, searchFilters } = this.props;

    let data = "";
    agentPjp.area && agentPjp.area.length
      ? agentPjp.area.map((obj) => {
          if (obj.area__c == searchFilters["area"]) {
            data = obj.sfid;
          }
        })
      : [];

    return data;
  }

  fetchDataFromBeatList() {
    const { agentAreaPjp, agentBeatPjp, agentPjp, searchFilters } = this.props;

    let data = "";

    agentPjp.beat && agentPjp.beat.length
      ? agentPjp.beat.map((obj) => {
          if (obj.Beat__c == searchFilters["beat"]) {
            data = obj.sfid;
          }
        })
      : [];

    return data;
  }

  addall = (params) => {
    const {
      filteredBeatPjpDisplayData,
      selectedPlannedVisits,
      selectedVisitDate,
      retailerSearchFilters,
      addBulkVisitsToPlan,
      partiesMapping,
      selectedVisitPSM,
      agentid,
      user_details,
      bulkVisitdata,
      retailersList,
      planvisitmodal,
    } = this.props;

    let pjp = this.fetchDataFromAreaList();
    let pjpBeat = this.fetchDataFromBeatList();
    let filterList = this.filterResults(
      HelperService.filterTextListFilter(
        retailersList,
        "Sub_Category__c",
        retailerSearchFilters["type"]
      )
    );
    console.log("filterlist", filterList);
    bulkVisitdata({
      filteredBeatPjpDisplayData,
      selectedPlannedVisits,
      selectedVisitDate,
      retailerSearchFilters,
      filterList,
      selectedVisitPSM,
      user_details,
      agentid,
      pjp,
      pjpBeat,
      retailersList,
    });
    planvisitmodal();
  };

  isaddall = () => {
    const {
      retailerSearchFilters,
      partiesMapping,
      retailersList,
      bulkVisitdata,
    } = this.props;

    let allAdded = true;
    let filterList = [];
    if (retailersList && retailersList && retailersList.length) {
      filterList = this.filterResults(
        HelperService.searchTextListFilter(
          retailersList,
          "Sub_Category__c",
          retailerSearchFilters["type"]
        )
      );
    }
    // if(filterList)

    filterList.map((obj) => {
      if (!this.isRetailerAdded(obj)) {
        allAdded = false;
      }
    });

    return allAdded;
  };

  isRemoveall = () => {
    const {
      selectedPlannedVisits,
      selectedVisitDate,
      retailerSearchFilters,
      removeBulkVisitsToPlan,
      selectedVisitPSM,
      agentid,
      retailersList,
      user_details,
    } = this.props;
    let filterList = this.filterResults(
      HelperService.searchTextListFilter(
        retailersList,
        "Sub_Category__c",
        retailerSearchFilters["type"]
      )
    );

    removeBulkVisitsToPlan({
      selectedPlannedVisits,
      selectedVisitDate,
      retailerSearchFilters,
      filterList,

      selectedVisitPSM,
      agentid,
      user_details,
    });
  };

  onAddClick(params) {
    const {
      agentid,
      selectedVisitPSM,
      selectedVisitDate,
      addVisitToPlan,
      searchFilters,
      user_details,
      agentAreaPjp,
      managerid,
      retailerSearchFilters,
      planvisitmodal,
      setaddVisitdata,
      selectedObjective,
      employee,
      filteredPjpDisplayData,
      filteredBeatPjpDisplayData,
    } = this.props;

    // console.log("params",params.Area_Master__c,filteredBeatPjpDisplayData)
    let BeatId = HelperService.getIdFormBeat_c(
      filteredBeatPjpDisplayData,
      params.Area_Master__c
    );
    console.log("params", BeatId, filteredBeatPjpDisplayData);
    // let sfid=params.Parent.attributes.url.split('/');
    // let beat=params.Beat__r.attributes.url.split('/')

    let data = {
      attributes: { type: "Visits__c", referenceId: "" },
      name: params.Name,
      ownerId: user_details,
      Customer_Name__c: params.Id,
      Visit_Date__c: HelperService.dateReadableFormatWithHyphen(
        selectedVisitDate
      ),
      Type__c: "",
      Assigned_By__c: selectedVisitPSM == agentid ? "Self" : "Manager",
      Manager__c: managerid,
      Visit_Type__c: "planned",
      PJP_Beats__c: BeatId ? BeatId.Id : null,
      Area__c: params.Area_Master__c,
      Objective__c: selectedObjective,
      Employee__c:
        employee.Employees__r &&
        employee.Employees__r.records[0] &&
        employee.Employees__r.records[0].Id
          ? employee.Employees__r.records[0].Id
          : "",
      Employee_Manager__c:
        employee.Employees__r &&
        employee.Employees__r.records[0] &&
        employee.Employees__r.records[0].Reporting_Manager__c
          ? employee.Employees__r.records[0].Reporting_Manager__c
          : "",
    };

    // if(retailerSearchFilters['type']=='Distributor')
    // {
    //    data.pjp_header__c=this.fetchDataFromBeatList()}

    data = HelperService.decorateWithLocalId(data);

    setaddVisitdata(data);

    planvisitmodal();
  }

  onRemoveClick(item) {
    const {
      agentid,
      selectedVisitPSM,
      selectedVisitDate,
      removeVisitFromPlan,
      selectedPlannedVisits,
    } = this.props;
    // let sfid=item.Parent.attributes.url.split('/');

    _.map(selectedPlannedVisits, (obj) => {
      if (
        obj.Customer_Name__c == item.Id &&
        HelperService.datesAreOnSameDay(selectedVisitDate, selectedVisitDate)
      ) {
        id = obj.local_id;
      }
    });

    removeVisitFromPlan({ id });
  }

  isRetailerAdded(item) {
    const {
      selectedPlannedVisits,
      selectedVisitDate,
      selectedVisitPSM,
    } = this.props;

    let isAdded = false;
    _.map(selectedPlannedVisits, (obj) => {
      if (
        obj.Customer_Name__c == item.Id &&
        HelperService.datesAreOnSameDay1(obj.Visit_Date__c, selectedVisitDate)
      ) {
        isAdded = true;
      }
    });

    return isAdded;
  }

  getRetailerCardNode(data) {
    const {
      retailersList,
      retailerSearchFilters,
      updateSearchFilters,
      searchFilters,
      accountType,
    } = this.props;
    console.log("retailerSearchFilters", retailerSearchFilters);
    let count = 0;
    let filteredPartiesList = this.filterResults(
      HelperService.filterTextListFilter(retailersList, "Sub_Category__c", data)
    );

    count = filteredPartiesList.length;

    return (
      <WhiteButton
        title={
          data.replace("_", " ") +
          "                            " +
          "(" +
          count +
          ")"
        }
        style={{ ...Style.actionButton, ...Style.customSelectedStyleCorpBlue }}
        textStyle={Style.actionButtonText}
        onPress={() => {
          updateSearchFilters({ edited_field: "type", edited_value: data });
          updateSearchFilters({ edited_field: "selectedTab", edited_value: 0 });
        }}
        selected={retailerSearchFilters["type"] == data}
        customSelectedStyle={{
          ...Style.customSelectedStyleCorpBlue,
          ...Style.selected,
        }}
        customSelectedTextStyle={Style.customSelectedTextStyle}
      />
    );
  }

  getPartiesAccountType() {
    const { retailersList, fetchRetailersLoader, accountType } = this.props;
    // console.log(accountType.reverse(),"accounttype")
    let visibleNode = [];

    if (
      accountType &&
      accountType.length &&
      retailersList &&
      retailersList.length
    ) {
      let filteredRetailersList = accountType;
      if (filteredRetailersList.length) {
        visibleNode = (
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            key={"Retailers"}
            data={filteredRetailersList}
            renderItem={({ item }) => this.getRetailerCardNode(item)}
            keyExtractor={(item) => item.toString()}
            onRefresh={() => this.fetchRetailersCall()}
            refreshing={fetchRetailersLoader}
            ListEmptyComponent={() => <NoDataFound text={"No Parties Found"} />}
          />
        );
      } else {
        visibleNode = (
          <NoDataFound text={"No Parties Found"}>
            <Icon
              name={"refresh"}
              onPress={() => this.fetchRetailersCall()}
              style={{
                color: Colors.button,
                fontSize: 20,
                alignSelf: "center",
                padding: 10,
              }}
              type={"FontAwesome"}
            />
          </NoDataFound>
        );
      }
    } else if (fetchRetailersLoader) {
      visibleNode = <Loading />;
    } else if (retailersList && !fetchRetailersLoader) {
      visibleNode = (
        <NoDataFound text={"No Parties found."}>
          <Icon
            name={"refresh"}
            onPress={() => this.fetchRetailersCall()}
            style={{
              color: Colors.button,
              fontSize: 25,
              alignSelf: "center",
              padding: 10,
            }}
            type={"FontAwesome"}
          />
        </NoDataFound>
      );
    }

    return visibleNode;
  }
  CardNode() {
    const { retailerSearchFilters } = this.props;
    if (retailerSearchFilters["type"] == "DEALER") {
      return <DealerCard />;
    } else if (retailerSearchFilters["type"] == "SCOUTING") {
      return <Scouting />;
    } else {
      return (
        <NoDataFound
          style={{ backgroundColor: "transparent" }}
          text={"No Parties found."}
        >
          <Icon
            name={"refresh"}
            onPress={() => this.fetchRetailersCall()}
            style={{
              color: Colors.button,
              fontSize: 25,
              alignSelf: "center",
              padding: 10,
            }}
            type={"FontAwesome"}
          />
        </NoDataFound>
      );
    }
  }
  getPartiesAccountTypeData() {
    const {
      retailersList,
      retailerSearchFilters,
      fetchRetailersLoader,
    } = this.props;
    let visibleNode = [];
    let filteredPartiesList =
      retailersList && retailersList.length
        ? this.filterResults(
            HelperService.filterTextListFilter(
              retailersList,
              "Sub_Category__c",
              retailerSearchFilters["type"]
            )
          )
        : [];
    if (filteredPartiesList.length) {
      visibleNode = (
        <FlatList
          key={"Retailers"}
          data={filteredPartiesList}
          // style={{marginBottom:"-20%"}}
          style={{ minHeight: hp("25%") }}
          contentContainerStyle={{ paddingBottom: 20, paddingTop: 10 }}
          renderItem={({ item }) => (
            <PlannedVisitCard
              data={item}
              key={item.sfid}
              id={item.sfid}
              // onAddClick={() => this.onAddClick(item)}
              onRemoveClick={() => this.onRemoveClick(item)}
              added={this.isRetailerAdded(item)}
              show={false}
            />
          )}
          keyExtractor={(item) => item.Id}
        />
      );
    } else {
      <View style={{ marginTop: "5%" }}>
        visibleNode = <NoDataFound text={"No Parties Found"} />
      </View>;
    }
    return visibleNode;
  }

  displayButton() {
    const { retailersList, retailerSearchFilters } = this.props;

    let visibleNode = [];

    let filteredPartiesList =
      retailersList && retailersList.length
        ? this.filterResults(
            HelperService.filterTextListFilter(
              retailersList,
              "Sub_Category__c",
              retailerSearchFilters["type"]
            )
          )
        : [];
    if (filteredPartiesList.length) {
      visibleNode = (
        <WhiteButton
          selected={false}
          title={!this.isaddall() ? "ADD ALL" : "REMOVE ALL"}
          disabled={false}
          loading={false}
          onPress={this.isaddall() ? this.isRemoveall : this.addall}
          style={Style.addActionButton}
          textStyle={Style.addActionButtonText}
        ></WhiteButton>
      );
    } else {
      visibleNode = [];
    }

    return visibleNode;
  }

  render() {
    const {
      retailerSearchFilters,
      partiesMapping,
      isObjPlanModalVisible,
      hideObjectiveModal,
      accountType,
      selectedVisitDate,
      changePlannedSelectedDate,
      changeAddPlannedVisitsSearchFilters,
      token,
      getAreaPjp,
      startDate,
      agentid,
    } = this.props;

    return (
      // <View style={{ flex: 1, backgroundColor: Colors.white }}>
      //   <View style={{ height: hp("8%"), backgroundColor: Colors.white }}>
      //     {this.getPartiesAccountType()}
      //   </View>

      //   {/* {this.displayButton()} */}
      //   <PlanVisitmodal
      //     isVisible={isObjPlanModalVisible}
      //     onCloseModal={() => hideObjectiveModal()}
      //   />

      //   <View style={{ marginTop: 10, flex: 1 }}>

      //     {retailerSearchFilters.type == "ENROLLMENT" ?<EnrollmentScreen /> :retailerSearchFilters.type == "TASK" ? <VisitTaskTabs />: retailerSearchFilters.type == "SCOUTING" ? <ScoutingScreen/> :this.getPartiesAccountTypeData()}

      //   </View>

      // </View>
      <ImageBackground
        style={Styles.imgBackground}
        resizeMode="cover"
        source={require("App/Assets/Images/startDay.png")}
      >
        <HeaderNew
          title={"VISIT PLANNING"}
          buttonTitle={"ADD TASK"}
          buttonTitleTwo={"ADD TO PJP"}
          iconname={"note-add"}
          iconTwoName={"cart-plus"}
          onPress={() => {
            this.props.openModal({
              content3: (
                <AddTaskModal
                  onClose={() => {
                    closeModal();
                  }}
                />
              ),
              heading3: "ADD TASK TO PJP",
              bodyFlexHeight3: 0.8,
            });
          }}
          onPressTwo={() => {
            NavigationService.navigate("SelectedPlannedVisitsScreen");
          }}
        />

        <View
          style={{
            marginTop: hp("0%"),
          }}
        >
          <View style={{ flexDirection: "row" }}>
            <View style={{ left: "14%", marginTop: "4%" }}>
              <GenericIcon
                name={"chevron-left-circle-outline"}
                style={{
                  fontSize: wp("6.9%"),
                  color: "grey",
                  alignSelf: "center",
                  paddingTop: "0.5%",
                  elevation: 25,
                }}
                show={true}
                onPress={() => NavigationService.goback()}
                // onPress={() => this.setState({ mount7: this.state.mount7 == false })}
              />
            </View>

            <View
              style={{
                borderColor: "grey",
                borderWidth: 1,
                width: wp("74%"),
                borderRadius: 8,
                marginLeft: "3.5%",
                height: "64%",
                marginTop: "4%",
              }}
            >
              <SearchBar
                //  placeholder={`Search by name`}
                //    onInputChange={(text) =>
                // 	 changeAddPlannedVisitsSearchFilters({
                // 	   edited_field: "name",
                // 	   edited_value: text,
                // 	 })
                //    }
                //    onInputSubmit={(text) =>
                // 	 changeAddPlannedVisitsSearchFilters({
                // 	   edited_field: "name",
                // 	   edited_value: text,
                // 	 })
                //    }
                //    onInputClear={(text) =>
                // 	 changeAddPlannedVisitsSearchFilters({
                // 	   edited_field: "name",
                // 	   edited_value: "",
                // 	 })
                //    }
                //    value={searchFilters["name"]}
                ContainerStyles={Styles.searchContainer}
              />
            </View>
          </View>

          <TouchableOpacity
            style={{ ...Styles.button }}

            //  this.props.clear();
            onPress={() => NavigationService.navigate("VisitsScreen")}
          >
            <LinearGradient
              colors={[Colors.primary, Colors.darkRed]}
              start={{ x: 0.1, y: 0.2 }}
              end={{ x: 0.7, y: 0.2 }}
              style={{
                height: 52,
                width: 67,
                left: "0%",
                borderRadius: 10,
                opacity: 0.9,
              }}
            >
              <Text
                style={{
                  fontFamily: "HelveticaNeue_CondensedBold",
                  color: "#bfbfbf",
                  fontWeight: "bold",
                  alignSelf: "center",
                  paddingVertical: 3,
                  fontSize: 30,
                  paddingRight: 8,
                }}
              >
                {"09"}
              </Text>
            </LinearGradient>
            {/* <Text style={{ fontSize: 15, color:"white",fontFamily: "HelveticaNeue_CondensedBold" }}>
                {" "}
                Forgot Password ?
              </Text> */}
          </TouchableOpacity>
        </View>
        <View>
          <View
            style={{
              backgroundColor: "transparent",
              height: hp("8%"),
              width: "100%",
              marginTop: hp("2.5%"),
            }}
          >
            <DatesScrolling
              startDate={HelperService.getNextNDayTimestamp(startDate)}
              endDate={HelperService.getNextNDayTimestamp(
                30,
                selectedVisitDate
              )}
              selectedStartDate={selectedVisitDate}
              selectedEndDate={selectedVisitDate}
              focusedDate={selectedVisitDate}
              allowRangeSelection={false}
              minDate={HelperService.getNextNDayTimestamp(1)}
              onDateChange={(params) => {
                changePlannedSelectedDate(params.selectedDate),
                  changeAddPlannedVisitsSearchFilters({
                    edited_field: "area",
                    edited_value: "",
                  });
                changeAddPlannedVisitsSearchFilters({
                  edited_field: "beat",
                  edited_value: "",
                });

                // getAreaPjp({
                //   token,
                //   userId: selectedVisitPSM ? selectedVisitPSM : agentid,
                //   m: HelperService.getMonthFullName(selectedVisitDate),
                // });
              }}
            />
          </View>
          <View
            style={{
              height: hp("8%"),
              backgroundColor: "transparent",
              marginTop: hp("-2%"),
            }}
          >
            {this.getPartiesAccountType()}
          </View>
        </View>

        {this.CardNode()}
        {/* <DealerCard /> */}
      </ImageBackground>
    );
  }
}

const mapStateToProps = (state) => ({
  token: state.user.token,
  agentid: state.user.loginDetails.userId,
  isConnected: state.network.isConnected,
  agentAreas: [{ id: "", name: "All" }].concat(state.user.agentAreas),
  retailersOffset: state.retailers.retailersOffset,
  retailersLimit: state.retailers.retailersLimit,
  retailersList: state.retailers.retailersList,
  dealersList: state.retailers.dealersList,
  accountType: state.retailers.accountlist,
  fetchRetailersLoader: state.retailers.fetchRetailersLoader,
  fetchDealersLoader: state.retailers.fetchDealersLoader,
  searchFilters: state.visits.planVisit.searchFilters,
  categoryRatingMapping: state.common.categoryRatingMapping,
  selectedVisitDate: state.visits.planVisit.selectedVisitDate,
  selectedVisitPSM: state.visits.planVisit.selectedVisitPSM,
  selectedPlannedVisits: state.visits.planVisit.selectedPlannedVisits,
  countMapping: state.retailers.countMapping,
  partiesMapping: state.retailers.partiesMapping,
  selectedVisitDate: state.visits.planVisit.selectedVisitDate,
  selectedVisitPSM: state.visits.planVisit.selectedVisitPSM,
  retailerSearchFilters: state.retailers.retailerSearchFilters,
  user_details: state.user.loginDetails.userId,
  agentAreaPjp: state.common.agentAreaPjp,
  agentPjp: state.common.agentPjp,
  agentBeatPjp: state.common.agentBeatPjp,
  managerid: state.startday.userDetailList.ManagerId,
  businessChannel: state.user.user_details
    ? state.user.user_details.business_channel__c
    : "",
  isObjPlanModalVisible: state.common.PlanModalVisible,
  selectedObjective: state.visits.planVisit.selectedObjective,
  employee: state.startday.userDetailList,
  filteredPjpDisplayData: state.user.filteredPjpDisplayData,
  filteredBeatPjpDisplayData: state.user.filteredBeatPjpDisplayData,

  startDate: state.visits.planVisit.startDate,
});

const mapDispatchToProps = (dispatch) => ({
  fetchRetailers: (params) => dispatch(RetailersActions.fetchRetailers(params)),
  fetchDealers: (params) => dispatch(RetailersActions.fetchDealers(params)),
  setaddVisitdata: (params) => dispatch(VisitsActions.setAddVisitData(params)),
  removeVisitFromPlan: (params) =>
    dispatch(VisitsActions.removeVisitFromPlan(params)),
  updateSearchFilters: (params) =>
    dispatch(RetailersActions.updateSearchFilters(params)),
  clearSelectRetailer: () => dispatch(RetailersActions.clearSelectRetailer()),
  changePlannedSelectedPSM: (params) =>
    dispatch(VisitsActions.changePlannedSelectedPSM(params)),
  changeAddPlannedVisitsSearchFilters: (params) =>
    dispatch(VisitsActions.changeAddPlannedVisitsSearchFilters(params)),
  getAreaPjp: (params) => dispatch(CommonActions.fetchAllAreaPjp(params)),
  fetchTodayAreaPjp: (params) =>
    dispatch(CommonActions.fetchTodayAreaPjp(params)),
  changePlannedSelectedDate: (params) =>
    dispatch(VisitsActions.changePlannedSelectedDate(params)),
  changePlannedStartDate: (params) =>
    dispatch(VisitsActions.changePlannedStartDate(params)),
  addBulkVisitsToPlan: (params) =>
    dispatch(VisitsActions.addBulkVisitsToPlan(params)),
  removeBulkVisitsToPlan: (params) =>
    dispatch(VisitsActions.removeBulkVisitsToPlan(params)),
  planvisitmodal: () => dispatch(CommonActions.showPlanObjectiveModal()),
  hideObjectiveModal: () => dispatch(CommonActions.hidePlanObjectiveModal()),
  addVisitToPlan: (params) => dispatch(VisitsActions.addVisitToPlan(params)),
  bulkVisitdata: (params) => dispatch(VisitsActions.setBulkVisitData(params)),
  openModal: (params) => dispatch(CommonActions.openModalThree(params)),
  closeModal: (params) => dispatch(CommonActions.closeModalThree(params)),
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddPlannedVisitsScreen);

const Styles = StyleSheet.create({
  header: {
    height: hp("32%"),
    alignItems: "flex-start",

    flexDirection: "column",
    justifyContent: "center",
    backgroundColor: Colors.white,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    elevation: 15,
    borderColor: Colors.primary,
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
  },
  searchableDropdown: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    alignSelf: "center",
    marginTop: "-17%",
  },
  pickerStyles: {
    marginTop: -10,
    backgroundColor: "white",
    paddingVertical: 10,

    paddingHorizontal: "8%",
    // width: "80%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    alignSelf: "center",
    borderRadius: 25,
    elevation: 5,
    borderColor: "grey",
    borderWidth: 1,
  },
  pickerStyles1: {
    marginTop: -5,
    backgroundColor: "white",
    paddingVertical: 8,
    minHeight: hp("4.7%"),
    paddingHorizontal: "9%",
    width: "83%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    alignSelf: "center",
    borderRadius: 25,
    elevation: 5,
    borderColor: "grey",
    borderWidth: 1,
  },
  psmPickerStyles: {
    marginTop: -7,
    backgroundColor: "white",
    paddingVertical: 10,
    paddingHorizontal: "8%",
    width: "79%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: 25,
    elevation: 5,
    marginLeft: "10%",
    borderColor: "grey",
    borderWidth: 1,
  },
  viewBtn: {
    height: hp("4.8%"),
    width: wp("24%"),
    paddingLeft: 0,
    paddingRight: 5,
    marginLeft: wp("0%"),
    overflow: "visible",
    borderRadius: 20,
    backgroundColor: Colors.white,
    marginRight: "4%",
    marginTop: "-8%",
  },
  viewBtntext: {
    fontSize: wp("3.8%"),
    fontWeight: "bold",
    color: Colors.primary,
    paddingTop: 3,
  },
  countBadge: {
    position: "absolute",
    backgroundColor: Colors.white,
    borderWidth: 2,
    borderColor: Colors.primary,
    right: -10,
    top: -10,
  },
  searchContainer: {
    // paddingVertical: 21,
    width: "100%",
    borderRadius: 7,
    // paddingHorizontal: 1,
    elevation: 0,
    backgroundColor: "white",
    fontSize: wp("3.8%"),
    fontWeight: "700",

    alignSelf: "center",
    // marginBottom: "2%",
    marginTop: "-0.5%",
    height: hp("4.5%"),

    borderWidth: 1,
    marginLeft: "-0.5%",

    borderColor: "white",
    opacity: 0.3,
  },
  searchFilterContainer: {
    marginTop: hp(".5%"),
    alignSelf: "center",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    alignItems: "center",
  },
  searchFilterTypeBox: {
    marginHorizontal: wp("1%"),
    marginBottom: hp("1%"),
    borderWidth: 1.5,
    width: wp("42%"),
  },
  searchFilterTypeText: {
    fontSize: wp("3.8%"),
    fontFamily: ApplicationStyles.textMediumFont,
  },
  heading: {
    alignSelf: "center",
    color: Colors.primary,
    fontFamily: ApplicationStyles.textMsgFont,
    fontSize: wp("4.2%"),
    marginBottom: 0,
    fontWeight: "bold",
    marginRight: "5%",
  },

  viewBtn1: {
    height: hp("5%"),
    width: wp("24%"),
    paddingLeft: 0,
    paddingRight: 5,
    marginLeft: wp("3%"),
    overflow: "visible",
    borderRadius: 20,
    backgroundColor: Colors.white,
    marginRight: "4%",
    marginTop: "-30%",
  },
  viewBtntext1: {
    fontSize: wp("3.8%"),
    fontWeight: "bold",
    color: Colors.primary,
    paddingTop: 34,
    paddingLeft: 7,
  },
  imgBackground: {
    width: wp("100%"),
    // height: "60%",
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: "transparent",
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  shape_container: {
    // height: 120,
    // alignItems: 'center',
    // justifyContent: 'center',
    // margin: 10,
  },
  triangle: {
    width: 0,
    height: 0,
    backgroundColor: "transparent",
    borderStyle: "solid",
    borderTopWidth: 38.5,
    borderLeftWidth: 153,
    borderRightWidth: 30,
    // borderBottomWidth: 50,
    borderLeftColor: "#5c5c5c",
    borderRightColor: "transparent",
    // borderBottomColor: '#e76f51',
    borderTopColor: "#5c5c5c",
    marginTop: "0%",
    // transform: [{ rotate: '180deg' }]
  },
  triangle1: {
    width: 0,
    height: 0,
    backgroundColor: "transparent",
    borderStyle: "solid",
    borderTopWidth: 32,
    borderLeftWidth: 150,
    borderRightWidth: 25,
    // borderBottomWidth: 50,
    borderLeftColor: "white",
    borderRightColor: "transparent",
    // borderBottomColor: '#e76f51',
    borderTopColor: "white",
    marginTop: "-9.5%",
    elevation: 20,
    fontFamily: "HelveticaNeue_CondensedBold",

    fontWeight: "bold",

    fontSize: wp("4%"),
    textAlignVertical: "center",
    textAlign: "center",
    // transform: [{ rotate: '180deg' }]
  },
  button: {
    ...ApplicationStyles.formButton,

    marginTop: hp("-5.50%"),
    maxHeight: hp("8%"),
    width: wp("28%"),
    elevation: 18,
    borderRadius: 10,
    paddingBottom: 13,
    marginLeft: wp("100%"),
    // borderColor:"grey",

    // opacity:0.8

    // borderWidth:1
  },
});
