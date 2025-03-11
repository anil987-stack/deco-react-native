import React, { Component } from "react";
import {
  Text,
  View,
  Dimensions,
  FlatList,
  TouchableOpacity,
} from "react-native";
import NavigationService from "App/Services/NavigationService";
// import Style from "./style";
import { ApplicationStyles, Colors, Fonts } from "App/Theme";
import GenericIcon from "App/Components/GenericIcon";
import NoDataFound from "App/Components/NoDataFound";
import Loading from "App/Components/Loading";
import { HelperService } from "App/Services/Utils/HelperService";
import DisplayCard from "App/Components/GenericDisplayCard/GenericDisplayCard";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import BeatForth from "App/Components/Menu/BeatForthComponent";
import DatePicker from "App/Components/DatePicker";
import { connect } from "react-redux";
import UserActions from "App/Stores/User/Actions";
import ManagerTagging from "App/Containers/Menu/ManagerTagging";
import VisitsActions from "App/Stores/Visits/Actions";

class BeatForthScreen extends Component {
  componentDidMount() {
    const { navigation } = this.props;
    const itemId = navigation.getParam("Pjpdata");

    this.fetchCall(itemId && itemId.length ? itemId[0].Id : itemId.Id);
    /*  this.onDateChange({
      selectedStartDate: HelperService.getCurrentTimestamp()
    }) */
  }

  onDateChange(params) {
    const {
      changeSearchFilters,
      searchFilters,
      fetchBeatPjp,
      userid,
      agentid,
      token,
    } = this.props;
    const { navigation } = this.props;
    const itemId = navigation.getParam("Pjpdata");
    console.log("ffff", itemId);
    changeSearchFilters({
      edited_field: "Visit_date__c",
      edited_value: params.selectedStartDate,
    });
    fetchBeatPjp({
      userId: userid,
      beatId: itemId && itemId.length ? itemId[0].Id : itemId.Id,
      m: HelperService.getMonthFullName(
        HelperService.dateReadableFormatWithHyphen(searchFilters["startDate"])
      ),
      token,
      agentid: searchFilters["psm__c"] ? searchFilters["psm__c"] : agentid,
      // startDate: searchFilters['startDate'],
      // endDate: searchFilters['endDate']
      visit_date: searchFilters["Visit_date__c"],
    });
  }
  fetchCall(id) {
    const {
      fetchBeatPjp,
      token,
      searchFilters,
      userid,
      month,
      agentid,
    } = this.props;

    fetchBeatPjp({
      userId: userid,
      beatId: id,
      m: searchFilters["startDate"]
        ? HelperService.getMonthFullName(
            HelperService.dateReadableFormatWithHyphen(
              searchFilters["startDate"]
            )
          )
        : HelperService.getMonthFullName(HelperService.getCurrentTimestamp()),
      token,
      agentid: searchFilters["psm__c"] ? searchFilters["psm__c"] : agentid,
      startDate: HelperService.dateReadableFormatWithHyphen(
        searchFilters["startDate"]
      ),
      endDate: searchFilters["endDate"],
    });
  }
  filterResults(list) {
    let searchFilters = this.props.searchFilters;

    let filteredList = HelperService.searchTextListVisitFilter(
      list,
      "Visit_Date__c",
      searchFilters["Visit_date__c"]
    );
    console.log(filteredList);
    return filteredList;
  }

  pendingfliterList(list) {
    const { searchFilters } = this.props;
    let result = "";
    result = list.filter(
      (obj) =>
        obj.Visit_Date__c ==
        HelperService.dateReadableFormatWithHyphen(searchFilters["startDate"])
    );

    return result;
  }

  filterdatafornextscreen() {
    const {
      data,
      // loading,
      Approved,
      loader,
      searchFilters,
      filteredBeatPjpDisplayData,
    } = this.props;

    if (filteredBeatPjpDisplayData && filteredBeatPjpDisplayData.length) {
      // let filteredSitesList = this.filterResults(filteredBeatPjpDisplayData);

      //  let filteredList=this.pendingfliterList(filteredSitesList.map((obj) => obj));

      return filteredList;
    } else {
      // return "hello";
    }
  }

