import { View, Text } from "native-base";
import React, { Component } from "react";
import { Colors, ApplicationStyles } from "App/Theme";
import { HelperService } from "App/Services/Utils/HelperService";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { TouchableOpacity, ScrollView } from "react-native";
import { connect } from "react-redux";
import LinearGradient from "react-native-linear-gradient";
import ProductActions from "App/Stores/Products/Actions";

class InfluencerManagementHeader extends Component {
  constructor(props) {
    super(props);
    this.state = { selectedButton: "approved" };
  }

  getPending(list) {
    let count = 0;
    list.map((obj) => {
      if (obj.owner_number__c == null) {
        count = count + 1;
      }
    });
    return count;
  }

  getEmd(list) {
    let count = 0;
    list.map((obj) => {
      if (
        obj.expected_maturity_date__c &&
        !HelperService.isNotPast(obj.expected_maturity_date__c)
      ) {
        count = count + 1;
      }
    });
    return count;
  }

  getDMI(list) {
    let count = 0;
    list.map((obj) => {
      if (
        !obj.dmi_attachment__c &&
        obj.site_name == "Hot Hot" &&
        (obj.site_quality == "Premium" || obj.site_quality == "Semi Premium")
      ) {
        count = count + 1;
      }
    });
    return count;
  }

  getDMIEn(list) {
    let count = 0;
    list.map((obj) => {
      if (
        !obj.ilp_registered__c &&
        obj.dmi_attachment__c &&
        obj.site_name == "Hot Hot" &&
        (obj.site_quality == "Premium" || obj.site_quality == "Semi Premium")
      ) {
        count = count + 1;
      }
    });
    return count;
  }

  checkOverDueTask(list) {
    let value = false;
    list.map((obj) => {
      if (
        !HelperService.isNotPast(obj.task_date__c) &&
        obj.task_status_name != "approvald"
      ) {
        value = true;
      }
    });
    return value;
  }

  getOverDueTask(list) {
    let count = 0;

    list.map((obj) => {
      if (this.checkOverDueTask(obj.Task_data)) {
        count = count + 1;
      }
    });
    return count;
  }

  render() {
    const { data, InfluencerTabFilter } = this.props;
    // console.log("filter",this.getEmd(data))
    // console.log("abssb",!HelperService.isNotPast(data.expected_maturity_date__c))

    return (
      <View style={{ width: wp("100%"), justifyContent: "center" }}>
        <LinearGradient
          colors={["transparent", Colors.darkRed]}
          start={{ x: 0, y: 0.8 }}
          end={{ x: 0.6, y: 0.7 }}
          style={{
            height: hp("8%"),
            width: wp(".50%"),

            // opacity: 0.156,
            top: hp("2%"),
            alignSelf: "flex-end",
            zIndex: 15,
          }}
        >
          {/* <GenericIcon
            // show={true}
            style={{
              fontSize: wp("13%"),
              fontWeight: "bold",
              marginTop: hp("0.5%"),
              color: "white",
              opacity: 0.3,
              marginLeft: wp("1%"),
            }}
            name={"arrow-right"}
          /> */}
        </LinearGradient>
        <ScrollView
          showsHorizontalScrollIndicator={false}
          horizontal={true}
          style={{
            margin: "0%",
            flexDirection: "row",
            marginTop: hp("-5.7%"),
            zIndex: 13,
          }}
          ref={(ref) => {
            this.flatListRef = ref;
          }}
        >
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignapproveds: "center",
            }}
          >
            <TouchableOpacity
              style={{
                borderWidth: 0.9,
                borderColor: "grey",
                alignapproveds: "center",
                justifyContent: "center",
                width: wp("27%"),
                height: hp("5.8%"),
                backgroundColor: "#5d0000",
                borderRadius: 11,
                margin: wp("1%"),
                borderTopColor:
                  this.state.selectedButton === "approved"
                    ? "white"
                    : "#b06060",
                borderTopWidth: 1.8,
              }}
              onPress={() => {
                // NavigationService.navigate("approvedDetail");
                this.setState({ selectedButton: "approved" });
                InfluencerTabFilter("approved");
              }}
            >
              <Text
                style={{
                  color:
                    this.state.selectedButton === "approved"
                      ? "white"
                      : "#bf7f7f",
                  textAlign: "center",
                  fontWeight: "bold",
                  fontFamily: '"HelveticaNeue_CondensedBold"',
                  opacity: this.state.selectedButton === "approved" ? 0.9 : 0.6,
                  fontSize: wp("2.9%"),
                }}
              >
                APPROVED
              </Text>

