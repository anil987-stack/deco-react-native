import React, { Component } from "react";
import { View, Text, Alert, TouchableOpacity, StyleSheet, } from "react-native";
import { Picker, Card } from "native-base";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import BlueButton from "App/Components/BlueButton";
// import { smallBottomMargin } from "../../Theme/Metrics";
import NavigationService from "App/Services/NavigationService";
import { HelperService } from "App/Services/Utils/HelperService";
import UserActions from "App/Stores/User/Actions";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Helpers, Metrics, Fonts, Colors, ApplicationStyles } from "App/Theme";
import CommonActions from "App/Stores/Common/Actions";
import LinearGradient from "react-native-linear-gradient";

class PartnerEnrollmentModal extends Component {
  
  render() {
    const { area, agentid, token, sfid, openModal, closeModal } = this.props;
    // console.log(sfid);
    // console.log(token);
    return (
      <View style={Style.box1}>
      
        <View style={{ ...Style.buttonBox, marginTop: hp("7%") }}>
          <Text
            style={{ ...Style.header, ...Style.titleText, marginTop: hp("2%"),textAlign:"center" }}
          >
            {"To manage please press the appropriate "}
            {/* {"Please press the appropriate"} */}
        
          
         

            <Text
              style={{
                ...Style.header,
                ...Style.titleText,
                fontStyle: "italic",
                fontWeight: "bold",
                marginTop: hp("0%")
              }}
            >
              "Button"

            
            </Text>
               
          </Text>
            {/* <Text
              style={{
                ...Style.header,
                // fontStyle: "italic",
                // fontWeight: "bold",
                marginTop: hp("0%"),
                fontFamily: "HelveticaNeue_CondensedBold",
              }}
            >
             {/* { "to manage a"} */}
            {/* </Text> */} 

          {/* <Text style={{ ...Style.header, ...Style.clr, ...Style.titleText,fontSize:18,color:Colors.primary,right:"25%",marginTop:10 }}>Select Reason</Text> */}

          {/* <View
          style={{
            width: "100%",
            // borderWidth: 1.2,
            // borderColor: Colors.grey,
            // borderRadius: 30,
            marginVertical: 35,
            alignSelf: "center",
            height: hp("3%"),
          }}
        >
          <SearchableDropdown
            dataSource={[
              // { id: "a050w000003PjLbAAK", name: "Architect" },
              // { id: "a050w000003RDvuAAG", name: "ID" },
              // { id: "a050w000003PjLdAAK", name: "Engineer" },
              // { id: "a050w000003PjLgAAK", name: "Contractor" },
              // { id: "a050w000003PjLlAAK", name: "Carpenter" },
            ]}
            placeHolderText={"Select Reason"}
            
            // selectedValue={influencersForm.influencer_type__c}
            // selectedValue={data.sfid == form.id ? form.colour__c : ""}
            // onChange={(value) => {
            //   this.props.changeInfluencersForm({
            //     edited_field: "influencer_type__c",
            //     edited_value: value,
            //   });
            //   this.props.changeform({
            //     edited_field: "contact_type",
            //     edited_value: null,
            //   });
            // }}
            placeholder={"Type or Select Reason"}
            invalid={false}
            dropDownSize={{ marginLeft: 0, width: 14, height: 12 }}
            stylelabel={{
              color: Colors.subtitle,
              marginLeft: 2,
              marginBottom: 18,
            }}
            customPickerStyles={{
              // width: "95%",
              // height: 30,
              // borderBottomColor: Colors.underline,
              // borderWidth: 0.5,
              // borderColor: "transparent",
              // borderRadius: 0,
              // marginLeft: 5,

              marginTop: 0,
		backgroundColor: 'white',
    paddingVertical: 8,
    
		paddingHorizontal: '8%',
		width: '98%',
		flexDirection: 'row',
	//	justifyContent: 'space-between',
    alignItems: 'center',
    alignSelf:'center',
		borderRadius: 25,
		elevation: 5,
            }}
            // labelStyles={{
            //   color: Colors.black,
            //   fontFamily: ApplicationStyles.textFont,
            //   textAlign: "center",

            //   fontSize: 13,
            //   flexDirection: "row",
            // }}

            // headerStyle={{
            //   fontFamily: ApplicationStyles.textMsgFont,
            //   color: Colors.black,
            //   fontSize: wp("4.4%"),
            //   width: "106%",
            //   textAlign: "left",
            //   marginLeft: wp("2%"),
            // }}
            // customPickerStyles={{

            //   width: "85%",
            //   height: hp("5%"),
            //   elevation: 5,
            //   alignSelf: "center",
            //   backgroundColor: "white",

            // }}
            // key={form.id}
          />
        </View> */}
          <View style={{ alignSelf: "center",marginTop:"8%" }}>
            <TouchableOpacity
              style={{ ...Style.buttons }}
              onPress={() => {
                this.props.closeModal(),
                  NavigationService.navigate("RetailerMainScreen");
              }}
            >
              <LinearGradient
                colors={[Colors.primary, Colors.darkRed]}
                start={{ x: 0, y: 0.2 }}
                end={{ x: 0, y: 0.7 }}
                style={{
                  height: 50,
                  width: 190,
                  borderRadius: 10,
                  alignSelf: "center",
                  marginTop: "8%",
                  // borderColor: "grey",
                  // borderWidth: 1,
                }}
              >
                <Text
                  style={{
                    ...Style.buttontextStyle,
                    fontFamily: "HelveticaNeue_CondensedBold",
                    color: "white",
                    // fontWeight: "bold",
                    alignSelf: "center",
                    paddingVertical: 8,
                    fontSize: wp("5%"),
                  }}
                >
                  {"RETAILER"}
                </Text>
              </LinearGradient>
            </TouchableOpacity>
          
          </View>

          <View style={{ alignSelf: "center" }}>
            <TouchableOpacity
              style={{ ...Style.buttons }}
              onPress={() => {
                this.props.closeModal(),
                  NavigationService.navigate("InfluencerManagement");
              }}
            >
              <LinearGradient
                colors={[Colors.primary, Colors.darkRed]}
                start={{ x: 0, y: 0.2 }}
                end={{ x: 0, y: 0.7 }}
                style={{
                  height: 50,
                  width: 190,
                  borderRadius: 10,
                  alignSelf: "center",
                  marginTop: "4%",
                  // borderColor: "grey",
                  // borderWidth: 1,
                }}
              >
                <Text
                  style={{
                    ...Style.buttontextStyle,
                    fontFamily: "HelveticaNeue_CondensedBold",
                    color: "white",
                    // fontWeight: "bold",
                    alignSelf: "center",
                    paddingVertical: 8,
                    fontSize: wp("5%"),
                  }}
                >
                  {"INFLUENCER"}
                </Text>
              </LinearGradient>
            </TouchableOpacity>
          
          </View>
        </View>
      </View>
      // <View style={Style.container}>
      //   <View style={Style.waveStyle}>

      // <Wave customStyles={Style.svgCurve} />

      //     <View style={Style.buttonBox}>
      //       <Text style={{ ...Style.title }}>
      //       You will be marked Present for today
      //           </Text>

      //     </View>

      //     <View style={{...Style.action, marginTop: 0}}>
      //       {/* <WhiteButton style={Style.button} textStyle={Style.txt} rounded title={CANCEL} onPress={() => { NavigationService.goback() }} disabled={!!this.props.userStartDayLoader} />
      //       <BlueButton loading={!!this.props.userStartDayLoader} textStyle={Style.txt,}  style={Style.button} disabled={!!this.props.userStartDayLoader} rounded large title={SUBMIT} onPress={() => this.submit()} /> */}
      //     </View>
      //   </View>
      // </View>
    );
  }
}


