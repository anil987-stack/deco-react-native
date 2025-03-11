import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  FlatList,
  TextInput,
} from "react-native";
import { Picker } from "native-base";
// import Style from "./LeadStyle";
import NavigationService from "App/Services/NavigationService";
import StatusLabelScreen from "App/Components/StatusLabel";
import { Colors, ApplicationStyles, Metrics } from "App/Theme";
import Address from "App/Components/Address";
import GenericIcon from "App/Components/GenericIcon";
import { HelperService } from "App/Services/Utils/HelperService";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import Feather from "react-native-vector-icons/Feather";
import AntDesign from "react-native-vector-icons/AntDesign";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import LinearGradient from "react-native-linear-gradient";
const infoCard = ({ data, show = false, item }) => {
  console.log("dataList", item);
  return (
    <View style={{ marginTop: hp("2%") }}>
      <View style={{ marginLeft: wp("0%"), flexDirection: "row" }}>
        <View>
          <Text
            style={{
              ...Styles.text,
              // left: wp("1.5%"),
              justifyContent: "flex-start",
            }}
          >
            {item.date}
          </Text>
        </View>
        <View style={{ marginLeft: wp("47%") }}>
          <Text
            style={{
              ...Styles.text,
              // left: wp("1.5%"),
              //  alignSelf:"flex-end"
              // justifyContent: "flex-end",
            }}
          >
            {item.type}
          </Text>
        </View>
      </View>
      <View
        style={{
          borderBottomWidth: 1.5,
          marginTop: wp("2%"),
          width: wp("90%"),
          // backgroundColor: "white",
          borderBottomColor: "white",
        }}
      ></View>
      <Text
        numberOfLines={1}
        style={{
          fontFamily: "HelveticaNeue_CondensedBold",
          // marginLeft: wp("10.5%"),
          color: "white",
          marginTop: hp("1%"),
          fontSize: wp("3%"),
          // fontWeight: "bold",
        }}
      >
        {"Objective: "}
        <Text
          numberOfLines={1}
          style={{
            fontFamily: "HelveticaNeue_CondensedBold",
            // marginLeft: wp("10.5%"),
            color: "white",
            marginTop: hp("1%"),
            fontSize: wp("3%"),
            //   fontWeight: "bold",
          }}
        >
          {item.objective}
        </Text>
      </Text>

      {item.remarks ? (
        <Text
          // numberOfLines={1}
          style={{
            fontFamily: "HelveticaNeue_CondensedBold",
            // marginLeft: wp("10.5%"),
            color: "white",
            marginTop: hp("1%"),
            fontSize: wp("3%"),
            // fontWeight: "bold",
            width: wp("90%"),
          }}
        >
          {"Remarks: "}
          <Text
            // numberOfLines={1}
            style={{
              fontFamily: "HelveticaNeue_CondensedBold",
              // marginLeft: wp("10.5%"),
              color: "white",
              marginTop: hp("1%"),
              fontSize: wp("3%"),
              //   fontWeight: "bold",
            }}
          >
            {item.remarks}
          </Text>
        </Text>
      ) : null}
    </View>
  );
};
export default infoCard;
const Styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: hp("0%"),
  },
  heading: {
    fontSize: wp("2.2%"),
    fontFamily: ApplicationStyles.textFont,
    color: Colors.clr66,
  },
  Screen: {
    width: "90%",
    // paddingBottom:30,
    backgroundColor: "white",
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
  text: {
    color: Colors.white,
    fontSize: wp("3.5%"),
    fontWeight: "bold",
    fontFamily: "HelveticaNeue_CondensedBold",
    // marginTop:hp("3%")
  },
});
