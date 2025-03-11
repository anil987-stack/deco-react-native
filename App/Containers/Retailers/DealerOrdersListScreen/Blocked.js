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
import Style from "./DealerOrdersListScreenStyles";
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
// import PrimaryOrderCard from './PrimaryOrderCard';
import moment from "moment";
import DealerCard from "./DealerCard";

class Blocked extends Component {
  constructor() {
    super();
    this.state = {
      data: [
        {
          Name: "OR-54765",
          id: 1,
          Order_Date__c: "2013-09-29T18:46:19Z",
          From__r: "A.K Batteries",
          Total_Quantity__c: 200,
          Net_Weight__c: 20,
          Requested_Delivery_Date__c: "22/02/2022",
          Status__c: "Saved",
          Net_amount: 2000,
        },
      ],
    };
  }
  componentDidMount() {
    const { fetchAllOrders, token, selectedRetailer } = this.props;
    let monthIndex = moment().format("M") - 1;
    //   fetchAllOrders({
    //       token,
    //       m:HelperService.getMonthindex(monthIndex),
    //       partyId:selectedRetailer.id
    //   })
  }

  fetchCall() {
    const { fetchAllOrders, token, selectedRetailer } = this.props;
    let monthIndex = moment().format("M") - 1;
    fetchAllOrders({
      token,
      m: HelperService.getMonthindex(monthIndex),
      partyId: selectedRetailer.id,
    });
  }
  filterResults(list) {
    const { token, userid } = this.props;
    let result = "";
    result = HelperService.sortDesc(list, "Name");
    result = result.filter((obj) => obj.Order_Status__c == "Blocked");
    // result = HelperService.sortDesc(result, "Name");
    // console.log(result)
    return result;
  }
  getCardNode(data) {
    return <DealerCard data={data} id={data.Id} />;
  }

  getDataNode() {
    let visibleNode = [];

    const {
      data,
      loading,

      loader,
    } = this.props;
    // console.log(data, "jkjkjkjkjkj");

    if (data && data.length) {
      let searchedList = this.filterResults(data);
      // let searchedFilteredList = this.filterResults(data);
      // let filteredSitesList = this. searchKeyValueInList(data.map((obj) => obj));

      if (searchedList && searchedList.length) {
        visibleNode = (
          <FlatList
            showsVerticalScrollIndicator={false}
            data={data}
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
      visibleNode = <NoDataFound text={"Data Not Found"} />;
    }

    return visibleNode;
  }

  render() {
    return <View style={Style.container}>{this.getDataNode()}</View>;
  }
}

const mapStateToProps = (state) => ({
  data: state.orders.customerprimaryList,
  token: state.user.token,
  loading: state.orders.fetchAllOrdersLoader,
  selectedRetailer: state.retailers.selectedRetailer,
});

const mapDispatchToProps = (dispatch) => ({
  fetchAllOrders: (params) =>
    dispatch(OrderActions.getCustomerPrimaryOrder(params)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Blocked);
