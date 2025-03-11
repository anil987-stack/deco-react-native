import Colors from "App/Theme/Colors";
import { Tab, Tabs, ScrollableTab } from "native-base";
import React, { Component } from "react";
import {
  ScrollView,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  FlatList,
} from "react-native";
import MenuActions from "App/Stores/Menu/Actions";
import { connect } from "react-redux";
import BackArrowButton from "App/Components/BackArrowButton";
import BlueButton from "App/Components/BlueButton";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import NavigationService from "App/Services/NavigationService";
import { HelperService } from "App/Services/Utils/HelperService";
import NoDataFound from "App/Components/NoDataFound";
import Loading from "App/Components/Loading";
import Card from "./AidpCard";
import GenericIcon from "App/Components/GenericIcon";

class AidpTask extends Component {
  fetchCall() {
    const { token } = this.props;
    this.props.getCampaignRecord({ token });
  }
  filterResults(list) {
    const { token, userid } = this.props;
    let result = "";
    result = list.filter((obj) => obj.Campaign_Status__c == "Draft");
    result = HelperService.sortDesc(result, "Name");
    // console.log(result)
    return result;
  }
  submit(params) {
    // console.log("params", params);
    const { token, userid, managerId, submitForApproval } = this.props;

    let requestData = {
      requests: [
        {
          actionType: "Submit",
          contextId: params.Id, //Campaign Requisition record id here
          nextApproverIds: [""],
          comments: "this is a test",
          contextActorId: userid, //Current User
          processDefinitionNameOrId: "CampaignApproval",
          skipEntryCriteria: "true",
        },
      ],
    };

    submitForApproval({ payload: requestData, token });
  }

  getCardNode(data) {
    return (
      <Card
        data={data}
        id={data.id}
        status={data.Campaign_Status__c}
        submitForApproval={() => this.submit(data)}
      />
    );
  }

  getDataNode() {
    let visibleNode = [];

    const {
      data,
      loading,

      loader,
    } = this.props;

    if (data && data.length) {
      let searchedFilteredList = this.filterResults(data);

      if (searchedFilteredList.length) {
        visibleNode = (
          <FlatList
            showsVerticalScrollIndicator={false}
            data={searchedFilteredList}
            renderItem={({ item }) => this.getCardNode(item)}
            keyExtractor={(item) => item.Id}
            refreshing={loading}
            onRefresh={() => this.fetchCall()}
          />
        );
      } else {
        visibleNode = <NoDataFound text={"No Data Found"} />;
      }
    } else if (loading) {
      visibleNode = <Loading />;
    } else if (!data || (data && !data.length && !loading)) {
      visibleNode = <NoDataFound text={"No Data Found.."} />;
    }

    return visibleNode;
  }

  render() {
    return <View>
      <Card />
      {/* {this.getDataNode()} */}
      </View>;
  }
}

const mapStateToProps = (state) => ({
  data: state.menu.campaignRecord,
  token: state.user.token,
  loading: state.menu.getCampaignRecordLoading,
  userid: state.user.loginDetails.userId,
  managerId: state.startday.userDetailList.ManagerId,
  loader: state.menu.submitForApprovalLoader,
});

const mapDispatchToProps = (dispatch) => ({
  fetchAllOrders: (params) => dispatch(OrderActions.fetchAllOrders(params)),
  submitForApproval: (params) =>
    dispatch(MenuActions.submitForApproval(params)),
  getCampaignRecord: (params) =>
    dispatch(MenuActions.getCampaignRecord(params)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AidpTask);
