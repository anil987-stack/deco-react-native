import LocalActions from "App/Stores/LocalExpense/Actions";
// import Colors from 'App/Theme/Colors';
import { Tab, Tabs, Container } from "native-base";
import React, { Component } from "react";
import { connect } from "react-redux";
import { Colors, ApplicationStyles, Fonts } from "App/Theme";
import BackArrowButton from "App/Components/BackArrowButton";
import BlueButton from "App/Components/BlueButton";
import OrderActions from "../../../Stores/Orders/Actions";
import NavigationService from "App/Services/NavigationService";
import { HelperService } from "App/Services/Utils/HelperService";
import NoDataFound from "App/Components/NoDataFound";
import Loading from "../../../Components/Loading";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  FlatList,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import OrderCard from "./OrderCard";
import moment from "moment";

class Pendingcard extends Component {
  constructor() {
    super();
    this.state = {
      data: [
        {
          Name: "OR-54765",
          id: 1,
          Order_Date__c: "2013-09-29T18:46:19Z",
          From__r: "A.K Retailers",
          To__r: "S.J Distributors",
          Total_Quantity__c: 200,
          Net_Weight__c: 20,
          Requested_Delivery_Date__c: "22/02/2022",
          Status__c: "Draft",
          Net_amount: 2000,
        },
      ],
    };
  }
  componentDidMount() {
    const { fetchAllOrders, token, userdetail } = this.props;
    let monthIndex = moment().format("M") - 1;
    fetchAllOrders({
      token,
      id: userdetail.Id,
      type: "Secondary Order",
      // month: HelperService.getMonthindex(monthIndex),
    });
  }

  fetchCall() {
    const { fetchAllOrders, token, userdetail } = this.props;
    let monthIndex = moment().format("M") - 1;
    fetchAllOrders({
      token,
      id: userdetail.Id,
      type: "Secondary Order",
      // month: HelperService.getMonthindex(monthIndex),
    });
  }

  filterResults(list) {
    const { token, userid } = this.props;
    let result = "";
    result = list.filter((obj) => obj);
    // console.log(result)
    result = HelperService.sortDesc(result, "Name");
    return result;
  }

  getCardNode(data) {
    return <OrderCard data={data} id={data.Id} />;
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
        visibleNode = <NoDataFound text={"Not  Found"} />;
      }
    } else if (loading) {
      visibleNode = <Loading />;
    } else if (
      !data ||
      (data && !data.length && !loading)
    ) {
      visibleNode = <NoDataFound text={"Not Found"} />;
    }

    return visibleNode;
  }

  render() {
    return <View style={{ marginHorizontal: 5 }}>{this.getDataNode()}</View>;
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

export default connect(mapStateToProps, mapDispatchToProps)(Pendingcard);