const mapStateToProps = (state) => ({
  area: state.user.area,
  agentAreas: state.user.agentAreas,
  validation: state.user.validation,
  userStartDayLoader: state.user.userStartDayLoading,
  token: state.user.access_token,
  agentid: state.user.id,
  sfid: state.user.loginDetails.userId,
});

const mapDispatchToProps = (dispatch) => ({
  startUserDay: (params) => dispatch(UserActions.startUserDay(params)),
  userStartDayLoading: () => dispatch(UserActions.userStartDayLoading()),
  userStartDayLoadingStop: () =>
    dispatch(UserActions.userStartDayLoadingStop()),
  updateUserLocation: (location) =>
    dispatch(UserActions.updateUserLocation(location)),
  updateUserArea: (area) => dispatch(UserActions.updateUserArea(area)),
  updateUserStartDayTime: (time) =>
    dispatch(UserActions.updateUserStartDayTime(area)),
  fetchAllAreas: (params) => dispatch(UserActions.fetchAllAreas(params)),
  userStartDayValidationFailed: (params) =>
    dispatch(UserActions.userStartDayValidationFailed(params)),
  closeModal: (params) => dispatch(CommonActions.closeModalThree(params)),
  openModal: (params) => dispatch(CommonActions.openModalTwo(params)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PartnerEnrollmentModal);
const Style = StyleSheet.create({
    box1: {
        display: 'flex',
        flex: 1,
        padding: Metrics.tiny,
        fontFamily: ApplicationStyles.textMsgFont,
        // backgroundColor: Colors.white,
       
      },
    //   titleText:{
    //     marginTop:'20%',
    //     fontSize: wp("5.8%"),
    //     // alignSelf:'baseline',
    //     // marginHorizontal:25,
    //     flexWrap:'wrap'
    
    //   },
      header:{
        // marginBottom: 300,
        fontSize:wp("6%"),
        fontFamily: "HelveticaNeue_CondensedBold",
        color:"white",
        alignSelf:'auto',
        alignSelf:'center',
        marginTop: 20
      },
});