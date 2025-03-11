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
import { Colors, ApplicationStyles, Metrics } from "App/Theme";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import BlueButton from "App/Components/BlueButton";
import GenericIcon from "App/Components/GenericIcon";
import DisplayCardStrip from "../GenericDisplayCard/GenericDisplayCardStrip";
import { Fonts } from "../../Theme";
const BeatThirdComponent = ({ item, addbeat, added }) => {
  return (
    <View style={styles.Screen1}>
      <View style={{ flexDirection: "row", width: "100%" }}>
        <View style={{ width: wp("72%"), marginLeft: 10 }}>
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
              {item.Area__r && item.Area__r.Area_Name__c
                ? item.Area__r.Area_Name__c
                : ""}
            </Text>
            {/* <DisplayCardStrip 
                    //  label={'Area Name'} 
                    value={item.Area__r&&item.Area__r.Area_Name__c?item.Area__r.Area_Name__c:""} 
                     valueStyle={{...Fonts.Medium,color:Colors.primary,fontWeight:'700',}} 
                    //  labelStyle={{...Fonts.Medium,fontFamily:ApplicationStyles.textFont,color:Colors.grey,fontWeight:'700',}} 
                     /> */}
            {/*                     
                    <DisplayCardStrip  label={'Beat Code'} value={item.Beat_Code__c}  valueStyle={{...Fonts.Medium,color:Colors.grey,fontWeight:'700'}} labelStyle={{...Fonts.Medium ,fontFamily:ApplicationStyles.textFont,color:Colors.grey,fontWeight:'700'}} />
                    <DisplayCardStrip  label={'Total Outlets'} value={'10'}   valueStyle={{...Fonts.Medium,color:Colors.grey,fontWeight:'700'}} labelStyle={{...Fonts.Medium,fontFamily:ApplicationStyles.textFont,color:Colors.grey,fontWeight:'700'}}/>
     */}
          </View>
        </View>
        <View style={{ marginTop: "1%" }}>
          <TouchableOpacity
            style={{
              backgroundColor: Colors.primary,
              borderRadius: 100,
              alignSelf: "flex-end",
              marginRight: 10,
              marginTop: wp("2"),
            }}
            onPress={() => addbeat()}
          >
            {added ? (
              <GenericIcon
                name={"check"}
                style={{
                  color: Colors.white,
                  fontSize: wp("6%"),
                  alignSelf: "center",
                }}
              />
            ) : (
              <GenericIcon
                name={"add"}
                style={{
                  color: Colors.white,
                  fontSize: wp("6%"),
                  alignSelf: "center",
                }}
              />
            )}
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default BeatThirdComponent;
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
});
