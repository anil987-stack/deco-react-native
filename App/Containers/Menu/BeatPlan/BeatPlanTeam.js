import React, { Component } from "react";
import {
  Text,
  View,
  Dimensions,
  FlatList,
  TouchableOpacity,
} from "react-native";
import NavigationService from "App/Services/NavigationService";
import Style from "./BeatPlanStyle";
import { ApplicationStyles, Colors, Fonts } from "App/Theme";
import GenericIcon from "App/Components/GenericIcon";
import NoDataFound from "App/Components/NoDataFound";
import Loading from "App/Components/Loading";
import { HelperService } from "App/Services/Utils/HelperService";
import DisplayCard from "../../../Components/GenericDisplayCard/GenericDisplayCard";
import UserActions from "App/Stores/User/Actions";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Beat from "../../../Components/Menu/BeatPlanLocal";
import { connect } from "react-redux";

class BeatPlanTeam extends Component {
  componentDidMount() {
    this.fetchCall();
    this.getTotalpjpline();
  }
  componentWillUnmount() {}

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
      m: month,
      token,
      agentid: searchFilters["psm__c"] ? searchFilters["psm__c"] : agentid,
      startDate: searchFilters["startDate"],
      endDate: searchFilters["endDate"],
    });
  }

  getTotalpjpline() {
    const { data } = this.props;
    let quantity = 0;
    // let filteredSitesList = this.filterResults(filteredPjpDisplayData);
    // console.log("quantiy",filteredSitesList)
    if (data && data.length) {
      data.map((obj) => {
        quantity += obj.Total_Number_Of_Beats__c;
      });
    }

    //  console.log("quantiy",quantity)

    return quantity;
  }

  // filterResults(list) {
  //   let searchFilters = this.props.searchFilters;
  //   let filteredList = HelperService.searchTextListFilter(list, 'visit', searchFilters['psm__c'], 'psm__c');
  //   filteredList = HelperService.searchTextListFilter(filteredList, 'visit', searchFilters['area'], 'area__c');
  //   return filteredList;
  // }

  filterResults(list) {
    let searchFilters = this.props.searchFilters;

    let filteredList = HelperService.sortListFilter(list, "Name", "ASC");
    //  filteredList =HelperService.searchTextListFilter(filteredList, 'area__c', searchFilters['area'], );
    return filteredList;
  }

  Approve(data) {
    const { ApproveRejectPjp, token } = this.props;
    ApproveRejectPjp({
      token,
      form: {
        batchRequests: [
          {
            method: "PATCH",
            url: "v34.0/sobjects/PJP__c/" + data.Id,
            richInput: {
              Approval_Status__c: "Approved",
            },
          },

          {
            method: "GET",
            url: "v34.0/sobjects/PJP__c/" + data.Id + "?fields=id",
          },
        ],
      },
    });
  }
  reject(data) {
    const { ApproveRejectPjp, token } = this.props;
    ApproveRejectPjp({
      token,
      form: {
        batchRequests: [
          {
            method: "PATCH",
            url: "v34.0/sobjects/PJP__c/" + data.Id,
            richInput: {
              Approval_Status__c: "Rejected",
            },
          },

          {
            method: "GET",
            url: "v34.0/sobjects/PJP__c/" + data.Id + "?fields=id",
          },
        ],
      },
    });
  }

  getDataNode() {
    let visibleNode = [];

    const {
      data,
      loading,
      Approved,
      loader,
      searchFilters,
      fetchPjp,
      filteredPjpDisplayData,
      userid,
      BeatTotalOutlet,
    } = this.props;

    if (
      filteredPjpDisplayData &&
      filteredPjpDisplayData.length &&
      data &&
      data.length
    ) {
      let filteredSitesList = this.filterResults(filteredPjpDisplayData);

      var filteredData = data.filter(function(obj) {
        return obj.OwnerId !== userid; // Filter out the appropriate one
      });

      if (filteredData.length && filteredData.length) {
        // console.log("filteredSitesList",data)
        visibleNode = (
          <FlatList
            data={filteredData}
            renderItem={({ item }) => (
              <Beat
                loading={loading}
                totalpjp={this.getTotalpjpline()}
                pjplist={item}
                fetch={fetchPjp}
                data={item}
                total_outlet={BeatTotalOutlet}
                userId={userid}
                onApprove={() => this.Approve(item)}
                onReject={() => this.reject(item)}
                // datechange={datechange}
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
    } else if (!data || (data && !data.length && !loading)) {
      visibleNode = <NoDataFound text={"Not Found"} />;
    }

    return visibleNode;
  }

  render() {
    const { loading, userid } = this.props;
    return (
      <View style={{ flexDirection: "row", justifyContent: "center" }}>
        <View style={{ flex: 1, height: wp("90%") }}>
          {loading ? <Loading /> : this.getDataNode()}
        </View>
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
  BeatTotalOutlet: state.user.BeatTotalOutlet,
});

const mapDispatchToProps = (dispatch) => ({
  fetchPjp: (params) => dispatch(UserActions.fetchPjp(params)),
  changeSearchFilters: (params) =>
    dispatch(UsersActions.updateSearchFilters(params)),
  ApproveRejectPjp: (params) => dispatch(UserActions.approveRejectPjp(params)),
});

export default connect(mapStateToProps, mapDispatchToProps)(BeatPlanTeam);
