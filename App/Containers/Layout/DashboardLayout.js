import React from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
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
  Spinner,
} from "native-base";
import NavigationService from "App/Services/NavigationService";
import { Colors, Metrics, Helpers, Fonts, ApplicationStyles } from "App/Theme";
import { HelperService } from "App/Services/Utils/HelperService";
import DashboardActions from "App/Stores/Dashboard/Actions";
import GenericIcon from "App/Components/GenericIcon";
import DatePicker from "App/Components/DatePicker";
import WhiteButton from "App/Components/WhiteButton";
import DatePickerStyles from "App/Components/DatePicker/DatePickerStyles";
import SearchableDropdown from "App/Components/SearchableDropdown";
import DashboardTabs from "App/Containers/Dashboard/DashboardTabs";
import VisitsActions from "App/Stores/Visits/Actions";
// import moment from 'moment';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import _ from "lodash";
import TextTicker from "react-native-text-ticker";
// import AutoScroll from "../../Components/AutoScrolling/AutoScrolling";
import ImageSilder from "../../Components/Imageslide/Imageslide";
import MarqueeTextSample from "../../Components/AutoScrolling/AutoScrolling";

class DashboardLayout extends React.Component {
  //   componentDidMount() {
  //     const { updateMonthNumber, type } = this.props;
  //     let monthIndex = moment().format('M') - 1;
  //     this.onMonthChange(monthIndex);
  //     updateMonthNumber(HelperService.getMonthMappingFullName(monthIndex));
  //     this.fetchpjpByMonth(HelperService.getMonthMappingFullName(monthIndex))
  // }

  getImageUrl() {
    const { banner } = this.props;
    let imageurl = [];
    if (banner && banner.length) {
      banner.map((obj) => {
        if (obj.URL__c) {
          imageurl.push(obj.URL__c);
        }
      });
    }
    return imageurl;
  }

  onDateChange(params) {
    const {
      token,
      agentid,
      searchFilters,
      changeSearchFilters,
      getVisitsDisplayList,
    } = this.props;

    changeSearchFilters({
      edited_field: "startDate",
      edited_value: params.selectedStartDate,
    });

    changeSearchFilters({
      edited_field: "endDate",
      edited_value: params.selectedEndDate,
    });

    let requestParams = {
      token,
      agentid,
      startDate: params.selectedStartDate,
      endDate: params.selectedEndDate,
      psm__c: searchFilters["psm__c"],
    };

    this.fetchData(requestParams);
    getVisitsDisplayList({
      token: token,
      agentid: searchFilters["psm__c"],
      startDate: HelperService.dateReadableFormatWithHyphen(
        params.selectedStartDate
      ),
      endDate: HelperService.dateReadableFormatWithHyphen(
        params.selectedStartDate
      ),
    });
  }

  onMonthChange(month) {
    const { token, agentid, searchFilters, changeSearchFilters } = this.props;

    changeSearchFilters({
      edited_field: "selectedMonth",
      edited_value: month,
    });

    let timestamps = HelperService.getMonthStartAndEndDateTimestamp(month);

    changeSearchFilters({
      edited_field: "startDate",
      edited_value: timestamps[0],
    });

    changeSearchFilters({
      edited_field: "endDate",
      edited_value: timestamps[1],
    });

    let requestParams = {
      token,
      agentid,
      startDate: timestamps[0],
      endDate: timestamps[1],
      psm__c: searchFilters["psm__c"],
    };

    this.fetchData(requestParams);
  }
  onSoChange(value) {
    const { token, agentid, searchFilters, changeSearchFilters } = this.props;

    changeSearchFilters({ edited_field: "psm__c", edited_value: value });

    let requestParams = {
      token,
      agentid,

      psm__c: value,
    };

    this.fetchData(requestParams);
  }
  fetchCall() {
    const { token, agentid, searchFilters, changeSearchFilters } = this.props;
    //console.log(token, agentid, 'QWERTY')

    let requestParams = {
      token,
      agentid,
      psm__c: searchFilters["psm__c"] ? searchFilters["psm__c"] : agentid,
    };

    this.fetchData(requestParams);
    //getSiteCount(params)
    //getCounters(params)
    //getEventCount(params)
  }

  fetchData(params) {
    const {
      getOrderValue,
      getVisitCount,
      getSiteCount,
      getCounters,
      getEventCount,
      getDashboardSummary,
    } = this.props;

    //getOrderValue(params);
    //getVisitCount(params);
    //getSiteCount(params);
    //getCounters(params);
    //getEventCount(params);
    getDashboardSummary(params);
  }

