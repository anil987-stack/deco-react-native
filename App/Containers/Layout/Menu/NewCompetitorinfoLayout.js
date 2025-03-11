import React from "react";
import {
  Platform,
  View,
  ActivityIndicator,
  Image,
  Dimensions,
  TouchableOpacity,
  TouchableWithoutFeedback,
  StyleSheet,
} from "react-native";
import GenericIcon from "App/Components/GenericIcon";
import { ScrollableTab, TabHeading, Tab, Tabs } from "native-base";
import { connect } from "react-redux";
import { PropTypes } from "prop-types";
import { liveInEurope } from "App/Stores/Example/Selectors";
import { ApplicationStyles, Helpers, Images, Metrics, Colors } from "App/Theme";
import {
  Container,
  Header,
  Title,
  Content,
  Button,
  Icon,
  Left,
  Body,
  Text,
  Input,
  Item,
  Right,
  Segment,
} from "native-base";
import Style from "../../Complaints/ComplaintScreenStyle";
import NavigationService from "App/Services/NavigationService";
import SearchBar from "App/Components/SearchBar";
import SearchableDropdown from "App/Components/SearchableDropdown";
import WhiteButton from "App/Components/WhiteButton";
import RetailersActions from "App/Stores/Retailers/Actions";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Card } from "react-native-paper";
import _ from "lodash";
import { HelperService } from "../../../Services/Utils/HelperService";
import MenuActions from "App/Stores/Menu/Actions";

class NewCompetitorinfoLayout extends React.Component {
  // onAreaChange(areaCode) {
  //   this.props.updateSearchFilters({
  //     edited_field: "beat",
  //     edited_value: areaCode,
  //   });
  // }

  filterResults(list) {
    // console.log(list[0].PJP_Beats__r.records)
    let searchFilters = this.props.searchFilters;
    // console.log("jeje",list)
    let filteredList = HelperService.searchTextListVisitFilter(
      list,
      "Visit_Date__c",
      searchFilters["Visit_date__c"]
    );
    // filteredList = HelperService.searchTextListFilter(filteredList, 'visit', searchFilters['area'], 'area__c');
    // console.log(filteredList)
    return filteredList;
  }
  filterdatabeat() {
    const { data, filteredPjpDisplayData, beatList, agentbeat } = this.props;

    if (agentbeat && agentbeat.length) {
      // let filteredSitesList = this.filterResults(filteredBeatPjpDisplayData);
      // console.log("hhhh",filteredBeatPjpDisplayData)

      //    let filteredList=this.pendingfliterList(filteredSitesList.map((obj) => obj));

      //    let filtered=filteredSitesList[0]&&filteredSitesList[0].PJP_Beats__r&&filteredSitesList[0].PJP_Beats__r.records&&filteredSitesList[0].PJP_Beats__r.records.length?filteredSitesList[0].PJP_Beats__r.records:'';
      //    console.log("filtered",filtered)

      let pjpSearchableList = HelperService.convertToSearchableListRetailerFormatLabel(
        { list: agentbeat, id_key: "Id", label_key: "Name" }
      );
      // let pjpSearchableList = HelperService.convertToSearchablepjpBeatListFormat({ list: filtered?filtered:filteredSitesList, id_key: 'Beat__c',label_key:"Name"});
      // console.log("pjpSearchableList",pjpSearchableList)

      return pjpSearchableList;
    } else {
      return [];
    }
  }

