import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native";
import { ApplicationStyles, Colors, Fonts } from "../../Theme";
import BlueButton from "../BlueButton";
import GenericIcon from "App/Components/GenericIcon";
import HorziontalStrip from "../GenericDisplayCard/GenericDisplayCardStrip";
import { HelperService } from "../../Services/Utils/HelperService";
import NavigationService from "App/Services/NavigationService";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Item } from "native-base";
const Visitcard = ({
  visitData,
  orderData,
  categoryRatingMapping,
  onEditClick,
  onCancelClick,
  item,
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
  console.log("visitData", item.Status__c);
  return (
    <View
      style={Styles.Screen1}
      // onPress={() => {
      //   visitData.Status__c == "Completed"
      //     ? NavigationService.navigate("VisitInfoScreen", {
      //         id: visitData.Id,
      //         data: visitData,
      //       })
      //     : "";
      // }}
    >
      <View style={{ flexDirection: "row", width: "90%", marginTop: 5 }}>
        <Text
          style={{
            fontSize: wp("4"),
            width: wp("40"),
            fontFamily: ApplicationStyles.textMediumFont,
            fontWeight: "bold",
            paddingLeft: wp("4"),
          }}
        >
          {visitData.Customer_Name__r ? visitData.Customer_Name__r.Name : ""}
        </Text>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "flex-end",
            marginTop: 2,
            marginLeft: 5,
          }}
        >
          {visitData.Status__c == "Open" ? (
            <BlueButton
              style={{
                height: wp("2"),
                backgroundColor: "#00B5E2",
                width: wp("25"),
              }}
              title={visitData.Status__c}
              textStyle={{ fontSize: hp("1.7%") }}
            />
          ) : visitData.Status__c == "Completed" ? (
            <BlueButton
              style={{ height: "7%", backgroundColor: Colors.primary }}
              title={visitData.Status__c}
              textStyle={{ fontSize: hp("1.6%") }}
            />
          ) : visitData.Status__c == "Started" ? (
            <BlueButton
              style={{ height: "7%", backgroundColor: "#F6BE00" }}
              title={visitData.Status__c}
              textStyle={{ fontSize: hp("1.7%") }}
            />
          ) : (
            <BlueButton
              style={{ height: "7%", backgroundColor: Colors.red }}
              title={visitData.Status__c}
              textStyle={{ fontSize: hp("1.7%") }}
            />
          )}

          <GenericIcon
            show={true}
            name={"pencil"}
            style={{
              marginTop: 3,
              width: wp("5%"),
              height: hp("4%"),
              fontSize: wp("5%"),
              color: Colors.primary,
              marginLeft: 5,
            }}
            onPress={onEditClick}
          />
          <GenericIcon
            show={true}
            name={"delete"}
            onPress={onCancelClick}
            style={{
              marginTop: 3,
              width: wp("5%"),
              height: hp("4%"),
              fontSize: wp("5%"),
              color: Colors.primary,
              marginLeft: 5,
            }}
          />
          <GenericIcon
            show={true}
            name={"phone"}
            //onPress={() =>  (visitData.Customer_Name__r.Location__c.latitude&&visitData.Customer_Name__r.Location__c.longitude)   ?  HelperService.showDirectionInGoogleMaps(visitData.Customer_Name__r.Location__c.latitude, visitData.Customer_Name__r.Location__c.longitude):HelperService.showToast({ message: 'Geo Location Not Available', duration: 2000, buttonText: 'Okay' })}
            onPress={() =>
              HelperService.callNumber(visitData.Customer_Phone__c || "")
            }
            style={{
              marginTop: 3,
              width: wp("5%"),
              height: hp("4%"),
              fontSize: wp("5%"),
              color: Colors.primary,
              marginLeft: 5,
            }}
          />
          {/* <GenericIcon
            show={true}
            name={"tag"}
            onPress={() =>
              NavigationService.navigate("TagScreen", { data: visitData })
            }
            style={{
              marginTop: 3,
              width: wp("5%"),
              height: hp("4%"),
              fontSize: wp("5%"),
              color: Colors.red,
              marginLeft: 5,
            }}
          /> */}
        </View>
      </View>
      {/* <View style={{flexDirection:'row',justifyContent:'flex-end',marginTop:-20}}>
   <View style={{marginRight:5}}>
      
      <TouchableOpacity>
        <GenericIcon 
        show={true} 
        name={'delete'} 
        onPress={onCancelClick}
        style={{marginTop:3,width:20,height:15,fontSize:15,color:Colors.primary}}  
        />
 </TouchableOpacity>
  
   </View>
   <View style={{marginRight:10}}>
      
      <TouchableOpacity>
        <GenericIcon 
        show={true} 
        name={'tag'} 
        onPress={()=>NavigationService.navigate('TagScreen',{data:visitData})}
        style={{marginTop:3,width:20,height:15,fontSize:15,color:Colors.red}}  
        />
 </TouchableOpacity>
  
   </View>
   </View> */}

      <Text
        style={{
          color: Colors.grey,
          fontWeight: "bold",
          marginLeft: "0%",
          paddingLeft: 15,
          fontSize: 11,
          marginTop: -4,
        }}
      >
        Customer No.:
        <Text
          style={{
            color: Colors.primary,
            fontWeight: "bold",
            marginLeft: "0%",
            paddingLeft: 15,
            fontSize: 11,
            marginTop: -4,
          }}
        >
          {visitData.Customer_Name__r
            ? visitData.Customer_Name__r.SFDC_Customer_Code__c
            : ""}
        </Text>
      </Text>

      <View style={{ flexDirection: "row", width: "100%" }}>
        {/* {visitData.Visit_Date__c ==
        HelperService.dateReadableFormatWithHyphen(
          HelperService.getCurrentTimestamp()
        ) ? ( */}
        {actionVisible ? (
          <View
            style={{
              flexDirection: "row",
              width: "32%",
              justifyContent: "center",
              marginTop: hp("0.6"),
            }}
          >
            {visitData.Status__c == "Started" ? (
              <BlueButton
                title="resume"
                textStyle={{ fontSize: wp("2.8") }}
                style={{
                  borderRadius: 300,
                  width: 40,
                  height: 40,
                  paddingLeft: 0,
                  paddingRight: 0,
                  opacity: 5,
                  top: hp("0.5%"),
                }}
                onPress={onPressStartVisit}
              />
            ) : visitData.Status__c == "Open" ||
              visitData.Status__c == "Reschedule" ? (
              <TouchableOpacity
                onPress={onPressStartVisit}
                style={{
                  width: 40,
                  height: 40,
                  justifyContent: "center",
                  alignItems: "center",
                  padding: 1,
                  borderRadius: 100,
                  backgroundColor: Colors.primary,
                  margin: 4,
                }}
              >
                <Text
                  style={{
                    fontSize: 9,
                    color: Colors.white,
                    fontWeight: "bold",
                  }}
                >
                  START
                </Text>
              </TouchableOpacity>
            ) : (
              []
            )}

            {visitData.Status__c == "Open" ||
            visitData.Status__c == "Started" ||
            visitData.Status__c == "Reschedule" ? (
              <TouchableOpacity
                onPress={onPressEndVisit}
                style={{
                  width: 40,
                  height: 40,
                  justifyContent: "center",
                  alignItems: "center",
                  padding: 1,
                  borderRadius: 100,
                  backgroundColor: Colors.primary,
                  margin: 4,
                }}
              >
                <Text
                  style={{
                    fontSize: 9,
                    color: Colors.white,
                    fontWeight: "bold",
                  }}
                >
                  END
                </Text>
              </TouchableOpacity>
            ) : (
              []
            )}
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
        {/* ) : (
          <View
            style={{
              flexDirection: "row",
              width: "30%",
              justifyContent: "center",
            }}
          ></View>
        )} */}
        <View style={{ width: "60%", marginTop: 0 }}>
          <HorziontalStrip
            label={"Visit Type"}
            value={visitData.Visit_Type__c ? visitData.Visit_Type__c : ""}
            valueStyle={{
              color: Colors.black,
              textAlign: "left",
              width: "40%",
              marginLeft: "10%",
              fontSize: 12,
            }}
            labelStyle={{ textAlign: "right", width: "50%", fontSize: 12 }}
          />
          {/* <HorziontalStrip
            label={"Visit Type"}
            value={visitData.Visit_Type__c}
            valueStyle={{
              color: Colors.black,
              textAlign: "left",
              width: "40%",
              marginLeft: "10%",
              fontSize: 12,
            }}
            labelStyle={{ textAlign: "right", width: "50%", fontSize: 12 }}
          /> */}
          <HorziontalStrip
            label={"Customer Type"}
            value={visitData.Customer_Type__c ? visitData.Customer_Type__c : ""}
            valueStyle={{
              color: Colors.black,
              textAlign: "left",
              width: "40%",
              marginLeft: "10%",
              fontSize: 12,
            }}
            labelStyle={{ textAlign: "right", width: "50%", fontSize: 12 }}
          />
          {/* <HorziontalStrip
            label={"objective"}
            value={visitData.Objective__c}
            valueStyle={{
              color: Colors.black,
              textAlign: "left",
              width: "40%",
              marginLeft: "10%",
              fontSize: 12,
            }}
            labelStyle={{ textAlign: "right", width: "50%", fontSize: 12 }}
          /> */}
          <HorziontalStrip
            label={"Last Visit Date"}
            value={
              item.Visit_Date__c
                ? HelperService.dateReadableFormat(item.Visit_Date__c)
                : ""
            }
            valueStyle={{
              color: Colors.black,
              textAlign: "left",
              width: "40%",
              marginLeft: "10%",
              fontSize: 12,
            }}
            labelStyle={{ textAlign: "right", width: "50%", fontSize: 12 }}
          />
          {/* <HorziontalStrip
            label={"Last Order Date"}
            value={HelperService.dateReadableFormat(item.Visit_Order_Date__c)}
            valueStyle={{
              color: Colors.black,
              textAlign: "left",
              width: "40%",
              marginLeft: "10%",
              fontSize: 12,
            }}
            labelStyle={{ textAlign: "right", width: "50%", fontSize: 12 }}
          /> */}
        </View>
      </View>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
          marginTop: "-5%",
          width: "25%",
          marginLeft: 20,
        }}
      >
        {/* <GenericIcon
          show={true}
          name={"phone"}
          //onPress={() =>  (visitData.Customer_Name__r.Location__c.latitude&&visitData.Customer_Name__r.Location__c.longitude)   ?  HelperService.showDirectionInGoogleMaps(visitData.Customer_Name__r.Location__c.latitude, visitData.Customer_Name__r.Location__c.longitude):HelperService.showToast({ message: 'Geo Location Not Available', duration: 2000, buttonText: 'Okay' })}
          // onPress={() =>
          //   HelperService.callNumber(visitData.Concerned_Person_No__c || "")
          // }
          style={{
            marginTop: 3,
            width: 20,
            height: 15,
            fontSize: 15,
            color: Colors.green,
          }}
        /> */}

        {/* <TouchableOpacity>
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
        </TouchableOpacity> */}

        {/* <GenericIcon
          show={true}
          name={"target"}
          // onPress={() =>
          //   visitData.Customer_Name__r.Location__c &&
          //   visitData.Customer_Name__r.Location__c.latitude &&
          //   visitData.Customer_Name__r.Location__c.longitude
          //     ? HelperService.showDirectionInGoogleMaps(
          //         visitData.Customer_Name__r.Location__c.latitude,
          //         visitData.Customer_Name__r.Location__c.longitude
          //       )
          //     : HelperService.showToast({
          //         message: "Geo Location Not Available",
          //         duration: 2000,
          //         buttonText: "Okay",
          //       })
          // }
          style={{
            marginTop: 3,
            width: 20,
            height: 17,
            fontSize: 18,
            color: Colors.mustard,
          }}
        /> */}
      </View>
    </View>
  );
};

export default Visitcard;
const Styles = StyleSheet.create({
  Screen1: {
    width: wp("90"),
    paddingBottom: 20,
    backgroundColor: "#fff",
    marginBottom: wp("2"),
    // height: hp("25%"),
    marginTop: wp("1"),
    paddingTop: wp("1"),
    alignSelf: "center",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    minHeight: hp("20%"),
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    shadowColor: "#000",
    elevation: 6,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#fff",
  },
});
