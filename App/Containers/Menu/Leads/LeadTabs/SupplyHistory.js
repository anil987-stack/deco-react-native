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
import {
  TouchableOpacity,
  ScrollView,
  TextInput,
  StyleSheet,
  CheckBox,
} from "react-native";
import SearchBar from "App/Components/SearchBar";
import NavigationService from "App/Services/NavigationService";
// import Card from "App/Components/Card/Card";
import MenuActions from "App/Stores/Menu/Actions";
import { connect } from "react-redux";
import LinearGradient from "react-native-linear-gradient";
import { ImageBackground } from "react-native";
import { HeaderNew } from "App/Components/Headerbar/HeaderNew";
// import FormBackground from "App/Components/FormInput/FormBackground";
import ProjectInfo from "App/Containers/Menu/Leads/LeadTabs/ProjectInfo";
import ContactInfo from "App/Containers/Menu/Leads/LeadTabs/ContactInfo";
import LinkCard from "App/Containers/Menu/Leads/LeadTabs/LinkCard";
import LinkMainCard from "App/Containers/Menu/Leads/LeadTabs/LinkMainCard";
// import AddLinkModal from "./LeadTabs/AddLinkModal";
import CommonActions from "App/Stores/Common/Actions";
// import FormBackground from "../../../../Components/FormInput/FormBackground";
// import ApprovedCard from "./ApprovedCard";
// import Draft from "./Draft";
// import Pending from "./Pending";
// import Rejected from "./Rejected";
import SupplyForm from "./SupplyForm";
import SupplyInfo from "./SupplyInfo";
import SupplyHistoryInfo from "./SupplyHistoryInfo";
import SupplyHistoryForm from "./SupplyHistoryForm";
class SupplyHistory extends Component {
  constructor(props) {
    super(props);
    this.state = { selectedButton: "DRAFT" };
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
      <>
        <ImageBackground
          style={{ width: "100%", height: "100%", flex: 1 }}
          //  blurRadius={this.props.openModal ? 4 : 0.6}
          resizeMode="cover"
          source={require("App/Assets/Images/startDay.png")}
        >
          {/* <View style={{ flex: 1, marginBottom: hp("30%") }}> */}
          {/* <HeaderNew
            title={"DOCUMENT MANAGEMENT"}
            textStyle={{
              top: hp("-1.8%"),
              marginLeft: wp("-10%"),
              fontSize: wp("3.25%"),
            }}
            onPress={() => NavigationService.goback()}
          /> */}
           <HeaderNew
            title={"SUPPLY HISTORY"}
            textStyle={{
              marginTop: hp("-1%"),
              marginLeft: wp("-8%"),
              fontSize: wp("4.6%"),
            }}
            onPress={() => NavigationService.goback()}
          />
         

          <ScrollView>
            {/* if(this.state.selectedButton === "tag"){
               <FormBackground
               cardStyle={{ marginTop: hp("3%"), height: hp("68%") }}
               content = {
                  <ProjectInfo/>  }
               />
               } */}

            <SupplyHistoryForm
            cardStyle={{ marginTop: hp("4.5%"), height: hp("70%") }}
            content={<SupplyHistoryInfo />}/>

           
          </ScrollView>
        </ImageBackground>
      </>
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
  openModal: (params) => dispatch(CommonActions.openModalTwo(params)),
  closeModal: (params) => dispatch(CommonActions.closeModalTwo(params)),
});
export default connect(mapStateToProps, mapDispatchToProps)(SupplyHistory);



const Styles = StyleSheet.create({
  text: {
    color: Colors.white,
    fontSize: wp("3.5%"),
    fontWeight: "bold",
    fontFamily: "HelveticaNeue_CondensedBold",
  },
  buttons: {
    // marginHorizontal: 60,
    marginTop: hp("1%"),
    width: wp("60%"),
    borderRadius: 28,
    height: hp("7%"),
    alignSelf: "center",
  },
  buttontextStyle: {
    textTransform: "uppercase",
    alignSelf: "center",
  },
  container: {
    flex: 1,
    backgroundColor: "transparent",
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  triangle: {
    width: wp("40.25%"),
    height: hp("0%"),
    backgroundColor: "transparent",
    borderStyle: "solid",
    borderTopWidth: hp("5%"),
    borderLeftWidth: wp("34%"),
    borderRightWidth: wp("8.5%"),
    // borderBottomWidth: hp("1%"),
    borderLeftColor: "#5c5c5c",
    borderRightColor: "transparent",
    // borderBottomColor: '#e76f51',
    borderTopColor: "#5c5c5c",
    marginTop: hp(" -.10%"),
    // transform: [{ rotate: '180deg' }]
  },
  triangle1: {
    width: wp("40%"),
    height: hp("0%"),
    backgroundColor: "transparent",
    borderStyle: "solid",
    borderTopWidth: hp("4.5%"),
    borderLeftWidth: wp("10%"),
    borderRightWidth: wp("7%"),
    // borderBottomWidth: 50,
    borderLeftColor: "white",
    borderRightColor: "transparent",
    // borderBottomColor: '#e76f51',
    borderTopColor: "white",
    marginTop: wp("-9.25%"),
    elevation: 20,

  },
  searchContainer: {
    // paddingVertical: 21,
    width: "100%",
    borderRadius: 7,
    // paddingHorizontal: 1,
    elevation: 0,
    backgroundColor:"white",
    fontSize: wp("3.8%"),
    fontWeight: "700",
    
    alignSelf: "center",
    // marginBottom: "2%",
    marginTop: "-0.5%",
    height: hp("4.5%"),
   
    borderWidth:1,
    marginLeft:"-0.5%",
    
    borderColor:"white",
   opacity:0.3
    // padding
  },
});