  render() {
    const { searchFilters, changeMenuSelectedFilters } = this.props;

    return (
      <View style={Styles.header}>
        <TouchableOpacity
          transparent
          style={{ backgroundColor: Colors.primary }}
        >
          <GenericIcon
            name={"arrow-back"}
            onPress={NavigationService.goback}
            style={{
              color: Colors.white,
              fontSize: wp("8%"),
              marginLeft: hp("1"),
              marginTop: hp("2.2"),
            }}
          />
        </TouchableOpacity>
        <View
          style={{
            flexDirection: "column",
            elevation: 0,

            // height: wp("10%"),
            // justifyContent: "center",
            alignItems: "center",
            // alignSelf: 'center',
            width: "100%",
          }}
        >
          <Text style={{ ...Styles.titleText }}>
            {"Competitor"}
            <Text style={{ ...Styles.titleText, ...Styles.textClr }}>
              {" Scheme Info"}
            </Text>
          </Text>

          <SearchBar
            placeholder={`Search by Competitor Id`}
            //placeholder={"Search Customer..."}
            onInputChange={(text) =>
              changeMenuSelectedFilters({
                edited_field: "competitor",
                edited_value: text,
              })
            }
            onInputSubmit={(text) =>
              changeMenuSelectedFilters({
                edited_field: "competitor",
                edited_value: text,
              })
            }
            onInputClear={(text) =>
              changeMenuSelectedFilters({
                edited_field: "competitor",
                edited_value: "",
              })
            }
            value={searchFilters["competitor"]}
            ContainerStyles={Styles.picker1}
            IconStyles={{ color: Colors.primary }}
          />

          {/* <View style={Styles.searchableDropdownContainer}>
            <View>
              <SearchableDropdown
                dataSource={selectNodeDataSource}
                placeHolderText={placeholder}
                selectedValue={changingValue}
                onChange={onChangeCallback}
                placeholder={placeholder}
                invalid={false}
                customPickerStyles={Styles.picker}
                // key={changingValue + retailerSearchFilters['type'] + user_details.business_channel__c}
              />
            </View>
          </View> */}
          {/* <View style={Styles.searchFilterContainer}></View> */}
        </View>

        {this.props.children}
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  token: state.user.token,
  agentid: state.user.id,
  agentAreas: state.user.team_area_result
    ? [{ id: "", name: "All" }].concat(state.user.team_area_result)
    : [],
  agentCity: [{ id: "", name: "All" }].concat(state.user.agentCity),
  retailerCompetitors: state.retailers.retailerCompetitors,
  retailersList: state.retailers.retailersList,
  dealersList: state.retailers.dealersList,
  dealersSearchList: [{ id: "", name: "All" }].concat(
    state.retailers.dealersSearchList
  ),
  fetchRetailersLoader: state.retailers.fetchRetailersLoader,
  fetchDealersLoader: state.retailers.fetchDealersLoader,
  retailerSearchFilters: state.retailers.retailerSearchFilters,
  cityAllList: [{ id: "", name: "All" }].concat(state.common.cityAllList),
  user_details: state.user.user_details,
  searchByAreaFilters: state.visits.unplannedVisit.searchByAreaFilters,
  filteredBeatPjpDisplayData: state.user.filteredBeatPjpDisplayData,
  searchFilters: state.menu.selectedBeatFilter,
  agentbeat: state.user.agentbeat,
});

const mapDispatchToProps = (dispatch) => ({
  updateSearchFilters: (params) =>
    dispatch(RetailersActions.updateSearchFilters(params)),
  openMoreFiltersOption: () =>
    dispatch(RetailersActions.openMoreFiltersOption()),
  closeMoreFiltersOption: () =>
    dispatch(RetailersActions.closeMoreFiltersOption()),
  fetchRetailers: (params) => dispatch(RetailersActions.fetchRetailers(params)),
  fetchDealers: (params) => dispatch(RetailersActions.fetchDealers(params)),
  changeSearchByAreaFilters: (params) =>
    dispatch(VisitsActions.changeSearchByAreaFilters(params)),
  changeMenuSelectedFilters: (params) =>
    dispatch(MenuActions.changeMenuSelectedFilters(params)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewCompetitorinfoLayout);

const Styles = StyleSheet.create({
  header: {
    height: hp("18%"),
    backgroundColor: Colors.primary,
    borderBottomRightRadius: 30,
    borderBottomLeftRadius: 30,
  },
  titleText: {
    color: Colors.white,
    fontFamily: ApplicationStyles.textFont,
    fontSize: 24,
    fontWeight: "bold",
    left: "1%",
    top: hp("-2%"),
  },
  textClr: {
    color: Colors.headerClr,
  },
  searchContainer: {
    paddingVertical: 8,
    width: "88%",
    borderRadius: 20,
    paddingHorizontal: 6,
    paddingTop: 5,
    elevation: 10,
    backgroundColor: "white",
    fontSize: wp("4.8%"),
    fontWeight: "700",
    color: Colors.blue,
    height: 40,
    // margin: "2%",
    // top: hp("3%"),
    alignSelf: "center",
  },
  searchableDropdownContainer: {
    // flex: 1,

    //  alignSelf: "center",
    marginTop: -5,
    backgroundColor: "white",
    paddingVertical: 8,
    paddingLeft: "8%",
    paddingRight: 45,
    width: "89%",
    height: hp("5"),
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: 25,
    elevation: 10,
    marginLeft: "6%",
  },
  picker: {
    marginTop: -10,
    backgroundColor: "white",
    // paddingVertical: 8,
    paddingHorizontal: "4%",
    width: "84%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignSelf: "center",
    borderRadius: 25,
    elevation: 10,
    height: hp("5"),
    // marginLeft: "6.5%",
    //  height: "70%",
  },
  picker1: {
    marginTop: hp("0"),
    backgroundColor: "white",
    // paddingTop:5,
    paddingHorizontal: "3%",
    width: "79%",
    height: hp("5"),
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: 10,
    elevation: 10,
    // marginLeft: "6.5%",
    // height: "70%",
  },
  searchFilterContainer: {
    alignSelf: "center",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
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
});
//
