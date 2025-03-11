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
import { connect } from "react-redux";
import Style from "./PurchaseStyles";
import OrderActions from "../../../Stores/Orders/Actions";
import BackArrowButton from "App/Components/BackArrowButton";
import BlueButton from "App/Components/BlueButton";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import NavigationService from "App/Services/NavigationService";
import { HelperService } from "App/Services/Utils/HelperService";
import NoDataFound from "App/Components/NoDataFound";
import Loading from "../../../Components/Loading";
import PrimaryOrderCard from "./PrimaryOrderCard";
import moment from "moment";

class NotCreated extends Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     data: [
  //       {
  //         Name: "OR-54765",
  //         id: 1,
  //         Order_Date__c: "2013-09-29T18:46:19Z",
  //         From__r: "A.K Batteries",
  //         Total_Quantity__c: 200,
  //         Net_Weight__c: 20,
  //         Requested_Delivery_Date__c: "22/02/2022",
  //         Status__c: "Saved",
  //         Net_amount: 2000,
  //       },
  //     ],
  //   };
  // }
  componentDidMount() {
    const { fetchAllOrders, token, userdetail } = this.props;
    let monthIndex = moment().format("M") - 1;
    fetchAllOrders({
      token,
      id: userdetail.Id,
      type: "Primary Order",
      // month: HelperService.getMonthindex(monthIndex),
    });
  }

  fetchCall() {
    const { fetchAllOrders, token, userdetail } = this.props;
    let monthIndex = moment().format("M") - 1;
    fetchAllOrders({
      token,
      id: userdetail.Id,
      type: "Primary Order",
      // month: HelperService.getMonthindex(monthIndex),
    });
  }
  filterResults(list) {
    const { token, userid } = this.props;
    let result = "";
    result = list.filter((obj) => obj.Order_Status__c == "Not Created");
    result = HelperService.sortDesc(result, "Name");
    // console.log(result)
    return result;
  }
  getCardNode(data) {
    // console.log("data", data);
    return <PrimaryOrderCard data={data} id={data.Id} />;
  }

  getDataNode() {
    let visibleNode = [];

    const {
      data,
      loading,

      loader,
    } = this.props;

    if (data && data.length) {
      // let searchedList = this.filterResults(data);
      let searchedFilteredList = this.filterResults(data);
      // let filteredSitesList = this. searchKeyValueInList(data.map((obj) => obj));

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
    return <View style={Style.container}>{this.getDataNode()}</View>;
  }
}

const mapStateToProps = (state) => ({
  data: state.orders.allOrders,
  token: state.user.token,
  loading: state.orders.fetchAllOrdersLoader,
  userdetail: state.startday.userDetailList,
});

const mapDispatchToProps = (dispatch) => ({
  fetchAllOrders: (params) => dispatch(OrderActions.fetchAllOrders(params)),
});

export default connect(mapStateToProps, mapDispatchToProps)(NotCreated);
