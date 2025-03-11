import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { Picker,  Spinner } from "native-base";
import Style from "./TaskStyle";
import NavigationService from "../../Services/NavigationService";
import StatusLabelScreen from "App/Components/StatusLabel";
import { Colors, ApplicationStyles, Metrics } from "App/Theme";
import Address from "App/Components/Address";
import GenericIcon from "App/Components/GenericIcon";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import BlueButton from "../BlueButton";
import { HelperService } from "../../Services/Utils/HelperService";
// import Postponed from "../../Containers/Menu/Task/Postponed";
const TaskCard = ({
  data,
  item,
  onPressInfo,
  emdPress,
  taskStatusData,
  namePress,
  PostponedPress,
  quantityInCart,
  onChangeQuantity,
  onImageClick,
  productName,
  onRemoveClick,
  productSizeForm,
  changeSizeForm,
  contactdetail,
  show = false,
  title,
  onPress,
  isAdded,
  showTwo = false,
  addMore,
  showAssign = false,
  showClose = false,
  visit = false,
  leadTask = false,
  isAddedInVisit=false,
  loaderVisit=false,
  leadCloseTask,
  userId=''
}) => (
  <TouchableOpacity
    // onPress={
    //   showTwo
    //     ? onPress
    //     : () => NavigationService.navigate("TaskScreen", { data: item })
    // }
  >
    <View style={Style.Screen}>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <StatusLabelScreen
        //   status={item.lead_id__c ? item.lead_id__c : ""}
          styles={{
            top: hp("-.5%"),
            left: wp("-1%"),
            height: hp("4%"),
            backgroundColor: Colors.primary,
            width: wp("35%"),
            borderRadius: 0,
            borderTopLeftRadius: 10,
            borderTopRightRadius: 5,
          }}
        />

        <StatusLabelScreen
        //   status={item.nature_of_task == "Physical Visit" ? "VISIT" : "CALL"}
          show
          nameicon={`${
            "call"
          }`}
          styles={{
            top: hp("0%"),
            right: wp("0%"),
            height: hp("4%"),
            backgroundColor: Colors.white,
            width: wp("25%"),
            borderRadius: 0,
            borderTopRightRadius: 10,
            borderTopLeftRadius: 5,
          }}
        />
      
          <TouchableOpacity
            // onPress={() => {
            //   addMore();
            // }}
            style={{
              width: wp("10"),
              alignSelf: "flex-end",
              flexDirection: "row",
              position: "relative",
              bottom: hp("1%"),
            }}
          >
            <GenericIcon
              show={true}
              style={{
                fontSize: 24,
                fontWeight: "bold",
                marginTop: 10,
                color: Colors.footerIcon,
              }}
              name={"dots-vertical"}
            />
          </TouchableOpacity>
        {/* ) : (
          []
        )} */}
      
          {/* <BlueButton
            title={title}
            textStyle={{ fontSize: wp("3.4%") }}
            // disabled={isAddedInVisit}
            // onPress={onPress}
            style={{
              backgroundColor:Colors.primary,
              borderTopLeftRadius: 0,
              borderTopRightRadius: 0,
              width: wp("25%"),
            }}
          > */}
            {/* {isAdded &&!loaderVisit? (
              <GenericIcon
                name="check"
                style={{ color: Colors.white, fontSize: wp("3.8%") }}
              />
            ) : loaderVisit? <Spinner color={Colors.white} />: [] 
           
            } */}
          {/* </BlueButton> */}
        {/* ) : (
          []
        )} */}
      </View>

      <View style={{ flexDirection: "row", marginTop: hp("1%") }}>
       
        {/* {!show ? ( */}
          <BlueButton
            title={""}
            style={{
              width: wp("10%"),
              alignSelf: "flex-end",
              marginTop: hp("1%"),
              borderRadius: wp("100%"),
              paddingRight: 2,
              paddingLeft: 0,
              position: "absolute",
              top: -hp("2%"),
              left: wp("-1%"),
              backgroundColor: Colors.fadeYellow,
            }}
            textStyle={{ fontSize: wp("3.2%") }}
            //  onPress={() => HelperService.callNumber(item.phone)}
            // onPress={() => {
            //   contactdetail();
            // }}
          >
            <GenericIcon
              name="phone"
              style={{ fontSize: wp("5%"), color: Colors.white }}
            />
          </BlueButton>
        {/* ) : (
          []
        )} */}

<View
          style={{
            justifyContent: "flex-start",
            width: wp("23%"),
            alignItems: "center",
            marginVertical: 0,
            marginLeft:"7%"
          }}
        >
          <Text
            style={{
              color: Colors.primary,
              fontSize: wp("5.3%"),
              fontFamily: ApplicationStyles.textMsgFont,
              fontWeight: "bold",
              marginLeft: wp("5%"),
              marginTop: -4,
            }}
          >
            {/* {item.payment_date__c

                 ?  HelperService.getCurrentDate(item.payment_date__c)
             : ""}  */}

            {/* {item.task_date__c
              ? HelperService.getCurrentDate(item.task_date__c)
              : ""} */}
            {"31 May"}
          </Text>
          <Text
            style={{
              color: Colors.primary,
              fontWeight: "bold",
              fontFamily: ApplicationStyles.textMsgFont,
              fontSize: wp("3.3%"),
              marginLeft: wp("5%"),
              marginTop: -2,
            }}
          >
            {/* {this.getMonth(data.order_date__c.substring(5, 7))} */}

            {/* {item.task_date__c
              ? HelperService.getMonthName(item.task_date__c)
              : ""} */}
          </Text>
        </View>
        <View>
          <Text
            style={{
              width: "100%",
              fontFamily: ApplicationStyles.textMsgFont,
              color: Colors.subtitle,
              fontSize: wp("3.3%"),
              top: hp("0"),
              left: wp("4"),
              marginBottom: hp("0%"),
            }}
          >
            {`Task Name :`}
            <Text
              style={{
                fontFamily: ApplicationStyles.textMsgFont,
                color: Colors.primary,
                fontSize: wp("3.3%"),
                top: hp("1"),
                left: wp("4"),
                marginBottom: hp("1%"),
              }}
            >{" "}
              {"NA "}
              {/* {item.task_type} */}
            </Text>
          </Text>
          {/* {!show ? ( */}
            <TouchableOpacity
            //   onPress={() => {
            //     namePress();
            //   }}
            >
              <Text
                style={{
                  fontFamily: ApplicationStyles.textMsgFont,
                  color: Colors.subtitle,
                  fontSize: wp("3.3%"),
                  top: hp("0.8"),
                  left: wp("4"),
                  marginBottom: hp("2%"),
                }}
              >
                {`Lead :`}
                <Text
                  style={{
                    fontFamily: ApplicationStyles.textMsgFont,
                    color: Colors.primary,
                    fontSize: wp("3.3%"),
                    top: hp("1"),
                    left: wp("4"),
                    marginBottom: hp("1%"),
                  }}
                >
                  {" "}
                  {" NA"}

                  {/* {item.lead_name} */}
                </Text>
              </Text>
            </TouchableOpacity>
          {/* ) : (
            <Text
              style={{
                fontFamily: ApplicationStyles.textMsgFont,
                color: Colors.subtitle,
                fontSize: wp("3.3%"),
                top: hp("0.8"),
                left: wp("4"),
                marginBottom: hp("1%"),
              }}
            >
              {`Lead :`}
              <Text
                style={{
                  fontFamily: ApplicationStyles.textMsgFont,
                  color: Colors.primary,
                  fontSize: wp("3.3%"),
                  top: hp("1"),
                  left: wp("4"),
                  marginBottom: hp("1%"),
                }}
              >
                {" "}
                {item.lead_name}
              </Text>
            </Text>
          )} */}

          <Text
            style={{
              fontFamily: ApplicationStyles.textMsgFont,
              color: Colors.subtitle,
              fontSize: wp("3.3%"),
              top: hp("0.4"),
              left: wp("4"),
              marginBottom: hp("1%"),
            }}
          >
            {`Assigned To :`}
            <Text
              style={{
                fontFamily: ApplicationStyles.textMsgFont,
                color: Colors.primary,
                fontSize: wp("3.3%"),
                top: hp("1"),
                left: wp("4"),
                marginBottom: hp("1%"),
              }}
            >
              {" "}
              {"NA "}

              {/* {item.task_assigned_to} */}
            </Text>
          </Text>
        </View>
      </View>

      <View
        style={{ marginTop: hp("0"), width: wp("83%"), marginLeft: wp("1%") }}
      >
        <Address
          style={{ fontSize: 11 }}
          value={"patiala,Punjab"}
        //   value={item.lead_site_address ? item.lead_site_address : ""}
        //   onPress={() =>
        //     item.site_lat_long__latitude__s && item.site_lat_long__longitude__s
        //       ? HelperService.showDirectionInGoogleMaps(
        //           item.site_lat_long__latitude__s,
        //           item.site_lat_long__longitude__s
        //         )
        //       : 
        //       item.geocoordinate__latitude__s&&item.geocoordinate__latitude__s? HelperService.showDirectionInGoogleMaps(item.geocoordinate__latitude__s, item.geocoordinate__latitude__s):
              
        //       HelperService.showToast({
        //           message: "Geo Location Not Available",
        //           duration: 2000,
        //           buttonText: "Okay",
        //         })
        //   }
        />
      </View>

      <View
        style={{
          ...Style.Screen,
          width: "100%",
          marginHorizontal: 0,
          elevation: 0,
          flexDirection: "row",
          justifyContent: "space-between",
          paddingBottom: 0,
        }}
      >
        <View style={{ flexDirection: "row", height: 50, flex: 1 }}>
          <View style={{ width: wp("9"), alignSelf: "center" }}>
            <GenericIcon
              show={true}
              style={{
                fontSize: 24,
                fontWeight: "bold",
                marginTop: 10,
                color: Colors.footerIcon,
              }}
              name={"google-analytics"}
            />
          </View>
          <View style={{ flexDirection: "column" }}>
            <Text
              style={{
                fontFamily: ApplicationStyles.textMsgFont,
                color: Colors.subtitle,
              }}
            >
              Status
            </Text>
            <View style={{ width: wp("20%") }}>
              <Text style={{ color: Colors.primary, fontSize: wp("3%") }}>
                {/* {item.lead_site_status ? item.lead_site_status : ""} */}
              </Text>
            </View>
          </View>
        </View>
        <TouchableOpacity
        //   onPress={() => {
        //     !show ? emdPress() : [];
        //   }}
          style={{ flexDirection: "row", flex: 1 }}
        >
          <View style={{ width: wp("9"), alignSelf: "center" }}>
            <GenericIcon
              show={true}
              style={{
                fontSize: 24,
                fontWeight: "bold",
                marginTop: 10,
                color: Colors.footerIcon,
              }}
              name={"calendar"}
            />
          </View>
          <View style={{ flexDirection: "column" }}>
            <Text
              style={{
                fontFamily: ApplicationStyles.textMsgFont,
                color: Colors.subtitle,
              }}
            >
              EMD
            </Text>
            <View style={{ width: wp("20%") }}>
              <Text style={{ color: Colors.primary, fontSize: wp("3%") }}>
                {/* {item.lead_emd
                  ? HelperService.dateReadableFormatWithHyphenDMY(item.lead_emd)
                  : ""} */}
              </Text>
            </View>
          </View>
        </TouchableOpacity>
        <View style={{ flexDirection: "row", flex: 1 }}>
          <View style={{ width: wp("7"), alignSelf: "center" }}>
            <GenericIcon
              show={true}
              style={{
                fontSize: 24,
                fontWeight: "bold",
                marginTop: 10,
                color: Colors.footerIcon,
              }}
              name={"note"}
            />
          </View>
          <View style={{ flexDirection: "column" }}>
            <Text
              style={{
                fontFamily: ApplicationStyles.textMsgFont,
                color: Colors.subtitle,
              }}
            >
              Site Quality
            </Text>
            <View style={{ width: wp("20%") }}>
              <Text style={{ color: Colors.primary, fontSize: wp("3%") }}>
                {/* {item.site_quality_name ? item.site_quality_name : ""} */}
              </Text>
            </View>
          </View>
        </View>
      </View>
      {/* {!show ? (
        <>

          {item.task_status__c !=
          HelperService.getSFIDFromName(taskStatusData, "Closed") ? ( */}
          <>
            <View
              style={{ justifyContent: "space-around", flexDirection: "row" }}
            >
              {/* {showClose&&  ( */}
                <>
                  <BlueButton
                    title={"Close"}
                    textStyle={{ fontSize: wp("3.8%") }}
                    // disabled={userId!=item.task_assigned_to__c }
                    // onPress={() =>
                    //   leadTask
                    //     ? leadCloseTask()
                    //     : NavigationService.navigate("CloseTaskScreen", {
                    //         id: item,
                    //         visit: visit,
                    //       })
                    // }
                    style={{
                      backgroundColor: Colors.primary,
                      borderTopLeftRadius: 0,
                      borderTopRightRadius: 0,
                      width: wp("44%"),
                    }}
                  />
                </>
              
              
         
              <BlueButton
                title={ "Edit Date"}
                textStyle={{ fontSize: wp("3.8%") }}
                // onPress={() => {
                //   PostponedPress();
                // }}
                style={{
                  backgroundColor: Colors.primary,
                  borderTopLeftRadius: 0,
                  borderTopRightRadius: 0,
                  width: wp("44%"),
                }}
                // disabled={userId!=item.task_assigned_to__c }
              />
           
            </View>
          {/* ) : (
            <View style={{ justifyContent: "center", alignItems: "center" }}>
              <Text
                style={{
                  fontSize: wp("3.6%"),
                  fontWeight: "bold",
                  color: Colors.primary,
                }}
              >
                Closed
              </Text>
            </View>
          )} */}
        </>
      {/* ) : (
        []
      )} */}
    </View>
  </TouchableOpacity>
);

export default TaskCard;
