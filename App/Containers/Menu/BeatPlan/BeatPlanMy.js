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
import Beat from "../../../Components/Menu/BeatPlanComponent";
import { connect } from "react-redux";

class BeatPlanMy extends Component {
  constructor() {
    super();
    this.state = {
      data: [
        {
          Approval_Status__c: "Pending",
          id: "BP-101",
          Total_Number_Of_Beats__c: "9876567867",
          total_outlet: "5",
        },
        {
          Approval_Status__c: "Pending",
          id: "BP-102",
          Total_Number_Of_Beats__c: "9876567867",
          total_outlet: "5",
        },
      ],
    };
  }
  componentDidMount() {
    const {
      fetchPjp,
      token,
      searchFilters,
      userid,
      month,
      agentid,
    } = this.props;
    this.fetchCall();
    this.getTotalpjpline();

    fetchPjp({
      userId: userid,
      m: month,
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
      m: month,
      token,
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

  filterResults(list) {
    let searchFilters = this.props.searchFilters;
    let filteredList = HelperService.searchTextListFilter(
      list,
      "visit",
      searchFilters["psm__c"],
      "psm__c"
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

    let filteredList = HelperService.sortListFilter(list, "Name", "ASC");
    //  filteredList =HelperService.searchTextListFilter(filteredList, 'area__c', searchFilters['area'], );
    return filteredList;
  }
  submit(id) {
    const { sendApproval, token } = this.props;

    sendApproval({
      token,
      form: {
        batchRequests: [
          {
            method: "PATCH",
            url: "v34.0/sobjects/PJP__c/" + id[0].Id,
            richInput: {
              Approval_Status__c: "Pending For Approval",
            },
          },

          {
            method: "GET",
            url: "v34.0/sobjects/PJP__c/" + id[0].Id + "?fields=id",
          },
        ],
      },
    });
  }

  getDataNode() {
    let visibleNode = [];

    const {
      data,
      userid,
      loading,
      Approved,
      loader,
      searchFilters,
      fetchPjp,
      filteredPjpDisplayData,
      BeatTotalOutlet,
    } = this.props;
    console.log("filteredPjpDisplayData", filteredPjpDisplayData, data);

    if (data && data.length) {
      let filteredSitesList = this.filterResults(data);
      console.log("filteredSitesList", filteredSitesList);
      var filteredData = data.filter(function(obj) {
        return obj.OwnerId === userid; // Filter out the appropriate one
      });
      console.log(this.state.data);
      if (filteredSitesList.length && filteredData.length) {
        // if (this.state.data && this.state.data.length) {
        visibleNode = (
          <Beat
            loading={loading}
            loader={loader}
            // totalpjp={this.getTotalpjpline()}
            // pjplist={this.state.data}
            // fetch={fetchPjp}
            data={filteredData}
            // total_outlet={BeatTotalOutlet}
            onClick={() => this.submit(filteredData)}
            // onApprove={() => this.Approve(filteredData)}
            // onReject={() => this.reject(filteredData)}
          />
        );
        // visibleNode =<NoDataFound text={'Not  Found'} />
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
    const { loading, userid, data } = this.props;
    var filteredData = [];
    if (data && data.length) {
      data.filter(function(obj) {
        return obj.OwnerId === userid; // Filter out the appropriate one
      });
    }

    return (
      <View style={{ flexDirection: "row", justifyContent: "center" }}>
        <View style={{ flex: 1, height: wp("90%"), marginBottom: hp("5%") }}>
          {loading ? <Loading /> : this.getDataNode()}
        </View>
        {data &&
        data.length &&
        data[0].Approval_Status__c == "Approved"||data &&
        data.length &&
        data[0].Approval_Status__c == "Pending For Approval" ? (
          []
        ) : (
          <TouchableOpacity
            style={{
              ...ApplicationStyles.plusIcon,
              width: wp("11%"),
              height: wp("11%"),
              borderWidth: 0,
              backgroundColor: Colors.primary,
              bottom: hp("10%"),
              left: wp("80%"),
            }}
            onPress={() =>
              NavigationService.navigate("BeatThirdScreen", {
                date: HelperService.getCurrentTimestamp(),
                user: userid,
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
  loader: state.user.submitApprovalLoader,
  month: state.user.monthNumber,
  filteredPjpDisplayData: state.user.filteredPjpDisplayData,
  BeatTotalOutlet: state.user.BeatTotalOutlet,
  // fetchPjpLoading:state.user.fetchPjpLoading,
});

const mapDispatchToProps = (dispatch) => ({
  fetchPjp: (params) => dispatch(UserActions.fetchPjp(params)),
  changeSearchFilters: (params) =>
    dispatch(UserActions.updateSearchFilters(params)),
  sendApproval: (params) => dispatch(UserActions.submitApproval(params)),
});

export default connect(mapStateToProps, mapDispatchToProps)(BeatPlanMy);
