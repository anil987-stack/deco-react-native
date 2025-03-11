import React, { Component } from "react";
import {
  View,
  Alert,
  ScrollView,
  TouchableHighlight,
  FlatList,
  TouchableOpacity,
  TouchableWithoutFeedback,
  TextInput,
  
} from "react-native";
import { Button, Text, Icon } from "native-base";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import BlueButton from "App/Components/BlueButton";
import WhiteButton from "App/Components/WhiteButton";
import NavigationService from "App/Services/NavigationService";
import { HelperService } from "App/Services/Utils/HelperService";
import VisitsActions from "App/Stores/Visits/Actions";
//import VisitCard from 'App/Containers/Visits/VisitCard'
import InputText from "App/Components/FormInput/InputText";
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
import { StyleSheet } from "react-native";
import AddScouting from "../../../Visits/PlannedVisit/AddScouting";
import AddProduct from "./AddProduct";
import ProductSupplyCard from "./ProductSupplyCard";
class ProductSupply extends React.Component {
    render(
        openModal ,
        closeModal
    ) {
  return (
    <TouchableWithoutFeedback>
      <View style={{ marginTop: "15%" }}>
       <View style={{flexDirection:"row"}}>
          <View
            
            style={{
              // flexDirection: "row",
              marginBottom: hp("6%"),
              marginTop: hp("-6%"),

              // backgroundColor:"black"
            }}
          >
            <View style={{ flexDirection: "row" }}>
              <FontAwesome5
                name={"file-invoice-dollar"}
                style={{
                  fontSize: wp("4.5%"),
                  color: Colors.grey,
                  width: wp("8%"),
                  zIndex: 10,

                  backgroundColor: "white",
                  borderRadius: 50,
                  elevation: 15,
                  left: wp("4%"),
                  height: hp("4%"),
                  padding: 5,
                  // paddingBottom: hp("-1%"),
                  paddingLeft:wp("2.3%")
                }}
                show={true}
              />
              <LinearGradient
                // colors={["transparent","white", "transparent"]}
                // start={{ x: 0.9, y: 0 }}
                // end={{ x: 0, y: 0 }}
                // style={{
                //   height: hp("3%"),
                //   width: wp("23%"),
                //   alignSelf: "flex-end",
                //   top: hp("-0.9%"),
                // }}

                colors={["#943e3e", "transparent"]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1.1, y: 0 }}
                style={{
                  height: hp("3%"),
                  width: wp("50%"),
                  //   alignSelf: "flex-end",
                  //   top: "-2%",
                  marginTop: hp(".75%"),
                }}
              >
                <Text
                  style={{
                    fontFamily: "HelveticaNeue_CondensedBold",
                    color: "white",
                    fontWeight: "bold",
                    alignSelf: "center",
                    paddingVertical: 4,
                    fontSize: wp("2.36%"),
                    marginLeft: wp("2%"),
                  }}
                >
                  {"ESTIMATE / SUPPLY (IN SHEETS)"}
                </Text>
              </LinearGradient>
               
            </View>
            <>
             <View
            style={{
              height:hp("8%"),
              width: 2,
              backgroundColor: "white",
            //   alignSelf: "center",
              // marginTop:hp("-9%"),
              marginLeft:"8%"
            }}
          />

<View
            style={{
              height:hp("0.3%"),
              width: wp("80%"),
              backgroundColor: "white",
            //   alignSelf: "center",
              // marginTop:hp("-9%"),
              marginLeft:"8%"
            }}
          />
<View style={{flexDirection:"row"}}>
  <View>
<View style={{ marginLeft: wp("12%"),marginTop:hp("-5.4%") }}>
            <Text
              style={{
                fontFamily: "HelveticaNeue_CondensedBold",
                backgroundColor: "black",
                borderStyle: "solid",
                color: "white",
                // marginLeft: wp("6%"),
                fontWeight: "bold",
                fontSize: wp("2.8%"),
                height: hp("3.3%"),
                textAlign:"center",
                width: wp("21%"),
                textAlignVertical:"center"
              }}
            >
              LAM 1.0 MM
            </Text>
          </View>
                   
          <View style={{width:wp("25%"), marginLeft:wp("12%"),  backgroundColor: "#FFBD2E",  height:hp("3.7%"),flexDirection:"row",marginTop:hp("0%")}}>
            <TextInput
                style={{
                    fontFamily: "HelveticaNeue_CondensedBold",
               fontSize:wp("2.8%"),
                  
                
                  
                  textAlign:"center",
                  textAlignVertical:"center",
                 
                }}
                placeholder={"---"}
                // value={form.Attendee_Name__c}
                // onChange={(value) =>
                //   changeForm({
                //     edited_field: "Attendee_Name__c",
                //     edited_value: value,
                //   })
                // }
              />

<View
            style={{
              height:hp("2%"),
              width: 2,
              backgroundColor: "black",
              alignSelf: "center",
              // marginTop:hp("-9%"),
              marginLeft:wp("6%"),
              
            }}
          />

<TextInput
                style={{
                    fontFamily: "HelveticaNeue_CondensedBold",
               
                  
                    // backgroundColor: "#FFBD2E",
                    // width:wp("3%"),
                   
                  
                  textAlign:"center",
                  textAlignVertical:"center"
                }}
                placeholder={"---"}
                // value={form.Attendee_Name__c}
                // onChange={(value) =>
                //   changeForm({
                //     edited_field: "Attendee_Name__c",
                //     edited_value: value,
                //   })
                // }
              />
            </View>
            </View>

            <View style={{marginLeft:wp("-8%")}}>

            <View style={{ marginLeft: wp("12%"),marginTop:hp("-5.5%") }}>
            <Text
              style={{
                fontFamily: "HelveticaNeue_CondensedBold",
                backgroundColor: "black",
                borderStyle: "solid",
                color: "white",
                // marginLeft: wp("6%"),
                fontWeight: "bold",
                fontSize: wp("2.8%"),
                height: hp("3.3%"),
                textAlign:"center",
                width: wp("21%"),
                textAlignVertical:"center"
              }}
            >
              LAM 0.8 MM
            </Text>
          </View>
                   
          <View style={{width:wp("25%"), marginLeft:wp("12%"),  backgroundColor: "#FFBD2E",  height:hp("3.7%"),flexDirection:"row",marginTop:hp("0%")}}>
            <TextInput
                style={{
                    fontFamily: "HelveticaNeue_CondensedBold",
               fontSize:wp("2.8%"),
                  
                
                  
                  textAlign:"center",
                  textAlignVertical:"center",
                 
                }}
                placeholder={"---"}
                // value={form.Attendee_Name__c}
                // onChange={(value) =>
                //   changeForm({
                //     edited_field: "Attendee_Name__c",
                //     edited_value: value,
                //   })
                // }
              />

<View
            style={{
              height:hp("2%"),
              width: 2,
              backgroundColor: "black",
              alignSelf: "center",
              // marginTop:hp("-9%"),
              marginLeft:wp("6%"),
              
            }}
          />

<TextInput
                style={{
                    fontFamily: "HelveticaNeue_CondensedBold",
               
                  
                    // backgroundColor: "#FFBD2E",
                    // width:wp("3%"),
                   
                  
                  textAlign:"center",
                  textAlignVertical:"center"
                }}
                placeholder={"---"}
                // value={form.Attendee_Name__c}
                // onChange={(value) =>
                //   changeForm({
                //     edited_field: "Attendee_Name__c",
                //     edited_value: value,
                //   })
                // }
              />
            </View>
            </View>

            <View style={{marginLeft:wp("-8%")}}>
            <View style={{ marginLeft: wp("12%"),marginTop:hp("-5.4%") }}>
            <Text
              style={{
                fontFamily: "HelveticaNeue_CondensedBold",
                backgroundColor: "black",
                borderStyle: "solid",
                color: "white",
                // marginLeft: wp("6%"),
                fontWeight: "bold",
                fontSize: wp("2.8%"),
                height: hp("3.3%"),
                textAlign:"center",
                width: wp("21%"),
                textAlignVertical:"center"
              }}
            >
              RECON
            </Text>
          </View>
                   
          <View style={{width:wp("25%"), marginLeft:wp("11.9%"),  backgroundColor: "#FFBD2E",  height:hp("3.7%"),flexDirection:"row",}}>
            <TextInput
                style={{
                    fontFamily: "HelveticaNeue_CondensedBold",
               fontSize:wp("2%"),
                  
                
                  
                  textAlign:"center",
                  textAlignVertical:"center",
                 
                }}
                placeholder={"---"}
                // value={form.Attendee_Name__c}
                // onChange={(value) =>
                //   changeForm({
                //     edited_field: "Attendee_Name__c",
                //     edited_value: value,
                //   })
                // }
              />

<View
            style={{
              height:hp("2%"),
              width: 2,
              backgroundColor: "black",
              alignSelf: "center",
              // marginTop:hp("-9%"),
              marginLeft:wp("6%"),
              
            }}
          />

<TextInput
                style={{
                    fontFamily: "HelveticaNeue_CondensedBold",
               
                  
                    // backgroundColor: "#FFBD2E",
                    // width:wp("3%"),
                   
                  
                  textAlign:"center",
                  textAlignVertical:"center"
                }}
                placeholder={"---"}
                // value={form.Attendee_Name__c}
                // onChange={(value) =>
                //   changeForm({
                //     edited_field: "Attendee_Name__c",
                //     edited_value: value,
                //   })
                // }
              />
            </View>
            </View>
            </View>
          </>
           {/*   <TouchableOpacity 
             onPress={() => {
                this.props.openModal({
                  content3: (
                    <AddScouting
                      onClose={() => {
                        closeModal();
                      }}
                    />
                  ),
                  heading3: "ADD PRODUCT",
                  bodyFlexHeight3: 0.8,
                });
              }}
            style={{ marginLeft: wp("18%") }}>
              <GenericIcon
                name={"text-box-plus-outline"}
                style={{
                  fontSize: wp("6%"),
                  color: Colors.grey,
                  width: wp("8%"),
                  zIndex: 10,

                  backgroundColor: "white",
                  borderRadius: 25,
                  elevation: 15,
                  left: wp("4%"),
                  // height: hp("4.5%"),
                  padding: 3,
                }}
                show={true}
                 onPress={() => {
                this.props.openModal({
                  content3: (
                    <AddScouting
                      onClose={() => {
                        closeModal();
                      }}
                    />
                  ),
                  heading3: "ADD PRODUCT",
                  bodyFlexHeight3: 0.8,
                });
              }}
              />
              <LinearGradient
                // colors={["transparent","white", "transparent"]}
                // start={{ x: 0.9, y: 0 }}
                // end={{ x: 0, y: 0 }}
                // style={{
                //   height: hp("3%"),
                //   width: wp("23%"),
                //   alignSelf: "flex-end",
                //   top: hp("-0.9%"),
                // }}

                colors={["#943e3e", "transparent"]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1.1, y: 0 }}
                style={{
                  height: hp("3%"),
                  width: wp("23%"),
                  alignSelf: "flex-end",
                  top: "-4%",
                }}
              >
                <Text
                
                  style={{
                    fontFamily: "HelveticaNeue_CondensedBold",
                    color: "white",
                    fontWeight: "bold",
                    alignSelf: "center",
                    paddingVertical: 4,
                    fontSize: wp("2.36%"),
                    marginLeft: wp("2%"),

                  }}
                >
                  {"ADD PRODUCT"}
                </Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
        */}
</View>
<TouchableOpacity style={{marginTop:hp("-10%"),marginLeft:wp("-36%"),zIndex:25,height:hp("11%"), }}
  onPress={() => {
    this.props.openModal({
      content3: (
        <AddProduct
          onClose={() => {
            closeModal();
          }}
        />
      ),
      heading3: "ADD PRODUCT",
      bodyFlexHeight3: 0.8,
    });
  }}>
<View style={{marginTop:hp("4.2%"),flexDirection:"row"}}>

              <GenericIcon
                name={"text-box-plus-outline"}
                style={{
                  fontSize: wp("4.5%"),
                  color: Colors.grey,
                  width: wp("8%"),
                  zIndex: 10,

                  backgroundColor: "white",
                  borderRadius: 50,
                  elevation: 15,
                  left: wp("4%"),
                  height: hp("4%"),
                  padding: 5,
                  // paddingBottom: hp("-1%"),
                  paddingLeft:wp("1.6%")
                }}
                show={true}
              
              />
              <LinearGradient
                // colors={["transparent","white", "transparent"]}
                // start={{ x: 0.9, y: 0 }}
                // end={{ x: 0, y: 0 }}
                // style={{
                //   height: hp("3%"),
                //   width: wp("23%"),
                //   alignSelf: "flex-end",
                //   top: hp("-0.9%"),
                // }}

                colors={["#943e3e", "transparent"]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1.1, y: 0 }}
                style={{
                  height: hp("3%"),
                  width: wp("30%"),
                  //   alignSelf: "flex-end",
                  //   top: "-2%",
                  marginTop: hp(".75%"),
                }}
              >
                <Text
                  style={{
                    fontFamily: "HelveticaNeue_CondensedBold",
                    color: "white",
                    fontWeight: "bold",
                    alignSelf: "center",
                    paddingVertical: 4,
                    fontSize: wp("2.36%"),
                    
                  }}
                >
                  {"ADD PRODUCT"}
                </Text>
              </LinearGradient>
              </View> 
            </TouchableOpacity>
           
</View>

