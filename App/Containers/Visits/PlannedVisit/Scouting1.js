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
import Style from "../VisitsDisplayScreen/VisitsDisplayScreenStyles";
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

const Scouting1 = ({ onPress }) => {
  return (
    <TouchableWithoutFeedback>
      <>
        <View style={{ ...Style.container, marginTop: hp("5%"), marginLeft:wp("0%") }}>
          <View
            style={{
              flexDirection: "row",
              // marginLeft: "5%",
              alignSelf: "center",
              marginTop: hp("-4%"),
            }}
          >
            <Text
              style={{
                width: 0,
                height: 0,
                backgroundColor: "transparent",
                borderStyle: "solid",
                borderBottomWidth: wp("8.2%"),
                borderLeftWidth: wp("37%"),
                borderRightWidth: wp("6%"),
                // borderBottomWidth: 50,
                borderLeftColor: "black",
                borderRightColor: "transparent",
                // borderBottomColor: '#e76f51',
                borderBottomColor: "black",
                // marginTop:hp("-4.6%"),
                elevation: 20,
                zIndex: 15,
                opacity: 1,
                color: "white",
                textAlignVertical: "center",
                // textAlign: "center",
                fontFamily: "HelveticaNeue_CondensedBold",
                fontWeight: "bold",
                paddingLeft: 10,
              }}
            >
              {"SCOUTING"}
            </Text>
            <Text
              style={{
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
                marginTop: hp(".5%"),
                elevation: 20,
                marginLeft: "-8%",
                opacity: 0.6,
                textAlignVertical: "center",
                textAlign: "center",
                fontWeight: "bold",
              }}
            >
              {"01"}
            </Text>
            {/* <View style={Style.cropCard}></View>
            <View style={{ ...Style.cropCard1 }} /> */}

            <View
              style={{
                borderBottomWidth: 2,
                borderBottomColor: "white",
                marginTop: wp("1%"),
                width: wp("23%"),
                marginLeft: wp("-0.5%"),
                // borderBottomWidth: StyleSheet.hairlineWidth,
                // marginLeft: "63%"
              }}
            />
            <View>
              <GenericIcon
                name={"chevron-down"}
                style={{
                  color: Colors.primary,
                  marginTop: hp("1.2%"),
                  fontSize: hp("4.5%"),

                  //   marginLeft: wp("70%"),
                  backgroundColor: "white",
                  borderRadius: 50,
                  // marginRight: wp("3%"),
                  //   width: "9%",
                  //   paddingLeft: 1,
                  //   height: "5%",
                  //   paddingTop: 0,
                }}
                show={true}
              />
            </View>
          </View>
        </View>
        {/* <View>
          <Text
            style={{
              fontFamily: "HelveticaNeue_CondensedBold",
              fontWeight: "bold",
              color: "white",
              marginTop: hp("-3.9%"),
              zIndex: 80,
              marginLeft: wp("15%"),
            }}
          >
            {"DEALER"}
          </Text>
          <Text
            style={{
              fontFamily: "HelveticaNeue_CondensedBold",
              fontWeight: "bold",
              marginTop: hp("-2.7%"),
              zIndex: 80,
              textAlign: "center",
            }}
          >
            {"03"}
          </Text>
        </View> */}
      </>
    </TouchableWithoutFeedback>
  );
};

export default Scouting1;
