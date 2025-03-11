import React, { Component } from "react";
import {
  Text,
  View,
  Dimensions,
  FlatList,
  TouchableOpacity,
} from "react-native";
import NavigationService from "App/Services/NavigationService";
import Style from "./BeatPlanStyle";
import { ApplicationStyles, Colors, Fonts } from "App/Theme";
import GenericIcon from "App/Components/GenericIcon";
import NoDataFound from "App/Components/NoDataFound";
import Loading from "App/Components/Loading";
import { HelperService } from "App/Services/Utils/HelperService";
import DisplayCard from "../../../Components/GenericDisplayCard/GenericDisplayCard";
import UserActions from "App/Stores/User/Actions";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Beat from "../../../Components/Menu/BeatPlanComponent";
import { connect } from "react-redux";
import BeatPlanMy from "./BeatPlanMy";
import BeatPlanTeam from "./BeatPlanTeam";

class BeatPlan extends Component {
  componentDidMount() {
    this.fetchCall();
  }

  fetchCall() {
    const {
      fetchPjp,
      token,
      searchFilters,
      userid,
      month,
      agentid,
    } = this.props;

    fetchPjp({
      userId: userid,
      m: month,
      token,
      agentid: searchFilters["psm__c"] ? searchFilters["psm__c"] : agentid,
      startDate: searchFilters["startDate"],
      endDate: searchFilters["endDate"],
    });
  }

  //   getTotalpjpline() {
  //     const{data}=this.props
  //     let quantity = 0;
  //     // let filteredSitesList = this.filterResults(filteredPjpDisplayData);
  //     // console.log("quantiy",filteredSitesList)
  //     data.map((obj) => {

  //           quantity += obj.Total_Number_Of_Beats__c;
  //      })
  //     //  console.log("quantiy",quantity)

  //      return quantity;
  // };

  // filterResults(list) {
  //   let searchFilters = this.props.searchFilters;
  //   let filteredList = HelperService.searchTextListFilter(list, 'visit', searchFilters['psm__c'], 'psm__c');
  //   filteredList = HelperService.searchTextListFilter(filteredList, 'visit', searchFilters['area'], 'area__c');
  //   return filteredList;
  // }

  // filterResults(list) {

  //   let searchFilters = this.props.searchFilters;

  //   let filteredList = HelperService.sortListFilter(list, 'Name', 'ASC');
  // //  filteredList =HelperService.searchTextListFilter(filteredList, 'area__c', searchFilters['area'], );
  //   return filteredList;
  // }

  render() {
    const { selectedBeatFilter, isASM } = this.props;
    console.log(selectedBeatFilter["selectedTab"], "ufuhbuf");
    let selectedTabNode = [];
    // if (this.props.isASM.length) {
    switch (selectedBeatFilter["selectedTab"]) {
      case 0:
        selectedTabNode = <BeatPlanMy />;
        break;
      case 1:
        selectedTabNode = <BeatPlanTeam />;
        break;
    }
    // } else {
    //   switch (this.props.searchFilters['selectedTab']) {
    //     case 0:
    //       selectedTabNode = <BeatPlanMy />
    //       break

    //   }
    // }
    return (
      <View style={{ flex: 1 }}>
        <View>
          <BeatPlanMy />
        </View>
        {/* <TouchableOpacity
          style={{...ApplicationStyles.plusIcon,width:'13%',height:'8.4%',borderWidth:0}}
          onPress={() => NavigationService.navigate('BeatThirdScreen',{date:HelperService.getCurrentTimestamp()})}
          > */}
        <GenericIcon
          name={"call"}
          style={{
            color: Colors.white,
            fontSize: wp("12%"),
            alignSelf: "center",
          }}
        />
        {/* </TouchableOpacity>  */}
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  token: state.user.token,
  agentid: state.user.id,
  userid: state.user.loginDetails.userId,
  data: state.user.pjpList,
  isASM: state.user.psmList,

  searchFilters: state.user.searchFilters,
  selectedBeatFilter: state.menu.selectedBeatFilter,
  loading: state.user.fetchPjpLoading,
  month: state.user.monthNumber,
  filteredPjpDisplayData: state.user.filteredPjpDisplayData,
});

const mapDispatchToProps = (dispatch) => ({
  fetchPjp: (params) => dispatch(UserActions.fetchPjp(params)),
  changeSearchFilters: (params) =>
    dispatch(UsersActions.updateSearchFilters(params)),
});

export default connect(mapStateToProps, mapDispatchToProps)(BeatPlan);