  getDataNode() {
    let visibleNode = [];

    const {
      data,
      loading,
      Approved,
      loader,
      searchFilters,
      filteredBeatPjpDisplayData,
      fetchTotalOutlet,
      pressTagPjp,
    } = this.props;
    if (filteredBeatPjpDisplayData && filteredBeatPjpDisplayData.length) {
      let filteredSitesList = this.filterResults(filteredBeatPjpDisplayData);

      if (filteredSitesList.length) {
        visibleNode = (
          <FlatList
            showsVerticalScrollIndicator={false}
            data={filteredSitesList}
            renderItem={({ item }) => (
              <BeatForth
                item={item}
                onTagClick={() =>
                  pressTagPjp({
                    item: item,
                    modalData: {
                      content: (
                        <ManagerTagging
                          key={item.Id}
                          cancel={true}
                          edit={false}
                          data={item}
                        />
                      ),
                      heading: "Tag Manager",
                      bodyFlexHeight: 1,
                    },
                  })
                }
                list={filteredSitesList}
              />
            )}
            keyExtractor={(item) => item.Id}
            refreshing={loading}
            // onRefresh={() => this.fetchCall()}
          />
        );
      } else {
        visibleNode = <NoDataFound text={"Not  Found"} />;
      }
    } else if (loading) {
      visibleNode = <Loading />;
    } else if (
      !filteredBeatPjpDisplayData ||
      (filteredBeatPjpDisplayData &&
        !filteredBeatPjpDisplayData.length &&
        !loading)
    ) {
      visibleNode = <NoDataFound text={"Not Found"} />;
    }

    return visibleNode;
  }

  render() {
    const { filteredBeatPjpDisplayData, searchFilters, month } = this.props;

    const { navigation } = this.props;
    const itemId = navigation.getParam("Pjpdata");
    const status = navigation.getParam("status");
    //  console.log("currentDate", HelperService.getMonthFullName(HelperService.dateReadableFormatWithHyphen(searchFilters['startDate'])))
    var currentTime = new Date();
    // First Date Of the month
    // var startDateFrom = new Date(
    //   currentTime.getFullYear(),
    //   currentTime.getMonth(),
    //   1
    // );
    // // Last Date Of the Month
    // var startDateTo = new Date(
    //   currentTime.getFullYear(),
    //   currentTime.getMonth() + 1,
    //   0
    // );
    const array1 = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    const search = (element) => element == month;
    // console.log("gggggggggg", array1.findIndex(search));
    // console.log("dateeee",currentTime.getFullYear(),currentTime.getMonth(),currentTime,HelperService.)
    let datePickerNode = (
      <View>
        <GenericIcon
          name={"calendar"}
          show={true}
          style={{
            fontSize: 30,
            color: Colors.primary,
            // backgroundColor: Colors.primary,
          }}
        />
      </View>
    );

    return (
      <View style={{ flex: 1 }}>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-end",
            marginHorizontal: wp("3"),
          }}
        >
          <Text
            style={{
              fontSize: 14,
              color: Colors.primary,
              left: "-65%",
              top: "5.8%",
            }}
          >
            Filter by
          </Text>
          <View style={{ right: "60%", top: "5%", marginLeft: 5 }}>
            <DatePicker
              iconStyle={{ marginBottom: 0 }}
              allowRangeSelection={false}
              selectedStartDate={searchFilters["startDate"]}
              selectedEndDate={searchFilters["endDate"]}
              onDateChange={(params) => this.onDateChange(params)}
              minDate={
                new Date(currentTime.getFullYear(), array1.findIndex(search), 1)
              }
              maxDate={
                new Date(
                  currentTime.getFullYear(),
                  array1.findIndex(search) + 1,
                  0
                )
              }
            >
              {datePickerNode}
            </DatePicker>
          </View>
        </View>

        <View style={{ marginTop: "20%", flex: 1 }}>{this.getDataNode()}</View>
        {status == "Draft" ? (
          <TouchableOpacity
            style={{
              ...ApplicationStyles.plusIcon,
              width: "12%",
              height: "8%",
              borderWidth: 0,
              bottom: 5,
            }}
            onPress={() =>
              NavigationService.navigate("BeatThirdScreen", {
                date: searchFilters["startDate"],
                user:
                  itemId && itemId.length ? itemId[0].OwnerId : itemId.OwnerId,
              })
            }
          >
            <GenericIcon
              name={"add"}
              style={{
                color: Colors.white,
                fontSize: wp("10%"),
                alignSelf: "center",
              }}
            />
          </TouchableOpacity>
        ) : (
          []
        )}
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  token: state.user.token,
  agentid: state.user.id,
  userid: state.user.loginDetails.userId,
  data: state.user.pjpList,
  searchFilters: state.user.searchFilters,
  loading: state.user.fetchPjpLoading,
  month: state.user.monthNumber,
  filteredBeatPjpDisplayData: state.user.filteredBeatPjpDisplayData,
});

const mapDispatchToProps = (dispatch) => ({
  fetchBeatPjp: (params) => dispatch(UserActions.fetchBeatPjp(params)),
  fetchTotalOutlet: (params) => dispatch(UserActions.fetchTotalOutlet(params)),
  changeSearchFilters: (params) =>
    dispatch(UserActions.updateSearchFilters(params)),
  pressTagPjp: (params) => dispatch(UserActions.pressTagPjp(params)),
});

export default connect(mapStateToProps, mapDispatchToProps)(BeatForthScreen);
