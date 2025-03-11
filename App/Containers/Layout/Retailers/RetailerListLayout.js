import React from "react";
import {
  Platform,
  View,
  ActivityIndicator,
  Image,
  Dimensions,
  TouchableWithoutFeedback,
  StyleSheet,
} from "react-native";
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
import Style from '../../Complaints/ComplaintScreenStyle';
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
import _ from 'lodash'
import { HelperService } from '../../../Services/Utils/HelperService'



class RetailerListLayout extends React.Component {
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
		let filteredList = HelperService.searchTextListVisitFilter(list, 'Visit_Date__c', searchFilters["Visit_date__c"]);
		// filteredList = HelperService.searchTextListFilter(filteredList, 'visit', searchFilters['area'], 'area__c');
		// console.log(filteredList)
		return filteredList;
	  
	  }
  filterdatabeat(){
    const{
      data,
        filteredPjpDisplayData,
        beatList,
        agentbeat
    }=this.props;

  
  if(agentbeat&&agentbeat.length){
    // let filteredSitesList = this.filterResults(filteredBeatPjpDisplayData);
    // console.log("hhhh",filteredBeatPjpDisplayData)
  
  //    let filteredList=this.pendingfliterList(filteredSitesList.map((obj) => obj));

  //    let filtered=filteredSitesList[0]&&filteredSitesList[0].PJP_Beats__r&&filteredSitesList[0].PJP_Beats__r.records&&filteredSitesList[0].PJP_Beats__r.records.length?filteredSitesList[0].PJP_Beats__r.records:'';
  //    console.log("filtered",filtered)
   
      let pjpSearchableList = HelperService.convertToSearchableListRetailerFormatLabel({ list:agentbeat, id_key: 'Area__c',label_key:"Area_Name__c"});
      // let pjpSearchableList = HelperService.convertToSearchablepjpBeatListFormat({ list: filtered?filtered:filteredSitesList, id_key: 'Beat__c',label_key:"Name"});
// console.log("pjpSearchableList",pjpSearchableList)

     return pjpSearchableList
  }else{
  
    return [];
  
  }
    }

  render() {
    const {
      agentAreas,
      retailerSearchFilters,
      updateSearchFilters,
      agentCity,
      cityAllList,
      user_details,
      dealersSearchList,
      searchByAreaFilters
    } = this.props;

    let selectNode = [];
    let selectNodeDataSource = agentAreas;
    let placeholder = "Select beat..";
    let changingValue = retailerSearchFilters["beat"];
    let onChangeCallback = (value) =>updateSearchFilters({ edited_field: "beat", edited_value: value });

      // console.log(this.filterdatabeat())

    return (
      
      <View style={{ backgroundColor: Colors.white }}>
        <View style={{
          flexDirection: "column", elevation: 10,
          backgroundColor: Colors.primary,
          height: wp('35%'),
          // justifyContent: "center",
           alignItems: "center",
          // alignSelf: 'center',
          width: '100%',

          borderBottomLeftRadius: wp('12'),
          borderBottomRightRadius:wp('12'),
        }}>
          {/* <Text style={{ ...Styles.titleText }}>
            {"My"}
            <Text style={{ ...Styles.titleText, ...Styles.textClr }}>
              {" Customer"}
            </Text>
          </Text> */}
          <SearchBar
             placeholder={`Search by ${retailerSearchFilters['searchBy']}`}
            //placeholder={"Search Customer..."}
             onInputChange={(text) => updateSearchFilters({ edited_field: 'searchValue', 'edited_value': text })}
             onInputSubmit={(text) => updateSearchFilters({ edited_field: 'searchValue', 'edited_value': text })}
             onInputClear={(text) => updateSearchFilters({ edited_field: 'searchValue', 'edited_value': '' })}
             value={retailerSearchFilters['searchValue']}
            ContainerStyles={Styles.picker1}
            IconStyles={{ color: Colors.primary }}

          />

          <SearchableDropdown
							dataSource={this.filterdatabeat()?[{ id: '', name: 'All' }].concat(this.filterdatabeat()):[]}
							placeHolderText={'Select Area...'}
							selectedValue={retailerSearchFilters['beat']}
							onChange={(beatCode) => updateSearchFilters({ edited_field: 'beat', edited_value: beatCode })}
							placeholder={'Type or Select Area'}
							invalid={false}
							customPickerStyles={Styles.picker}
              // dropstyle={{marginLeft:-20}}
							key={retailerSearchFilters['beat'] + _.uniqueId()}
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
          <View style={Styles.searchFilterContainer}></View>
        </View>
        <View style={Style.tabs}>
          <Container>
            <Tabs
              tabBarUnderlineStyle={{ width: '22%', marginLeft: '10%' }}
            >
              <Tab heading="Pending "
                textStyle={{ color: "#fff", fontSize: 15, }}
                tabStyle={{ backgroundColor: "#C50404", flex: 1 }}
                activeTextStyle={{ color: "#fff", fontSize: 15 }}
                activeTabStyle={{ backgroundColor: '#C50404' }}>
                {/* <Pending/> */}
              </Tab>
              <Tab heading="Resolved"
                textStyle={{ color: "#fff", fontSize: 15 }}
                tabStyle={{ backgroundColor: "#C50404", flex: 1 }}
                activeTextStyle={{ color: "#fff", fontSize: 15 }}
                activeTabStyle={{ backgroundColor: 'C50404' }}>
                {/* <Resloved/> */}
              </Tab>
            </Tabs>
          </Container>
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
	filteredBeatPjpDisplayData:state.user.filteredBeatPjpDisplayData,
	searchFilters: state.visits.searchFilters,
  agentbeat:state.common.TerritoryAllList




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
	changeSearchByAreaFilters:(params) => dispatch(VisitsActions.changeSearchByAreaFilters(params)),

});

export default connect(mapStateToProps, mapDispatchToProps)(RetailerListLayout);

const Styles = StyleSheet.create({
  header: {
    flexDirection: "column",

    paddingTop: 20,
    paddingBottom: 5,

    paddingLeft: 10,
    paddingRight: 10,
    elevation: 10,
    backgroundColor: Colors.primary,
    height: 5,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: "8%",
    borderBottomLeftRadius: 70,
    borderBottomRightRadius: 70,
  },
  titleText: {
    color: Colors.white,
    fontFamily: ApplicationStyles.textFont,
    fontSize: 24,
    fontWeight: "bold",
    left: '1%'
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
    margin: "2%",
    top: '5%',
    alignSelf: "center",
  },
  searchableDropdownContainer: {
    // flex: 1,

    //  alignSelf: "center",
    marginTop: -5,
    backgroundColor: 'white',
    paddingVertical: 8,
    paddingLeft: '8%',
    paddingRight: 45,
    width: '89%',
    height: hp('5'),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 25,
    elevation: 10,
    marginLeft: '6%',
  },
  picker: {
    marginTop: -10,
    backgroundColor: "white",
    // paddingVertical: 8,
    paddingHorizontal: "4%",
    width: "86%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignSelf: "center",
    borderRadius: 25,
    elevation: 10,
    height:hp('5'),
    // marginLeft: "6.5%",
    //  height: "70%",
  },
  picker1: {
    marginTop: hp('5'),
    backgroundColor: "white",
    // paddingTop:5,
    paddingHorizontal: "3%",
    width: "79%",
    height:hp('5'),
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: 25,
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