  render() {
    // console.log("this.", this.getImageUrl());
    const {
      changeSearchFilters,
      searchFilters,
      children,
      psmList,
      isASM,
      userdetail,
      loaders,
      getonboardingImage,
    } = this.props;
    let monthPickerNode = (
      <View style={Styles.monthPicker}>
        <Text style={Styles.dateText}>
          {HelperService.getMonthMappingName(searchFilters["selectedMonth"])}
        </Text>
      </View>
    );

    let datePickerNode = (
      <View>
        <View style={Styles.datePicker}>
          <Text style={Styles.dateText}>
            {HelperService.getDashboardDisplayDate(
              searchFilters["startDate"],
              searchFilters["endDate"]
            )}
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
      </View>
    );

    let visiblePickerNode = [];

    if (searchFilters["selectedDateType"] == "Month") {
      visiblePickerNode = (
        <View style={{ flexDirection: "row", width: wp("43%") }}>
          <TouchableOpacity
            transparent
            onPress={() =>
              this.onMonthChange(
                HelperService.getPreviousMonth(searchFilters["selectedMonth"])
              )
            }
          >
            <Icon
              name={"ios-arrow-back"}
              ios={"ios-arrow-back"}
              android={"md-arrow-dropleft"}
              style={Styles.dateChangeIcon}
            />
          </TouchableOpacity>
          {monthPickerNode}
          <TouchableOpacity
            transparent
            onPress={() =>
              this.onMonthChange(
                HelperService.getNextMonth(searchFilters["selectedMonth"])
              )
            }
          >
            <Icon
              name={"ios-arrow-forward"}
              ios={"ios-arrow-forward"}
              android={"md-arrow-dropright"}
              style={Styles.dateChangeIcon}
            />
          </TouchableOpacity>
        </View>
      );
    } else {
      visiblePickerNode = (
        <View>
          <DatePicker
            allowRangeSelection={true}
            selectedStartDate={searchFilters["startDate"]}
            selectedEndDate={searchFilters["endDate"]}
            onDateChange={(params) => this.onDateChange(params)}
          >
            {datePickerNode}
          </DatePicker>
        </View>
      );
    }

    let psmListNode = [];
    if (isASM.length) {
      psmListNode = (
        <View style={{ height: hp("10%"), marginBottom: 0, paddingBottom: 0 }}>
          <SearchableDropdown
            dataSource={psmList}
            placeHolderText={"Select SO"}
            selectedValue={searchFilters["psm__c"]}
            onChange={(value) => this.onSoChange(value)}
            placeholder={"Type or Select PSM"}
            invalid={false}
            customPickerStyles={Styles.psmPickerStyles}
          />
        </View>
      );
    }

    return (
      <View>
        <ScrollView>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-around",
              marginBottom: hp("1%"),
            }}
          >
            <View>
              <Image
                style={{
                  height: 70,
                  width: 70,
                  marginLeft: wp("6"),
                  // marginRight: wp("3"),
                  // marginTop: hp("3"),
                  borderRadius: 100,
                }}
                // source={{
                //   uri: `data:image/png;base64,${
                //     getonboardingImage.Uss ? getonboardingImage.Uss : ""
                //   }`,
                // }}
                source={require("App/Assets/Images/man.png")}
              />
            </View>

            <View
              style={{
                display: "flex",
                flexDirection: "column",
                marginRight: 20,
              }}
            >
              <Title
                style={{
                  fontSize: 20,
                  color: "black",
                  marginTop: wp("4"),
                  marginLeft: -30,
                }}
              >
                {/* Hello,{userdetail.Name} */}
                Hello,Prabhu Mahadevan
              </Title>
              <Title
                style={{ fontSize: 13, color: "#9A9A9A", marginLeft: -15 }}
              >
                Welcome back to your account
              </Title>
            </View>
            {/* <TouchableOpacity
              // onPress={() => NavigationService.navigate("Notifications")}
              style={{ left: wp("5%"), top: hp("1.5%") }}
            >
              <GenericIcon
                name={"notifications"}
                style={{
                  fontSize: 30,
                  color: Colors.primary,
                }}
              />
            </TouchableOpacity> */}
          </View>
          {this.props.ticker && this.props.ticker.length ? (
            <MarqueeTextSample
              data={this.props.ticker && this.props.ticker[0].Body__c}
            />
          ) : null}
          {/* <AutoScroll ticker={"MERRY CHRISTMAS AND HAPPY NEW YEAR"} /> */}
          <ImageSilder />
          {/* data={this.getImageUrl()} */}
          <Header
            style={isASM.length ? { ...Styles.header } : { ...Styles.header }}
          >
            <DashboardTabs />
          </Header>
        </ScrollView>
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  token: state.user.token,
  agentid: state.user.id,
  isASM: state.user.psmList,
  psmList: state.user.psmList.concat([{ id: state.user.id, name: "Self" }]),
  searchFilters: state.dashboard.searchFilters,
  data: state.dashboard.data,
  loaders: state.dashboard.loaders,
  userdetail: state.startday.userDetailList,
  banner: state.dashboard.data.dashboardBanner,
  ticker: state.dashboard.data.dashboardTicker,
  getonboardingImage: state.user.getonboardingImage,
});

