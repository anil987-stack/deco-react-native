import CircularProgressBar from "App/Components/CircularProgressBar";
import Loading from "App/Components/Loading";
import Separator from "App/Components/Separator";
import SingleInfo from "App/Components/SingleInfo";
import RetailersActions from "App/Stores/Retailers/Actions";
import DashboardActions from "App/Stores/Dashboard/Actions";
import { HelperService } from "App/Services/Utils/HelperService";
import _ from "lodash";
import { Text, Icon } from "native-base";
import React from "react";
import { ScrollView, Image } from "react-native";
import { FlatList, Dimensions } from "react-native";
import { View, TouchableOpacity, RefreshControl } from "react-native";
import { connect } from "react-redux";
import Style from "./DashboardScreenStyle";
import moment from "moment";
import VisitsActions from "App/Stores/Visits/Actions";
import { Colors, ApplicationStyles } from "App/Theme";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import SearchableDropdown from "App/Components/SearchableDropdown";
import DatePicker from "App/Components/DatePicker";
import DatePickerStyles from "App/Components/DatePicker/DatePickerStyles";
import GenericIcon from "App/Components/GenericIcon";
const { width, height } = Dimensions.get("window");
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart,
} from "react-native-chart-kit";

const chartConfig = {
  backgroundGradientFrom: "#1E2923",
  backgroundGradientFromOpacity: 0,
  backgroundGradientTo: "#08130D",
  backgroundGradientToOpacity: 0.5,
  color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
  strokeWidth: 2, // optional, default 3
  barPercentage: 0.5,
  useShadowColorFromDataset: false, // optional
};

