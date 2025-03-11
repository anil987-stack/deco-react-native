import React, { Component } from "react";
import { View, Alert, TouchableOpacity, Image } from "react-native";
import { Button, Text } from "native-base";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Style from "./AbsentScreenStyle"
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
class SelectedCalendar extends React.Component {
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
    return (
      <View style={Style.box}>
       {this.dateFilter()}
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

const mapDispatchToProps = (dispatch) => ({});
export default connect(mapStateToProps, mapDispatchToProps)(SelectedCalendar);
