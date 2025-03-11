import React, { Component } from "react";
import { View, Alert, TouchableOpacity, Image, Dimensions } from "react-native";
import { Button, Text } from "native-base";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Style from "./StartDayStyle";
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
class StartDayScreen extends React.Component {
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

  // onMonthChange(month) {
  //   // console.log("aaaassd",month)
  //   const { token, agentid, searchFilters, changeSearchFilters } = this.props;

  //   changeSearchFilters({
  //     edited_field: "selectedMonth",
  //     edited_value: month,
  //   });

  //   let timestamps = HelperService.getMonthStartAndEndDateTimestamp(month);

  //   changeSearchFilters({
  //     edited_field: "startDate",
  //     edited_value: timestamps[0],
  //   });

  //   changeSearchFilters({
  //     edited_field: "endDate",
  //     edited_value: timestamps[1],
  //   });

  //   this.props.getlead({
  //     id: agentid,
  //     from_date: HelperService.dateReadableFormatWithHyphen(
  //       params.selectedStartDate
  //     ),
  //     to_date: HelperService.dateReadableFormatWithHyphen(
  //       params.selectedStartDate
  //     ),
  //     token,
  //   });
  // }

  // onDateChange(params) {
  //   const {
  //     token,
  //     agentid,
  //     searchFilters,
  //     changeSearchFilters,
  //     searchDashboardOrderFilters,
  //   } = this.props;
  //   // console.log("paramssss", params);
  //   // changeSearchFilters({
  //   //   edited_field: "startDate",
  //   //   edited_value:HelperService.dateReadableFormatWithHyphen( params.selectedStartDate),
  //   // });

  //   // changeSearchFilters({
  //   //   edited_field: "endDate",
  //   //   edited_value:HelperService.dateReadableFormatWithHyphen( params.selectedEndDate),
  //   // });

  //       this.props.getlead(
  //         {
  //           id: agentid,
  //           from_date: HelperService.dateReadableFormatWithHyphen( params.selectedStartDate),
  //           to_date: HelperService.dateReadableFormatWithHyphen( params.selectedEndDate),
  //           token: token
  //         }

  //        )

  // }