class DailyReport extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      attendanceList: [],
      visitList: [],
      travelList: [],
      visitedAreaList: [],
      pie1: [
        {
          name: "Open",
          population: this.props.visitSummary.Open
            ? this.props.visitSummary.Open
            : 0,
          color: "#ffff99",
          // legendFontColor: "#7F7F7F",
          // legendFontSize: 15,
        },
        {
          name: "Completed",
          population: this.props.visitSummary.Completed
            ? this.props.visitSummary.Completed
            : 0,
          color: "#b3ffb3",
          // legendFontColor: "#7F7F7F",
          // legendFontSize: 15,
        },
        {
          name: "Cancelled",
          population: this.props.visitSummary.Cancelled
            ? this.props.visitSummary.Cancelled
            : 0,
          color: "#ff9999",
          // legendFontColor: "#7F7F7F",
          // legendFontSize: 15,
        },
      ],
    };
  }

  // componentDidMount() {
  //   const { getVisitsDisplayList, token, agentid, searchFilters } = this.props;
  //   this.props.getPrimarySummary({
  //     token,
  //     user_id: agentid,
  //   });
  //   this.props.getDashboardVisit({
  //     token,
  //     user_id: agentid,
  //   });
  //   getVisitsDisplayList({
  //     token: token,
  //     agentid: searchFilters["psm__c"] ? searchFilters["psm__c"] : agentid,
  //     startDate: HelperService.dateReadableFormatWithHyphen(
  //       HelperService.getCurrentTimestamp()
  //     ),
  //     endDate: HelperService.dateReadableFormatWithHyphen(
  //       HelperService.getCurrentTimestamp()
  //     ),
  //   });
  // }

  fetchCall() {
    const { getVisitsDisplayList, token, agentid, searchFilters } = this.props;
    let params = {
      token,
      Id: searchFilters["psm__c"] ? searchFilters["psm__c"] : agentid,
    };
    this.props.getDashboardSummary(params);
    this.props.getPrimarySummary({
      token,
      user_id: agentid,
    });
    this.props.getDashboardVisit({
      token,
      user_id: agentid,
    });
  }

  filteredData(list) {
    let filteredList = {};
    const { searchFilters } = this.props;

    let selectedPSM = searchFilters["psm__c"];

    if (selectedPSM) {
      if (list[selectedPSM]) {
        filteredList[selectedPSM] = list[selectedPSM];
      }
      return filteredList;
    }

    return list;
  }

  _renderAttendanceRow = ({ item, index }) => {
    return (
      <View
        key={index}
        style={[
          Style.itemContainer,
          { width: width / 3.5 },
          { backgroundColor: item.backgroundColor },
        ]}
      >
        <Text style={Style.itemTitle}>{item.title}</Text>
        <Text
          style={[
            Style.itemTitle2,
            // {
            //   top: item.title === "DAY STARTED AT" ? hp("3.5%") : hp("2%"),
            // },
          ]}
        >
          {item.title2}
        </Text>
        <Text
          style={[
            Style.itemDetail,
            {
              color:
                item.detail === "DAY ENDED AT" ? Colors.black : Colors.white,
            },
            // {
            //   top: item.detail === "DAY ENDED AT" ? hp("0%") : hp("1%"),
            // },
            {
              fontSize:
                item.detail === "DAY ENDED AT" ? wp("2.6%") : wp("2.6%"),
            },
          ]}
        >
          {item.detail}
        </Text>
        <Text style={Style.itemTitle1}>{item.title1}</Text>
        <Text
          style={[
            Style.itemDetail1,
            {
              fontSize:
                item.detail === "DAY ENDED AT" ? wp("2.8%") : wp("2.8%"),
            },
          ]}
        >
          {item.detail1}
        </Text>

        <Image
          source={item.img}
          style={{
            height: 55,
            width: 55,
            // left: wp("9%"),
            alignSelf: "center",
            justifyContent: "center",
            // top: hp("7%"),
            // position: "absolute",
          }}
        />
        {/* <Image
          source={item.img1}
          style={{
            height: hp("6%"),
            width: wp("12%"),
            left: wp("8%"),
             top: hp("17%"),
            // position: "absolute",
          }}
        />
        <Image
          source={item.img2}
          style={{
            height: hp("7.5%"),
            width: wp("15%"),
            left: wp("7%"),
            top: hp("17%"),
            // position: "absolute",
          }}
        /> */}

        {/* {checkSwitch(item.title)} */}
      </View>
    );
  };

  // _renderVisitRow = ({ item, index }) => {
  //   return (
  //     <View key={index} style={[Style.itemContainer, { width: width / 3 }]}>
  //       <Text style={Style.itemTitle}>{item.title}</Text>
  //       <Text style={[Style.itemDetail, { fontSize: 24 }]}>{item.detail}</Text>
  //     </View>
  //   )
  // }

  // _renderTravelRow = ({ item, index }) => {
  //   return (
  //     <View key={index} style={[Style.itemContainer, { width: width / 3 }]}>
  //       <Text style={Style.itemTitle}>{item.title}</Text>
  //       {item.title === 'ORDER VALUE' ? (
  //         <View style={Style.orderValueWrapper}>
  //           <Icon
  //             type="FontAwesome"
  //             name="rupee"
  //             style={{ color: '#08b3a6', fontSize: 20, marginTop: 3 }}
  //           />
  //           <Text style={Style.orderValueTitle}>{item.detail}</Text>
  //         </View>
  //       ) : (
  //         <Text style={[Style.itemDetail, { fontSize: 24 }]}>{item.detail}</Text>
  //       )}
  //     </View>
  //   )
  // }

  //_renderVisitedAreaRow = ({ item, index }) => {
  // return (
  //<View key={index.toString()} style={[Style.itemContainer, { width: width / 3 }]}>
  // <Text style={Style.visitedAreaName}>{item}</Text>
  //</View>
  // )
  // }
  filteredData(list) {
    let result = "";
    result = list.filter((obj) => obj.Status__c == "Open");

    return result.length;
  }
  filteredData1(list) {
    let result = "";
    result = list.filter((obj) => obj.Status__c == "Completed");
    // console.log(result);
    return result.length;
  }
  // pie1 = [
  //   {
  //     name: "Open",
  //     population: 10,
  //     color: "#ffff99",
  //     // legendFontColor: "#7F7F7F",
  //     // legendFontSize: 15,
  //   },
  //   {
  //     name: "Completed",
  //     population: 20,
  //     color: "#b3ffb3",
  //     // legendFontColor: "#7F7F7F",
  //     // legendFontSize: 15,
  //   },
  //   {
  //     name: "Cancelled",
  //     population: 5,
  //     color: "#ff9999",
  //     // legendFontColor: "#7F7F7F",
  //     // legendFontSize: 15,
  //   },
  // ];

  render() {
    let datePickerNode = (
      <View>
        <GenericIcon
          name={"calendar"}
          show={true}
          style={{
            fontSize: 18,
            color: "white",
            backgroundColor: Colors.primary,
          }}
        />
      </View>
    );

    const {
      attendanceData,
      psmList,
      filteredDisplayData,
      primarySummary,
      visitSummary,
    } = this.props;

    let attendanceArr = [];
    let visitArr = [];
    let travelArr = [];
    let visitedAreaList = [];

    attendanceArr = [
      {
        title: "ATTENDANCE",
        title2: "08-04-2022",
        // title2: attendanceData.Attendance_Date__c
        //   ? attendanceData.Attendance_Date__c.split("-")
        //       .reverse()
        //       .join("-")
        //   : "No Record",
        detail: "Present",
        // detail: attendanceData.Type__c ? attendanceData.Type__c : "No Record",
        backgroundColor: Colors.pink,
        img: require("../../Assets/Images/checking-attendance.png"),
      },
      {
        title: "DAY STARTED AT",
        title2: "9:00 A.M",
        // title2: attendanceData.Start_Time__c
        //   ? HelperService.getSuffix(attendanceData.Start_Time__c)
        //   : "No Record",
        detail: "DAY ENDED AT",
        backgroundColor: Colors.mustard,
        detail1: "5:00 P.M",
        // detail1: attendanceData.End_Time__c
        //   ? HelperService.getSuffix(attendanceData.End_Time__c)
        //   : "No Record",
        img: require("../../Assets/Images/time.png"),
      },

      {
        title: "TOTAL HRS WORKED",
        backgroundColor: Colors.green,
        detail:"2 Hours and 4 Mins",
        // detail: attendanceData.Working_Hour__c
        //   ? attendanceData.Working_Hour__c
        //   : "No Record",
        img: require("../../Assets/Images/hour.png"),
      },
    ];

    return (
      <ScrollView
        // refreshControl={
        //   <RefreshControl
        //     refreshing={this.props.dashboardSummaryLoader}
        //     onRefresh={() => {
        //       this.fetchCall();
        //     }}
        //   />
        // }
        style={{ flex: 1 }}
      >
        {/* <View style={{ left: "-15%" }}>
          {psmList.length ? (
            <SearchableDropdown
              placeHolderText={"   Select SE"}
              dataSource={this.props.psmList.concat([{ id: "", name: "All" }])}
              customPickerStyles={{ marginHorizontal: "11%" }}
              // labelStyles={{ ...Style.pickerLabel }}
            />
          ) : (
            []
          )} */}
        {/* <Text
            style={{ fontSize: 12, color: "Colors", left: "-65%", top: "5%" }}
          >
            Filter by
          </Text>
          <View style={{ right: "60%", top: "5%" }}>
          <DatePicker
            iconStyle={{ marginBottom: 0 }}
             onDateChange={(params) => this.onDateChange(params)}
            onDateChange={(params) => }
          >
            {datePickerNode}
          </DatePicker>
          </View> */}
        {/* </View> */}
        <View style={{ paddingVertical: 15, left: "2%" }}>
          <View style={{ paddingLeft: 10 }}>
            <FlatList
              horizontal={true}
              data={attendanceArr}
              refreshing={this.props.loaders.dashboardSummaryLoader}
              renderItem={this._renderAttendanceRow}
              keyExtractor={(item, index) => index.toString()}
              extraData={this.attendanceList}
              showsHorizontalScrollIndicator={false}
              ItemSeparatorComponent={() => {
                return <View style={{ width: 10 }} />;
              }}
              ListFooterComponent={() => {
                return <View style={{ width: 10 }} />;
              }}
            />
          </View>
        </View>
        {/* <TouchableOpacity
        // onPress={() => NavigationService.navigate("VisitSummaryTab")}
        >
          <View
            style={{
              borderColor: Colors.lightPink,
              borderWidth: 1.5,
              height: hp("25%"),
              marginLeft: wp("6.5%"),
              width: wp(88),
              marginTop: hp(1),
              marginBottom: hp(2),
              borderRadius: 10,
            }}
          >
            <Text
              style={{
                fontSize: 22,
                fontWeight: "bold",
                top: hp("2%"),
                left: wp("5%"),
              }}
            >
              Visit Summary
            </Text>
            <View
              style={{
                flexDirection: "row",
                top: hp("1%"),
                position: "absolute",
              }}
            >
              <View
                style={{
                  display: "flex",
                  flexDirection: "column",
                  top: hp("9%"),
                  left: wp("10%"),
                }}
              >
                <View style={{ flexDirection: "row" }}>
                  <GenericIcon
                    name={"circle"}
                    style={{ fontSize: 16, color: "#ffff99", top: hp("0.3%") }}
                    show={true}
                  />
                  <Text style={{ fontSize: 15 }}>
                    Open:{visitSummary.Open ? visitSummary.Open : "0"}
                  </Text>
                </View>
                <View style={{ flexDirection: "row" }}>
                  <GenericIcon
                    name={"circle"}
                    style={{ fontSize: 16, color: "#ff9999", top: hp("0.3%") }}
                    show={true}
                  />
                  <Text style={{ fontSize: 15 }}>
                    Cancelled:{" "}
                    {visitSummary.Cancelled ? visitSummary.Cancelled : "0"}
                  </Text>
                </View>
                <View style={{ flexDirection: "row" }}>
                  <GenericIcon
                    name={"circle"}
                    style={{ fontSize: 16, color: "#b3ffb3", top: hp("0.3%") }}
                    show={true}
                  />
                  <Text style={{ fontSize: 15 }}>
                    Completed:{" "}
                    {visitSummary.Completed ? visitSummary.Completed : "0"}
                  </Text>
                </View>
              </View>
              <View
                style={{ position: "absolute", left: wp("35%"), top: hp("2%") }}
              >
                <PieChart
                  data={[
                    {
                      name: "Open",
                      population: this.props.visitSummary.Open
                        ? this.props.visitSummary.Open
                        : 0,
                      color: "#ffff99",
                      // legendFontColor: "#7F7F7F",
                      // legendFontSize: 15,
                    },
                    {
                      name: "Completed",
                      population: this.props.visitSummary.Completed
                        ? this.props.visitSummary.Completed
                        : 0,
                      color: "#b3ffb3",
                      // legendFontColor: "#7F7F7F",
                      // legendFontSize: 15,
                    },
                    {
                      name: "Cancelled",
                      population: this.props.visitSummary.Cancelled
                        ? this.props.visitSummary.Cancelled
                        : 0,
                      color: "#ff9999",
                      // legendFontColor: "#7F7F7F",
                      // legendFontSize: 15,
                    },
                  ]}
                  width={200}
                  height={150}
                  chartConfig={chartConfig}
                  accessor={"population"}
                  backgroundColor={"transparent"}
                  paddingLeft={"45"}
                  center={[5, 5]}
                  hasLegend={false}
                  avoidFalseZero={true}
                  // absolute
                />
              </View>
            </View>
          </View>
        </TouchableOpacity> */}
        {/* <TouchableOpacity
          style={{
            flexDirection: "row",
            left: "40%",
            bottom: hp("2%"),
            top: hp("1%"),
          }}
          // onPress={() => NavigationService.navigate("DashboardFilter")}
        >
          <Text
            style={
              code.zx_brandgroupcode == "1"
                ? { fontSize: 15, color: "#ed1b24", left: "4%" }
                : { fontSize: 15, color: "#018EBC", left: "4%" }
            }
          >
            Filter by
          </Text>
          <GenericIcon
            name={"tune"}
            style={
              code.zx_brandgroupcode == "1"
                ? {
                    color: Colors.button,
                    fontSize: 23,
                    paddingRight: 0,
                    left: "10%",
                    top: "0%",
                  }
                : {
                    color: Colors.bluebackground,
                    fontSize: 23,
                    paddingRight: 0,
                    left: "10%",
                    top: "0%",
                  }
            }
          />
        </TouchableOpacity> */}
        <TouchableOpacity
          // onPress={() => NavigationService.navigate("PrimaryOrder")}
          style={{
            height: hp(15),
            borderRadius: 12,
            marginLeft: wp("6%"),
            width: wp(88),
            marginBottom: hp(2),
            top: hp("2%"),
            backgroundColor: Colors.orange,
          }}
        >
          <View
            style={{
              display: "flex",
              flexDirection: "column",
              top: hp("1%"),
            }}
          >
            <Text
              style={{
                fontSize: 22,
                color: Colors.white,
                textAlign: "center",
                left: wp("2%"),
              }}
            >
              Primary Orders
            </Text>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <View
                style={{
                  display: "flex",
                  flexDirection: "column",
                  left: wp("5%"),
                  top: hp("1%"),
                }}
              >
                <Text style={{ fontSize: 14, color: "#FFFFFFA6" }}>
                  Total Order Value
                </Text>
                <Text style={{ fontSize: 22, color: Colors.white }}>
                  ₹345
                  {/* {primarySummary && primarySummary.length && primarySummary[0]
                    ? "₹" +
                      HelperService.FixedDecimalValue(
                        primarySummary[0].TotalOrderValue
                      )
                    : "0"} */}
                </Text>
              </View>
              <View
                style={{
                  display: "flex",
                  flexDirection: "column",
                  right: wp("5%"),
                  top: hp("1%"),
                }}
              >
                <Text style={{ fontSize: 14, color: "#FFFFFFA6" }}>
                  No. of Customers
                </Text>
                <Text style={{ fontSize: 22, color: Colors.white }}>
                  23
                  {/* {primarySummary && primarySummary.length && primarySummary[0]
                    ? primarySummary[0].Orders
                    : "0"} */}
                </Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>
        {/* <TouchableOpacity
          onPress={() => NavigationService.navigate("SecondaryOrder")}
          style={{
            height: hp(15),
            borderRadius: 12,
            marginLeft: wp("6%"),
            width: wp(88),
            marginBottom: hp(2),
            top: hp("2%"),
            backgroundColor: Colors.cardblue,
          }}
        > */}
        {/* <View
            style={{
              display: "flex",
              flexDirection: "column",
              top: hp("1%"),
            }}
          >
            <Text
              style={{
                fontSize: 22,
                color: Colors.white,
                textAlign: "center",
                left: wp("2%"),
              }}
            >
              Secondary Orders
            </Text>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <View
                style={{
                  display: "flex",
                  flexDirection: "column",
                  left: wp("5%"),
                  top: hp("1%"),
                }}
              >
                <Text
                  style={{
                    fontSize: 14,
                    color: "#FFFFFFA6",
                  }}
                >
                  Total Order Value
                </Text>
                <Text style={{ fontSize: 22, color: Colors.white }}>
                  
                  {primarySummary && primarySummary.length && primarySummary[1]
                    ? "₹" +
                      HelperService.FixedDecimalValue(
                        primarySummary[1].TotalOrderValue
                      )
                    : "0"}
                </Text>
              </View>
              <View
                style={{
                  display: "flex",
                  flexDirection: "column",
                  right: wp("5%"),
                  top: hp("1%"),
                }}
              >
                <Text
                  style={{
                    fontSize: 14,
                    color: "#FFFFFFA6",
                  }}
                >
                  No. of Customers
                </Text>
                <Text style={{ fontSize: 22, color: Colors.white }}>
                 
                  {primarySummary && primarySummary.length && primarySummary[1]
                    ? primarySummary[1].Orders
                    : "0"}
                </Text>
              </View>
            </View>
          </View>
        </TouchableOpacity> */}
      </ScrollView>
    );
  }
}

