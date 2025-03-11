import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
  Dimensions,
} from "react-native";
import BlueButton from "../../../Components/BlueButton";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Colors, ApplicationStyles, Fonts } from "../../../Theme";
import NavigationService from "App/Services/NavigationService";
import GenericIcon from "App/Components/GenericIcon";
import { HelperService } from "../../../Services/Utils/HelperService";
import WhiteButton from 'App/Components/WhiteButton';

// import { Fonts } from "../../Theme";
const OnboardingCard = ({
  onboardingdata,
  onclickable,
  submitForApproval,
  loader,
  status,
}) => {
  console.log("onboardingdata",loader)
  return (
    <TouchableWithoutFeedback>
      <View style={Styles.card}>
        <View style={{ margin: 4, flexDirection: "row", marginTop: 10 }}>
          <Text
            style={{
              ...Styles.t2,
              fontSize: wp("5"),
              color: Colors.primary,
              width: wp("70%"),
            }}
          >
            {onboardingdata.Name ? onboardingdata.Name : "Aman"}
          </Text>
          <TouchableOpacity
          //  onPress={onclickable}
           >
            <GenericIcon
              name={"pencil"}
              show={true}
              // onPress={() => this.fetchcall()}
              style={{
                color: Colors.primary,
                fontSize: 22,
                alignSelf: "flex-end",
                padding: 10,
                marginTop: wp("-2"),
                marginLeft: wp("-5%"),
                zIndex: 10,
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity
          //  onPress={onclickable}
           >
            <GenericIcon
              name={"delete"}
              show={true}
              // onPress={() => this.fetchcall()}
              style={{
                color: Colors.primary,
                fontSize: 22,
                alignSelf: "flex-end",
                padding: 10,
                marginTop: wp("-2"),
                 marginLeft: wp("-3%"),
                zIndex: 10,
              }}
            />
          </TouchableOpacity>
          {/* <Text style={Styles.t2}>{onboardingdata?onboardingdata.Name:''}</Text> */}
        </View>
        <View
          style={{
            marginTop: wp("-2"),
            justifyContent: "center",
            // marginHorizontal: wp("4"),
          }}
        >

<View style={{ flexDirection: "row" }}>
            <Text
              style={{
                marginVertical: 2,
                fontWeight: "bold",
                color: "#9A9A9A",
                textAlign: "right",
                marginRight: wp("5%"),
                width: wp("33%"),
              }}
            >
             Firm Name :
            </Text>
            <Text
              style={{
                color: "#515C6F",
                marginVertical: 2,
                width: wp("45%"),
                textAlign: "left",
                // backgroundColor:'pink'
              }}
            >
              Abc
              {/* {onboardingdata.Prospect_Type__c
                ? onboardingdata.Prospect_Type__c
                : ""} */}
            </Text>
          </View>
          <View style={{ flexDirection: "row" }}>
            <Text
              style={{
                marginVertical: 2,
                fontWeight: "bold",
                color: "#9A9A9A",
                textAlign: "right",
                marginRight: wp("5%"),
                width: wp("33%"),
              }}
            >
              Created On :
            </Text>
            <Text
              style={{
                color: "#515C6F",
                marginVertical: 2,
                width: wp("32"),
                textAlign: "left",
              }}
            >
              {onboardingdata.CreatedDate ? HelperService.removeTimestringFromDate(onboardingdata.CreatedDate) : ""}
            </Text>
          </View>
          <View style={{ flexDirection: "row" }}>
            <Text
              style={{
                marginVertical: 2,
                fontWeight: "bold",
                color: "#9A9A9A",
                textAlign: "right",
                marginRight: wp("5%"),
                width: wp("33%"),
              }}
            >
              Phone No :
            </Text>
            <Text
              style={{
                color: "#515C6F",
                marginVertical: 2,
                width: wp("32"),
                textAlign: "left",
              }}
            >
              {onboardingdata.Mobile__c ? onboardingdata.Mobile__c : ""}
            </Text>
          </View>
          {/* <View style={{ flexDirection: "row" }}>
            <Text
              style={{
                marginVertical: 2,
                fontWeight: "bold",
                color: "#9A9A9A",
                textAlign: "right",
                marginRight: wp("5%"),
                width: wp("33%"),
              }}
            >
              Type :
            </Text>
            <Text
              style={{
                color: "#515C6F",
                marginVertical: 2,
                width: wp("45%"),
                textAlign: "left",
                // backgroundColor:'pink'
              }}
            >
              Contractor
              {/* {onboardingdata.Prospect_Type__c
                ? onboardingdata.Prospect_Type__c
                : ""} */}
            {/* </Text>
          </View> */} 
        </View>

        {/* <View style={{ flexDirection: "row", marginVertical: wp("1") }}>
          <View style={{ flexDirection: "column", marginHorizontal: wp("15") }}>
            <Text style={Styles.keytext}>Name</Text>
            <Text style={Styles.keytext}>Phone No.</Text>
            <Text style={Styles.keytext}>Category Type</Text> */}
        {/* <Text style={Styles.keytext}>Gross Turnover</Text> */}
        {/* </View>
          <View style={{ flexDirection: "column" }}>
            <Text style={Styles.valuetext}>{"Anmol"}</Text> */}
        {/* <Text style={Styles.valuetext}>{onboardingdata?onboardingdata.Proprietor_name__c:''}</Text> */}
        {/* <Text style={Styles.valuetext}>{"9632587410"}</Text> */}
        {/* <Text style={Styles.valuetext}>{onboardingdata?onboardingdata.Mobile__c:''}</Text> */}
        {/* <Text style={Styles.valuetext}>{}</Text> */}
        {/* <Text style={Styles.valuetext}>{onboardingdata?onboardingdata.Sub_Category__c:''}</Text> */}
        {/* <Text style={Styles.valuetext}>{"₹50000"}</Text> */}
        {/* <Text style={Styles.valuetext}>{onboardingdata?onboardingdata.Sales_Turnover__c:''}</Text> */}
        {/* </View>
        </View> */}

        {status == "Draft" || status == "Rejected" ? (
          <View style={{ flexDirection: "column", marginVertical: 0 }}>
            {/* onboardingdata.Status__c=="Draft"?<View style={{ flexDirection: 'column', marginVertical: 0, }}> */}
            {/* <TouchableOpacity style={{}} onPress={()=> submitForApproval}> */}
            <BlueButton
              style={{
                width: wp("44"),
                height: hp("4"),
                alignSelf: "center",
                marginTop: hp(".8"),
                elevation: 5,
              }}
              textStyle={{ fontSize: wp("3.3"),paddingBottom:2 }}
              loading={loader && loader == onboardingdata.Id}
              disabled={loader && loader == onboardingdata.Id}
              title={"Submit for Approval"}
              onPress={submitForApproval}
            />
            {/* </TouchableOpacity> */}
          </View>
        ) : (
          []
        )}
        {/* <TouchableOpacity style={Styles.plusIcon} >
          <GenericIcon
            name={'add'}
            //onPress={() => this.onPressCard()}
            style={{ color: Colors.white, fontSize: 45, alignSelf: 'center' }}
          />
        </TouchableOpacity> */}
      </View>
    </TouchableWithoutFeedback>

    // <TouchableWithoutFeedback
    //   onPress={onclickable}
    //   >

    //     <View style={ Style.customBox }>

    //             <View style={Style.btmBox}>

    //                 <View style={Style.strip}>
    //                     <Text style={Style.ttl}>{'Name'}</Text>
    //                     <Text style={Style.detail}>{""}</Text>
    //                 </View>
    //                 <View style={Style.strip}>
    //                     <Text style={Style.ttl}>{'Onboard Date'}</Text>
    //                     <Text style={Style.detail}>{'None'}</Text>
    //                 </View>
    //                 <View style={Style.strip}>
    //                     <Text style={Style.ttl}>{'Record Type'}</Text>
    //                     <Text style={Style.detail}>{""}</Text>
    //                 </View>
    //                 {/* <View style={Style.strip}>
    //                     <Text style={Style.ttl}>{'Month'}</Text>
    //                     <Text style={Style.detail}>{data.month__c}</Text>
    //                 </View> */}
    // {/*
    //                 <View style={Style.strip}>
    //                     <Text style={Style.ttl}>{'Status'}</Text>
    //                     <StatusLabelScreen status={'' } />
    //                 </View> */}

    //                {
    //                 //<View style={Style.strip}>
    //                   //  <Text style={Style.ttl}>{'CRM-DMS Status'}</Text>
    //                   //<Text style={Style.detail}> {data.Synced_Not_synced__c} </Text>
    //                // </View>
    //                 }
    //                 {/* {     onboardingdata.Status__c=="Pending"  ?        <View style={Style.strip}>
    //                     <Text style={Style.ttl}>{'Approval Pending At'}</Text>

    //                     <Text style={Style.detail}>{onboardingdata.Approval_Pending_At__c? onboardingdata.Approval_Pending_At__c :''}</Text>
    //                 </View> :[]} */}

    //            {     onboardingdata.Status__c=="Draft" &&onboardingdata.Onboarding__c==true ?       <View style={Style.actionContainer}>
    //                 <WhiteButton
    //                    disabled={loading1&&loading1==data.Id}
    //                    loading={loading1&&loading1==data.Id}
    //                     title={' Submit For Approval'}
    //                     textStyle={{fontSize:wp('3.2%'), color:Colors.white, }}
    //                     style={Style.actionButton}
    //                     onPress={onSubmit}

    //                 />

    //             </View> :[]}
    //             </View>
    //         </View>
    //   </TouchableWithoutFeedback>
  );
};
export default OnboardingCard;
const Styles = StyleSheet.create({
  head: {
    height: hp("23%"),
    backgroundColor: Colors.primary,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    flexDirection: "column",
  },
  t1: {
    fontSize: 23,
    fontWeight: "bold",
    marginLeft: 50,
    color: "#FFFFFF",
  },
  t2: {
    fontSize: wp("4"),
    fontWeight: "bold",
    marginLeft: wp("4"),
    color: "#343434",
    width: wp("19.7"),
    marginTop: hp("0.1"),
  },
  tt: {
    flexDirection: "row",
    height: hp("5%"),
    backgroundColor: "white",
    width: wp("85%"),
    borderRadius: 5,
    alignSelf: "center",
  },
  card: {
    marginTop: 10,
    marginBottom: 10,
    width: wp("90%"),
    borderWidth: 0,
    elevation: 3,
    borderRadius: 3,
    alignSelf: "center",
    backgroundColor: "white",
    paddingBottom: 10,
  },
  plusIcon: {
    backgroundColor: Colors.primary,
    width: 45,
    borderRadius: 50,
    marginLeft: "80%",
  },
  keytext: {
    marginVertical: 2,
    fontWeight: "bold",
    color: "#9A9A9A",
    textAlign: "right",
    fontSize: wp("3.4"),
  },
  valuetext: {
    color: "#343434",
    marginVertical: 2,
    fontWeight: "bold",
    fontSize: wp("3.4"),
  },
  box: {
    alignSelf: "center",
    backgroundColor: Colors.clrF1F9FF,
    width: Dimensions.get("window").width - 30,
    marginVertical: 5,
    padding: 15,
    borderRadius: 10,
    position: "relative",
  },
  btmBox: {
    flexDirection: "column",
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: hp("4"),
  },
  customBox: {
    alignSelf: "center",
    backgroundColor: Colors.clrF1F9FF,
    borderColor: "red",
    borderWidth: 1,
    width: Dimensions.get("window").width - 30,
    marginVertical: 5,
    padding: 12,
    borderRadius: 10,
    position: "relative",
  },
  desc: {
    color: Colors.button,
    fontSize: 12,
    fontFamily: ApplicationStyles.textFont,
  },
  detail: {
    fontFamily: ApplicationStyles.textMsgFont,
    color: Colors.clr66,
    fontSize: 14,
    // textTransform: 'capitalize',
    textAlign: "right",
    width: "55%",
  },
  strip: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  title: {
    color: Colors.button,
    fontFamily: ApplicationStyles.textMsgFont,
    fontSize: 16,
  },
  ttl: {
    color: Colors.clr66,
    fontFamily: ApplicationStyles.textFont,
    fontSize: 14,
    minWidth: "25%",
  },
  tuple: {
    borderBottomColor: Colors.button,
    flexDirection: "row",
  },
  userCircle: {
    alignItems: "center",
    backgroundColor: Colors.user,
    borderRadius: 50,
    flexDirection: "row",
    height: 56,
    justifyContent: "center",
    width: 56,
  },
  userDtl: {
    padding: 10,
    justifyContent: "center",
  },
  userIcon: {
    height: 16,
    width: 16,
  },
  checkbox: {
    borderRadius: 5,
    marginRight: 18,
  },
  actionButton: {
    minWidth: wp("45%"),
    height: hp("4%"),
    backgroundColor: Colors.primary,
    alignContent: "center",
    alignSelf: "center",
    justifyContent: "center",
    marginLeft: wp("20%"),
    marginTop: wp("5%"),
  },
  actionContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  trashButtonIcon: {
    color: Colors.error,
    fontSize: wp("7%"),
    alignSelf: "center",
    position: "absolute",
    top: -10,
    right: 5,
    padding: 10,
  },
});
