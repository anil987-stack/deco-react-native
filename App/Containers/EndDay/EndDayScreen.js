import React, { Component } from "react";
import { View, Alert, TouchableOpacity, Image } from "react-native";
import { Button, Text } from "native-base";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Style from "./EndDayScreenStyle";
import moment from "moment";
import BlueButton from "../../Components/BlueButton";
import WhiteButton from "../../Components/WhiteButton";
import LayoutScreen from "../Layout/LayoutScreen";
import { START, ABSENT, GOOD, MORNING, LEAVE } from "../../Constants";
import NavigationService from "App/Services/NavigationService";
import { HelperService } from "App/Services/Utils/HelperService";
import UserActions from "App/Stores/User/Actions";
import GenericIcon from "App/Components/GenericIcon";
import { Helpers, Metrics, Fonts, Colors, ApplicationStyles } from "App/Theme";
import DatePicker from "App/Components/DatePicker";
import DatePickerStyles from "App/Components/DatePicker/DatePickerStyles";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import StartDaySelectionScreen from "../Present/TravelModeScreen";
import WorkFromHomeScreen from "../Present/WorkFromHomeScreen";
import { ImageBackground } from "react-native";
import CommonActions from "App/Stores/Common/Actions";
import LinearGradient from "react-native-linear-gradient";
import AbsentModal from "../Present/AbsentDayScreen";
import ToggleSwitch from "App/Components/ToggleSwitch/ToggleSwitch";

class EndDayScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toggleValue: "",
    };
  }

  goTo(screen) {
    NavigationService.navigate(screen);
  }

  dateFilter() {
    const {
      changeSearchFilters,
      searchFilters,
      primarySummary,
      secondarySummary,
    } = this.props;
    let datePickerNode = (
      <View>
        <View
          style={{
            alignSelf: "center",
            backgroundColor: Colors.bluebackground,
            borderRadius: 100,
            flexDirection: "row",
            width: wp("43%"),
            alignItems: "center",
            justifyContent: "center",
            padding: 8,
          }}
        >
          {/* <Text style={Styles.dateText}>
        {HelperService.getDashboardDisplayDate(
          searchFilters["startDate"],
          searchFilters["endDate"]
        )}
      </Text> */}
          <GenericIcon
            name={"calendar"}
            show={true}
            style={{
              ...DatePickerStyles.icon,
              ...DatePickerStyles.iconActive,
              ...Style.dateIcon,
            }}
          />
        </View>
      </View>
    );

    let monthPickerNode = (
      <View style={Style.monthPicker}>
        <Text style={Style.dateText}>
          {/* {HelperService.getMonthMappingName(searchFilters["selectedMonth"])} */}
        </Text>
      </View>
    );

    let visiblePickerNode = [];

    if (searchFilters["selectedDateType"] == "Month") {
      visiblePickerNode = (
        <View style={{ flexDirection: "row", width: wp("35%") }}>
          <TouchableOpacity
            transparent
            // onPress={() =>
            //   this.onMonthChange(
            //     HelperService.dateReadableFormatWithHyphen(
            //       HelperService.getPreviousMonth(searchFilters["selectedMonth"])
            //     )
            //   )
            // }
          >
            <Icon
              name={"ios-arrow-back"}
              ios={"ios-arrow-back"}
              android={"md-arrow-dropleft"}
              style={Style.dateChangeIcon}
            />
          </TouchableOpacity>
          {monthPickerNode}
          <TouchableOpacity
            transparent
            // onPress={() =>
            //   this.onMonthChange(
            //     HelperService.getNextMonth(searchFilters["selectedMonth"])
            //   )
            // }
          >
            <Icon
              name={"ios-arrow-forward"}
              ios={"ios-arrow-forward"}
              android={"md-arrow-dropright"}
              style={Style.dateChangeIcon}
            />
          </TouchableOpacity>
        </View>
      );
    } else {
      visiblePickerNode = (
        <View style={{ top: hp("1.5%"), height: hp("8%") }}>
          <DatePicker
            allowRangeSelection={true}
            selectedStartDate={searchFilters["startDate"]}
            selectedEndDate={searchFilters["endDate"]}
            onDateChange={(params) => this.onDateChange(params)}
            // maxDate={HelperService.dateReadableFormatWithHyphen(
            //   HelperService.getNext60DayTimestamp()
            // )}
            // minDate={"01/01/1980"}
          >
            {datePickerNode}
          </DatePicker>
        </View>
      );
    }
    return visiblePickerNode;
  }

  toggleSwitch = (value) => {
    //To handle switch toggle
    this.setState({ toggleValue: value });
    //State changes according to switch
  };

  // const toggleSwitch = (value) => {
  //   //To handle switch toggle
  //   setSwitchValue(value);
  //   //State changes according to switch
  // };

  render() {
    const { userdetail } = this.props;
    return (
      <View style={Style.box}>
        <ImageBackground
          style={Style.imgBackground}
          resizeMode="cover"
          source={require("App/Assets/Images/break.png")}
        >
          {/* <Text
            style={{
              ...Style.header,
              color: "white",
              fontSize: 17,
              marginTop: "2%",
            }}
          >
            {"Good Morning !"}
          </Text>
          <Text
            style={{
              ...Style.header,
              color: "white",
              marginTop: "-1%",
              fontSize: 25,
            }}
          >
            {"Amanpreet Kaur"}
          </Text> */}

          <View
            style={{
              // backgroundColor: "white",
              alignItems: "center",
              height: hp("6%"),
              width: wp("20%"),
              position: "absolute",
              top: hp("8%"),
              left: wp("54%"),
            }}
          >
            <Text style={{ fontSize: wp("5%"), color: 'white',fontWeight:"bold" }}>Break</Text>
            <Text style={{ fontSize: wp("4%"), color: 'white',fontWeight:"bold" }}>0.45 Hrs</Text>
          </View>

          <View
            style={{
              // backgroundColor: "white",
              alignItems: "center",
              height: hp("6%"),
              width: wp("20%"),
              position: "absolute",
              top: hp("15%"),
              left: wp("8%"),
            }}
          >
            <Text style={{ fontSize: wp("5%"), color: 'white',fontWeight:"bold" }}>Office</Text>
            <Text style={{ fontSize: wp("4%"), color: 'white',fontWeight:"bold" }}>1.45 Hrs</Text>
          </View>

          <View
            style={{
              // backgroundColor: "white",
              alignItems: "center",
              height: hp("6%"),
              width: wp("20%"),
              position: "absolute",
              top: hp("40%"),
              left: wp("15%"),
            }}
          >
            <Text style={{ fontSize: wp("5%"), color: 'white',fontWeight:"bold" }}>CFT</Text>
            <Text style={{ fontSize: wp("4%"), color: 'white',fontWeight:"bold" }}>2.45 Hrs</Text>
          </View>

          <View
            style={{
              // backgroundColor: "white",
              alignItems: "center",
              height: hp("6%"),
              width: wp("20%"),
              position: "absolute",
              top: hp("43%"),
              left: wp("65%"),
            }}
            
          >
            <Text style={{ fontSize: wp("5%"), color: 'white',fontWeight:"bold",width:wp("40%") }}>Travel Time</Text>
            <Text style={{ fontSize: wp("4%"), color: 'white',fontWeight:"bold" }}>3:15 Hrs</Text>
          </View>

          <View style={{ marginTop: "20%" }}>
            <Text
              style={{
                ...Style.time,
                fontWeight: "normal",
                marginTop: "20%",
                alignSelf: "center",
                fontSize: 25,
                opacity: 0.8,
              }}
            >
              {"Total Time"}
            </Text>
            {/* <Text style={{...Style.time,marginLeft:"13%"}}>{HelperService.showElapsedTime(HelperService.getCurrentTimestamp())}</Text>  */}
            <Text
              style={{
                ...Style.time,
                alignSelf: "center",
                fontSize: 60,
                marginTop: "-2%",
              }}
            >
              {"10:20"}
            </Text>

            <Text
              style={{
                ...Style.time,
                fontWeight: "normal",
                alignSelf: "center",
                fontSize: 30,
                marginTop: "-1%",
                opacity: 0.8,
              }}
            >
              {"Hrs"}
            </Text>
          </View>

          <View style={{ alignSelf: "center", marginTop: wp("36%") }}>
            <ToggleSwitch
              selectionMode={2}
              roundCorner={true}
              option1={"Break On"}
              option1off={"On"}
              option2={"Start Break"}
              option2off={"Off"}
              onSelectSwitch={this.toggleSwitch}
            />
          </View>
          {this.state.toggleValue == "1" ? (
            <View
              style={{
                width: wp("80%"),
                alignSelf: "center",
                marginTop: wp("2%"),
              }}
            >
              <Text
                style={{
                  fontFamily: "HelveticaNeue_CondensedBold",
                  alignSelf: "center",
                  fontSize: wp("7%"),
                  color: "white",
                  textAlign: "center",
                }}
              >
                You're on
                <Text
                  style={{
                    fontFamily: "HelveticaNeue_CondensedBold",
                    fontSize: wp("7%"),
                    fontWeight: "bold",
                    fontStyle: "italic",
                    color: "white",
                  }}
                >
                  {" break "}
                </Text>
                since
                <Text
                  style={{
                    fontFamily: "HelveticaNeue_CondensedBold",
                    fontSize: wp("7%"),
                    fontWeight: "bold",
                    fontStyle: "italic",
                    color: "white",
                  }}
                >
                  {" 12 "}
                </Text>
                minutes
              </Text>
            </View>
          ) : null}
        </ImageBackground>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    token: state.user.token,
    userdetail: state.startday.userDetailList,
    searchFilters: state.dashboard.searchFilters,
  };
};

const mapDispatchToProps = (dispatch) => ({
  openModal: (params) => dispatch(CommonActions.openModalThree(params)),
  closeModal: (params) => dispatch(CommonActions.closeModalThree(params)),
});
export default connect(mapStateToProps, mapDispatchToProps)(EndDayScreen);