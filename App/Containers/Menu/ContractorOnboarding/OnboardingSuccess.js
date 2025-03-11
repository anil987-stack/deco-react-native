import React, { Component } from "react";
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  CheckBox,
  ImageBackground,
  TextInput,
  Alert,
  FlatList,
  StyleSheet,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import OrderActions from "../../../Stores/Orders/Actions";
import { connect } from "react-redux";
import GenericIcon from "App/Components/GenericIcon";
import NavigationService from "App/Services/NavigationService";
import { ApplicationStyles, Colors } from "App/Theme";

class OnboardingSuccess extends Component {
  fetchCall() {
    const { fetchAllOrders, token, userdetail } = this.props;
    // fetchAllOrders({
    //   token,
    //   id: userdetail.Id,
    //   type: "Primary Order",
    //   // month: HelperService.getMonthindex(monthIndex),
    // });
  }
  render() {
    const { data } = this.props;
    const{message}=this.props.navigation.state.params;
    // console.log("recordddiddd",message);
    return (
      <View>
        {/* <TouchableOpacity
          onPress={() => {
            NavigationService.navigate("GetSecondaryOrder");
          }}
        >
          <GenericIcon
            name={"arrow-back"}
            style={{
              fontSize: 30,
              color: "black",
            }}
          />
        </TouchableOpacity> */}
        <View style={{ alignItems: "center", top: hp("20%") }}>
          <Image
            style={{ width: 150, height: 150 }}
            source={require("App/Assets/Images/check.png")}
          />
          <Text
            style={{
              fontSize: 19,
              fontWeight: "bold",
              padding: 10,
              textAlign: "center",
              top: hp("5%"),
            }}
          >
            {message + " Successfully!"}
          </Text>

          {/* <Text style={{ fontSize: 22, padding: 10, textAlign: "center" }}> */}
          {/* Your Order No. SOR-{data.result[0].OrderName} has been placed */}
          {/* Your Order has been placed */}

          {/* </Text> */}
        </View>
        <TouchableOpacity
          style={{
            alignItems: "center",
            top: hp("30%"),
            backgroundColor: Colors.primary,
            width: wp("20%"),
            height: hp("5%"),
            alignSelf: "center",
          }}
          onPress={() => {
            NavigationService.navigate("OnBoarding"), this.fetchCall();
          }}
        >
          <Text
            style={{
              alignSelf: "center",
              textAlignVertical: "center",
              fontSize: 20,
              color: "white",
              top: hp("0.5%"),
            }}
          >
            OK
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}
const mapStateToProps = (state) => ({
  data: state.orders.primaryOrderForm,
  token: state.user.token,
  loading: state.orders.fetchAllOrdersLoader,
  userdetail: state.startday.userDetailList,
});
const mapDispatchToProps = (dispatch) => ({
  fetchAllOrders: (params) => dispatch(OrderActions.fetchAllOrders(params)),
});

export default connect(mapStateToProps, mapDispatchToProps)(OnboardingSuccess);
