import React, { Component } from "react";
import {
  View,
  Alert,
  ScrollView,
  TouchableHighlight,
  FlatList,
  Modal,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { Button, Text, Icon } from "native-base";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Style from "./SearchByAreaScreenStyles";
import BlueButton from "App/Components/BlueButton";
import SearchableDropdown from "App/Components/SearchableDropdown";
import WhiteButton from "App/Components/WhiteButton";
import RetailerCard from "../UnplannedRetailerCard";
import NavigationService from "App/Services/NavigationService";
import { HelperService } from "App/Services/Utils/HelperService";
import RetailersActions from "App/Stores/Retailers/Actions";
import VisitsActions from "App/Stores/Visits/Actions";
import SitesActions from "App/Stores/Sites/Actions";
import InfluencersActions from "App/Stores/Influencers/Actions";
import VisitCard from "App/Containers/Visits/VisitCard";
import Loading from "App/Components/Loading";
import NoDataFound from "App/Components/NoDataFound";
import { Colors } from "App/Theme";
import RetailerResultList from "App/Containers/UnplannedVisits/RetailerResultList";
import PlannedVisitCard from "App/Containers/Visits/PlannedVisitCard";
import _ from "lodash";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import GenericIcon from "App/Components/GenericIcon";

class SearchByAreaScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: false,
      param: {},
      objective: "",
      otherObj: "",
    };
  }
  componentDidMount() {
    const { accountType, updateSearchFilters } = this.props;

    this.fetchRetailersCall();
    // this.props.updateSearchFilters({ edited_field: 'party_type', 'edited_value':retailersList  });
    if (accountType.length) {
      updateSearchFilters({
        edited_field: "party_type",
        edited_value: accountType[0],
      });
      // updateRetailerSearchFilters({ edited_field: 'selectedTab', 'edited_value': 0})
    }
  }
  fetchRetailersCall() {
    const { retailersList, token, fetchRetailers } = this.props;

    fetchRetailers({
      token,
    });
  }
  filterResults(list) {
    const { searchByAreaFilters } = this.props;
    // console.log();
    let filteredList = HelperService.searchTextListFilter(
      list,
      "Name",
      searchByAreaFilters["name"]
    );
    filteredList = HelperService.searchTextListFilter(
      filteredList,
      "Area_Master__c",
      searchByAreaFilters["beat"]
    );

    filteredList = HelperService.sortListFilter(filteredList, "Name", "ASC");
    return filteredList;
  }

  onSelect(params) {
    const {
      token,
      agentid,
      offset,
      limit,
      managerid,
      submitSelectedUnplannedVisit,
      user_details,
      employee,
      searchByAreaFilters,
      filteredBeatPjpDisplayData,
    } = this.props;
    let BeatId = HelperService.getIdFormBeat_c(
      filteredBeatPjpDisplayData,
      this.state.param.Beat__c
    );
    console.log("kkkkkkkkkkkkkkkkkkkkk", params);
    let data = [
      {
        attributes: { type: "Visits__c", referenceId: "" },
        ownerId: user_details,
        Customer_Name__c: this.state.param.Id,
        Visit_Date__c: HelperService.dateReadableFormatWithHyphen(
          HelperService.getCurrentTimestamp()
        ),
        Type__c: "",
        Assigned_By__c: "Manager",
        Manager__c: managerid,
        Visit_Type__c: "Unplanned",
        PJP_Beats__c: BeatId ? BeatId.Id : null,
        Area__c: this.state.param.Area_Master__c,
        Objective__c: this.state.objective,
        Employee__c:
          employee.Employees__r && employee.Employees__r.records[0].Id,
        Employee_Manager__c:
          employee.Employees__r &&
          employee.Employees__r.records[0].Reporting_Manager__c,
      },
    ];
    // console.log("params",data);

    Alert.alert(
      "Plan Visit For Today",
      "Do you want to plan the visit for today of this party?",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        },
        {
          text: "Confirm",
          onPress: () =>
            submitSelectedUnplannedVisit({ form: data, token: token }),
        },
      ],
      { cancelable: false }
    );
  }
  getRetailerCardNode(data) {
    const {
      retailersList,
      retailerSearchFilters,
      updateSearchFilters,
      searchByAreaFilters,
      accountType,
    } = this.props;

    let count = 0;
    let filteredPartiesList = this.filterResults(
      HelperService.filterTextListFilter(retailersList, "Sub_Category__c", data)
    );
    count = filteredPartiesList.length;
    //console.log(filteredPartiesList);
    return (
      <WhiteButton
        title={data.replace("_", " ") + "(" + count + ")"}
        style={{ ...Style.actionButton, ...Style.customSelectedStyleCorpBlue }}
        textStyle={Style.actionButtonText}
        onPress={() => {
          updateSearchFilters({
            edited_field: "party_type",
            edited_value: data,
          });
          // updateSearchFilters({ edited_field: 'selectedTab', 'edited_value': 0 })
        }}
        selected={searchByAreaFilters["party_type"] == data}
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
      searchByAreaFilters,
      fetchRetailersLoader,
    } = this.props;
    // console.log(retailersList);

    let visibleNode = [];
    let filteredPartiesList =
      retailersList && retailersList.length
        ? this.filterResults(
            HelperService.filterTextListFilter(
              retailersList,
              "Sub_Category__c",
              searchByAreaFilters["party_type"]
            )
          )
        : [];
    if (filteredPartiesList.length) {
      visibleNode = (
        <FlatList
          key={"Retailers"}
          data={filteredPartiesList}
          renderItem={({ item }) => (
            <PlannedVisitCard
              data={item}
              key={item.sfid}
              id={item.sfid}
              beat={item.Beat__r}
              show={true}
              onPress={() => {
                this.setState({
                  isVisible: true,
                  param: item,
                });
              }}
              // onPress={() => {
              //   this.onSelect(item);
              // }}
            />
          )}
          keyExtractor={(item) => item.sfid}
        />
      );
    } else {
      visibleNode = <NoDataFound text={""} />;
    }
    return visibleNode;
  }

  onCloseModal() {
    if (this.state.objective == "") {
      HelperService.showToast({ message: "Please Select Objective" });
    } else {
      this.setState({ isVisible: !this.state.isVisible });
      this.onSelect();
    }
  }

  loadingNode() {
    let loadingNode = (
      <View
        style={{
          flex: 1,
          backgroundColor: Colors.button,
          paddingBottom: 5,
          position: "absolute",
          backgroundColor: "rgb(0, 0, 0, .3)",
          zIndex: 4,
          width: "100%",
          height: "100%",
        }}
      >
        <Loading />
      </View>
    );
    return loadingNode;
  }

  render() {
    const {
      submitPlannedVisitsLoader,
      retailersList,
      accountType,
    } = this.props;
    // console.log(accountType);
    return (
      <View style={{ flex: 1, backgroundColor: Colors.white }}>
        <View
          style={{
            height: "15%",
            backgroundColor: Colors.white,
            justifyContent: "center",
          }}
        >
          {this.getPartiesAccountType()}
        </View>

        {submitPlannedVisitsLoader
          ? this.loadingNode()
          : this.getPartiesAccountTypeData()}
        <Modal
          animationType={"slide"}
          transparent={true}
          visible={this.state.isVisible}
        >
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#E7F9D7",
              height: 200,
              width: "80%",
              borderRadius: 10,
              borderWidth: 1,
              borderColor: "#fff",
              marginTop: 250,
              marginLeft: 40,
            }}
          >
            <TouchableOpacity
              onPress={() =>
                this.setState({ isVisible: !this.state.isVisible })
              }
              style={{ left: wp("30%") }}
            >
              <GenericIcon
                name={"cancel"}
                style={{
                  fontSize: 25,
                  color: Colors.black,
                }}
              />
            </TouchableOpacity>
            <Text
              style={{
                color: Colors.primary,
                marginTop: 10,
                fontWeight: "bold",
              }}
            >
              Select Objective
            </Text>
            <View style={{ height: hp("10%") }}>
              <SearchableDropdown
                dataSource={[
                  { id: "Meeting", name: "Meeting" },
                  { id: "Complaint Resolution", name: "Complaint Resolution" },
                  {
                    id: "Regular Visit",
                    name: "Regular Visit",
                  },
                  {
                    id: "PO / Gift Distribution",
                    name: "PO / Gift Distribution",
                  },
                  {
                    id: "Product Demonstration",
                    name: "Product Demonstration",
                  },
                ]}
                placeHolderText={"Select Objective"}
                selectedValue={this.state.objective}
                onChange={(value) => this.setState({ objective: value })}
                placeholder={"Type or Select Objective"}
                invalid={false}
                labelStyles={{
                  color: Colors.black,
                  textAlign: "center",
                  //   width: "99%",
                  //  padding:5,
                  fontSize: 13,
                  flexDirection: "row",
                }}
                customPickerStyles={{
                  ...Style.picker,
                  left: wp("0.5%"),
                  backgroundColor: "white",
                }}
                // label={'Reason'}
              />
            </View>

            <WhiteButton
              style={{
                backgroundColor: Colors.primary,
                // top: hp("1%"),
                borderRadius: 10,
                height: hp("5%"),
                width: wp("25%"),
              }}
              // onPress={ () => this.props.sendApproval({form: item,token,id:item.Id})}
              onPress={() => {
                this.state.objective == ""
                  ? HelperService.showToast({ message: "Select Objective" })
                  : this.onCloseModal();
              }}
              title={"SUBMIT"}
              textStyle={{ color: Colors.white, fontSize: 12 }}
            ></WhiteButton>
          </View>
        </Modal>
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  token: state.user.token,
  agentid: state.user.id,
  retailersList: state.retailers.retailersList,
  accountType: state.retailers.accountlist,
  dealersList: state.retailers.dealersList,
  agentAreas: [{ id: "", name: "All" }].concat(state.user.agentAreas),

  offset: state.retailers.retailersOffset,
  limit: state.retailers.retailersLimit,
  fetchRetailersLoader: state.retailers.fetchRetailersLoader,
  fetchDealersLoader: state.retailers.fetchDealersLoader,
  searchByAreaFilters: state.visits.unplannedVisit.searchByAreaFilters,
  submitPlannedVisitsLoader: state.visits.planVisit.submitPlannedVisitsLoader,
  countMapping: state.retailers.countMapping,
  partiesMapping: state.retailers.partiesMapping,
  retailerSearchFilters: state.retailers.retailerSearchFilters,
  user_details: state.user.loginDetails.userId,
  isASM: state.user.psmList,
  managerid: state.startday.userDetailList.ManagerId,
  employee: state.startday.userDetailList,
  filteredBeatPjpDisplayData: state.user.filteredBeatPjpDisplayData,
});

const mapDispatchToProps = (dispatch) => ({
  fetchRetailers: (params) => dispatch(RetailersActions.fetchRetailers(params)),
  fetchRetailers: (params) => dispatch(RetailersActions.fetchRetailers(params)),
  fetchDealers: (params) => dispatch(RetailersActions.fetchDealers(params)),
  submitSelectedUnplannedVisit: (params) =>
    dispatch(VisitsActions.submitSelectedUnplannedVisit(params)),
  updateSearchFilters: (params) =>
    dispatch(VisitsActions.changeSearchByAreaFilters(params)),
  clearSelectRetailer: () => dispatch(RetailersActions.clearSelectRetailer()),
  updateRetailerSearchFilters: (params) =>
    dispatch(RetailersActions.updateSearchFilters(params)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchByAreaScreen);
