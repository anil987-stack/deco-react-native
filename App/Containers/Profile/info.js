import React, { Component } from "react";
import { View, Text, ScrollView } from "react-native";
import Verticalstrip from "App/Components/GenericDisplayCard/GenericDisplayCardVerticalStrip";
import { Colors } from "App/Theme";
import Style from "./ProfileStyles";
import { connect } from "react-redux";
import { HelperService } from "../../Services/Utils/HelperService";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

class Profileinfo extends Component {
  render() {
    // const { userdetail } = this.props;
    // let record =
    //   userdetail.Employees__r.records && userdetail.Employees__r.records[0];
    // console.log("rrrrrrrrr", record);
    return (
      <View>
        <ScrollView>
          <View
            style={{
              flex: 1,
              backgroundColor: "transparent",
            }}
          >
            <View
              style={{
                marginTop: hp("1.5"),
                marginLeft: wp("7"),
                marginRight: wp("8"),
              }}
            >
              <Verticalstrip
                label={"Employee Name"}
                value={"Prabhu Mahadevan"}
                // value={record.Employee_Name__c ? record.Employee_Name__c : ""}
                style={{ marginTop: 10 }}
                labelStyle={Style.label}
                valueStyle={Style.valuestyle}
              />
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "flex-start",
                marginTop: 10,
                marginHorizontal: 10,
                width: "100%",
              }}
            >
              <View style={{ marginLeft: wp("4"), width: wp("32") }}>
                <Verticalstrip
                  label={"Employee Id"}
                  value={"1067"}
                  // value={record.Name ? record.Name : ""}
                  style={{ marginTop: 10 }}
                  labelStyle={Style.label}
                  valueStyle={Style.valuestyle}
                />
                <Verticalstrip
                  label={"Phone No."}
                  value={"9876756754"}
                  // value={userdetail.MobilePhone ? userdetail.MobilePhone : ""}
                  style={{ marginTop: 10 }}
                  labelStyle={Style.label}
                  valueStyle={Style.valuestyle}
                />
              </View>
              <View style={{ marginLeft: wp("4"), width: wp("32") }}>
                <Verticalstrip
                  label={"Designation"}
                  value={"FSO"}
                  // value={record.Designation__c ? record.Designation__c : ""}
                  style={{ marginTop: 10 }}
                  labelStyle={Style.label}
                  valueStyle={Style.valuestyle}
                />
                <Verticalstrip
                  label={"Manager Name"}
                  value={"Anand Mahadevan"}
                  // value={
                  //   record.Manager__r && record.Manager__r.Name
                  //     ? record.Manager__r.Name
                  //     : ""
                  // }
                  style={{ marginTop: 10 }}
                  labelStyle={Style.label}
                  valueStyle={Style.valuestyle}
                />
              </View>
            </View>

            <View
              style={{
                marginTop: hp("1.5"),
                marginLeft: wp("7"),
                marginRight: wp("8"),
              }}
            >
              <Verticalstrip
                label={"Email Id"}
                value={"Prabhu@gmail.com"}
                // value={record.Email_ID__c ? record.Email_ID__c : ""}
                labelStyle={Style.label}
                valueStyle={Style.valuestyle}
              />
            </View>