const mapStateToProps = (state) => ({
  token: state.user.token,
  agentid: state.user.loginDetails.userId,
  isASM: state.user.isASM,
  psmList: state.user.psmList,
  searchFilters: state.dashboard.searchFilters,
  data: state.dashboard.data.dashboardSummary,
  attendanceData: state.user.startDayId,
  loaders: state.dashboard.loaders,
  filteredDisplayData: state.visits.filteredDisplayData,
  primarySummary: state.dashboard.data.primarySummary,
  visitSummary: state.dashboard.data.visitSummary,
  dashboardSummaryLoader: state.dashboard.loaders.dashboardSummaryLoader,
});

const mapDispatchToProps = (dispatch) => ({
  changeSearchFilters: (params) =>
    dispatch(DashboardActions.changeSearchFilters(params)),
  getOrderValue: (params) => dispatch(DashboardActions.getOrderValue(params)),
  getVisitCount: (params) => dispatch(DashboardActions.getVisitCount(params)),
  getSiteCount: (params) => dispatch(DashboardActions.getSiteCount(params)),
  getCounters: (params) => dispatch(DashboardActions.getCounters(params)),
  getEventCount: (params) => dispatch(DashboardActions.getEventCount(params)),
  fetchRetailer: (params) => dispatch(RetailersActions.fetchRetailers(params)),
  getDashboardSummary: (params) =>
    dispatch(DashboardActions.getDashboardSummary(params)),
  getVisitsDisplayList: (params) =>
    dispatch(VisitsActions.getVisitsDisplayList(params)),
  getPrimarySummary: (params) =>
    dispatch(DashboardActions.getPrimarySummary(params)),
  getDashboardVisit: (params) =>
    dispatch(DashboardActions.getDashboardVisit(params)),
});

export default connect(mapStateToProps, mapDispatchToProps)(DailyReport);