  render() {
    const { userdetail } = this.props;
    // console.log(moment.utc('2000-01-01T15:40:00.000Z', "YYYY-MM-DDTHH:mm:ss Z").format('HH:mma'));
    let windowMarginTop = Dimensions.get("window").height;
    if (Platform.OS == "android" && windowMarginTop < 738) {
      windowMarginTop = windowMarginTop / 11.5;
    } else if (Platform.OS == "android" && windowMarginTop > 700) {
      windowMarginTop = windowMarginTop / 8.5;
    }

    return (
      <View style={Style.box}>
        <ImageBackground
          style={Style.imgBackground}
          // blurRadius={this.props.openModal ? 1 : 4}
          resizeMode="cover"
          source={require("App/Assets/Images/Screen_4.png")}
        >
          <Text
            style={{
              ...Style.header,
              color: "white",
              fontSize: wp("4%"),
              marginTop: hp("1%"),
            }}
          >
            {"Good Morning"}
          </Text>
          <Text
            style={{
              ...Style.header,
              color: "white",
              marginTop: hp("0%"),
              fontSize: wp("6%"),
            }}
          >
            {"Amanpreet Kaur !"}
          </Text>
<>
          <View style={{ marginTop: hp("13%"),height:hp("36%"), }}>
            <Text
              style={{
                ...Style.time,
                fontWeight: "normal",
                marginTop: hp("2%"),
                alignSelf: "center",
                fontSize: wp("7.5%"),
                opacity: 0.8,
                textAlignVertical: "center",
              }}
            >
              {"Jun 18"}
            </Text>
            {/* <Text style={{...Style.time,marginLeft:"13%"}}>{HelperService.showElapsedTime(HelperService.getCurrentTimestamp())}</Text>  */}
            <Text
              style={{
                ...Style.time,
                alignSelf: "center",
                fontSize: wp("16.5%"),
                textAlignVertical:"center"
                // marginTop: "0%",
              }}
            >
              {"10:20"}
            </Text>

            <Text
              style={{
                ...Style.time,
                fontWeight: "normal",
                alignSelf: "center",
                fontSize: wp("7.5%"),
                // marginTop: "0%",
                textAlignVertical: "center",
                opacity: 0.8,
              }}
            >
              {"Monday"}
            </Text>
          </View>

          {/* <View style={{ marginTop: hp("0%"),marginBottom:hp("5%") }}> */}
         
          <View style={{  marginTop: hp("0%")}}>
            <TouchableOpacity
              style={{ ...Style.buttons }}
              onPress={() => {
                this.props.openModal({
                  content3: (
                    <StartDaySelectionScreen
                      onClose={() => {
                        closeModal();
                      }}
                    />
                  ),
                  heading3: "VISIT",
                  bodyFlexHeight3: 0.8,
                  // headingStyle3:hp("36%")
                });
              }}
            >
              <LinearGradient
                colors={[Colors.primary, Colors.darkRed]}
                start={{ x: 0, y: 0.2 }}
                end={{ x: 0, y: 0.7 }}
                style={{
                  height: hp("6.3%"),
                  width: wp("51%"),
                  borderRadius: 10,
                }}
              >
                <Text
                  style={{
                    ...Style.buttontextStyle,
                    fontFamily: "HelveticaNeue_CondensedBold",
                    color: "white",
                    fontWeight: "bold",
                    alignSelf: "center",
                    paddingVertical: 10,
                  }}
                >
                  {"VISIT"}
                </Text>
              </LinearGradient>
            </TouchableOpacity>

            <TouchableOpacity
              style={{ ...Style.buttons }}
              // onPress={() => this.goTo("StartDaySelectionScreen")}
              onPress={() => {
                this.props.openModal({
                  content3: (
                    <WorkFromHomeScreen
                      onClose={() => {
                        closeModal();
                      }}
                    />
                  ),
                  heading3: "Work From Home",
                  bodyFlexHeight3: 0.8,
                });
              }}
            >
              <LinearGradient
                colors={[Colors.primary, Colors.darkRed]}
                start={{ x: 0, y: 0.2 }}
                end={{ x: 0, y: 0.7 }}
                style={{
                  height: hp("6.3%"),
                  width: wp("51%"),
                  borderRadius: 10,
                }}
              >
                <Text
                  style={{
                    ...Style.buttontextStyle,
                    fontFamily: "HelveticaNeue_CondensedBold",
                    color: "white",
                    fontWeight: "bold",
                    alignSelf: "center",
                    paddingVertical: 10,
                  }}
                >
                  {"WFH"}
                </Text>
              </LinearGradient>
            </TouchableOpacity>

            <TouchableOpacity
              style={{ ...Style.buttons }}
              onPress={() => {
                // NavigationService.navigate("AbsentModal")

                this.props.openModal({
                  content3: (
                    <AbsentModal
                      onClose={() => {
                        closeModal();
                      }}
                    />
                  ),
                  heading3: "LEAVE/ABSENT",
                  bodyFlexHeight3: 0.8,
                });
              }}
            >
              <LinearGradient
                colors={[Colors.primary, Colors.darkRed]}
                start={{ x: 0, y: 0.2 }}
                end={{ x: 0, y: 0.7 }}
                style={{
                  height: hp("6.3%"),
                  width: wp("51%"),
                  borderRadius: 10,
                }}
              >
                <Text
                  style={{
                    ...Style.buttontextStyle,
                    fontFamily: "HelveticaNeue_CondensedBold",
                    color: "white",
                    fontWeight: "bold",
                    alignSelf: "center",
                    paddingVertical: 10,
                  }}
                >
                  {"LEAVE / ABSENT"}
                </Text>
              </LinearGradient>
            </TouchableOpacity>
           
          </View>
          </>
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
export default connect(mapStateToProps, mapDispatchToProps)(StartDayScreen);
