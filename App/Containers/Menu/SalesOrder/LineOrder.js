import React, { Component } from "react";
import {
  Platform,
  View,
  ActivityIndicator,
  Image,
  Dimensions,
  TouchableWithoutFeedback,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Text,
  TouchableHighlight,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { connect } from "react-redux";
import { Colors, ApplicationStyles, Fonts } from "App/Theme";
import LineOrderCard from "./LineOrderCard";
import OrderActions from "../../../Stores/Orders/Actions";

class OrderSecondaryLineScreen extends Component {
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
    const { fetchSecondaryOrders, token } = this.props;
    // let monthIndex = moment().format("M") - 1;
    let order = this.props;
    // fetchSecondaryOrders({
    //   token,
    //   id: order.order.Id,
    //   // month: HelperService.getMonthindex(monthIndex),
    // });
  }
  fetchCall() {
    const { fetchSecondaryOrders, token } = this.props;
    // let monthIndex = moment().format("M") - 1;
    // let order = this.props;
    // fetchSecondaryOrders({
    //   token,
    //   id: order.order.Id,
    //   // month: HelperService.getMonthindex(monthIndex),
    // });
  }
  render() {
    console.log("oooooooooo",this.props.data)
    return (
      <View>
        {/* <FlatList
          style={{ height: hp("77%") }}
          contentContainerStyle={{ paddingBottom: hp("5%"), paddingTop: 10 }}
          data={this.props.data}
          keyExtractor={(item) => item.Id}
          //    initialNumToRender={7}
          renderItem={({ item }) => (
            <View>
              <LineOrderCard
                order_no={item.Part_No__r?item.Part_No__r.Name:""}
                bags={item.Quantity__c}
                discount={item.Requested_Delivery_Date__c}
                value={item.Requested_Delivery_Date__c}
                value1={item.Requested_Delivery_Date__cwithoutdiscount}
                amount={item.Total_Quantity__c}
                name={item.Part_No_Description__c}
                data={item.Total_Quantity__c}
              />
            </View>
          )}
        /> */}
        <LineOrderCard/>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    data: state.orders.secondaryOrder,
    token: state.user.token,
    loading: state.orders.fetchSecondaryOrderLoader,
  };
};

const mapDispatchToProps = (dispatch) => ({
  fetchSecondaryOrders: (params) =>
    dispatch(OrderActions.fetchSecondaryOrder(params)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OrderSecondaryLineScreen);
