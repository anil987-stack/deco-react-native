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
import BackArrowButton from "App/Components/BackArrowButton";
import BlueButton from "App/Components/BlueButton";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import NavigationService from "App/Services/NavigationService";
import { HelperService } from "App/Services/Utils/HelperService";

const CompetitorCard = ({ item }) => (
  <TouchableOpacity
    style={{
      marginVertical: 8,
      width: wp("88%"),
      borderWidth: 0,
      elevation: 3,
      borderRadius: 3,
      alignSelf: "center",
      backgroundColor: "white",
    }}
    // onPress={() => NavigationService.navigate("SalesOrder", { item: item })}
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
          {item.Name}
        </Text>
        <Text
          style={{
            color: Colors.primary,
            fontSize: hp("4%"),
            textAlign: "center",
            fontWeight: "bold",
            marginTop: hp("2%"),
          }}
        >
          {item.CreatedDate
            ? HelperService.getCurrentDate(HelperService.removeTimestringFromDate1(item.CreatedDate))
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
          {item.CreatedDate
            ? HelperService.getMonthMappingName(
                HelperService.getCurrentMonth(HelperService.removeTimestringFromDate1(item.CreatedDate))
              )
            : ""}
        </Text>
        <Text
          style={{
            textAlign: "center",
            width: "100%",
            color: "#343434",
            fontSize: 12,
            top: hp("-1%"),
          }}
        >
          Created On
        </Text>
      </View>

      <View
        style={{
          flexDirection: "column",
          marginVertical: wp(5),
          width: wp("80%"),
          right: wp("12%"),
          top: hp("1%"),
        }}
      >
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
            Customer
          </Text>
          <Text
            style={{
              color: "#515C6F",
              marginVertical: 2,
              width: "40%",
              textAlign: "left",
            }}
          >
            {item.From__r}
          </Text>
        </View> */}
        <View style={{ flexDirection: "row", marginBottom: wp(1.5) }}>
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
            Type
          </Text>
          <Text
            style={{
              color: "#515C6F",
              marginVertical: 2,
              width: "40%",
              textAlign: "left",
            }}
          >
            {item.Competition_Type__c}
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
              width: wp("33%"),
            }}
          >
            Brand
          </Text>
          <Text
            style={{
              color: "#515C6F",
              marginVertical: 2,
              width: "40%",
              textAlign: "left",
            }}
          >
            {item.Brand_name__c}{" "}
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
              width: wp("33%"),
            }}
          >
            Part No.
          </Text>
          <Text
            style={{
              color: "#515C6F",
              marginVertical: 2,
              width: "40%",
              textAlign: "left",
            }}
          >
            {item.Part_No__c}
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
              width: wp("33%"),
            }}
          >
            Application
          </Text>
          <Text
            style={{
              color: "#515C6F",
              marginVertical: 2,
              width: "40%",
              textAlign: "left",
            }}
          >
            {item.Application__c}
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
            {HelperService.currencyValue(item.Net_amount)}
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
           <Text style={{ color: '#515C6F', marginVertical: 2,width:'40%' }}>{item.Requested_Delivery_Date__c}</Text>
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
          {item.Requested_Delivery_Date__c}
        </Text>
      </View>
    </View> */}
  </TouchableOpacity>
);

export default CompetitorCard;

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
