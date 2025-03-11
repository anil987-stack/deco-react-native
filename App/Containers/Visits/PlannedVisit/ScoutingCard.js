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
import { colors } from "react-native-elements";
import Entypo from "react-native-vector-icons/Entypo";

const ScoutingCard = ({ onPress }) => {
  return (
    <TouchableWithoutFeedback>
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
          }}
          start={{ x: 0.4, y: 1 }}
          end={{ x: 1.5, y: 0 }}
        >
          <View
            style={{
              flexDirection: "row",
              marginLeft: wp("35%"),
              marginTop: wp(".5%"),
            }}
          >
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
              {"PROJECT"}
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
              (SCOUTING)
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
              <Text
                numberOfLines={1}
                style={{
                  fontFamily: "HelveticaNeue_CondensedBold",
                  marginLeft: wp("7%"),
                  fontWeight: "bold",
                  color: "#f8622d",
                  marginTop: hp("1.4%"),
                  width: wp("65%"),
                }}
              >
                {"PROJECT - 1"}
              </Text>
            </View>

            <Text
              numberOfLines={1}
              style={{
                fontFamily: "HelveticaNeue_CondensedBold",
                marginLeft: wp("7%"),
                color: "white",
                //   marginTop: hp("1%"),
                fontSize: 12,
              }}
            >
              {"TARATALA"}
            </Text>
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
                  {"EDIT AREA"}
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
                  {"ADD TO LIST"}
                </Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </LinearGradient>
        {/* </LinearGradient> */}
      </View>
    </TouchableWithoutFeedback>
  );
};

export default ScoutingCard;
