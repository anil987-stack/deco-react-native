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
import { connect } from "react-redux";
import PropTypes from "prop-types";
// import Style from "./MerchandiserStyle";
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
import SearchBar from "App/Components/SearchBar";
import FontAwesome from "react-native-vector-icons/FontAwesome";

const DraftCard = ({ onPress, onPressMenu }) => (
  
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
        start={{ x: 0.4, y: 1 }}
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
            {"RETAILER TYPE :"}
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
            {"RR"}
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
          <View>
          <View style={{ flexDirection: "row" }}>
            <GenericIcon
              name={"circle"}
              style={{
                color: "#daa520",
                // color: "#48d30a",
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
              {"BAPPI PLY & LAMINATES"}
            </Text>
            <GenericIcon
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
                />
          </View>

          <Text
            numberOfLines={1}
            style={{
              fontFamily: "HelveticaNeue_CondensedBold",
              marginLeft: wp("10.5%"),
              color: "white",
              marginTop: hp("-1.2%"),
              fontSize: 12,
            }}
          >
            {"78, MONOHAR PUKUR"}
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
            {"SHIVKORI | 788897765"}
          </Text>
<View style={{flexDirection:"row"}}>
          <Text
            numberOfLines={1}
            style={{
              fontFamily: "HelveticaNeue_CondensedBold",
              marginLeft: wp("10.5%"),
              color: "white",
              // marginTop: hp("-1%"),
              fontSize: 12,
              fontWeight:"bold"
            }}
          >
            {"CREATION DATE:"}
          </Text>

          <Text
            numberOfLines={1}
            style={{
              fontFamily: "HelveticaNeue_CondensedBold",
              marginLeft: wp("2%"),
              color: "white",
              marginTop: hp("0.1%"),
              fontSize: 12,
            }}
          >
            {"19.02.22"}
          </Text>
          </View>
         
          </View>
          {/* <View style={{ flexDirection: "row" }}>
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
              {"ATTACHED BY:"}
            </Text>
            <Text
              numberOfLines={1}
              style={{
                fontFamily: "HelveticaNeue_CondensedBold",
                marginLeft: wp("1%"),
                color: "white",
                marginTop: hp("0.1%"),
                fontSize: 12,
                fontWeight: "bold",
              }}
            >
              {"SALES EXECUTIVE 1"}
            </Text>
          </View> */}
          {/* 
          <View style={{ flexDirection: "row" }}>
            <Text
              numberOfLines={1}
              style={{
                fontFamily: "HelveticaNeue_CondensedBold",
                marginLeft: wp("10.5%"),
                color: "white",
                marginTop: hp("0.1%"),
                fontSize: 12,
                fontWeight: "bold",
              }}
            >
              {"WHOM:"}
            </Text>
            <Text
              numberOfLines={1}
              style={{
                fontFamily: "HelveticaNeue_CondensedBold",
                marginLeft: wp("1%"),
                color: "white",
                marginTop: hp("0.1%"),
                fontSize: 12,
              }}
            >
              {"AVISHEK KUMAR | OWNER"}
            </Text>
          </View> */}
          {/* 
          <View
            style={{
              ...Style.Screens,
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
              marginTop: hp("1.8%"),
              marginBottom: 0,
              elevation: 0,
            }}
          >
            <TouchableOpacity
              // onPress={() => {
              //   item.Task_data_count != 0 ? getTaskData() : [];
              // }}
              style={{ flexDirection: "row", height: hp("5%"), flex: 1 }}
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
                    }}
                  >
                    CALL {"\n"} CONTACT
                  </Text>
                </View>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              // onPress={() => {
              //   contactinfo();
              // }}
              style={{ flexDirection: "row", height: hp("5%"), flex: 1 }}
            >
              <View
                style={{
                  width: wp("9"),
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
                    marginTop: 10,
                  }}
                />

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
                      width: wp("14%"),
                      textAlign: "center",
                      color: "white",
                    }}
                  >
                    VIEW {"\n"} LOCATION
                  </Text>
                </View>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              // onPress={() => {
              //   dmiModal();
              // }}
              style={{ flexDirection: "row", height: hp("5%"), flex: 1 }}
            >
              <View
                style={{
                  width: wp("9"),
                  alignSelf: "center",
                  // flexDirection: "row",
                }}
              >
                <FontAwesome5
                  style={{
                    fontSize: 23,
                    fontWeight: "bold",
                    marginTop: hp("1%"),
                    color: "white",
                  }}
                  name={"tasks"}
                />
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
                      width: wp("14%"),
                      textAlign: "center",
                      color: "white",
                    }}
                  >
                    TASK {"\n"} HISTORY
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
              style={{ flexDirection: "row", height: hp("5%"), flex: 1 }}
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
                    marginLeft: wp("-2.5%"),
                    marginTop: hp("0.6"),
                  }}
                >
                  <Text
                    style={{
                      fontSize: 8,
                      width: wp("14%"),
                      textAlign: "center",
                      color: "white",
                    }}
                  >
                    OPEN {"\n"} SINCE(DAYS)
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
                    fontSize: wp("8%"),
                    fontWeight: "bold",
                    marginTop: hp("-0.8%"),
                    color: "white",
                  }}
                  name={"menu"}
                />
                {/* <Text
                  style={{
                    fontSize: 23,
                    // fontWeight: "bold",
                    marginTop: hp("0.1%"),
                    color: "white",
                  }}
                >
                  {"02|05"}
                </Text> *
                <View
                  style={{
                    justifyContent: "center",
                    alignItems: "center",
                    marginLeft: wp("-2%"),
                    marginTop: hp("0.5"),
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
                    {"MENU"}
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          </View> */}
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
                      color: "#7FE817",
                      fontWeight: "bold",
                      alignSelf: "center",
                      paddingVertical: 4,
                      fontSize: wp("2.7%"),
                    }}
                  >
                    {"SUBMIT"}
                  </Text>
                </LinearGradient>
              </TouchableOpacity> 
              <TouchableOpacity
                style={{
                  ...ApplicationStyles.formButton,
                  alignSelf: "center",
                  marginTop: hp("0%"),
                  height: hp("3.5%"),
                  width: wp("35.5%"),
                  marginLeft:wp("12%"),
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
                      color: "#7FE817",
                      fontWeight: "bold",
                      alignSelf: "center",
                      paddingVertical: 4,
                      fontSize: wp("2.7%"),
                    }}
                  >
                    {"EDIT"}
                  </Text>
                </LinearGradient>
              </TouchableOpacity> 
              </View>

        {/* <View
          style={{
            flexDirection: "row",
            zIndex: 30,
            marginTop: "1.8%",
            left: "6%",
          }}
        >
          <TouchableOpacity
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
            onPress={() => this.submit()}
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
                  color: "white",
                  fontWeight: "bold",
                  alignSelf: "center",
                  paddingVertical: 4,
                  fontSize: 13,
                }}
              >
                {"START DISCUSSION"}
              </Text>
            </LinearGradient>
          </TouchableOpacity>

          <TouchableOpacity
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
              marginLeft: "14%",
            }}
            onPress={() => this.submit()}
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
                  color: "white",
                  fontWeight: "bold",
                  alignSelf: "center",
                  paddingVertical: 4,
                  fontSize: 13,
                }}
              >
                {"END DISCUSSION"}
              </Text>
            </LinearGradient>
          </TouchableOpacity>
        </View> */}
        {/* <View
          style={{
            width: wp("9%"),
            alignSelf: "flex-start",
            marginLeft: wp("2.5%"),
            flexDirection: "row",
            marginTop: hp("0.5%"),
          }}
        >
          <GenericIcon
            showIcon={true}
            style={{
              fontSize: wp("7%"),
              fontWeight: "bold",
              color: "white",
            }}
            name={"picture-as-pdf"}
          />
          <GenericIcon
            show={true}
            style={{
              fontSize: wp("7%"),
              // fontWeight: "bold",
              color: "white",
            }}
            name={"file-question-outline"}
          />
          <GenericIcon
            show={true}
            style={{
              fontSize: wp("7%"),
              // fontWeight: "bold",
              color: "white",
            }}
            name={"play-box-multiple-outline"}
          />
        </View> */}
        {/* <View
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
            onPress={() => this.submit()}
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
                  color: "#7FE817",
                  fontWeight: "bold",
                  alignSelf: "center",
                  paddingVertical: 4,
                  fontSize: wp("2.7%"),
                }}
              >
                {"VIEW"}
              </Text>
            </LinearGradient>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              ...ApplicationStyles.formButton,
              alignSelf: "center",
              marginTop: hp("0%"),
              height: hp("3.5%"),
              width: wp("35.5%"),
              marginLeft: wp("12%"),
              elevation: 18,
              borderRadius: 8,
              paddingBottom: 13,
              zIndex: 50,
              borderWidth: 2,
            }}
            //  this.props.clear();
            onPress={() => this.submit()}
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
                  color: "#7FE817",
                  fontWeight: "bold",
                  alignSelf: "center",
                  paddingVertical: 4,
                  fontSize: wp("2.7%"),
                }}
              >
                {"APPROVAL"}
              </Text>
            </LinearGradient>
          </TouchableOpacity>
        </View> */}
      </LinearGradient>
      {/* </LinearGradient> */}
    </View>
  </TouchableWithoutFeedback>
);

