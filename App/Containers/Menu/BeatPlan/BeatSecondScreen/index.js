import React, { Component } from "react";
import {
  Text,
  View,
  Dimensions,
  FlatList,
  TouchableOpacity,
} from "react-native";
import NavigationService from "App/Services/NavigationService";
import Style from "./style";
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
import BeatSecond from "App/Components/Menu/BeatSecondComponent";
import DatePicker from "App/Components/DatePicker";
import { connect } from "react-redux";
import UserActions from "App/Stores/User/Actions";
class BeatSecondScreen extends Component {
  componentDidMount() {
    // this.fetchCall();
    this.onDateChange({
      selectedStartDate: HelperService.getCurrentTimestamp(),
    });
  }

  onDateChange(params) {
    const {
      changeSearchFilters,
      searchFilters,
      fetchPjp,
      userid,
      agentid,
      token,
    } = this.props;

    changeSearchFilters({
      edited_field: "startDate",
      edited_value: params.selectedStartDate,
    });
    changeSearchFilters({
      edited_field: "endDate",
      edited_value: params.selectedStartDate,
    });
    fetchPjp({
      userId: userid,
      m: HelperService.getMonthFullName(
        HelperService.dateReadableFormatWithHyphen(searchFilters["startDate"])
      ),
      token,
      agentid: searchFilters["psm__c"] ? searchFilters["psm__c"] : agentid,
      startDate: searchFilters["startDate"],
      endDate: searchFilters["endDate"],
    });
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
    let filteredList = HelperService.searchTextListFilter(
      list,
      "Visit_Date__c",
      searchFilters["Visit_Date__c"],
      "Name"
    );
    filteredList = HelperService.searchTextListFilter(
      filteredList,
      "visit",
      searchFilters["area"],
      "area__c"
    );
    return filteredList;
  }

  filterResults(list) {
    let searchFilters = this.props.searchFilters;

    let filteredList = HelperService.sortListFilter(
      list,
      "Visit_Date__c",
      "ASC"
    );

    //filteredList =HelperService.searchTextListFilter(filteredList[0], 'Visit_Date__c', searchFilters['Visit_Date__c'],'Name' );

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
      filteredPjpDisplayData,
    } = this.props;

    if (filteredPjpDisplayData && filteredPjpDisplayData.length) {
      let filteredSitesList = this.filterResults(filteredPjpDisplayData);

      let filteredList = this.pendingfliterList(
        filteredSitesList.map((obj) => obj)
      );

      return filteredList;
    } else {
      return "hello";
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
      filteredPjpDisplayData,
    } = this.props;

    if (filteredPjpDisplayData && filteredPjpDisplayData.length) {
      let filteredSitesList = this.filterResults(filteredPjpDisplayData);

      let filteredList = this.pendingfliterList(
        filteredSitesList.map((obj) => obj)
      );
      let filtered =
        filteredList[0] &&
        filteredList[0].PJP_Lines__r &&
        filteredList[0].PJP_Lines__r.records &&
        filteredList[0].PJP_Lines__r.records.length
          ? filteredList[0].PJP_Lines__r.records
          : "";

      // console.log("second screen",filtered)
      // console.log("second",filteredList)

      if (filtered.length) {
        visibleNode = (
          <FlatList
            showsVerticalScrollIndicator={false}
            data={filtered}
            renderItem={({ item }) => (
              <BeatSecond item={item} list={filteredList} />
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
      !filteredPjpDisplayData ||
      (filteredPjpDisplayData && !filteredPjpDisplayData.length && !loading)
    ) {
      visibleNode = <NoDataFound text={"Not Found"} />;
    }

    return visibleNode;
  }

  render() {
    const { filteredPjpDisplayData, searchFilters } = this.props;
    //  console.log("currentDate", HelperService.getMonthFullName(HelperService.dateReadableFormatWithHyphen(searchFilters['startDate'])))
    //  console.log("currentDate",)

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

    return (
      <View style={{ flex: 1 }}>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-end",
            alignSelf: "flex-end",
            marginHorizontal: wp("3"),
          }}
        >
          <Text
            style={{
              fontSize: 14,
              color: Colors.primary,
              left: "-65%",
              top: "5%",
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
            >
              {datePickerNode}
            </DatePicker>
          </View>
        </View>

        <View style={{ marginTop: "20%", flex: 1 }}>{this.getDataNode()}</View>
        <TouchableOpacity
          style={{
            ...ApplicationStyles.plusIcon,
            width: "12%",
            height: "9%",
            borderWidth: 0,
          }}
          onPress={() =>
            NavigationService.navigate("BeatThirdScreen", {
              date: searchFilters["startDate"],
            })
          }
        >
          <GenericIcon
            name={"add"}
            style={{
              color: Colors.white,
              fontSize: wp("12%"),
              alignSelf: "center",
            }}
          />
        </TouchableOpacity>
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
  filteredPjpDisplayData: state.user.filteredPjpDisplayData,
});

const mapDispatchToProps = (dispatch) => ({
  fetchPjp: (params) => dispatch(UserActions.fetchPjp(params)),
  changeSearchFilters: (params) =>
    dispatch(UserActions.updateSearchFilters(params)),
});

export default connect(mapStateToProps, mapDispatchToProps)(BeatSecondScreen);