const mapDispatchToProps = (dispatch) => ({
  changeSearchFilters: (params) =>
    dispatch(DashboardActions.changeDashboardSearchFilters(params)),
  getVisitsDisplayList: (params) =>
    dispatch(VisitsActions.getVisitsDisplayList(params)),
  getOrderValue: (params) => dispatch(DashboardActions.getOrderValue(params)),
  getVisitCount: (params) => dispatch(DashboardActions.getVisitCount(params)),
  getSiteCount: (params) => dispatch(DashboardActions.getSiteCount(params)),
  getCounters: (params) => dispatch(DashboardActions.getCounters(params)),
  getEventCount: (params) => dispatch(DashboardActions.getEventCount(params)),
  getDashboardSummary: (params) =>
    dispatch(DashboardActions.getDashboardSummary(params)),
  // updateMonthNumber: (params) => dispatch(UsersActions.updateMonthNumber(params)),
});

export default connect(mapStateToProps, mapDispatchToProps)(DashboardLayout);

const Styles = StyleSheet.create({
  header: {
    backgroundColor: Colors.white,
    borderBottomWidth: 0,
    height: hp("11%"),
    alignItems: "center",
    justifyContent: "flex-start",
    flexDirection: "column",
    paddingTop: hp("2%"),
    elevation: 2,
  },
  datePicker: {
    alignSelf: "center",
    backgroundColor: Colors.button,
    borderRadius: 100,
    flexDirection: "row",
    width: wp("43%"),
    alignItems: "center",
    justifyContent: "center",
    padding: 8,
  },
  monthPicker: {
    alignSelf: "center",
    backgroundColor: Colors.button,
    borderRadius: 100,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    width: wp("25%"),
  },
  dateText: {
    fontFamily: ApplicationStyles.textMediumFont,
    color: Colors.white,
    fontSize: wp("3.3%"),
    textTransform: "capitalize",
  },
  dateIcon: {
    color: Colors.white,
    fontSize: wp("7%"),
    marginLeft: 0,
    marginRight: 0,
    zIndex: 2,
    paddingLeft: wp("3%"),
  },
  dateChangeIcon: {
    color: Colors.button,
    alignSelf: "center",
    paddingHorizontal: wp("3%"),
    fontSize: wp("11%"),
  },
  psmPickerStyles: {
    marginTop: -5,
    backgroundColor: "white",
    paddingVertical: 8,
    paddingHorizontal: "8%",
    width: "90%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: 25,
    elevation: 5,
    marginLeft: "5%",
  },
  actionButton: {
    borderWidth: 1.5,
    width: wp("20%"),
    height: 35,
    paddingLeft: 0,
    paddingRight: 0,
    backgroundColor: Colors.clrF1F9FF,
    marginHorizontal: wp("1.2%"),
  },
  actionButtonText: {
    fontSize: wp("3%"),
    fontFamily: ApplicationStyles.textMediumFont,
  },
  selectedActionButton: {
    borderWidth: 1.5,
    width: wp("20%"),
    paddingLeft: 0,
    paddingRight: 0,
    backgroundColor: Colors.clrF1F9FF,
    marginHorizontal: wp("1.2%"),
    height: 35,
  },
  refreshIcon: {
    color: Colors.primary,
    fontSize: wp("5%"),
    alignSelf: "center",
    padding: hp("1%"),
    paddingBottom: 0,
    position: "absolute",
    right: wp("3.3%"),
    marginTop: hp("16.5%"),
    zIndex: 2,
  },
  loadingIcon: {
    color: Colors.primary,
    fontSize: wp("6.9%"),
    alignSelf: "center",
    position: "absolute",
    right: wp("5.3%"),
    marginTop: hp("13.2%"),
    zIndex: 2,
  },
});
