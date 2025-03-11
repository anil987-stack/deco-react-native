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

const ApprovalCard = ({ onPress, onPressMenu }) => (
  // <TouchableOpacity
  //   style={{ zIndex: 0 }}
  //   onPress={() => {
  //     status == "Approved" || status == "Completed"
  //       ? NavigationService.navigate("CompleteTab", { id: id })
  //       : NavigationService.navigate("Info", { id: id });
  //   }}
  // >
  //   <View style={Styles.card}>
  //     <View style={{ flexDirection: "column" }}>
  //       {/* <View
  //             style={{
  //               flexDirection: "row",
  //               marginTop: 10,
  //               marginHorizontal: 15,
  //             }}
  //           >
  //             <Text
  //               style={{ color: "#02ADD7", fontSize: 18, fontWeight: "bold" }}
  //             >
  //               MK Traders
  //             </Text>
  //           </View> */}
  //       <TouchableOpacity
  //         // onPress={() => {
  //         //   status == "Approved" || status == "Completed"
  //         //     ? NavigationService.navigate("CompleteTab", { id: data })
  //         //     : NavigationService.navigate("Info", { id: data });
  //         // }}
  //       >
  //         <View style={{ flexDirection: "row", justifyContent: "center" }}>
  //           {/* <View
  //             style={{
  //               flexDirection: "column",
  //               width: wp("25%"),
  //               alignSelf: "center",
  //             }}
  //           >
  //             <Text
  //               style={{
  //                 color: Colors.primary,
  //                 fontSize: 25,
  //                 textAlign: "center",
  //               }}
  //             >
  //               {data.Campaign_created_date__c
  //                 ? HelperService.getCurrentDate(data.Campaign_created_date__c)
  //                 : "6"}
  //             </Text>
  //             <Text style={{ color: Colors.primary, textAlign: "center" }}>
  //               {data.Campaign_created_date__c
  //                 ? HelperService.getMonthMappingName(
  //                     HelperService.getCurrentMonth(data.Campaign_created_date__c)
  //                   )
  //                 : "May"}
  //             </Text>
  //             <Text
  //               style={{
  //                 textAlign: "center",
  //                 color: "#343434",
  //                 fontSize: 10.5,
  //               }}
  //             >
  //               Event{"\n"}Requisition{"\n"}Date
  //             </Text>
  //           </View> */}

  //           {/* <View
  //             style={{
  //               height: "75%",
  //               width: 1,
  //               backgroundColor: "black",
  //               alignSelf: "center",
  //             }}
  //           ></View> */}
  //           <View
  //             style={{
  //               flexDirection: "column",
  //               marginHorizontal: 15,
  //               alignSelf: "center",
  //             }}
  //           >

  // <View style={{marginBottom:"-7%",marginTop:"1.5%"}}>
  // <TouchableOpacity
  //           style={{
  //             // borderRadius: 50,
  //             // bottom: 15,
  //             position: "absolute",
  //             right:"-13%",
  //             borderRadius: 50,
  //             // height: 25,
  //             // width: 25,
  //             // backgroundColor: Colors.primary,
  //             flexDirection: "row",
  //             justifyContent: "center",
  //             alignItems: "center",

  //           }}
  //           // onPress={() => NavigationService.navigate("MerchandiserForm")}
  //         >
  //           <GenericIcon
  //             name={"edit"}
  //             style={{
  //               color: Colors.primary,
  //               fontSize: wp("6%"),
  //               alignSelf: "center",
  //               fontWeight:"bold"
  //             }}
  //           />
  //         </TouchableOpacity>

  //         <TouchableOpacity
  //           style={{
  //             // borderRadius: 50,
  //             // bottom: 15,
  //             position: "absolute",
  //             right: "-26%",
  //             borderRadius: 50,
  //             // height: 25,
  //             // width: 25,
  //             // backgroundColor: Colors.primary,
  //             flexDirection: "row",
  //             justifyContent: "center",
  //             alignItems: "center",

  //           }}
  //           // onPress={() => NavigationService.navigate("MerchandiserForm")}
  //         >
  //           <GenericIcon
  //             name={"delete"}
  //             style={{
  //               color: Colors.primary,
  //               fontSize: wp("6%"),
  //               alignSelf: "center",
  //               fontWeight:"bold"
  //             }}
  //           />
  //         </TouchableOpacity>

  //               {/* <TouchableOpacity
  //           style={{
  //             // borderRadius: 50,
  //             // bottom: 15,
  //             position: "absolute",
  //             right: 36,
  //             borderRadius: 50,
  //             // height: 25,
  //             // width: 25,
  //             // backgroundColor: Colors.primary,
  //             flexDirection: "row",
  //             justifyContent: "center",
  //             alignItems: "center",

  //           }}
  //           onPress={() => NavigationService.navigate("MerchandiserForm")}
  //         >
  //           <GenericIcon
  //             name={"circle"}
  //             style={{
  //               color:"green",
  //               fontSize: wp("6%"),
  //               alignSelf: "center",
  //               fontWeight:"bold"
  //             }}
  //           />
  //         </TouchableOpacity> */}
  //         </View>
  //             <View
  //               style={{
  //                 flexDirection: "row",
  //                 marginTop: wp(6),
  //               }}
  //             >
  //               <Text
  //                 style={{
  //                   marginVertical: 2,
  //                   fontWeight: "bold",
  //                   color: "#9A9A9A",
  //                   textAlign: "left",
  //                   paddingLeft: 10,
  //                   // marginRight: wp("5%"),
  //                   width: wp("35%"),
  //                 }}
  //               >
  //                 Document Title
  //               </Text>
  //               <Text
  //                 style={{
  //                   color: "#515C6F",
  //                   marginVertical: 2,
  //                   width: "40%",
  //                   textAlign: "left",
  //                 }}
  //               >
  //                 {"Workshop"}
  //                 {/* {data.Name ? data.Name : ""} */}
  //               </Text>
  //             </View>
  //             <View
  //               style={{
  //                 flexDirection: "row",
  //                 marginBottom: wp(0.5),
  //               }}
  //             >
  //               <Text
  //                 style={{
  //                   marginVertical: 2,
  //                   fontWeight: "bold",
  //                   color: "#9A9A9A",
  //                   textAlign: "left",
  //                   paddingLeft: 10,
  //                   // marginRight: wp("5%"),
  //                   width: wp("35%"),
  //                 }}
  //               >
  //                 Document Type
  //               </Text>
  //               <Text
  //                 style={{
  //                   color: "#515C6F",
  //                   marginVertical: 2,
  //                   width: "40%",
  //                   textAlign: "left",
  //                 }}
  //               >
  //                 {/* {data.Campaign_on__c
  //                   ? data.Campaign_on__c.split("-")
  //                       .reverse()
  //                       .join("-")
  //                   : "06-05-2022"} */}
  //                   {"abc"}
  //               </Text>
  //             </View>
  //             {/* <View
  //               style={{
  //                 flexDirection: "row",
  //                 marginBottom: wp(0.5),
  //               }}
  //             >
  //               <Text
  //                 style={{
  //                   marginVertical: 2,
  //                   fontWeight: "bold",
  //                   color: "#9A9A9A",
  //                   textAlign: "left",
  //                   paddingLeft: 10,
  //                   // marginRight: wp("5%"),
  //                   width: wp("35%"),
  //                 }}
  //               >
  //                 Event Type
  //               </Text>
  //               <Text
  //                 style={{
  //                   color: "#515C6F",
  //                   marginVertical: 2,
  //                   width: "40%",
  //                   textAlign: "left",
  //                 }}
  //               >
  //                 {data.BTL_activity_type__c ? data.BTL_activity_type__c : ""}
  //               </Text>
  //             </View> */}
  //             {/* <View
  //               style={{
  //                 flexDirection: "row",
  //                 marginBottom: wp(0.5),
  //               }}
  //             >
  //               <Text
  //                 style={{
  //                   marginVertical: 2,
  //                   fontWeight: "bold",
  //                   color: "#9A9A9A",
  //                   textAlign: "left",
  //                   paddingLeft: 10,
  //                   // marginRight: wp("5%"),
  //                   width: wp("35%"),
  //                 }}
  //               >
  //                 Event For
  //               </Text>
  //               <Text
  //                 style={{
  //                   color: "#515C6F",
  //                   marginVertical: 2,
  //                   width: "40%",
  //                   textAlign: "left",
  //                 }}
  //               >
  //                 {"Dealer"}
  //                 {/* {data.BTL_activity_type__c ? data.BTL_activity_type__c : ""} */}
  //               {/* </Text>
  //             </View> */}
  //             {/* <View
  //               style={{
  //                 flexDirection: "row",
  //                 marginBottom: wp(0.5),
  //               }}
  //             >
  //               <Text
  //                 style={{
  //                   marginVertical: 2,
  //                   fontWeight: "bold",
  //                   color: "#9A9A9A",
  //                   textAlign: "left",
  //                   paddingLeft: 10,
  //                   // marginRight: wp("5%"),
  //                   width: wp("35%"),
  //                 }}
  //               >
  //                 Planned Number
  //               </Text>
  //               <Text
  //                 style={{
  //                   color: "#515C6F",
  //                   marginVertical: 2,
  //                   width: "40%",
  //                   textAlign: "left",
  //                 }}
  //               >
  //                 {data.Number_Planned__c ? data.Number_Planned__c : "0"}
  //               </Text>
  //             </View> */}
  //             {/* <View
  //               style={{
  //                 flexDirection: "row",
  //                 marginBottom: wp(0.5),
  //               }}
  //             >
  //               <Text
  //                 style={{
  //                   marginVertical: 2,
  //                   fontWeight: "bold",
  //                   color: "#9A9A9A",
  //                   textAlign: "left",
  //                   paddingLeft: 10,
  //                   // marginRight: wp("5%"),
  //                   width: wp("35%"),
  //                 }}
  //               >
  //                 Planned Budget
  //               </Text>
  //               <Text
  //                 style={{
  //                   color: "#515C6F",
  //                   marginVertical: 2,
  //                   width: "40%",
  //                   textAlign: "left",
  //                 }}
  //               >
  //                 {data.Budget_Planned__c ? data.Budget_Planned__c : "0"}
  //               </Text>
  //             </View> */}
  //             {/* {status == "Approved" || status == "Completed" ? (
  //               <View
  //                 style={{
  //                   flexDirection: "row",
  //                   marginBottom: wp(0.5),
  //                 }}
  //               >
  //                 <Text
  //                   style={{
  //                     marginVertical: 2,
  //                     fontWeight: "bold",
  //                     color: "#9A9A9A",
  //                     textAlign: "left",
  //                     paddingLeft: 10,
  //                     // marginRight: wp("5%"),
  //                     width: wp("35%"),
  //                   }}
  //                 >
  //                   Actual Budget
  //                 </Text>
  //                 <Text
  //                   style={{
  //                     color: "#515C6F",
  //                     marginVertical: 2,
  //                     width: "40%",
  //                     textAlign: "left",
  //                   }}
  //                 >
  //                   {data.Budget_Actual__c ? data.Budget_Actual__c : "0"}
  //                 </Text>
  //               </View>
  //             ) : null} */}
  //             {/* {status == "Approved" || status == "Completed" ? (
  //               <View
  //                 style={{
  //                   flexDirection: "row",
  //                   marginBottom: wp(0.5),
  //                 }}
  //               >
  //                 <Text
  //                   style={{
  //                     marginVertical: 2,
  //                     fontWeight: "bold",
  //                     color: "#9A9A9A",
  //                     textAlign: "left",
  //                     paddingLeft: 10,
  //                     // marginRight: wp("5%"),
  //                     width: wp("35%"),
  //                   }}
  //                 >
  //                   Actual Number
  //                 </Text>
  //                 <Text
  //                   style={{
  //                     color: "#515C6F",
  //                     marginVertical: 2,
  //                     width: "40%",
  //                     textAlign: "left",
  //                   }}
  //                 >
  //                   {data.Number_Actual__c ? data.Number_Actual__c : "0"}
  //                 </Text>
  //               </View>
  //             ) : null} */}
  //           </View>
  //           {/* <View
  //             style={{
  //               flexDirection: "column",
  //               marginHorizontal: 15,
  //               alignSelf: "center",
  //             }}
  //           >
  //             <Text style={Styles.t2}>Campaign On</Text>
  //             <Text style={Styles.t2}>BTL Activity Type</Text>
  //             <Text style={Styles.t2}>Planned Number</Text>
  //             <Text style={Styles.t2}>Planned Budget</Text>
  //             {status == "Approved" || status == "Completed" ? (
  //               <Text style={Styles.t2}>Actual Budget</Text>
  //             ) : null}
  //             {status == "Approved" || status == "Completed" ? (
  //               <Text style={Styles.t2}>Actual Number</Text>
  //             ) : null}

  //           </View> */}
  //           {/* <View
  //             style={{
  //               flexDirection: "column",
  //               marginVertical: 15,
  //               alignSelf: "center",
  //             }}
  //           >

  //             <Text style={Styles.t1}>{data.Campaign_on__c}</Text>
  //             <Text style={Styles.t1}>{data.BTL_activity_type__c}</Text>
  //             <Text style={Styles.t1}>{data.Number_Planned__c}</Text>
  //             <Text style={Styles.t1}>{data.Budget_Planned__c}</Text>
  //             {status == "Approved" || status == "Completed" ? (
  //               <Text style={Styles.t1}>{data.Budget_Actual__c}</Text>
  //             ) : null}
  //             {status == "Approved" || status == "Completed" ? (
  //               <Text style={Styles.t1}>{data.Number_Actual__c}</Text>
  //             ) : null}

  //           </View> */}
  //         </View>
  //       </TouchableOpacity>

  //       {status == "Draft" || status == "Approved" ? (
  //         <View
  //           style={{ width: wp("35%"), alignSelf: "center" }}
  //         >
  //           <BlueButton
  //             title={status == "Draft" ? "Submit For Approval" : "Completed"}
  //             textStyle={{ fontSize: wp("3.1") }}
  //             style={{
  //               borderRadius: 8,
  //               width: wp("40%"),

  //               alignSelf: "center",
  //               left: wp("6%"),
  //               marginBottom: 6,
  //               marginTop: 7,
  //               zIndex: 200,
  //             }}
  //             // onPress={submitForApproval}
  //           />
  //         </View>
  //       ) : (
  //         []
  //       )}
  //     </View>
  //   </View>
  // </TouchableOpacity>
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
            {"RETAILER"}
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

          {/* <Text
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
          {"DISCUSSION"}
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
        </Text> */}

          {/* <Text
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
            {"30 JUN 22"}
          </Text> */}
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
              {"ALOK PLYWOOD (5101/002020)"}
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
              // marginTop: hp("-1%"),
              fontSize: 12,
            }}
          >
            {"PRODUCT 1 - 3 PCS"}
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
            {"PRODUCT 1 - 1 PC"}
          </Text>

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
            onPress={onPressMenu}
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
                {"APPROVAL"}
              </Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </LinearGradient>
      {/* </LinearGradient> */}
    </View>
  </TouchableWithoutFeedback>
);

export default ApprovalCard;

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
