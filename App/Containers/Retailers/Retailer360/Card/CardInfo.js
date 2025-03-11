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
import Style from "./CardInfoStyle";

const CardInfo = ({ onPress, onPressModal }) => (
  <TouchableWithoutFeedback onPress={onPressModal}>
    <View style={{ alignSelf: "center", marginTop: hp("3%") }}>
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
          //        shadowColor: 'black',
          //  shadowOffset: { width: 7, height: 7 },
          //  shadowOpacity: 0.2,
          //  shadowRadius: 1,elevation:5
        }}
        start={{ x: 0.4, y: 1 }}
        end={{ x: 1.5, y: 0 }}
      >
        <View style={{ flexDirection: "row", alignSelf: "center" }}>
          <Text
            numberOfLines={1}
            style={{
              fontFamily: "HelveticaNeue_CondensedBold",
              marginLeft: "3%",
              fontWeight: "bold",
              color: "#f8622d",
              top: "3.5%",
              fontSize: wp("2.3%"),
            }}
          >
            {"PJP RETAILER"}
          </Text>

          <Text
            numberOfLines={1}
            style={{
              fontFamily: "HelveticaNeue_CondensedBold",
              marginLeft: "3%",
              fontWeight: "bold",
              color: "white",
              top: "3.5%",
              fontSize: wp("2.3%"),
            }}
          >
            {"|"}
          </Text>

          <Text
            numberOfLines={1}
            style={{
              fontFamily: "HelveticaNeue_CondensedBold",
              marginLeft: "3%",
              fontWeight: "bold",
              color: "#f8622d",
              top: "3.5%",
              fontSize: wp("2.3%"),
            }}
          >
            {"PRIME PARTNER"}
          </Text>

          <Text
            numberOfLines={1}
            style={{
              fontFamily: "HelveticaNeue_CondensedBold",
              marginLeft: "3%",
              fontWeight: "bold",
              color: "white",
              top: "3.5%",
              fontSize: wp("2.3%"),
            }}
          >
            {"|"}
          </Text>

          <Text
            numberOfLines={1}
            style={{
              fontFamily: "HelveticaNeue_CondensedBold",
              marginLeft: "3%",
              fontWeight: "bold",
              color: "white",
              top: "3.5%",
              fontSize: wp("2.3%"),
            }}
          >
            {"TELESALES"}
          </Text>
        </View>
      </LinearGradient>

      <LinearGradient
        colors={["#2b2b2b", "#5c5c5c", "#a4a4a4"]}
        style={{
          borderRadius: 16,
          height: hp("25%"),
          width: wp("90%"),
          opacity: 0.9,
          // right: wp("19.7%"),
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
            height: hp("21%"),
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
                color: "#BFFF00",
                // color: "#48d30a",
                marginTop: hp("1.5%"),
                fontSize: hp("3%"),

                marginLeft: wp("2.5%"),
                backgroundColor: "",
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
              {"SHAHID ALI HASMULLAH KHAN"}
            </Text>
            {/* <GenericIcon
                  name={"auto-delete"}
                  style={{
                    color: "#cccccc",
                    marginTop: hp("1.5%"),
                    fontSize: hp("4%"),

                    marginLeft: wp("2%"),
                    // backgroundColor:"white",
                    borderRadius: 60,
                    elevation: 0.6,
                    // right:"2%",
                    // width:"5.5%",
                    // paddingLeft:1,
                    // height:"5%",
                    // paddingTop:0,
                  }}
                  // show={true}
                /> */}
          </View>

          <Text
            numberOfLines={1}
            style={{
              fontFamily: "HelveticaNeue_CondensedBold",
              marginLeft: wp("10.5%"),
              color: "white",
              marginTop: hp("0%"),
              fontSize: 12,
            }}
          >
            {"5101/00001"}
          </Text>

          <Text
            numberOfLines={1}
            style={{
              fontFamily: "HelveticaNeue_CondensedBold",
              marginLeft: wp("10.5%"),
              color: "white",
              marginTop: hp("0.1%"),
              fontSize: 12,
            }}
          >
            {"20/4 Taratala Road, Kolkata"}
          </Text>

          <View
            style={{
              ...Style.Screen,
              flexDirection: "row",
              justifyContent: "space-between",
              paddingBottom: 0,
              shadowOffset: {
                width: 0,
                height: 0,
              },
              shadowOpacity: 0,
              shadowRadius: 0,
              shadowColor: "#000",
              marginTop: hp("3.5%"),
              marginBottom: 0,
              elevation: 0,
            }}
          >
            <View
              // onPress={() => {
              //   item.Task_data_count != 0 ? getTaskData() : [];
              // }}
              style={{ flexDirection: "row", height: hp("5%"), flex: 1 }}
            >
              <View
                style={{
                  width: wp("9%"),
                  alignSelf: "center",
                  // flexDirection: "row",
                }}
              >
                <GenericIcon
                  show={true}
                  style={{
                    fontSize: 24,
                    fontWeight: "bold",
                    marginTop: hp("1%"),
                    color: "white",
                  }}
                  name={"phone-in-talk"}
                />
                <View
                  style={{
                    justifyContent: "center",
                    alignItems: "center",
                    marginLeft: wp("-1%"),
                    marginTop: hp("1"),
                  }}
                >
                  <Text
                    style={{
                      fontSize: 8,
                      width: wp("12%"),
                      textAlign: "center",
                      color: "white",
                      fontFamily: "HelveticaNeue_CondensedBold",
                    }}
                  >
                    CALL {"\n"} CONTACT
                  </Text>
                </View>
              </View>
            </View>

            <View
              // onPress={() => {
              //   contactinfo();
              // }}
              style={{ flexDirection: "row", height: hp("5%"), flex: 1 }}
            >
              <View
                style={{
                  width: wp("9%"),
                  alignSelf: "center",
                  // flexDirection: "row",
                }}
              >
                <GenericIcon
                  name={"location-on"}
                  style={{
                    color: "white",
                    fontSize: hp("3%"),
                    fontWeight: "bold",
                    marginTop: hp("1%"),
                  }}
                />

                <View
                  style={{
                    justifyContent: "center",
                    alignItems: "center",
                    marginLeft: wp("-1.5%"),
                    marginTop: hp("1"),
                  }}
                >
                  <Text
                    style={{
                      fontSize: 8,
                      width: wp("14%"),
                      textAlign: "center",
                      color: "white",
                      fontFamily: "HelveticaNeue_CondensedBold",
                    }}
                  >
                    VIEW {"\n"} LOCATION
                  </Text>
                </View>
              </View>
            </View>

            <View
              // onPress={() => {
              //   dmiModal();
              // }}
              // onPress={onPressMenu1}
              style={{ flexDirection: "row", height: hp("5%"), flex: 1 }}
            >
              <View
                style={{
                  width: wp("9%"),
                  alignSelf: "center",
                  // flexDirection: "row",
                }}
              >
                <GenericIcon
                  // show={true}
                  style={{
                    fontSize: hp("4%"),
                    fontWeight: "bold",
                    marginTop: hp("0.5%"),
                    color: "white",
                  }}
                  name={"groups"}
                />
                {/* <FontAwesome5
                      style={{
                        fontSize: 23,
                        fontWeight: "bold",
                        marginTop: hp("1%"),
                        color: "white",
                      }}
                      name={"diversity-3"}
                      
                    /> */}
                <View
                  style={{
                    justifyContent: "center",
                    alignItems: "center",
                    marginLeft: wp("-1%"),
                    marginTop: hp("0.5"),
                  }}
                >
                  <Text
                    style={{
                      fontSize: 8,
                      width: wp("16%"),
                      textAlign: "center",
                      color: "white",
                    }}
                  >
                    {"MAPPED INFLUENCERS"}
                  </Text>
                </View>
              </View>
            </View>
            <View
              // onPress={() => {
              //   if (item.expected_order_count > 0)
              //     NavigationService.navigate("ExpOrdersListScreen", {
              //       data: item,
              //     });
              //   else {
              //     console.log("8");
              //   }
              // }}
              style={{ flexDirection: "row", height: hp("5%"), flex: 1 }}
            >
              <View
                style={{
                  width: wp("9%"),
                  alignSelf: "center",
                  // flexDirection: "row",
                }}
              >
                <Text
                  style={{
                    fontSize: 23,
                    // fontWeight: "bold",
                    marginTop: hp("0%"),
                    color: "white",
                  }}
                >
                  {"20"}
                </Text>

                <View
                  style={{
                    justifyContent: "center",
                    alignItems: "center",
                    marginLeft: wp("-1%"),
                    marginTop: hp("0.5"),
                  }}
                >
                  <Text
                    style={{
                      fontSize: 8,
                      width: wp("9%"),
                      textAlign: "center",
                      color: "white",
                    }}
                  >
                    {"OPEN LEADS"}
                  </Text>
                </View>
              </View>
            </View>

            <View
              // onPress={() => {
              //   if (item.expected_order_count > 0)
              //     NavigationService.navigate("ExpOrdersListScreen", {
              //       data: item,
              //     });
              //   else {
              //     console.log("8");
              //   }
              // }}
              style={{ flexDirection: "row", height: hp("5%"), flex: 1 }}
            >
              <View
                style={{
                  // width: wp("17%"),
                  alignSelf: "center",
                  // flexDirection: "row",
                }}
              >
                <Text
                  style={{
                    fontSize: 23,
                    // fontWeight: "bold",
                    marginTop: hp("0.1%"),
                    color: "white",
                  }}
                >
                  {"02|05"}
                </Text>
                <View
                  style={{
                    justifyContent: "center",
                    alignItems: "center",
                    marginLeft: wp("0%"),
                    marginTop: hp("0.7"),
                  }}
                >
                  <Text
                    style={{
                      fontSize: 8,
                      width: wp("12%"),
                      textAlign: "center",
                      color: "white",
                    }}
                  >
                    {"MTD|YTD VISIT"}
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </LinearGradient>
      </LinearGradient>
    </View>
  </TouchableWithoutFeedback>
);

export default CardInfo;
