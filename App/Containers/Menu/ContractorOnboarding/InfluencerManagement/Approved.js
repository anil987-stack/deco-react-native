import React, { Component } from "react";
import {
  View,
  Alert,
  ScrollView,
  TouchableHighlight,
  FlatList,
  TouchableOpacity,
  TouchableWithoutFeedback,
  StyleSheet,
} from "react-native";
import { Button, Text, Icon } from "native-base";

//import VisitCard from 'App/Containers/Visits/VisitCard'

import GenericIcon from "App/Components/GenericIcon";
import EditVisitCard from "App/Containers/Visits/EditVisitCard";
import CommonActions from "App/Stores/Common/Actions";

import { Colors, ApplicationStyles } from "App/Theme";
import _ from "lodash";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Card } from "react-native-paper";
import { ImageBackground } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import SearchBar from "App/Components/SearchBar";
import FontAwesome from "react-native-vector-icons/FontAwesome";

const Approved = ({ onPress, onPressMenu }) => (
  <TouchableWithoutFeedback>
    <View style={{ alignSelf: "center", marginTop: hp("2%") }}>
      <LinearGradient
        colors={["#2d2d2d", "#575757", "#a3a3a3"]}
        style={{
          borderRadius: 13,
          height: hp("10%"),
          width: wp("74%"),
          opacity: 0.9,
          // left: "10%",
          borderBottomRightRadius: 0,
          borderTopRightRadius: 20,
          borderTopLeftRadius: 55,
          borderWidth: 1,
          borderBottomColor: "transparent",
          alignSelf: "flex-end",
          // marginRight:wp("10%")
          //        shadowColor: 'black',
          //  shadowOffset: { width: 7, height: 7 },
          //  shadowOpacity: 0.2,
          //  shadowRadius: 1,elevation:5
        }}
        start={{ x: 0.4, y: 1}}
        end={{ x: 1.5, y: 0 }}
      >
        <View style={{ flexDirection: "row", marginLeft: wp("10") }}>
          <Text
            numberOfLines={1}
            style={{
              fontFamily: "HelveticaNeue_CondensedBold",
              marginLeft: "3%",
              fontWeight: "bold",
              color: "#f8622d",
              top: "3.5%",
              fontSize: wp("2.5%"),
            }}
          >
            {"INFLUENCER TYPE :"}
          </Text>

          <Text
            numberOfLines={1}
            style={{
              fontFamily: "HelveticaNeue_CondensedBold",
              marginLeft: "3%",
              fontWeight: "bold",
              color: "white",
              top: "3.5%",
              fontSize: wp("2.5%"),
            }}
          >
            {"ARCHITECT"}
          </Text>
        </View>
      </LinearGradient>

      <LinearGradient
        colors={["#2b2b2b", "#5c5c5c", "#a4a4a4"]}
        style={{
          borderRadius: 16,
          height: hp("19%"),
          width: wp("90%"),
          opacity: 0.9,
          //   right: wp("19.7%"),
          marginTop: hp("-6%"),
          elevation: 25,
          borderWidth: 1,
          shadowColor: "black",
          alignSelf: "center",
        }}
        // style={{borderRadius:16,height:199,width:370,opacity:0.9,right:"40%",marginTop:"11%",borderTopWidth:5,borderTopColor:"#3b3b3b",borderLeftWidth:5,borderRightWidth:5,borderColor:"#3b3b3b",elevation:45}}
        start={{ x: 0.4, y: 0.4 }}
        end={{ x: 0.9, y: 1.7 }}
      >
        <LinearGradient
          colors={["#2b2b2b", "#5c5c5c", "#a4a4a4"]}
          //  colors={["#1e1e1e","#434343","#505050"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 0, y: 1.5 }}
          //          start={{ x: 0.7, y: 2.9 }}
          // end={{ x: 1.8, y: 0 }}

          style={{
            height: hp("13%"),
            width: wp("88%"),
            opacity: 0.8,
            alignSelf: "center",
            marginTop: "1%",
            borderRadius: 8,
            borderBottomWidth: 0.6,
            borderBottomColor: "lightgrey",
            borderBottomLeftRadius: 7,
            borderBottomRightRadius: 7,
            borderTopLeftRadius: 16,
            borderTopRightRadius: 16,
            borderWidth: 0.6,
            borderColor: "lightgrey",
          }}
        >
          <View style={{ flexDirection: "row" }}>
            <GenericIcon
              name={"circle"}
              style={{
                // color: "#daa520",
                color: "#48d30a",
                marginTop: hp("1.5%"),
                fontSize: hp("3%"),

                marginLeft: wp("2.5%"),
                // backgroundColor:"transparent",
                borderRadius: 60,
                elevation: 0.6,
                // right:"2%",
                width: wp("6%"),
                // paddingLeft:1,
                height: hp("3%"),
                // paddingTop:0,
              }}
              show={true}
            />

            <Text
              numberOfLines={1}
              style={{
                fontFamily: "HelveticaNeue_CondensedBold",
                marginLeft: wp("2%"),
                fontWeight: "bold",
                color: "#f8622d",
                marginTop: hp("1.4%"),
                width: wp("65%"),
              }}
            >
              {"MAKSOOD ALI"}
            </Text>
            <GenericIcon
              name={"image-multiple"}
              style={{
                color: "#cccccc",
                marginTop: hp("1.5%"),
                fontSize: hp("6%"),

                marginLeft: wp(".15%"),
                // backgroundColor:"white",
                borderRadius: 60,
                elevation: 0.6,
                // right:"2%",
                // width:"5.5%",
                // paddingLeft:1,
                // height:"5%",
                // paddingTop:0,
              }}
              show={true}
            />
          </View>

          <Text
            numberOfLines={1}
            style={{
              fontFamily: "HelveticaNeue_CondensedBold",
              marginLeft: wp("10.5%"),
              color: "white",
              marginTop: hp("-3%"),
              fontSize: 12,
            }}
          >
            {"ALI BROTHERS"}
          </Text>

          <Text
            numberOfLines={1}
            style={{
              fontFamily: "HelveticaNeue_CondensedBold",
              marginLeft: wp("10.5%"),
              color: "white",
              marginTop: hp("0.1%"),
              fontSize: 10,
            }}
          >
            {"31 CHANDINI CHOWK, OLD DELHI"}
          </Text>
          <View style={{ flexDirection: "row" }}>
            <Text
              numberOfLines={1}
              style={{
                fontFamily: "HelveticaNeue_CondensedBold",
                marginLeft: wp("10.5%"),
                color: "white",
                marginTop: hp("0.1%"),
                fontSize: 10,
                fontWeight: "bold",
              }}
            >
              {"CREATION DATE:"}
            </Text>
            <Text
              numberOfLines={1}
              style={{
                fontFamily: "HelveticaNeue_CondensedBold",
                marginLeft: wp("1.5%"),
                color: "white",
                marginTop: hp("0.1%"),
                fontSize: 10,
                fontWeight: "bold",
              }}
            >
              {"19.06.2022"}
            </Text>
          </View>
        </LinearGradient>
        <View
          style={{
            flexDirection: "row",
            zIndex: 30,
            marginTop: "1.2%",
            left: "6%",
          }}
        >
          <TouchableOpacity
            style={{
              ...ApplicationStyles.formButton,
              alignSelf: "center",
              marginTop: hp("0%"),
              height: hp("3.5%"),
              width: wp("35.5%"),
              elevation: 18,
              borderRadius: 8,
              paddingBottom: 13,
              zIndex: 50,
              borderWidth: 2,
            }}
            //  this.props.clear();
            // onPress={() => this.submit()}
          >
            <LinearGradient
              colors={["#333333", "#333333"]}
              start={{ x: 0, y: 0.2 }}
              end={{ x: 0, y: 0.7 }}
              style={{
                height: hp("3%"),
                width: wp("34.6%"),
                left: "0%",
                borderRadius: 8,
                opacity: 0.8,
              }}
            >
              <Text
                style={{
                  fontFamily: "HelveticaNeue_CondensedBold",
                  color: "#BFFF00",
                  fontWeight: "bold",
                  alignSelf: "center",
                  paddingVertical: 4,
                  fontSize: wp("2.7%"),
                }}
              >
                {"MAP VIEW"}
              </Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </LinearGradient>
      {/* </LinearGradient> */}
    </View>
  </TouchableWithoutFeedback>
);

export default Approved;

const Style = StyleSheet.create({
  heading: {
    fontSize: wp("2.2%"),
    fontFamily: ApplicationStyles.textFont,
    color: Colors.clr66,
  },
});
