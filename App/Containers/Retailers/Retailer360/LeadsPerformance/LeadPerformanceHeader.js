import { View, Text } from "native-base";
import React, { Component } from "react";

import { HelperService } from "App/Services/Utils/HelperService";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { TouchableOpacity, ScrollView } from "react-native";
import MenuActions from "App/Stores/Menu/Actions";
import { connect } from "react-redux";


class LeadPerformanceHeader extends Component {
  constructor(props) {
    super(props);
    this.state = { selectedButton: "tag" };
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
        obj.task_status_name != "Closed"
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

  // getOverdue(list){
  //   let count = 0;
  //   list.map((obj)=> {obj.town.map((obj.town)) => {
  //     if(obj.town.owner_number__c==null)
  //     { count=count+1}}}

  //   return count
  // }

  render() {
    const { data } = this.props;
    // console.log("filter",this.getEmd(data))
    // console.log("abssb",!HelperService.isNotPast(data.expected_maturity_date__c))

    return (
      <View style={{ width: wp("100%"), justifyContent: "center" }}>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            marginTop: hp("2%"),
          }}
        >
          <TouchableOpacity
            style={{
              borderWidth: 0.9,
              borderColor: "grey",
              alignItems: "center",
              justifyContent: "center",
              width: wp("27%"),
              height: hp("5.8%"),
              backgroundColor: "#5d0000",
              borderRadius: 11,
              margin: wp("1%"),
              borderTopColor:
                this.state.selectedButton === "tag" ? "white" : "#b06060",
              borderTopWidth: 1.8,
            }}
            onPress={() => {
              // NavigationService.navigate("VariableDiscount");
              // this.setState({ selectedButton: "tag" });
            }}
          >
            {/* onPress={() => {NavigationService.navigate('StartVisitForm'); this.scrollToIndex(0)}} */}
            <Text
              style={{
                color:
                  this.state.selectedButton === "tag" ? "white" : "#bf7f7f",
                textAlign: "center",
                fontWeight: "bold",
                fontFamily: '"HelveticaNeue_CondensedBold"',
                opacity: this.state.selectedButton === "tag" ? 0.9 : 0.6,
                fontSize: wp("2.9%"),
              }}
            >
              ALL LEADS
            </Text>

            <Text
              style={{
                color:
                  this.state.selectedButton === "tag" ? "white" : "#bf7f7f",
                textAlign: "center",
                fontWeight: "bold",
                fontFamily: '"HelveticaNeue_CondensedBold"',
                opacity: this.state.selectedButton === "tag" ? 0.9 : 0.6,
                fontSize: wp("2.9%"),
              }}
            >
              {"(102)"}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
const mapStateToProps = (state) => ({
  token: state.user.token,
  agentid: state.user.id,
  pjpFilters: state.menu.leadFilters,

  leadlist: state.menu.leadlist,
});
const mapDispatchToProps = (dispatch) => ({
  getlead: (params) => dispatch(MenuActions.GetLead(params)),
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LeadPerformanceHeader);
