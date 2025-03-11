import React from "react";
import {
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  TouchableWithoutFeedback,
} from "react-native";
import Style from "./VisitCardStyles";
import HorziontalStrip from "../../../Components/GenericDisplayCard/GenericDisplayCardStrip";
import { Icon, Input, Button } from "native-base";
import {
  AREA,
  PREV_ORDER_VAL,
  VISIT_THIS_WEEK,
  MAIN_COMPETETOR,
} from "App/Constants";
import { Colors, Metrics, Helpers, Fonts, ApplicationStyles } from "App/Theme";
import NavigationService from "App/Services/NavigationService";
import { HelperService } from "App/Services/Utils/HelperService";
import Ratings from "App/Components/Ratings";
import WhiteButton from "App/Components/WhiteButton";
import BlueButton from "App/Components/BlueButton";
import GenericIcon from "App/Components/GenericIcon";
import TextAvatar from "App/Components/TextAvatar";
import VisitStatusBar from "App/Containers/Visits/VisitStatusBar";

const VisitCard = ({
  visitData,
  orderData,
  categoryRatingMapping,
  onEditClick,
  onCancelClick,
  onPressStartVisit,
  onPressEndVisit,
  startVisitDisabled,
  endVisitDisabled,
  startVisitLoading,
  endVisitLoading,
  editDisabled,
  cancelDisabled,
  isASM,
  psmAssigned,
  showPsmDetails,
  startVisitText,
  disabled,
  actionVisible,
  infoVisible,
}) => {
  console.log("kkkkkkkkkkkk",actionVisible)
  // if("a01O000000uaIVHIA2" == visitData.Id){
  return (
    <View style={Style.box}>
      <View
        style={{
          flexDirection: "row",
          width: "78%",
          marginTop: 0,
          justifyContent: "space-between",
        }}
      >
        <Text
          style={{
            fontSize: 16,
            fontFamily: ApplicationStyles.textMediumFont,
            fontWeight: "bold",
            marginLeft: 20,
          }}
        >
          {visitData.Name?visitData.Name:'Aman Enterprise'}
        </Text>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "flex-end",
            marginTop: 2,
          }}
        >
          {visitData.Status__c == "Open" ? (
            <BlueButton
              style={{ height: "7%", backgroundColor: Colors.primary }}
              title={visitData.Status__c}
              textStyle={{ fontSize: 9 }}
            />
          ) : visitData.Status__c == "Completed" ? (
            <BlueButton
              style={{ height: "7%", backgroundColor: Colors.red }}
              title={visitData.Status__c}
              textStyle={{ fontSize: 9 }}
            />
          ) : (
            <BlueButton
              style={{ height: "7%", backgroundColor: Colors.green }}
              title={visitData.Status__c ? visitData.Status__c : "Open"}
              textStyle={{ fontSize: 9 }}
            />
          )}

          <GenericIcon
            show={true}
            name={"pencil"}
            style={{
              marginTop: 3,
              width: 20,
              height: 15,
              fontSize: 15,
              color: Colors.darkGrey,
              marginLeft: 10,
            }}
            onPress={onEditClick}
          />
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "flex-end",
          marginTop: -24,
        }}
      >
        <View style={{ flexDirection: "row", marginRight: 10 }}>
          <TouchableOpacity>
            <GenericIcon
              show={true}
              name={"delete"}
              onPress={onCancelClick}
              style={{
                marginTop: 3,
                width: 20,
                height: 15,
                fontSize: 15,
                color: Colors.red,
              }}
            />
          </TouchableOpacity>
        </View>
      </View>

      <Text
        style={{
          color: Colors.grey,
          marginLeft: "10%",
          fontSize: 11,
          marginTop: 5,
        }}
      >
        customer No: {"12345"}
      </Text>

      <View style={{ flexDirection: "row", width: "100%" }}>
        {actionVisible ? (
          <View
            style={{
              flexDirection: "row",
              width: "30%",
              justifyContent: "center",
            }}
          >
            <GenericIcon
              show={true}
              name={"play-circle"}
              onPress={onPressStartVisit}
              style={{
                marginTop: 3,
                width: 35,
                height: 35,
                fontSize: 34,
                color: Colors.primary,
              }}
            />

            <GenericIcon
              show={true}
              name={"pause-circle"}
              onPress={onPressEndVisit}
              style={{
                marginTop: 3,
                width: 35,
                height: 35,
                fontSize: 34,
                color: Colors.primary,
              }}
            />
          </View>
        ) : (
          <View
            style={{
              flexDirection: "row",
              width: "30%",
              justifyContent: "center",
            }}
          ></View>
        )}
        <View style={{ width: "60%", marginTop: 10 }}>
          <HorziontalStrip
            label={"Type"}
            value={visitData.Type__c}
            valueStyle={{
              color: Colors.black,
              textAlign: "left",
              width: "40%",
              marginLeft: "10%",
            }}
            labelStyle={{ textAlign: "right", width: "50%" }}
          />
          <HorziontalStrip
            label={"objective"}
            value={visitData.Objective__c}
            valueStyle={{
              color: Colors.black,
              textAlign: "left",
              width: "40%",
              marginLeft: "10%",
            }}
            labelStyle={{ textAlign: "right", width: "50%" }}
          />
          <HorziontalStrip
            label={"last visit Date"}
            value={visitData.Visit_Date__c}
            valueStyle={{
              color: Colors.black,
              textAlign: "left",
              width: "40%",
              marginLeft: "10%",
            }}
            labelStyle={{ textAlign: "right", width: "50%" }}
          />
        </View>
      </View>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
          marginTop: "-8%",
          width: "25%",
          marginLeft: 20,
        }}
      >
        <View style={{ flexDirection: "row" }}>
          <GenericIcon
            show={true}
            name={"phone"}
            style={{
              marginTop: 3,
              width: 20,
              height: 15,
              fontSize: 15,
              color: Colors.green,
            }}
          />
        </View>
        <View style={{ flexDirection: "row" }}>
          <GenericIcon
            show={true}
            name={"google-analytics"}
            style={{
              marginTop: 3,
              width: 20,
              height: 15,
              fontSize: 15,
              color: Colors.red,
            }}
          />
        </View>
        <View style={{ flexDirection: "row" }}>
          <GenericIcon
            show={true}
            name={"target"}
            style={{
              marginTop: 3,
              width: 20,
              height: 17,
              fontSize: 18,
              color: Colors.mustard,
            }}
          />
        </View>
      </View>
    </View>
  );
};

// }

export default VisitCard;