        {/* <View
            style={{
              height: "45%",
              width: 2,
              backgroundColor: "white",
            //   alignSelf: "center",
              marginTop:hp("-9%"),
              marginLeft:"8%"
            }}
          /> */}

       
        {/* <View
          style={{
            height: 1,
            width: "84%",
            borderRadius: 1,
            borderWidth: 1,
            borderColor: "white",
            marginTop: hp("0%"),
            alignSelf:"center",
            // borderStyle: "dotted",
          }}
        />  
        <View
          style={{
            flexDirection: "row",
            marginTop: wp("-13%"),
            marginLeft: wp("2%"),
            
          }}
        >
         
          <View style={{ width: wp("27%"), marginLeft: wp("8%") }}>
            <Text
              style={{
                fontFamily: "HelveticaNeue_CondensedBold",
                backgroundColor: "black",
                borderStyle: "solid",
                color: "white",
                marginLeft: wp("2%"),
                fontWeight: "bold",
                fontSize: wp("3.36%"),
                height: hp("3%"),
                textAlign:"center"
              }}
            >
              LAM 1.0 MM
            </Text>
          </View>
          <View style={{ width: wp("25%"), marginLeft: wp("3%") }}>
            <Text
              style={{
                fontFamily: "HelveticaNeue_CondensedBold",
                backgroundColor: "black",
                borderStyle: "solid",
                color: "white",
                marginLeft: wp("2%"),
                fontWeight: "bold",
                fontSize: wp("3.36%"),
                height: hp("3%"),
              }}
            >
              LAM 1.0 MM
            </Text>
          </View>
          <View style={{ width: wp("25%"), marginLeft: wp("5%") }}>
            <Text
              style={{
                fontFamily: "HelveticaNeue_CondensedBold",
                backgroundColor: "black",
                borderStyle: "solid",
                color: "white",
                marginLeft: wp("2%"),
                fontWeight: "bold",
                fontSize: wp("3.36%"),
                height: hp("3%"),
              }}
            >
              LAM 1.0 MM
            </Text>
          </View>
        </View>
        <View style={{flexDirection:'row', marginTop:wp("-1.5%"),}}>
            <View style={{width:wp("28%"), marginLeft:wp("9%")}}>
            <InputText
                style={{
                    fontFamily: "HelveticaNeue_CondensedBold",
                    backgroundColor: "#FFBD2E",
                    width:wp("30%"),
                    height:hp("3%"),
                }}
                placeholder={"Enter Name"}
                // value={form.Attendee_Name__c}
                onChange={(value) =>
                  changeForm({
                    edited_field: "Attendee_Name__c",
                    edited_value: value,
                  })
                }
              />
            </View>
            <View style={{width:wp("28%"), marginLeft:wp("2%")}}>
            <InputText
                style={{
                    fontFamily: "HelveticaNeue_CondensedBold",
                    backgroundColor: "#FFBD2E",
                    width:wp("28%"),
                    height:hp("3%"),
                }}
                placeholder={"Enter Name"}
                // value={form.Attendee_Name__c}
                onChange={(value) =>
                  changeForm({
                    edited_field: "Attendee_Name__c",
                    edited_value: value,
                  })
                }
              />
            </View>
            <View style={{width:wp("28%"), marginLeft:wp("2%")}}>
            <InputText
                style={{
                    fontFamily: "HelveticaNeue_CondensedBold",
                    backgroundColor: "#FFBD2E",
                    width:wp("28%"),
                    height:hp("3%"),
                }}
                placeholder={"Enter Name"}
                // value={form.Attendee_Name__c}
                onChange={(value) =>
                  changeForm({
                    edited_field: "Attendee_Name__c",
                    edited_value: value,
                  })
                }
              />
            </View>


          
        </View> */}

