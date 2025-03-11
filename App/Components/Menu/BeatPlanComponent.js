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
import NavigationService from "App/Services/NavigationService";
import { HelperService } from "../../Services/Utils/HelperService";

const BeatPlanComponent = ({
  loading,
  loader,
  datechange,
  pjplist,
  totalpjp,
  fetch,
  data,
  total_outlet,
  onClick,
  userId,
  onApprove,
  onReject,
}) => {
  console.log("datatta,data", data);
  return (
    <View style={styles.Screen1}>
      <TouchableOpacity
        onPress={() =>
          NavigationService.navigate("BeatForthScreen", {
            Pjpdata: data,
            status: data[0] ? data[0].Approval_Status__c : "",
          })
        }
      >
        <View style={{ flexDirection: "row" }}>
          <View style={{ width: "40%", left: wp("3%") }}>
            <Text
              style={{
                color: Colors.primary,
                fontSize: wp("5.4"),
                fontWeight: "bold",
              }}
            >
              {data[0].Name}
            </Text>
            <Text>Beat Id</Text>
          </View>
          <View style={{ width: "58%" }}>
            <View
              style={{
                alignSelf: "flex-end",
                backgroundColor: Colors.primary,
                marginTop: hp("1%"),
                height: hp("3"),
                elevation: 4,
                shadowOffset: {
                  width: 0,
                  height: 2,
                },

                shadowOpacity: 0.25,
                shadowRadius: 3.84,
                shadowColor: "#E825835E",
              }}
            >
              <Text
                style={{
                  marginHorizontal: wp("3"),
                  textAlign: "right",
                  justifyContent: "flex-end",
                  color: "white",
                }}
              >
                {data[0].Approval_Status__c}
              </Text>
            </View>
          </View>
        </View>
        <View
          style={{
            justifyContent: "space-evenly",
            alignSelf: "center",
            width: wp("40"),
            marginTop: hp("1.5%"),
          }}
        >
          <DisplayCardStrip
            label={"Beat Planned On"}
            value={HelperService.removeTimestringFromDate(data[0].CreatedDate)}
            valueStyle={{
              ...Fonts.Medium,
              color: "black",
              fontWeight: "700",
              left: wp("1%"),
            }}
            labelStyle={{
              ...Fonts.Medium,
              fontWeight: "700",
              right: wp("8%"),
            }}
          />
          {/* <DisplayCardStrip
                label={"Total Outlets"}
                value={data[0].total_outlet}
                valueStyle={{ ...Fonts.Medium, fontWeight: "700" }}
                labelStyle={{ ...Fonts.Medium, fontWeight: "700" }}
              /> */}
          {/* <DisplayCardStrip  label={'hello'} value={'Anmol'}  labelStyle={{marginLeft:20}} />
                    <DisplayCardStrip label={'Quantity(MT)'} value={'hiii'}  labelStyle={{marginLeft:20}}/> */}
        </View>

        {data[0].Approval_Status__c == "Draft" ||
        data[0].Approval_Status__c == "Rejected" ? (
          <TouchableOpacity
            onPress={() => onClick()}
            style={{ width: wp("42"), alignSelf: "center", marginTop: hp("3") }}
          >
            <BlueButton
              style={{
                width: wp("42"),
                height: hp("4"),
                alignSelf: "center",

                elevation: 4,
              }}
              textStyle={{ ...Fonts.Medium }}
              loading={loader}
              disable={loader}
              title={"Send for Approval"}
            />
          </TouchableOpacity>
        ) : (
          []
        )}
      </TouchableOpacity>
    </View>
  );
};

export default BeatPlanComponent;
const styles = StyleSheet.create({
  Screen1: {
    width: "85%",

    paddingBottom: 20,
    backgroundColor: "#fff",
    marginTop: "10%",
    marginBottom: 10,
    marginHorizontal: 30,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    shadowColor: "#000",
    elevation: 6,
    borderRadius: 2,
    borderWidth: 1,
    borderColor: "#fff",
  },
});
