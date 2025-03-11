import LocalActions from "App/Stores/LocalExpense/Actions";
import { Tab, Tabs, Container } from "native-base";
import React, { Component } from "react";
import { connect } from "react-redux";
import { Colors, ApplicationStyles, Fonts } from "App/Theme";
import BackArrowButton from "App/Components/BackArrowButton";
import BlueButton from "App/Components/BlueButton";
import NavigationService from "App/Services/NavigationService";
import SalesOrderTrack from "./SalesOrderTrack";
import Dash from "react-native-dash";
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { HelperService } from "App/Services/Utils/HelperService";

const LineOrderCard = ({
  onPress,
  id,
  data,
  areas,
  competitors,
  showdata,
  order_no,
  name,
  bags,
}) => (
  <View style={Styles.Card}>
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-around",
        // right: wp('10'),
        // top:hp("2%"),
      }}
    >
      <View style={{right:wp("3%")}}>
        <Text
          style={{
            fontWeight: "bold",
            margin: "1%",

            marginVertical: 2,
            fontSize: 18,
            color: Colors.primary,
            width: wp("35%"),
            fontWeight: "bold",
          }}
        >
          {"OD-0024"}
        </Text>
        <Text
          style={{
            fontWeight: "bold",
            // marginHorizontal: 25,
            // marginVertical: 5,
            fontSize: wp("3.5"),
            width: wp("40%"),
            marginBottom: wp("1"),
          }}
        >
          {"Aqua Fresh Interior"}
        </Text>
      </View>
      <View style={{ justifyContent: "center",right:wp("8%") }}>
        <Text
          style={{ fontWeight: "bold", marginLeft: 5, textAlign: "center" }}
        >
          {"0"}
        </Text>
        <Text style={{ ...Styles.t1, fontSize: wp("3") }}>Total Qty</Text>
      </View>
    </View>
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-evenly",
        right: 18,
        marginTop: hp("1%"),
        width: wp("100%"),
      }}
    >
      {/* <View style={{ justifyContent: "center" }}>
            <Text
              style={{ fontWeight: "bold", marginLeft: 0, textAlign: "center" }}
            >
              {"5"}
            </Text>
            <Text
              style={{
                color: "#9A9A9A",
                fontWeight: "bold",
                textAlign: "center",
              }}
            >
              Total Qty
            </Text>
          </View> */}
      <View style={{ justifyContent: "center" }}>
        <Text
          style={{ fontWeight: "bold", marginLeft: 5, textAlign: "center" }}
        >
          {"₹" + "420"}
        </Text>
        <Text
          style={{
            color: "#9A9A9A",
            fontWeight: "bold",
            textAlign: "center",
            fontSize: wp("3")
          }}
        >
          Base Price
        </Text>
      </View>
      <View style={{ justifyContent: "center" }}>
        <Text
          style={{ fontWeight: "bold", marginLeft: 5, textAlign: "center" }}
        >
          {"₹" + "20"}
        </Text>
        <Text
          style={{
            color: "#9A9A9A",
            fontWeight: "bold",
            textAlign: "center",
            fontSize: wp("3")
          }}
        >
          Tax
        </Text>
      </View>
      <View style={{ justifyContent: "center" }}>
        <Text
          style={{ fontWeight: "bold", marginLeft: 5, textAlign: "center" }}
        >
          {"₹" + "2100"}
        </Text>
        <Text
          style={{
            color: "#9A9A9A",
            fontWeight: "bold",
            textAlign: "center",
            fontSize: wp("3")
          }}
        >
          Discount
        </Text>
      </View>
      <View style={{ justifyContent: "center" }}>
        <Text
          style={{ fontWeight: "bold", marginLeft: 5, textAlign: "center" }}
        >
          {"₹" + "2100"}
        </Text>
        <Text
          style={{
            color: "#9A9A9A",
            fontWeight: "bold",
            textAlign: "center",
            fontSize: wp("3")
          }}
        >
          Net Amount
        </Text>
      </View>
    </View>
    {/* <View style={{ ...Styles.textView, left: wp("15%"), flexDirection: "row" }}>
      <Text style={{ ...Styles.textStyle, width: "40%" }}>Base Amount</Text>
      <Text style={{ ...Styles.placeholder, left: wp("10%") }}>{"₹360"}</Text>
    </View> */}
    {/* <View style={{ ...Styles.textView,left: wp("15%") ,flexDirection:'row' }}>
            <Text style={{...Styles.textStyle,width:'40%'}}>Total Quantity</Text>
            <Text style={{...Styles.placeholder,left: wp("10%")}}>
              {"60"}
            </Text>
          </View> */}
    {/* <View style={{ ...Styles.textView, left: wp("15%"), flexDirection: "row" }}>
      <Text style={{ ...Styles.textStyle, width: "40%" }}>Discount</Text>
      <Text style={{ ...Styles.placeholder, left: wp("10%") }}>{"12"}</Text>
    </View> */}
    {/* <View style={{ ...Styles.textView, left: wp("15%"), flexDirection: "row" }}>
      <Text style={{ ...Styles.textStyle, width: "40%" }}>Tax</Text>
      <Text style={{ ...Styles.placeholder, left: wp("10%") }}>{"14"}</Text>
    </View> */}
    {/* <View
      style={{
        ...Styles.textView,
        left: wp("15%"),
        flexDirection: "row",
        marginBottom: 10,
      }}
    >
      <Text style={{ ...Styles.textStyle, width: "40%" }}>Net Value</Text>
      <Text style={{ ...Styles.placeholder, left: wp("10%") }}>{"₹854"}</Text>
    </View> */}
  </View>
);

export default LineOrderCard;

const Styles = StyleSheet.create({
  Head: {
    height: hp("6%"),
    width: wp("100%"),
    backgroundColor: Colors.primary,
  },
  head_txt: {
    fontSize: 23,
    color: "white",
    margin: 5,
    left: 20,
  },
  Card: {
    width: wp("90%"),
    borderWidth: 1,
    elevation: 3,
    borderRadius: 5,
    backgroundColor: "white",
    alignSelf: "center",
    marginVertical: 0,
    marginTop: "5%",
    borderColor: "#8B8B8B0F",
    marginBottom: hp("2%"),
  },
  Card2: {
    height: hp("12%"),
    width: wp("92%"),
    borderWidth: 1,
    elevation: 3,
    borderRadius: 5,
    backgroundColor: "white",
    alignSelf: "center",
    marginVertical: 20,
    borderColor: "#8B8B8B0F",
  },
  t1: {
    color: "#9A9A9A",
    fontWeight: "bold",
    textAlign: "center",
  },
  t2: {
    marginVertical: 7,
    fontWeight: "bold",
  },
  textView1: {
    width: wp("90%"),
    // borderBottomWidth: 1,
    // borderColor: Colors.lightGrey,
    marginTop: hp("1.5%"),
  },
  v1: {
    borderBottomColor: "#9A9A9A",
    borderBottomWidth: 1,
    width: wp("35%"),
  },
  text4: {
    color: "#707070",
    fontSize: 11.5,
    textAlign: "center",
  },
  text5: {
    width: 20,
    height: 22,
    borderRadius: 22,
    backgroundColor: "#9A9A9A",
    marginLeft: 70,
    justifyContent: "center",
    alignItems: "center",
  },
  tt1: {
    height: hp("3.5%"),
    width: wp("25%"),
    borderRadius: 3,
    backgroundColor: "#E95454",
    marginLeft: wp("10%"),
  },
});
