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

const OrderCard = ({ onPress, id, data, areas, competitors, showdata }) => (
  <TouchableOpacity
    style={{
      marginVertical: 7,
      width: wp("88%"),
      borderWidth: 0,
      elevation: 3,
      borderRadius: 3,
      alignSelf: "center",
      backgroundColor: "white",
    }}
    onPress={() => NavigationService.navigate("SalesOrder", { detail: data })}
  >
    <View style={{ flexDirection: "row" }}>
      <View
        style={{
          flexDirection: "column",
          margin: wp("2"),
          width: wp("27%"),
          alignItems: "center",
        }}
      >
        <Text
          style={{
            color: Colors.primary,
            fontWeight: "bold",
            fontSize: hp("2.5"),
          }}
        >
          {data.Name}
        </Text>
        <Text
          style={{
            color: Colors.primary,
            fontSize: hp("4%"),
            textAlign: "center",
            fontWeight: "bold",
            marginTop: hp("2.5%"),
          }}
        >
          {data.Order_Date__c
            ? HelperService.getCurrentDate(data.Order_Date__c)
            : ""}
        </Text>
        <Text
          style={{
            color: Colors.primary,
            textAlign: "center",
            fontWeight: "bold",
            fontSize: hp("2.2"),
            top: hp("-1%"),
          }}
        >
          {data.Order_Date__c
            ? HelperService.getMonthMappingName(
                HelperService.getCurrentMonth(data.Order_Date__c)
              )
            : ""}
        </Text>
        <Text
          style={{
            textAlign: "center",
            width: "100%",
            color: "#343434",
            fontSize: 12,
          }}
        >
          Order Date
        </Text>
      </View>

      <View
        style={{
          flexDirection: "column",
          marginVertical: wp(5),
          width: wp("80%"),
          right: wp("9%"),
        }}
      >
        <View style={{ flexDirection: "row", marginBottom: wp(1.5) }}>
          <Text
            style={{
              marginVertical: 2,
              fontWeight: "bold",
              color: "#9A9A9A",
              textAlign: "right",
              marginRight: wp("5%"),
              width: wp("32%"),
            }}
          >
            Order From
          </Text>
          <Text
            style={{
              color: "#515C6F",
              marginVertical: 1,
              width: wp('26'),
              textAlign: "left",
             
            }}
          >
            {data.Order_From__r?data.Order_From__r.Name:""}
          </Text>
        </View>

        <View style={{ flexDirection: "row", marginBottom: wp(1.5) }}>
          <Text
            style={{
              marginVertical: 1,
              fontWeight: "bold",
              color: "#9A9A9A",
              textAlign: "right",
              marginRight: wp("5%"),
              width: wp("32%"),
            }}
          >
            Order To
          </Text>
          <Text
            style={{
              color: "#515C6F",
              marginVertical: 1,
              width: wp('26'),
              textAlign: "left",
             
            }}
          >
            {data.Order_TO__r?data.Order_TO__r.Name:""}
          </Text>
        </View>

        <View style={{ flexDirection: "row", marginBottom: wp(1.5) }}>
          <Text
            style={{
              marginVertical: 1,
              fontWeight: "bold",
              color: "#9A9A9A",
              textAlign: "right",
              marginRight: wp("5%"),
              width: wp("32%"),
            }}
          >
            SAP Order No.
          </Text>
          <Text
            style={{
              color: "#515C6F",
              marginVertical: 1,
              width: wp('26'),
              textAlign: "left",
              
            }}
          >
            {data.SAP_Order_ID__c}
          </Text>
        </View>

        <View style={{ flexDirection: "row", marginBottom: wp(1.5) }}>
          <Text
            style={{
              marginVertical: 2,
              fontWeight: "bold",
              color: "#9A9A9A",
              textAlign: "right",
              marginRight: wp("5%"),
              width: wp("32%"),
            }}
          >
            Total Qty
          </Text>
          <Text
            style={{
              color: "#515C6F",
              marginVertical: 1,
              width: wp('26'),
              textAlign: "left",
       
            }}
          >
            {data.Total_order_Quantity__c}{" "}
          </Text>
        </View>

        <View style={{ flexDirection: "row", marginBottom: wp(0) }}>
          <Text
            style={{
              marginVertical: 1,
              fontWeight: "bold",
              color: "#9A9A9A",
              textAlign: "right",
              marginRight: wp("5%"),
              width: wp("32%"),
            }}
          >
            Total Order Value
          </Text>
          <Text
            style={{
              color: "#515C6F",
              marginVertical: 1,
              width: wp('26'),
              textAlign: "left",
            }}
          >
            {HelperService.FixedDecimalValue(data.Total_Order_Value__c)}
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
    {/* <View style={{ flexDirection: "row", marginBottom: wp("4%") }}>
      <View style={{ width: wp("20%"), marginLeft: wp("6%") }}>
        <Text
          style={{
            marginVertical: 2,
            fontWeight: "bold",
            color: "#9A9A9A",
            textAlign: "left",
            width: wp("33%"),
          }}
        >
          Cash Discount
        </Text>
        <Text
          style={{
            color: "#515C6F",
            marginVertical: 2,
            width: "100%",
            textAlign: "center",
          }}
        >
          123
        </Text>
      </View>
      <View style={{ width: wp("20%"), marginLeft: wp("6%") }}>
        <Text
          style={{
            marginVertical: 2,
            fontWeight: "bold",
            color: "#9A9A9A",
            textAlign: "left",
            width: wp("33%"),
          }}
        >
          Net Amount
        </Text>
        <Text
          style={{
            color: "#515C6F",
            marginVertical: 2,
            width: "100%",
            textAlign: "center",
          }}
        ></Text>
      </View>
      <View style={{ width: wp("20%"), marginLeft: wp("6%") }}>
        <Text
          style={{
            marginVertical: 2,
            fontWeight: "bold",
            color: "#9A9A9A",
            textAlign: "left",
            width: wp("33%"),
          }}
        >
          Delivery Date
        </Text>
        <Text style={{ color: "#515C6F", marginVertical: 2, width: "100%" }}>
          {data.Requested_Delivery_Date__c}
        </Text>
      </View>
    </View> */}
  </TouchableOpacity>
);

export default OrderCard;

const Styles = StyleSheet.create({
  button: {
    width: wp("35%"),
    marginHorizontal: 30,
    height: hp("4%"),
    borderRadius: 5,
    marginTop: 2,
    left: 12,
    elevation: 3,
    backgroundColor: "#FFC303",
    marginLeft: "33%",
  },
  card1: {
    marginVertical: 20,
    width: wp("95%"),
    borderWidth: 0,
    elevation: 3,
    borderRadius: 3,
    alignSelf: "center",
    backgroundColor: "white",
    flexDirection: "row",
  },
  t2: {
    textAlign: "center",
    fontSize: 12,
    color: "#9A9A9A",
  },
});
