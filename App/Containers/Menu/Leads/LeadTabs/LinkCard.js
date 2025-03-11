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
import { StyleSheet } from "react-native";
import LinkChannelHeader from "./LinkChannelHeader";

const LinkCard = ({onPressCard }) => {
  return (
    <TouchableOpacity disabled={true}>
        <View style={{marginTop: "15%"}}>
         
         <View>
          <TouchableOpacity
           onPress={onPressCard}
            style={{
              alignSelf: "flex-end",
              marginBottom: hp("6%"),
              marginTop: hp("-6%"),
            
              // backgroundColor:"black"
            
            }}
            
           
          >
            <View style={{ flexDirection: "row",}}>
              <GenericIcon
                name={"link-variant"}
                style={{
                  fontSize: wp("7%"),
                  color: Colors.grey,
                  width: wp("9%"),
                  zIndex: 10,

                  backgroundColor: "white",
                  borderRadius: 25,
                  elevation: 15,
                  left: wp("4%"),
                  // height: hp("4.5%"),
                  padding: 3,
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
                  width: wp("23%"),
                  alignSelf: "flex-end",
                  top: "-2%",
                  
                }}
              >
                <Text
                  style={{
                    fontFamily: "HelveticaNeue_CondensedBold",
                    color: "white",
                    fontWeight: "bold",
                    alignSelf: "center",
                    paddingVertical: 4,
                    fontSize: wp("2.5%"),
                  }}
                >
                  {"ADD LINK"}
                </Text>
              </LinearGradient>
            </View>
          </TouchableOpacity>
          </View>


        <LinkChannelHeader />
        </View>
       
      
    </TouchableOpacity>
  );
};

export default LinkCard;

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