        {/* <GenericIcon
                name={"text-box-plus-outline"}
                style={{
                  fontSize: wp("6%"),
                  color: Colors.grey,
                  width: wp("8%"),
                  zIndex: 10,

                  backgroundColor: "white",
                  borderRadius: 25,
                  elevation: 15,
                  left: wp("4%"),
                  // height: hp("4.5%"),
                  padding: 3,
                  marginTop:"-6%"
                }}
                show={true}
                 onPress={() => {
                this.props.openModal({
                  content3: (
                    <AddProduct
                      onClose={() => {
                        closeModal();
                      }}
                    />
                  ),
                  heading3: "ADD PRODUCT",
                  bodyFlexHeight3: 0.8,
                });
              }}
              /> */}
              <View style={{marginTop:hp("-5%")}}>
        <ProductSupplyCard/>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
        }
};

const mapStateToProps = (state) => ({
    token: state.user.token,
    userid: state.user.loginDetails.userId,
    agentid: state.user.loginDetails.userId,
    visitsDisplayList: state.visits.visitsDisplayList,
    visitsStorageList: state.visits.visitsStorageList,
    visitsAction: state.visits.visitsAction,
    fetchVisitsDisplayListLoader: state.visits.fetchVisitsDisplayListLoader,
    searchFilters: state.visits.searchFilters,
    filteredDisplayData: state.visits.filteredDisplayData,
    categoryRatingMapping: state.common.categoryRatingMapping,
    startVisitLoader: state.visits.startVisitLoader,
    endVisitLoader: state.visits.endVisitLoader,
    isASM: state.user.isASM,
    psmList: state.user.psmList.concat([{ id: "", name: "All" }]),
    startedToday: state.user.startDayTime
      ? HelperService.isToday(state.user.startDayTime)
      : false,
    endedToday: state.user.endDayTime
      ? HelperService.isToday(state.user.endDayTime)
      : false,
    absentToday: state.user.absentDayTime
      ? HelperService.isToday(state.user.absentDayTime)
      : false,
    executeVisitData: state.visits.executeVisitData,
    startVisitLoadingId: state.visits.startVisitLoadingId,
    endVisitLoadingId: state.visits.endVisitLoadingId,
    isObjModalVisible: state.common.isObjModalVisible,
    businessChannel: state.user.user_details
      ? state.user.user_details.business_channel__c
      : "",
  });
  const mapDispatchToProps = (dispatch) => ({
    openModal: (params) => dispatch(CommonActions.openModalThree(params)),
    closeModal: (params) => dispatch(CommonActions.closeModalThree(params)),
  });
  export default connect(mapStateToProps, mapDispatchToProps)(ProductSupply);