            <View
              style={{
                flexDirection: "row",
                justifyContent: "flex-start",
                marginTop: 5,
                marginHorizontal: 10,
                width: "100%",
                marginBottom: 10,
              }}
            >
              <View style={{ marginLeft: wp("5"), width: wp("32") }}>
                <Verticalstrip
                  label={"Date of Birth"}
                  value={"08-04-1999"}
                  // value={record.Date_of_Birth__c ? record.Date_of_Birth__c.split("-")
                  // .reverse()
                  // .join("-") : ""}
                  style={{ marginTop: 10 }}
                  labelStyle={Style.label}
                  valueStyle={Style.valuestyle}
                />
                {/* <Verticalstrip
                  label={"Date of Birth"}
                  value={record.Date_of_Birth__c ? record.Date_of_Birth__c : ""}
                  style={{ marginTop: 10 }}
                  labelStyle={Style.label}
                  valueStyle={Style.valuestyle}
                /> */}
                {/* <Verticalstrip
                  label={"Vertical"}
                  value={record.Vertical__c ? record.Vertical__c : ""}
                  style={{ marginTop: 10 }}
                  labelStyle={Style.label}
                  valueStyle={Style.valuestyle}
                /> */}
                <Verticalstrip
                  label={"Branch"}
                  value={"Delhi"}
                  // value={"Jaipur"}
                  // value={
                  //   record.Branch_Master__r &&
                  //   record.Branch_Master__r.Branch_Name__c
                  //     ? record.Branch_Master__r.Branch_Name__c
                  //     : ""
                  // }
                  style={{ marginTop: 10 }}
                  labelStyle={Style.label}
                  valueStyle={Style.valuestyle}
                />
                {/* <Verticalstrip
                  label={"Base Location"}
                  value={
                    record.Base_Location_employee__c
                      ? record.Base_Location_employee__c
                      : ""
                  }
                  style={{ marginTop: 10 }}
                  labelStyle={Style.label}
                  valueStyle={Style.valuestyle}
                /> */}
              </View>
              <View
                style={{ marginLeft: "5%", width: "38%", marginBottom: 10 }}
              >
                {/* <Verticalstrip
                  label={"Manager Id"}
                  value={
                    record.Manager__r && record.Manager__r.Employee_Code__c
                      ? record.Manager__r.Employee_Code__c
                      : ""
                  }
                  style={{ marginTop: 10 }}
                  labelStyle={Style.label}
                  valueStyle={Style.valuestyle}
                /> */}
                <Verticalstrip
                  label={"Date of Joining"}
                  value={"08-04-2022"}
                  // value={
                  //   record.Date_Of_Joining__c
                  //     ? record.Date_Of_Joining__c.split("-")
                  //         .reverse()
                  //         .join("-")
                  //     : ""
                  // }
                  style={{ marginTop: 10 }}
                  labelStyle={Style.label}
                  valueStyle={Style.valuestyle}
                />
                {/* <Verticalstrip
                  label={"Region"}
                  value={
                    record.Region_Master__r && record.Region_Master__r.Name
                      ? record.Region_Master__r.Name
                      : ""
                  }
                  style={{ marginTop: 10 }}
                  labelStyle={Style.label}
                  valueStyle={Style.valuestyle}
                /> */}
                {/* <Verticalstrip
                  label={"Emp Grade"}
                  value={record.Grade__c ? record.Grade__c : ""}
                  style={{ marginTop: 10 }}
                  labelStyle={Style.label}
                  valueStyle={Style.valuestyle}
                /> */}

                {/* <Verticalstrip
                  label={"Vendor Code"}
                  value={record.Vendor_Code__c ? record.Vendor_Code__c : ""}
                  style={{ marginTop: 10 }}
                  labelStyle={Style.label}
                  valueStyle={Style.valuestyle}
                /> */}
                {/* <Verticalstrip
                  label={"Base Location"}
                  value={
                    record.Base_Location_employee__c
                      ? record.Base_Location_employee__c
                      : ""
                  }
                  style={{ marginTop: 10 }}
                  labelStyle={Style.label}
                  valueStyle={Style.valuestyle}
                /> */}
              </View>
            </View>
            {/* <View
              style={{
                marginTop: hp("2"),
                marginLeft: wp("7"),
                marginRight: wp("8"),
                marginBottom: hp("2"),
              }}
            >
              <Verticalstrip
                label={"Address"}
                value={""}
                labelStyle={Style.label}
                valueStyle={Style.valuestyle}
              />
            </View> */}
          </View>
        </ScrollView>
      </View>
    );
  }
}
const mapStateToProps = (state) => ({
  token: state.user.token,
  userdetail: state.startday.userDetailList,
});

export default connect(mapStateToProps)(Profileinfo);
