import { View, Text } from "native-base";
import React, { Component } from "react";
import SearchableDropdown from "App/Components/SearchableDropdown";
import CircularProgressBar from "App/Components/CircularProgressBar";
import DatePicker from "App/Components/DatePicker";
import DatePickerStyles from "App/Components/DatePicker/DatePickerStyles";
import GenericIcon from "App/Components/GenericIcon";
import { Colors, ApplicationStyles } from "App/Theme";
import { HelperService } from "App/Services/Utils/HelperService";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { TouchableOpacity, ScrollView, StyleSheet } from "react-native";
import NavigationService from "App/Services/NavigationService";
// import Card from "App/Components/Card/Card";
import MenuActions from "App/Stores/Menu/Actions";
import { connect } from "react-redux";
import LinearGradient from "react-native-linear-gradient";
import ProductActions from "App/Stores/Products/Actions";
import VisitModal from "./Modals/VisitModal";
import CommonActions from "App/Stores/Common/Actions";
import ViewOpenModal from "App/Containers/Visits/VisitForm/Modals/ViewOpenModal";

class VisitFormHeader extends Component {
  constructor(props) {
    super(props);
    this.state = { selectedButton: "draft" };
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

  // getOverdue(list){
  //   let count = 0;
  //   list.map((obj)=> {obj.town.map((obj.town)) => {
  //     if(obj.town.owner_number__c==null)
  //     { count=count+1}}}

  //   return count
  // }

  render() {
    const { data, merchandiseTabFilter } = this.props;
    // console.log("filter",this.getEmd(data))
    // console.log("abssb",!HelperService.isNotPast(data.expected_maturity_date__c))

    return (
      <ScrollView
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        style={Styles.container}
      >
        <View
          style={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          <TouchableOpacity
            style={{ ...Styles.button }}
            onPress={() => {
              NavigationService.navigate("LeadScreen");
            }}
          >
            {/* onPress={() => {NavigationService.navigate('StartVisitForm'); this.scrollToIndex(0)}} */}
            <Text style={Styles.buttonText}>ADD A LEAD</Text>
          </TouchableOpacity>
        </View>

        <View
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <TouchableOpacity
            style={{ ...Styles.button }}
            onPress={() => {
              this.props.openModal({
                content3: (
                  <VisitModal
                    heading3ContainerStyle="2.5"
                    onClose={() => {
                      closeModal();
                    }}
                  />
                ),
                heading3: "PLAN A VISIT",

                bodyFlexHeight3: 0.85,
                headingStyle3: hp("34.5%"),
              });
            }}
          >
            <Text style={Styles.buttonText}>PLAN A VISIT</Text>
          </TouchableOpacity>
        </View>

        <View
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <TouchableOpacity
            style={{ ...Styles.button }}
            onPress={() => {
              NavigationService.navigate("MerchandiserForm");
            }}
          >
            <Text style={Styles.buttonText}>MERCHANDISE</Text>
          </TouchableOpacity>
        </View>

        <View
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <TouchableOpacity
            style={{ ...Styles.button }}
            onPress={() => {
              this.props.openModal({
                content3: (
                  <ViewOpenModal
                    onClose={() => {
                      closeModal();
                    }}
                  />
                ),
                heading3: "TASK MANAGEMENT",
                bodyFlexHeight3: 0.8,
              });
            }}
          >
            <Text style={Styles.buttonText}>VIEW OPEN TASK</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
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
  merchandiseTabFilter: (params) =>
    dispatch(ProductActions.merchandiseTabFilter(params)),
  openModal: (params) => dispatch(CommonActions.openModalThree(params)),
  closeModal: (params) => dispatch(CommonActions.closeModalThree(params)),
});
export default connect(mapStateToProps, mapDispatchToProps)(VisitFormHeader);

const Styles = StyleSheet.create({
  button: {
    borderWidth: 0.9,
    borderColor: "grey",
    justifyContent: "center",
    width: wp("25%"),
    height: hp("5.8%"),
    backgroundColor: "#5d0000",
    borderRadius: 11,
    margin: wp("1%"),
    borderTopColor: "white",
    borderTopWidth: 1.8,
    padding: 2,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
    fontFamily: '"HelveticaNeue_CondensedBold"',
    opacity: 0.9,
    fontSize: wp("3%"),
  },
  container: {
    margin: "0%",
    flexDirection: "row",
    marginTop: hp("1%"),
    // justifyContent: "center",
    width: "100%",
  },
});
