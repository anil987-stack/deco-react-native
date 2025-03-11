import React, { Component } from "react";
import {
  View,
  Alert,
  ScrollView,
  TouchableHighlight,
  FlatList,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native";
import { Button, Text, Icon } from "native-base";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Style from "App/Containers/Visits/VisitsDisplayScreen/VisitsDisplayScreenStyles";

import BlueButton from "App/Components/BlueButton";
import WhiteButton from "App/Components/WhiteButton";
import NavigationService from "App/Services/NavigationService";
import { HelperService } from "App/Services/Utils/HelperService";
import VisitsActions from "App/Stores/Visits/Actions";
//import VisitCard from 'App/Containers/Visits/VisitCard'
import Loading from "App/Components/Loading";
import NoDataFound from "App/Components/NoDataFound";
import GenericIcon from "App/Components/GenericIcon";
import EditVisitCard from "App/Containers/Visits/EditVisitCard";
import CommonActions from "App/Stores/Common/Actions";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { Colors, ApplicationStyles } from "App/Theme";
import _ from "lodash";
import ObjectiveModal from "App/Containers/Visits/ObjectiveModal";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Card } from "react-native-paper";
import { ImageBackground } from "react-native";
import LinearGradient from "react-native-linear-gradient";



const ProductSupplyCard = ({ onPress }) => {
  return (
    <TouchableWithoutFeedback>
      <View style={{ alignSelf: "center", marginTop: hp("2%") }}>
          <LinearGradient
            colors={["#2d2d2d", "#575757", "#a3a3a3"]}
            style={{
              
              borderRadius: 13,
            height: hp("10%"),
            width:wp("74%"),
            opacity: 0.9,
            // left: "10%",
            borderBottomRightRadius: 0,
            borderTopRightRadius: 20,
            borderTopLeftRadius: 55,
            borderWidth: 1,
            borderBottomColor: "transparent",
        alignSelf:"flex-end"
          
            
            }}
            start={{ x: 0.4, y: 1}}
            end={{ x: 1.5, y: 0 }}
          >
            <View style={{ flexDirection: "row", alignSelf: "center" }}>
              <Text
                numberOfLines={1}
                style={{
                  fontFamily: "HelveticaNeue_CondensedBold",
                  // marginLeft: wp("3%"),
                  fontWeight: "bold",
                  color: "#f8622d",
                  // top: "3.5%",
                  fontSize: wp("2.5%"),
                  textAlign:"center",
                  textAlignVertical:"center",
                  marginTop:hp("1.4%")
                  // opacity: 0.9,
                }}
              >
                {"PRODUCT CAT: "}
              </Text>

              {/* <Text
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
                {":"}
              </Text> */}

              <Text
                numberOfLines={1}
                style={{
                  fontFamily: "HelveticaNeue_CondensedBold",
                  // marginLeft: "3%",
                  fontWeight: "bold",
                  color: "#f8622d",
                  // top: "3.5%",
                  fontSize: wp("2.5%"),
                  textAlign:"center",
                  textAlignVertical:"center",
                  marginTop:hp("1.4%")
                }}
              >
                {"1.0 MM"}
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
                {"MOCKUP"}
              </Text>
            </View>
            </LinearGradient>
            <LinearGradient
              colors={["#2b2b2b", "#5c5c5c", "#a4a4a4"]}
              style={{
                borderRadius: 16,
                height: hp("24.5%"),
                width: wp("90%"),
                opacity: 0.9,
                // right: "28%",
                marginTop: hp("-6%"),
                elevation: 25,
                borderWidth: 1,
                shadowColor: "black",
                alignSelf:"center"
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
                  height: hp("18%"),
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
                <View style={{ flexDirection: "row" , marginLeft:wp("5%")}}>
                  {/* <GenericIcon
                    name={"circle"}
                    style={{
                      color: "#7fff00",
                      marginTop: hp("1.5%"),
                      fontSize: hp("3%"),

                      marginLeft: wp("2.5%"),
                      // backgroundColor:"white",
                      borderRadius: 60,
                      elevation: 0.6,
                      // right:"2%",
                      width: wp("6%"),
                      // paddingLeft:1,
                      height: hp("3%"),
                      // paddingTop:1
                    }}
                    show={true}
                  /> */}

                  <Text
                    numberOfLines={1}
                    style={{
                      fontFamily: "HelveticaNeue_CondensedBold",
                      marginLeft: wp("2%"),
                    fontWeight: "bold",
                    color: "#f8622d",
                    marginTop: hp("1.4%"),
                    width: wp("68%"),
                    }}
                  >
                    {"1.0 MM SU 195 CL"} 
                  </Text>
                  <GenericIcon
                      name={"auto-delete"}
                      style={{
                        color: "#cccccc",
                        marginTop: hp("1.5%"),
                        fontSize: hp("4%"),

                        marginLeft: wp("3%"),
                        // backgroundColor:"white",
                        borderRadius: 60,
                        elevation: 0.6,
                        // right:"2%",
                        // width:"5.5%",
                        // paddingLeft:1,
                        // height:"5%",
                        // paddingTop:0,


                      }}
                     showIcon={true}
                    />
                </View>

                <Text
                  numberOfLines={1}
                  style={{
                    fontFamily: "HelveticaNeue_CondensedBold",
                    marginLeft: wp("7.5%"),
                    color: "white",
                    marginTop: wp("-2"),
                    fontSize: 12,
                  }}
                >
                  {"LCCKB3100ASU--195"}
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
                    marginTop: hp("2%"),
                    marginBottom: 0,
                    elevation: 0,
                    marginLeft: wp("2.5%"),
                  }}
                >
                  <TouchableOpacity
                    // onPress={() => {
                    //   item.Task_data_count != 0 ? getTaskData() : [];
                    // }}
                    style={{ flexDirection: "row", height: 40, flex: 1 }}
                  >
                    <View
                      style={{
                        width: wp("9"),
                        alignSelf: "center",
                        // flexDirection: "row",
                      }}
                    >
                      <GenericIcon
                        show={true}
                        style={{
                          fontSize: 24,
                          fontWeight: "bold",
                          marginTop: 10,
                          color: "#a40000",
                        }}
                        name={"circle"}
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
                            width: 45,
                            textAlign: "center",
                            fontFamily: "HelveticaNeue_CondensedBold",
                            color: "white",
                          }}
                        >
                          SUPPLY{"\n"} STATUS
                        </Text>
                      </View>
                    </View>
                  </TouchableOpacity>

                  <TouchableOpacity
                    // onPress={() => {
                    //   contactinfo();
                    // }}
                    style={{ flexDirection: "row", height: 40, flex: 1 }}
                  >
                    <View
                      style={{
                        width: wp("9"),
                        alignSelf: "center",
                        // flexDirection: "row",
                      }}
                    >
                      <Text
                        style={{
                          fontSize: wp("5.25%"),
                        //   fontWeight: "bold",
                          marginTop: hp("1"),
                          color: "white",
                          fontFamily: "HelveticaNeue_CondensedBold",
                          marginLeft: wp("2%"),
                        }}
                      >
                        {"-"}
                      </Text>

                      <View
                        style={{
                          justifyContent: "center",
                          alignItems: "center",
                          marginLeft: wp("-2%"),
                          marginTop: hp("1"),
                        }}
                      >
                        <Text
                          style={{
                            fontSize: 8,
                            width: 90,
                            textAlign: "center",
                            color: "white",
                            fontFamily: "HelveticaNeue_CondensedBold",
                          }}
                        >
                          LAST SUPPLY {"\n"} DATE
                        </Text>
                      </View>
                    </View>
                  </TouchableOpacity>

                  <TouchableOpacity
                     onPress={() => NavigationService.navigate('SupplyHistory')}
                    style={{ flexDirection: "row", height: 40, flex: 1 }}
                  >
                    <View
                      style={{
                        width: wp("9"),
                        alignSelf: "center",
                        // flexDirection: "row",
                      }}
                    >
                      <View style={{ marginTop: hp(".5") }}>
                      
               
                      <GenericIcon
                        show={true}
                        style={{
                          fontSize: 24,
                          fontWeight: "bold",
                          marginTop: 10,
                          color: "white",
                        }}
                        name={"truck"}
                      />
                      </View>
                      {/* <FontAwesome5
                        style={{
                          fontSize: 23,
                          fontWeight: "bold",
                          marginTop: 9,
                          color: "white",
                        }}
                        name={"users"}
                      /> */}
                      <View
                        style={{
                          justifyContent: "center",
                          alignItems: "center",
                          marginLeft: wp("-2%"),
                          marginTop: hp(".75"),
                        }}
                      >
                        <Text
                          style={{
                            fontSize: 8,
                            width: 90,
                            textAlign: "center",
                            color: "white",
                            fontFamily: "HelveticaNeue_CondensedBold",
                          }}
                        >
                          SUPPLY  {"\n"} HISTORY
                        </Text>
                      </View>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity
                    // onPress={() => {
                    //   if (item.expected_order_count > 0)
                    //     NavigationService.navigate("ExpOrdersListScreen", {
                    //       data: item,
                    //     });
                    //   else {
                    //     console.log("8");
                    //   }
                    // }}
                    style={{ flexDirection: "row", height: 40, flex: 1 }}
                  >
                    <View
                      style={{
                        width: wp("12%"),
                        alignSelf: "center",
                        // flexDirection: "row",
                      }}
                    >
                      <Text
                        style={{
                          fontSize: wp("5%"),
                          // fontWeight: "bold",
                          marginTop: wp("1.5"),
                          color: "white",
                          fontFamily: "HelveticaNeue_CondensedBold",
                        }}
                      >
                        {"100"}
                      </Text>

                      <View
                        style={{
                          justifyContent: "center",
                          alignItems: "center",
                          marginLeft: wp("-2.5%"),
                          marginTop: hp("1"),
                        }}
                      >
                        <Text
                          style={{
                            fontSize: wp("1.75%"),
                            width: "72%",
                            textAlign: "center",
                            color: "white",
                            fontFamily: "HelveticaNeue_CondensedBold",
                            marginLeft: wp("2%"),
                          }}
                        >
                         {" ORDER  QUANTITY"}
                        </Text>
                      </View>
                    </View>
                  </TouchableOpacity>

                  <TouchableOpacity
                    // onPress={() => {
                    //   if (item.expected_order_count > 0)
                    //     NavigationService.navigate("ExpOrdersListScreen", {
                    //       data: item,
                    //     });
                    //   else {
                    //     console.log("8");
                    //   }
                    // }}
                    style={{ flexDirection: "row", height: 40, flex: 1, }}
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
                          marginTop: 5,
                          color: "white",
                          fontFamily: "HelveticaNeue_CondensedBold",
                          marginLeft: wp("6%"),
                        }}
                      >
                        {"0"}
                      </Text>
                      <View
                        style={{
                          justifyContent: "center",
                          alignItems: "center",
                          marginLeft: wp("-1%"),
                          marginTop: hp("0.7"),
                        }}
                      >
                        <Text
                          style={{
                            fontSize: 8,
                            width: "70%",
                            textAlign: "center",
                            color: "white",
                            fontFamily: "HelveticaNeue_CondensedBold",
                            marginLeft: wp("-1%"),
                          }}
                        >
                          {"SUPPLIED QUANTITY"}
                        </Text>
                      </View>
                    </View>
                  </TouchableOpacity>
                </View>
           
              </LinearGradient>

              <View
                style={{
                  flexDirection: "row",
                  zIndex: 30,
                  marginTop: "1.8%",
                  left: "6%",
                }}
              >
                <TouchableOpacity
                onPress={() => NavigationService.navigate('AddSupply')}
                  style={{
                    ...ApplicationStyles.formButton,
                    alignSelf: "center",
                    marginTop: hp("0%"),
                    height: hp("4%"),
                    width: wp("35.5%"),
                    elevation: 18,
                    borderRadius: 11,
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
                      height: hp("3.5%"),
                    width: wp("34.6%"),
                    left: "0%",
                    borderRadius: 10,
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
                        fontSize: wp("3%"),
                      }}
                    >
                      {"ADD SUPPLY"}
                    </Text>
                  </LinearGradient>
                  
                </TouchableOpacity>

               
              </View>
            </LinearGradient>
          
          
        </View>
    </TouchableWithoutFeedback>
  );
};

export default ProductSupplyCard;