export default DraftCard;

const Style = StyleSheet.create({
  heading: {
    fontSize: wp("2.2%"),
    fontFamily: ApplicationStyles.textFont,
    color: Colors.clr66,
  },
  Screen: {
    width: "90%",
    // paddingBottom:30,
    backgroundColor: "#fff",
    marginTop: hp("1.5"),
    marginBottom: 5,
    marginHorizontal: 20,

    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    shadowColor: "#000",
    elevation: 6,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#fff",
  },
  card: {
    width: "109%",
    paddingBottom: 30,
    backgroundColor: "#fff",
    marginTop: hp("1.5"),
    // marginBottom: 5,
    // marginHorizontal: 20,
    alignSelf: "center",
    borderWidth: 1,
    borderColor: "#fff",
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
    // height:"35%"
  },
  card1: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingBottom: 0,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0,
    shadowRadius: 0,
    shadowColor: "#000",
    elevation: 0,
    // height: "26.5%",
    // flexWrap: "wrap",
    width: "100%",
    height: "10%",
    // alignSelf:"center"
  },
  Screens: {
    width: "95%",
    // paddingBottom:30,
    // backgroundColor:'#fff',
    marginTop: hp("1.5"),
    marginBottom: 5,
    marginHorizontal: wp("6%"),

    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    shadowColor: "#000",
    elevation: 6,
  },
});
