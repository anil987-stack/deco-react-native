import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { connect } from "react-redux";
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
  Badge,
  Spinner,
} from "native-base";
import NavigationService from "App/Services/NavigationService";
import { Colors, Metrics, Helpers, Fonts, ApplicationStyles } from "App/Theme";
import { HelperService } from "App/Services/Utils/HelperService";
import UsersActions from "App/Stores/User/Actions";
import GenericIcon from "App/Components/GenericIcon";
import DatePicker from "App/Components/DatePicker";
import DatePickerStyles from "App/Components/DatePicker/DatePickerStyles";
import SearchableDropdown from "App/Components/SearchableDropdown";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import _ from "lodash";
import moment from "moment";
import CommonActions from "App/Stores/Common/Actions";
import BackArrowButton from "App/Components/BackArrowButton";
import UserActions from "App/Stores/User/Actions";

class BeatThirdLayout extends React.Component {
  onDateChange(params) {
    const {
      changeSearchFilters,
      VisitsDisplayList,
      token,
      agentid,
      searchFilters,
      getAreaPjp,
      addBeatToPlan,
    } = this.props;

    changeSearchFilters({
      edited_field: "startDate",
      edited_value: params.selectedStartDate,
    });

    changeSearchFilters({
      edited_field: "endDate",
      edited_value: params.selectedStartDate,
    });
    addBeatToPlan({});

    // getVisitsDisplayList({
    // 	token: token,
    // 	agentid: searchFilters['psm__c'],
    // 	startDate: params.selectedStartDate,
    // 	endDate: params.selectedStartDate
    // });
    // {
    // 	 getAreaPjp({
    // 	token,
    // 	team__c:searchFilters['psm__c'],
    // 	 date:  params.selectedStartDate

    // })}
  }

  render() {
    const { searchFilters } = this.props;

    let datePickerNode = (
      <View style={Styles.datePicker}>
        <Text style={Styles.dateText}>
          {HelperService.getVisitsDisplayDate(searchFilters["startDate"])}
        </Text>
        <GenericIcon
          name={"calendar"}
          show={true}
          style={{
            ...DatePickerStyles.icon,
            ...DatePickerStyles.iconActive,
            ...Styles.dateIcon,
          }}
        />
      </View>
    );

    return (
      <View style={Styles.header}>
        {/* <Header style={isASM.length ? {...Styles.header, ...{height: hp('27%%')}} : {...Styles.header}}> */}
        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity transparent>
            <GenericIcon
              name={"arrow-back"}
              onPress={NavigationService.goback}
              style={{
                color: Colors.white,
                fontSize: wp("8%"),
                marginLeft: hp("1"),
                marginTop: hp("1"),
              }}
            />
          </TouchableOpacity>
          {/* <Text
            style={{
              marginLeft: "28%",
              marginTop: 20,
              color: Colors.white,
              fontWeight: "bold",
              fontSize: 23,
            }}
          >
            {" "}
            My Beat
          </Text> */}
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            height: hp("10%"),
            position: "relative",
          }}
        >
          <TouchableOpacity
            transparent
            onPress={() =>
              this.onDateChange({
                selectedStartDate: HelperService.getPreviousDayTimestamp(
                  searchFilters["startDate"]
                ),
              })
            }
          >
            <Icon
              name={"caret-left"}
              ios={"caret-left"}
              android={"caret-left"}
              style={Styles.dateChangeIcon}
              type={"FontAwesome5"}
            />
          </TouchableOpacity>
          <View>
            <DatePicker
              allowRangeSelection={false}
              selectedStartDate={searchFilters["startDate"]}
              selectedEndDate={searchFilters["endDate"]}
              onDateChange={(params) => this.onDateChange(params)}
            >
              {datePickerNode}
            </DatePicker>
          </View>
          <TouchableOpacity
            transparent
            onPress={() =>
              this.onDateChange({
                selectedStartDate: HelperService.getNextDayTimestamp(
                  searchFilters["startDate"]
                ),
              })
            }
          >
            <Icon
              name={"caret-right"}
              ios={"caret-right"}
              android={"caret-right"}
              style={Styles.dateChangeIcon}
              type={"FontAwesome5"}
            />
          </TouchableOpacity>
          {/* <Badge style={Styles.countBadge}>
                        <Text style={Styles.countBadgeText}>{visitCount}</Text>
                      </Badge> */}
        </View>
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  visitsDisplayList: state.visits.visitsDisplayList,
  filteredDisplayData: state.visits.filteredDisplayData,
  token: state.user.token,
  searchFilters: state.user.searchFilters,
  userid: state.user.loginDetails.userId,
});

const mapDispatchToProps = (dispatch) => ({
  changeSearchFilters: (params) =>
    dispatch(UsersActions.updateSearchFilters(params)),
  // getVisitsDisplayList:(params)     => dispatch(VisitsActions.getVisitsDisplayList(params)),
  // getAllPjp: (params)   => dispatch(UserActions.getAllPjp(params)),
  fetchPjp: (params) => dispatch(UsersActions.fetchPjp(params)),
  updateMonthNumber: (params) =>
    dispatch(UsersActions.updateMonthNumber(params)),
  addBeatToPlan: (params) => dispatch(UserActions.addBeatList(params)),
});

export default connect(mapStateToProps, mapDispatchToProps)(BeatThirdLayout);

const Styles = StyleSheet.create({
  header: {
    height: hp("16%"),
    backgroundColor: Colors.primary,
    borderBottomRightRadius: 45,
    borderBottomLeftRadius: 45,
  },
  datePicker: {
    alignSelf: "center",
    backgroundColor: Colors.white,
    borderRadius: 10,
    width: wp("55%"),
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 4,
  },
  dateText: {
    fontFamily: ApplicationStyles.textMediumFont,
    color: Colors.primary,
    fontSize: wp("4%"),
    fontWeight: "bold",
    textTransform: "capitalize",
  },
  dateIcon: {
    color: Colors.primary,
    fontSize: wp("7%"),
    marginLeft: 0,
    marginRight: 0,
    zIndex: 2,
    paddingLeft: wp("3%"),
  },
  dateChangeIcon: {
    color: Colors.white,
    fontSize: 60,
    alignSelf: "center",
    paddingHorizontal: 20,
  },
  psmPickerStyles: {
    marginTop: -25,
    backgroundColor: "white",
    paddingVertical: 8,
    paddingHorizontal: "8%",
    width: "85%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 25,
    elevation: 5,
    marginLeft: "7.5%",
  },
  psmPickerStyles1: {
    marginTop: 0,
    backgroundColor: "white",
    paddingVertical: 8,
    paddingHorizontal: "8%",
    width: "85%",

    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 25,
    elevation: 5,
    marginLeft: "7.5%",
  },
  countBadge: {
    backgroundColor: Colors.white,
    padding: 0,
    borderWidth: 0.5,
    borderColor: Colors.primary,
    height: wp("9.3%"),
    width: wp("10%"),
    position: "absolute",
    borderRadius: wp("10%"),
    left: "64.5%",
    alignItems: "center",
    justifyContent: "center",
  },
  countBadgeText: {
    color: Colors.primary,
    fontSize: wp("3.7%"),
  },
  heading: {
    alignSelf: "center",
    color: Colors.primary,
    fontFamily: ApplicationStyles.textMsgFont,
    fontSize: wp("4.2%"),
    marginBottom: 0,
    fontWeight: "bold",
  },
});