              <Text
                style={{
                  color:
                    this.state.selectedButton === "approved"
                      ? "white"
                      : "#bf7f7f",
                  textAlign: "center",
                  fontWeight: "bold",
                  fontFamily: '"HelveticaNeue_CondensedBold"',
                  opacity: this.state.selectedButton === "approved" ? 0.9 : 0.6,
                  fontSize: wp("2.9%"),
                }}
              >
                {"(1)"}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                borderWidth: 0.9,
                borderColor: "grey",
                alignapproveds: "center",
                justifyContent: "center",
                width: wp("27%"),
                height: hp("5.8%"),
                backgroundColor: "#5d0000",
                borderRadius: 11,
                margin: wp("1%"),
                borderTopColor:
                  this.state.selectedButton === "draft" ? "white" : "#b06060",
                borderTopWidth: 1.8,
              }}
              onPress={() => {
                // NavigationService.navigate("VariableDiscount");
                this.setState({ selectedButton: "draft" });
                InfluencerTabFilter("draft");
              }}
            >
              {/* onPress={() => {NavigationService.navigate('StartVisitForm'); this.scrollToIndex(0)}} */}
              <Text
                style={{
                  color:
                    this.state.selectedButton === "draft" ? "white" : "#bf7f7f",
                  textAlign: "center",
                  fontWeight: "bold",
                  fontFamily: '"HelveticaNeue_CondensedBold"',
                  opacity: this.state.selectedButton === "draft" ? 0.9 : 0.6,
                  fontSize: wp("2.9%"),
                }}
              >
                DRAFT
              </Text>

              <Text
                style={{
                  color:
                    this.state.selectedButton === "draft" ? "white" : "#bf7f7f",
                  textAlign: "center",
                  fontWeight: "bold",
                  fontFamily: '"HelveticaNeue_CondensedBold"',
                  opacity: this.state.selectedButton === "draft" ? 0.9 : 0.6,
                  fontSize: wp("2.9%"),
                }}
              >
                {"(1)"}
              </Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "column",
              alignapproveds: "center",
            }}
          >
            <TouchableOpacity
              style={{
                borderWidth: 0.9,
                borderColor: "grey",
                alignapproveds: "center",
                justifyContent: "center",
                width: wp("27%"),
                height: hp("5.8%"),
                backgroundColor: "#5d0000",
                borderRadius: 11,
                margin: wp("1%"),
                borderTopColor: "white",
                borderTopWidth: 1.8,
                borderTopColor:
                  this.state.selectedButton === "pending" ? "white" : "#b06060",
                borderTopWidth: 1.8,
              }}
              onPress={() => {
                // NavigationService.navigate("approvedDetail");
                this.setState({ selectedButton: "pending" });
                InfluencerTabFilter("pending");
              }}
            >
              <Text
                style={{
                  color:
                    this.state.selectedButton === "pending"
                      ? "white"
                      : "#bf7f7f",
                  textAlign: "center",
                  fontWeight: "bold",
                  fontFamily: '"HelveticaNeue_CondensedBold"',
                  opacity: this.state.selectedButton === "pending" ? 0.9 : 0.6,
                  fontSize: wp("2.9%"),
                }}
              >
                PENDING
              </Text>

              <Text
                style={{
                  color:
                    this.state.selectedButton === "pending"
                      ? "white"
                      : "#bf7f7f",
                  textAlign: "center",
                  fontWeight: "bold",
                  fontFamily: '"HelveticaNeue_CondensedBold"',
                  opacity: this.state.selectedButton === "pending" ? 0.9 : 0.6,
                  fontSize: wp("2.9%"),
                }}
              >
                {"(1)"}
              </Text>
            </TouchableOpacity>
          </View>

          <View
            style={{
              display: "flex",
              flexDirection: "column",
              alignapproveds: "center",
            }}
          >
            <TouchableOpacity
              style={{
                borderWidth: 0.9,
                borderColor: "grey",
                alignapproveds: "center",
                justifyContent: "center",
                width: wp("27%"),
                height: hp("5.8%"),
                backgroundColor: "#5d0000",
                borderRadius: 11,
                margin: wp("1%"),
                borderTopColor:
                  this.state.selectedButton === "reject" ? "white" : "#b06060",
                borderTopWidth: 1.8,
              }}
              onPress={() => {
                // NavigationService.navigate("approvedDetail");
                this.setState({ selectedButton: "reject" });
                InfluencerTabFilter("reject");
              }}
            >
              <Text
                style={{
                  color:
                    this.state.selectedButton === "reject"
                      ? "white"
                      : "#bf7f7f",
                  textAlign: "center",
                  fontWeight: "bold",
                  fontFamily: '"HelveticaNeue_CondensedBold"',
                  opacity: this.state.selectedButton === "reject" ? 0.9 : 0.6,
                  fontSize: wp("2.9%"),
                }}
              >
                REJECT
              </Text>

              <Text
                style={{
                  color:
                    this.state.selectedButton === "reject"
                      ? "white"
                      : "#bf7f7f",
                  textAlign: "center",
                  fontWeight: "bold",
                  fontFamily: '"HelveticaNeue_CondensedBold"',
                  opacity: this.state.selectedButton === "reject" ? 0.9 : 0.6,
                  fontSize: wp("2.9%"),
                }}
              >
                {"(1)"}
              </Text>
            </TouchableOpacity>
          </View>

          <View
            style={{
              display: "flex",
              flexDirection: "column",
              alignapproveds: "center",
            }}
          ></View>
        </ScrollView>
      </View>
    );
  }
}
const mapStateToProps = (state) => ({});
const mapDispatchToProps = (dispatch) => ({
  InfluencerTabFilter: (params) =>
    dispatch(ProductActions.InfluencerTabFilter(params)),
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(InfluencerManagementHeader);
