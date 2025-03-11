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
import { TouchableOpacity, ScrollView } from "react-native";
import NavigationService from "App/Services/NavigationService";
// import Card from "App/Components/Card/Card";
import MenuActions from "App/Stores/Menu/Actions";
import { connect } from "react-redux";
import LinearGradient from "react-native-linear-gradient";

class LeadHeader extends Component {
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
        
        <ScrollView
          showsHorizontalScrollIndicator={false}
          horizontal={true}
          style={{ margin: "0%", flexDirection: "row", marginTop: hp("2%") }}
          ref={(ref) => {
            this.flatListRef = ref;
          }}
        >
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
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
                this.setState({ selectedButton: "tag" });
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
                OPEN
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
                {"(45)"}
              </Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
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
                borderTopColor: "white",
                borderTopWidth: 1.8,
                borderTopColor:
                  this.state.selectedButton === "receipt" ? "white" : "#b06060",
                borderTopWidth: 1.8,
              }}
              onPress={() => {
                // NavigationService.navigate("ItemDetail");
                this.setState({ selectedButton: "receipt" });
              }}
            >
              <Text
                style={{
                  color:
                    this.state.selectedButton === "receipt"
                      ? "white"
                      : "#bf7f7f",
                  textAlign: "center",
                  fontWeight: "bold",
                  fontFamily: '"HelveticaNeue_CondensedBold"',
                  opacity: this.state.selectedButton === "receipt" ? 0.9 : 0.6,
                  fontSize: wp("2.9%"),
                }}
              >
                OVERDUE
              </Text>

              <Text
                style={{
                  color:
                    this.state.selectedButton === "receipt"
                      ? "white"
                      : "#bf7f7f",
                  textAlign: "center",
                  fontWeight: "bold",
                  fontFamily: '"HelveticaNeue_CondensedBold"',
                  opacity: this.state.selectedButton === "receipt" ? 0.9 : 0.6,
                  fontSize: wp("2.9%"),
                }}
              >
                {"(45)"}
              </Text>
            </TouchableOpacity>
          </View>

          <View
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
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
                  this.state.selectedButton === "dormat" ? "white" : "#b06060",
                borderTopWidth: 1.8,
              }}
              onPress={() => {
                // NavigationService.navigate("ItemDetail");
                this.setState({ selectedButton: "dormat" });
              }}
            >
              <Text
                style={{
                  color:
                    this.state.selectedButton === "dormat"
                      ? "white"
                      : "#bf7f7f",
                  textAlign: "center",
                  fontWeight: "bold",
                  fontFamily: '"HelveticaNeue_CondensedBold"',
                  opacity: this.state.selectedButton === "dormat" ? 0.9 : 0.6,
                  fontSize: wp("2.9%"),
                }}
              >
                DORMAT
              </Text>

              <Text
                style={{
                  color:
                    this.state.selectedButton === "dormat"
                      ? "white"
                      : "#bf7f7f",
                  textAlign: "center",
                  fontWeight: "bold",
                  fontFamily: '"HelveticaNeue_CondensedBold"',
                  opacity: this.state.selectedButton === "dormat" ? 0.9 : 0.6,
                  fontSize: wp("2.9%"),
                }}
              >
                {"(45)"}
              </Text>
            </TouchableOpacity>
          </View>

          <View
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
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
                  this.state.selectedButton === "close" ? "white" : "#b06060",
                borderTopWidth: 1.8,
              }}
              onPress={() => {
                // NavigationService.navigate("ItemDetail");
                this.setState({ selectedButton: "close" });
              }}
            >
              <Text
                style={{
                  color:
                    this.state.selectedButton === "close" ? "white" : "#bf7f7f",
                  textAlign: "center",
                  fontWeight: "bold",
                  fontFamily: '"HelveticaNeue_CondensedBold"',
                  opacity: this.state.selectedButton === "close" ? 0.9 : 0.6,
                  fontSize: wp("2.9%"),
                }}
              >
                CLOSE
              </Text>

              <Text
                style={{
                  color:
                    this.state.selectedButton === "close" ? "white" : "#bf7f7f",
                  textAlign: "center",
                  fontWeight: "bold",
                  fontFamily: '"HelveticaNeue_CondensedBold"',
                  opacity: this.state.selectedButton === "close" ? 0.9 : 0.6,
                  fontSize: wp("2.9%"),
                }}
              >
                {"(45)"}
              </Text>
            </TouchableOpacity>
          </View>

          <View
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
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
                  this.state.selectedButton === "item" ? "white" : "#b06060",
                borderTopWidth: 1.8,
              }}
              onPress={() => {
                // NavigationService.navigate("ItemDetail");
                this.setState({ selectedButton: "item" });
              }}
            >
              <Text
                style={{
                  color:
                    this.state.selectedButton === "item" ? "white" : "#bf7f7f",
                  textAlign: "center",
                  fontWeight: "bold",
                  fontFamily: '"HelveticaNeue_CondensedBold"',
                  opacity: this.state.selectedButton === "item" ? 0.9 : 0.6,
                  fontSize: wp("2.9%"),
                }}
              >
                Item Detail
              </Text>

              <Text
                style={{
                  color:
                    this.state.selectedButton === "item" ? "white" : "#bf7f7f",
                  textAlign: "center",
                  fontWeight: "bold",
                  fontFamily: '"HelveticaNeue_CondensedBold"',
                  opacity: this.state.selectedButton === "item" ? 0.9 : 0.6,
                  fontSize: wp("2.9%"),
                }}
              >
                {"(45)"}
              </Text>
            </TouchableOpacity>
          </View>

          <View
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
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
                  this.state.selectedButton === "item" ? "white" : "#b06060",
                borderTopWidth: 1.8,
              }}
              onPress={() => {
                // NavigationService.navigate("ItemDetail");
                this.setState({ selectedButton: "item" });
              }}
            >
              <Text
                style={{
                  color:
                    this.state.selectedButton === "item" ? "white" : "#bf7f7f",
                  textAlign: "center",
                  fontWeight: "bold",
                  fontFamily: '"HelveticaNeue_CondensedBold"',
                  opacity: this.state.selectedButton === "item" ? 0.9 : 0.6,
                  fontSize: wp("2.9%"),
                }}
              >
                Item Detail
              </Text>

              <Text
                style={{
                  color:
                    this.state.selectedButton === "item" ? "white" : "#bf7f7f",
                  textAlign: "center",
                  fontWeight: "bold",
                  fontFamily: '"HelveticaNeue_CondensedBold"',
                  opacity: this.state.selectedButton === "item" ? 0.9 : 0.6,
                  fontSize: wp("2.9%"),
                }}
              >
                {"(45)"}
              </Text>
            </TouchableOpacity>
          </View>

          <View
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              marginRight: wp("10%"),
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
                  this.state.selectedButton === "item" ? "white" : "#b06060",
                borderTopWidth: 1.8,
              }}
              onPress={() => {
                // NavigationService.navigate("ItemDetail");
                this.setState({ selectedButton: "item" });
              }}
            >
              <Text
                style={{
                  color:
                    this.state.selectedButton === "item" ? "white" : "#bf7f7f",
                  textAlign: "center",
                  fontWeight: "bold",
                  fontFamily: '"HelveticaNeue_CondensedBold"',
                  opacity: this.state.selectedButton === "item" ? 0.9 : 0.6,
                  fontSize: wp("2.9%"),
                }}
              >
                Item Detail
              </Text>

              <Text
                style={{
                  color:
                    this.state.selectedButton === "item" ? "white" : "#bf7f7f",
                  textAlign: "center",
                  fontWeight: "bold",
                  fontFamily: '"HelveticaNeue_CondensedBold"',
                  opacity: this.state.selectedButton === "item" ? 0.9 : 0.6,
                  fontSize: wp("2.9%"),
                }}
              >
                {"(45)"}
              </Text>
            </TouchableOpacity>
          </View>
          {/* </LinearGradient> */}
        </ScrollView>
        {/* <ScrollView 
            horizontal={true}
            style={{ flexDirection: 'row',
            width: wp('100%'),
            height: hp('9%'),
            paddingHorizontal: wp('1.5%')}}>

    <View style={{justifyContent:'space-evenly',flexDirection:'row',alignSelf:'center'}}>

    <TouchableOpacity 
    
     style={{width:wp('26.5%'),height:hp('9%'),backgroundColor:'#FFD580',alignSelf:'center',justifyContent:'center'}}
     >

     <Text style={{textAlign:'center',fontSize:12,}}>
      Total Lead
     </Text>
     <Text style={{textAlign:'center',fontSize:12,}}> */}
        {/* {`${dashboardDetail&&dashboardDetail.data&&dashboardDetail.data.currentMonth.fixOverDueSauda?
       dashboardDetail.data.currentMonth.fixOverDueSauda:'0'}`} */}
        {/* {"(" +data.length+ ")"} */}
        {/* </Text>

   </TouchableOpacity>

     <TouchableOpacity 
    //  onPress={()=>this.props.onchange('PFO')}
     style={{width:wp('26.5%'),height:hp('9%'),backgroundColor:'#C1F6CB',alignSelf:'center',justifyContent:'center'}}>

     <Text style={{textAlign:'center',fontSize:12,}}>
       Pending for Owner No.
     </Text>
     <Text style={{textAlign:'center',fontSize:12,}}>
     {/* {`${dashboardDetail&&dashboardDetail.data&&dashboardDetail.data.currentMonth.fixOverDueSauda?
       dashboardDetail.data.currentMonth.fixOverDueSauda:'0'}`} */}
        {/* {"(" +this.getPending(data)+ ")"} */}
        {/* </Text> */}

        {/* </TouchableOpacity>
   <TouchableOpacity 
    //  onPress={()=>this.props.onchange('NEL')}
   style={{width:wp('26.5%'),height:hp('9%'),backgroundColor:'#C7E4FF',alignSelf:'center',justifyContent:'center'}}>
   <Text style={{textAlign:'center',fontSize:11,}}>
       Negative EMD Leads
     </Text>
     <Text style={{textAlign:'center',fontSize:12,}}> */}
        {/* {dashboardDetail&&dashboardDetail.data.currentMonth?dashboardDetail.data.currentMonth.sauda:"NA"} */}
        {/* {`${dashboardDetail&&dashboardDetail.data&&dashboardDetail.data.currentMonth.sauda?
       dashboardDetail.data.currentMonth.sauda:'0'}`} */}
        {/* {"(" +this.getEmd(data)+ ")"} */}
        {/* </Text>

   </TouchableOpacity >
   <TouchableOpacity  style={{width:wp('26.5%'),height:hp('9%'),backgroundColor:'#FFC30359',alignSelf:'center',justifyContent:'center'}}
    // onPress={()=>this.props.onchange('OTL')}
   >
   <Text style={{textAlign:'center',fontSize:12,}}>
     No/Overdue Tasks Lead
     </Text>
     <Text style={{textAlign:'center',fontSize:12,}}> */}
        {/* {dashboardDetail&&dashboardDetail.data.currentMonth?dashboardDetail.data.currentMonth.salesOrder:'0'}*/}
        {/* {`${dashboardDetail&&dashboardDetail.data&&dashboardDetail.data.currentMonth.salesOrder?
       dashboardDetail.data.currentMonth.salesOrder:'0'}`} */}
        {/* {"(" +this.getOverDueTask(data)+ ")"} */}
        {/* </Text>

   </TouchableOpacity >
  

  

   </View>

   </ScrollView> */}
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
export default connect(mapStateToProps, mapDispatchToProps)(LeadHeader);
