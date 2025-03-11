import LocalActions from "App/Stores/LocalExpense/Actions";
import { Tab, Tabs, Container } from "native-base";
import React, { Component } from "react";
import { connect } from "react-redux";
import { Colors, ApplicationStyles, Fonts } from "App/Theme";
import BackArrowButton from "App/Components/BackArrowButton";
import BlueButton from "App/Components/BlueButton";
import NavigationService from "App/Services/NavigationService";
// import SalesOrderTrack from "./SalesOrderTrack";
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
import InvoiceDetail from "./InvoiceDetail";

const InvoiceDetailsCard = ({
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
      <View style={{ right: wp("18%") }}>
        <Text
          style={{
            fontWeight: "bold",
            margin: "1%",

            marginVertical: 2,
            fontSize: 18,
            color: Colors.primary,
            width: wp("40%"),
            fontWeight: "bold",
          }}
        >
          {"IN-0024"}
        </Text>
        <Text
          style={{
            fontWeight: "bold",
            // marginHorizontal: 25,
            // marginVertical: 5,
            fontSize: 18,
            width: wp("40%"),
            color: "blue",
          }}
        >
          {"SI02030043"}
        </Text>
      </View>
    </View>
    <View style={{ flexDirection: "row" }}>
      <View
        style={{
          flexDirection: "column",
          marginVertical: wp(5),
          width: wp("80%"),
          right: wp("9.5%"),
          marginTop: hp("1%"),
        }}
      >
        <View style={{ flexDirection: "row", marginBottom: wp(1.5) }}>
          <Text
            style={{
              marginVertical: 2,
              fontWeight: "bold",
              color: "#9A9A9A",
              textAlign: "right",
              marginRight: wp("10%"),
              width: wp("33%"),
            }}
          >
            Item Code
          </Text>
          <Text
            style={{
              color: "black",
              marginVertical: 2,
              width: "40%",
              textAlign: "left",
            }}
          >
            {"3250001"}
          </Text>
        </View>
        <View style={{ flexDirection: "row", marginBottom: wp(1.5) }}>
          <Text
            style={{
              marginVertical: 2,
              fontWeight: "bold",
              color: "#9A9A9A",
              textAlign: "right",
              marginRight: wp("10%"),
              width: wp("33%"),
            }}
          >
            Item Name
          </Text>
          <Text
            style={{
              color: "black",
              marginVertical: 2,
              width: "40%",
              textAlign: "left",
            }}
          >
            {"Paints 5m box Red"}
          </Text>
        </View>
        <View style={{ flexDirection: "row", marginBottom: wp(1.5) }}>
          <Text
            style={{
              marginVertical: 2,
              fontWeight: "bold",
              color: "#9A9A9A",
              textAlign: "right",
              marginRight: wp("10%"),
              width: wp("33%"),
            }}
          >
            Quantity
          </Text>
          <Text
            style={{
              color: "black",
              marginVertical: 2,
              width: "40%",
              textAlign: "left",
            }}
          >
            {"60"}
          </Text>
        </View>

        <View style={{ flexDirection: "row", marginBottom: wp(0) }}>
          <Text
            style={{
              marginVertical: 2,
              fontWeight: "bold",
              color: "#9A9A9A",
              textAlign: "right",
              marginRight: wp("10%"),
              width: wp("33%"),
            }}
          >
            Amount
          </Text>
          <Text
            style={{
              color: "black",
              marginVertical: 2,
              width: "40%",
              textAlign: "left",
            }}
          >
            {"₹1805.20"}
          </Text>
        </View>

        {/* <View style={{ flexDirection: "row", marginBottom: wp(1.5) }}>
          <Text
            style={{
              marginVertical: 2,
              fontWeight: "bold",
              color: "#9A9A9A",
              textAlign: "right",
              marginRight: wp("5%"),
              width: wp("33%"),
            }}
          >
            SFDC Order Value(excl. tax & discount)
          </Text>
          <Text
            style={{
              color: "#515C6F",
              marginVertical: 2,
              width: "40%",
              textAlign: "left",
            }}
          >
            {HelperService.currencyValue(data.Net_amount)}
          </Text>
        </View> */}

        {/* <View style ={{flexDirection:'row'}}>
           <Text style={{ marginVertical: 2, fontWeight: 'bold', color: '#9A9A9A', textAlign: 'right',marginRight:wp('5%') ,width:wp('33%')}}>Cash Discount</Text>
           <Text style={{ color: '#515C6F', marginVertical: 2,width:'40%',textAlign:'left' }}>{""}</Text>
           </View>


           <View style ={{flexDirection:'row'}}>
           <Text style={{ marginVertical: 2, fontWeight: 'bold', color: '#9A9A9A', textAlign: 'right',marginRight:wp('5%'),width:wp('33%') }}>Net Amount</Text>
           <Text style={{ color: '#515C6F', marginVertical: 2, width:'40%'}}>{""}</Text>
           </View>

           <View style ={{flexDirection:'row'}}>
           <Text style={{ marginVertical: 2, fontWeight: 'bold', color: '#9A9A9A', textAlign: 'right',marginRight:wp('5%'),width:wp('33%') }}>Delivery date</Text>
           <Text style={{ color: '#515C6F', marginVertical: 2,width:'40%' }}>{data.Requested_Delivery_Date__c}</Text>
           </View> */}
      </View>
    </View>
  </View>
);

export default InvoiceDetailsCard;

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
