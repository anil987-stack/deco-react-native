import React, { Component } from "react";
import { View, Alert, ScrollView, FlatList } from "react-native";
import { Button, Text, Icon } from "native-base";
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
import { Colors } from "App/Theme";
import _ from "lodash";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import PlanVisitmodal from "../ObjectiveplanModal/index";
import { stat } from "react-native-fs";
import TaskHeader from "./TaskHeader";
import { Headerbar } from "../../../Components/Headerbar";

class SuggestionScreen extends React.Component {
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

    let count = 0;
    let filteredPartiesList = this.filterResults(
      HelperService.filterTextListFilter(retailersList, "Sub_Category__c", data)
    );

    count = filteredPartiesList.length;

    return (
      <WhiteButton
        title={data.replace("_", " ") + "(" + count + ")"}
        style={{ ...Style.actionButton, ...Style.customSelectedStyleCorpBlue, }}
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
    } = this.props;

    return (
      <View style={{ flex: 1, backgroundColor: Colors.white }}>
        <View style={{ height: hp("8%"), backgroundColor: Colors.white }}>
        <Headerbar
          title={"Suggestions"}
          name={"play"}
          onPress={() => NavigationService.goback()}/>
          {/* {this.getPartiesAccountType()} */}
        </View>

        {/* {this.displayButton()} */}
        <PlanVisitmodal
          isVisible={isObjPlanModalVisible}
          onCloseModal={() => hideObjectiveModal()}
        />

        <View style={{ marginTop: -10, flex: 1 }}>
          
          {this.getPartiesAccountTypeData()}
        </View>
      </View>
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
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SuggestionScreen);
