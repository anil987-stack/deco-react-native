import { Colors, Metrics, Helpers, Fonts, ApplicationStyles } from "App/Theme";
// import { Tab, Tabs, ScrollableTab,Icon } from "native-base";
import { Icon, Input, Tab, Tabs, ScrollableTab } from "native-base";
import React, { Component } from "react";
import {
  ScrollView,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Image,
} from "react-native";
import { connect } from "react-redux";
import OrderActions from "../../../Stores/Orders/Actions";
import BackArrowButton from "App/Components/BackArrowButton";
import BlueButton from "App/Components/BlueButton";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import NavigationService from "App/Services/NavigationService";
import NoDataFound from "App/Components/NoDataFound";
import Loading from "../../../Components/Loading";
import RetailerActions from "App/Stores/Retailers/Actions";
import { BarChart } from "react-native-chart-kit";
import { ProgressCircle } from "react-native-svg-charts";
import { HelperService } from "App/Services/Utils/HelperService";
import GenericIcon from "App/Components/GenericIcon";

class CustomerTarget extends Component {
  // componentDidMount() {
  //   const { getDealerInfo, token, selectedRetailer } = this.props;
  //   // let monthIndex = moment().format("M") - 1;
  //   getDealerInfo({
  //     token,
  //     //   m: HelperService.getMonthindex(monthIndex),
  //     dealer_id: selectedRetailer.id,
  //   });
  // }
  render() {
    const chartConfig = {
      strokeWidth: 0.5, // optional, default 3
      barPercentage: 0.5,
      backgroundColor: "#ffffff",
      backgroundGradientFrom: "#ffffff",
      backgroundGradientTo: "#ffffff",
      //decimalPlaces: 2, // optional, defaults to 2dp
      color: (opacity = 1) => `rgba(232, 37, 131, ${opacity})`,
      labelColor: (opacity = 1) => `rgba(52,52,52, ${opacity})`,
    };
    const { data, searchFilters } = this.props;

    let monthPickerNode = (
      <View
        style={{
          alignSelf: "center",
          backgroundColor: Colors.primary,
          borderRadius: 100,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          padding: 5.5,
          width: wp("20%"),
        }}
      >
        <Text
          style={{
            fontFamily: ApplicationStyles.textMediumFont,
            color: Colors.white,
            fontSize: wp("3.5%"),
            textTransform: "capitalize",
          }}
        >
          {HelperService.getMonthMappingName(searchFilters["selectedMonth"])}
        </Text>
      </View>
    );

    let yearPickerNode = (
      <View
        style={{
          alignSelf: "center",
          backgroundColor: Colors.primary,
          borderRadius: 100,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          padding: 5.5,
          width: wp("20%"),
        }}
      >
        <Text
          style={{
            fontFamily: ApplicationStyles.textMediumFont,
            color: Colors.white,
            fontSize: wp("3.5%"),
            textTransform: "capitalize",
          }}
        >
          2022
          {/* {searchFilters["selectedYear"]} */}
        </Text>
      </View>
    );
    let visiblePickerNode = [];

    visiblePickerNode = (
      <View style={{ flexDirection: "row", width: wp("40%"),right:wp("4%") }}>
        <TouchableOpacity
          transparent
          //   onPress={() =>
          //     onMonthChange(
          //       HelperService.getPreviousMonth(searchFilters["selectedMonth"])
          //     )
          //   }
        >
          <GenericIcon
            name={"chevron-left"}
            style={{
              color: Colors.primary,
              alignSelf: "center",
            //   paddingHorizontal: wp("2.5%"),
              fontSize: wp("11%"),
            }}
            show={true}
          />
          {/* <Icon
            name={"caret-right"}
            ios={"ios-arrow-back"}
            android={"caret-right"}
            style={{
              // color: Colors.button,
              color: Colors.primary,
              alignSelf: "center",
              paddingHorizontal: wp("2.5%"),
              fontSize: wp("11%"),
            }}
          /> */}
        </TouchableOpacity>
        {monthPickerNode}
        <TouchableOpacity
          transparent
        //   onPress={() =>
        //     onMonthChange(
        //       HelperService.getNextMonth(searchFilters["selectedMonth"])
        //     )
        //   }
        >
            <GenericIcon
            name={"chevron-right"}
            style={{
                color: Colors.primary,
                alignSelf: "center",
                // paddingHorizontal: wp("2.5%"),
                fontSize: wp("11%"),
            }}
            show={true}
          />
          {/* <Icon
            name={"ios-arrow-forward"}
            ios={"ios-arrow-forward"}
            android={"md-arrow-dropright"}
            style={{
              // color: Colors.button,
              color: Colors.primary,
              alignSelf: "center",
              paddingHorizontal: wp("2.5%"),
              fontSize: wp("11%"),
            }}
          /> */}
        </TouchableOpacity>
      </View>
    );

    let visiblePickerNode1 = [];

    visiblePickerNode1 = (
      <View style={{ flexDirection: "row", width: wp("35%") }}>
        <TouchableOpacity
          transparent
        //   onPress={() =>
        //     onYearChange(
        //       HelperService.getPreviousMonth(searchFilters["selectedYear"])
        //     )
        //   }
        >
            <GenericIcon
            name={"chevron-left"}
            style={{
              color: Colors.primary,
              alignSelf: "center",
            //   paddingHorizontal: wp("2.5%"),
              fontSize: wp("11%"),
            }}
            show={true}
          />
          {/* <Icon
            name={"ios-arrow-back"}
            ios={"ios-arrow-back"}
            android={"md-arrow-dropleft"}
            style={{
              // color: Colors.button,
              color: Colors.primary,
              alignSelf: "center",
              paddingHorizontal: wp("2.5%"),
              fontSize: wp("11%"),
            }}
          /> */}
        </TouchableOpacity>
        {yearPickerNode}
        <TouchableOpacity
          transparent
        //   onPress={() =>
        //     onYearChange(
        //       HelperService.getNextMonth(searchFilters["selectedYear"])
        //     )
        //   }
        >
            <GenericIcon
            name={"chevron-right"}
            style={{
                color: Colors.primary,
                alignSelf: "center",
                // paddingHorizontal: wp("2.5%"),
                fontSize: wp("11%"),
            }}
            show={true}
          />
          {/* <Icon
            name={"ios-arrow-forward"}
            ios={"ios-arrow-forward"}
            android={"md-arrow-dropright"}
            style={{
              // color: Colors.button,
              color: Colors.primary,
              alignSelf: "center",
              paddingHorizontal: wp("2.5%"),
              fontSize: wp("11%"),
            }}
          /> */}
        </TouchableOpacity>
      </View>
    );
    return (
      <ScrollView
        style={{
          backgroundColor: "white",
          paddingHorizontal: "6%",
          marginTop: hp("-47%"),
          flex: 1,
        }}
      >
        <View
          style={{
            paddingHorizontal: "6%",
            backgroundColor: "#ffffff",
            paddingTop: 10,
          }}
        >
          <View
            style={{
              justifyContent: "center",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            {visiblePickerNode}

            {visiblePickerNode1}
          </View>
          <Text
            style={{
              fontSize: 16,
              color: "#000B22",
              fontWeight: "bold",
              top: hp("1%"),
            }}
          >
            {"Sales Overview"}
          </Text>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              height: 180,
              alignItems: "center",
            }}
          >
            <View style={{ width: "50%" }}>
              <ProgressCircle
                style={{
                  height: 130,
                  width: 160,
                  alignItems: "center",
                  justifyContent: "center",
                }}
                strokeWidth={10}
                progress={
                  10
                  //   salesData &&
                  //   salesData.target &&
                  //   salesData &&
                  //   salesData.achievement
                  //     ? Number(salesData.achievement) / Number(salesData.target)
                  //     : 0
                }
                progressColor={"rgba(232, 37, 131, 1)"}
              />

              <View
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  bottom: 0,
                  right: 0,
                  zIndex: 2,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Image
                  source={require("App/Assets/Images/plus.png")}
                  style={{ width: 25, height: 25 }}
                />
                <Text style={{ fontSize: 8, marginTop: 5 }}>{"ACHIEVED"}</Text>
                <Text style={{ fontSize: 20, fontWeight: "600" }}>
                  {10 + " MT"}
                  {/* {salesData && salesData.achievement
                    ? salesData.achievement
                    : 0 + "MT"} */}
                </Text>
              </View>
            </View>
            <View style={{ width: "45%", justifyContent: "center" }}>
              <Text style={{ fontSize: 11, color: "#000000" }}>{"TARGET"}</Text>
              <Text style={{ fontSize: 11, color: "#000080" }}>
                {10 + " MT"}
                {/* {salesData && salesData.target
                  ? salesData.target + " MT"
                  : 0 + " MT"} */}
              </Text>
              <Text style={{ fontSize: 11, color: "#000000", marginTop: 5 }}>
                {"BALANCE"}
              </Text>
              <Text style={{ fontSize: 11, color: "#000080" }}>
                {10 + " MT"}
                {/* {salesData && salesData.balance
                  ? salesData.balance + " MT"
                  : 0 + " MT"} */}
              </Text>
              <Text style={{ fontSize: 11, color: "#000000", marginTop: 5 }}>
                {"YTD SALES"}
              </Text>
              <Text style={{ fontSize: 11, color: "#000080" }}>
                {10 + " MT"}
                {/* {salesData && salesData.ytd ? salesData.ytd + " MT" : 0 + " MT"} */}
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    );
  }
}
const mapStateToProps = (state) => ({
  data: state.retailers.dealerInfo,
  token: state.user.token,
  loading: state.retailers.dealerInfoLoader,
  selectedRetailer: state.retailers.selectedRetailer,
  searchFilters: state.user.searchFilters,
});

const mapDispatchToProps = (dispatch) => ({
  getDealerInfo: (params) => dispatch(RetailerActions.getDealerInfo(params)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CustomerTarget);
