import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
} from "react-native";
import { Badge } from "native-base";
import { Colors, ApplicationStyles, Metrics, Fonts } from "App/Theme";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import BlueButton from "App/Components/BlueButton";
import GenericIcon from "App/Components/GenericIcon";
import DisplayCardVerticalStrip from "../GenericDisplayCard/GenericDisplayCardVerticalStrip";
import DisplayCardStripVertical from "../GenericDisplayCard/GenericDisplayCardVerticalStrip";
import NavigationService from "App/Services/NavigationService";

const BeatForthComponent = ({ item, list, total_outlet, onTagClick }) => {
  console.log(item, "beat");
  return (
    <View style={styles.Screen1}>
      <View style={{ flexDirection: "row", width: "80%" }}>
        <View style={{ width: wp("40%"), marginLeft: 10 }}>
          <View
            style={{
              justifyContent: "space-between",
              width: wp("30"),
              marginTop: hp("2"),
              left:wp("5%")
            }}
          >
            <Text
              style={{
                ...Fonts.Medium,
                color: Colors.primary,
                fontWeight: "700",
              }}
            >
              {item.Area_Master__r && item.Area_Master__r.Area_Name__c
                ? item.Area_Master__r.Area_Name__c
                : ""}
            </Text>
          </View>
        </View>
        <View style={{ width: wp("40%") }}>
          <View
            style={{
              justifyContent: "space-between",
              width: wp("50"),
              marginTop: hp("2"),
            }}
          >
            <Text
              style={{
                ...Fonts.Medium,
                color: Colors.primary,
                fontWeight: "700",
              }}
            >
              Total Outlets:
              {item.Total_Party_Under_Beat__c
                ? item.Total_Party_Under_Beat__c
                : "0"}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default BeatForthComponent;
const styles = StyleSheet.create({
  Screen1: {
    width: "85%",
    paddingBottom: 10,
    backgroundColor: "#fff",
    marginTop: "2%",
    marginBottom: "2%",
    marginHorizontal: 30,

    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    shadowColor: "#000",
    elevation: 3,
    borderRadius: 2,
    borderWidth: 1,
    borderColor: "#fff",
  },
  // Screen2:{
  //   width:'70%',
  //   height:hp('7%'),
  //   backgroundColor:'#fff',
  //   marginTop:20,
  //   justifyContent:'space-between',
  //   marginHorizontal:20,

  //   shadowOffset: {
  //           width: 0,
  //           height: 2,
  //       },
  //   shadowOpacity: 0.25,
  //   shadowRadius: 3.84,
  //   shadowColor: "#000",
  //   elevation:6,borderRadius:2,borderWidth:1,borderColor:'#fff'
  // }
});
