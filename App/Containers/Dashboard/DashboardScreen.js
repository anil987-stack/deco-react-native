import React, { Component } from "react";
import { View, Alert, ScrollView } from "react-native";
import { Button, Text, Title, } from "native-base";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Style from "./DashboardScreenStyle";
import BlueButton from "App/Components/BlueButton";
import WhiteButton from "App/Components/WhiteButton";
import LayoutScreen from "../Layout/LayoutScreen";
import { START, ABSENT, GOOD, MORNING } from "App/Constants";
import NavigationService from "App/Services/NavigationService";
import { HelperService } from "App/Services/Utils/HelperService";
import UserActions from "App/Stores/User/Actions";
import SingleInfo from "App/Components/SingleInfo";
import Separator from "App/Components/Separator";
import DashboardHeading from "App/Components/DashboardHeading";
import DashboardTabs from "./DashboardTabs";
import AchievedTargets from "./AchievedTargets";
import CircularProgressBar from "App/Components/CircularProgressBar";
import GroupedLineChart from "App/Components/GroupedLineChart";
import { Colors, ApplicationStyles, Fonts, Metrics } from "App/Theme";
import SummaryTables from "./SummaryTables";
import MyDetails from "./SummaryTables/MyDetails";
import DashboardActions from "App/Stores/Dashboard/Actions";
import SalesOverview from "./SalesOverview";
import DailyReport from "./DailyReport";
import { ImageBackground } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import ImageSilder from "../../Components/Imageslide/Imageslide";
class DashboardScreen extends React.Component {
  componentDidMount() {
    const {
      token,
      agentid,
      searchFilters,
      getOrderValue,
      getVisitCount,
      getSiteCount,
      getCounters,
      getEventCount,
      getDashboardSummary,
      getDashboardBanner,
      getDashboardTicker,
      month,
      userid,
      fetchPjp,
    } = this.props;
    //console.log(token, agentid, "QWERTY");
    // fetchPjp({
    //   userId: userid,
    //   m: month.substring(0, 3),
    //   token,
    //   agentid: searchFilters["psm__c"] ? searchFilters["psm__c"] : agentid,
    //   startDate: searchFilters["startDate"],
    //   endDate: searchFilters["endDate"],
    // });
    let params = {
      token,

      // startDate: searchFilters["startDate"],
      // endDate: searchFilters["endDate"],
      Id: searchFilters["psm__c"] ? searchFilters["psm__c"] : userid,
    };

    //getOrderValue(params);
    //getVisitCount(params);
    //getSiteCount(params);
    // getCounters(params);
    // getEventCount(params);
    // getDashboardSummary(params);
    // getDashboardBanner({ token });
    // getDashboardTicker({ token });

  }

  render() {
    // let selectedTabNode = [];
    // if (this.props.isASM.length) {
    //   switch (this.props.searchFilters["selectedTab"]) {
    //     case 0:
    //       selectedTabNode = <DailyReport />;
    //       break;
    //     case 1:
    //       selectedTabNode = <SalesOverview />;
    //       break;
    //     case 2:
    //       selectedTabNode = <MyDetails />;
    //       break;
    //   }
    // } else {
    //   switch (this.props.searchFilters["selectedTab"]) {
    //     case 0:
    //       selectedTabNode = <DailyReport />;
    //       break;
    //     case 1:
    //       selectedTabNode = <SalesOverview />;
    //       break;
    //     case 2:
    //       selectedTabNode = <MyDetails />;
    //       break;
    //   }
    // }
    return (
    <>
    <ImageBackground
    style={{  width: '100%',
    height: '100%',
    flex: 1,
  alignSelf:"center" }}
    // blurRadius={this.props.openModal ? 1 : 4}
    resizeMode="cover"
    source={require("App/Assets/Images/startDay.png")}
  >
  <View style={{borderBottomWidth:1, borderBottomColor:"red",height:hp("6%")}}>
      <Title
                style={{
                  fontSize: 23,
                  color: "white",
                  marginTop: hp("0.7%"),
                  fontFamily: "HelveticaNeue_CondensedBold",
                  fontWeight:"bold",
                  width:"85%",
                  textAlign:"center",
                }}
              >
                {/* Hello,{userdetail.Name} */}
                {"Welcome Amanpreet Kaur !"}
              </Title>
              </View>
              <ImageSilder/>
     <DashboardTabs/>
    
        
          </ImageBackground>
    </>
    );
    {/* <ScrollView>{selectedTabNode}</ScrollView>; */}
  }
}

const mapStateToProps = (state) => ({
  token: state.user.token,
  agentid: state.user.id,
  isASM: state.user.psmList,
  psmList: state.user.psmList.concat([{ id: "", name: "All" }]),
  searchFilters: state.dashboard.searchFilters,
  data: state.dashboard.data,
  loaders: state.dashboard.loaders,
  userid: state.user.loginDetails.userId,
  month: state.user.monthNumber,
});

const mapDispatchToProps = (dispatch) => ({
  changeSearchFilters: (params) =>
    dispatch(DashboardActions.changeSearchFilters(params)),
  getOrderValue: (params) => dispatch(DashboardActions.getOrderValue(params)),
  getVisitCount: (params) => dispatch(DashboardActions.getVisitCount(params)),
  getSiteCount: (params) => dispatch(DashboardActions.getSiteCount(params)),
  getCounters: (params) => dispatch(DashboardActions.getCounters(params)),
  getEventCount: (params) => dispatch(DashboardActions.getEventCount(params)),
  getDashboardSummary: (params) =>
    dispatch(DashboardActions.getDashboardSummary(params)),
  fetchPjp: (params) => dispatch(UserActions.fetchPjp(params)),
  getDashboardBanner: (params) =>
    dispatch(DashboardActions.getDashboardBanner(params)),
  getDashboardTicker: (params) =>
    dispatch(DashboardActions.getDashboardTicker(params)),
});

export default connect(mapStateToProps, mapDispatchToProps)(DashboardScreen);