const Style = StyleSheet.create({
  cropCard: {
    width: 0,
    height: 0,
    backgroundColor: "transparent",
    borderStyle: "solid",
    borderBottomWidth: 34,
    borderLeftWidth: 170,
    borderRightWidth: 25,
    // borderBottomWidth: 50,
    borderLeftColor: "black",
    borderRightColor: "transparent",
    // borderBottomColor: '#e76f51',
    borderBottomColor: "black",
    marginTop: "-9.5%",
    elevation: 20,
    zIndex: 15,
    opacity: 1,

    // transform: [{ rotate: '180deg' }]
  },
  cropCard1: {
    width: 0,
    height: 0,
    backgroundColor: "transparent",
    borderStyle: "solid",
    borderBottomWidth: 26,
    borderLeftWidth: 75,
    borderRightWidth: 25,
    // borderBottomWidth: 50,
    borderLeftColor: "yellow",
    borderRightColor: "transparent",
    // borderBottomColor: '#e76f51',
    borderBottomColor: "yellow",
    marginTop: "-7.5%",
    elevation: 20,
    marginLeft: "-8%",
    opacity: 0.5,

    // transform: [{ rotate: '180deg' }]
  },
  // container: {
  //   // flex: 1,
  //   backgroundColor: "black",

  // },
});
