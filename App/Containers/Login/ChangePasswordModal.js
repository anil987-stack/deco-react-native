import React, { Component } from "react";
import { View, Text, Alert, TouchableOpacity, StyleSheet, TextInput, } from "react-native";
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

class ChangePasswordModal extends Component {
  
  render() {
    const { area, agentid, token, sfid, openModal, closeModal } = this.props;
    // console.log(sfid);
    // console.log(token);
    return (
      <View style={Style.box1}>
      
        <View style={{ ...Style.buttonBox, marginTop: hp("8%") }}>
          <Text
            style={{ ...Style.header, ...Style.titleText, marginTop: hp("2%"),textAlign:"center" }}
          >
            {"Change "}
            <Text style={{ 
                fontWeight: "bold",
                marginTop: hp("0%")}}>"Password"
               
                </Text>
           
          </Text>
         
          <TextInput
          style={Style.text}
          placeholder="new password"
          placeholderTextColor="grey"
        //   onChangeText={(value) =>
        //     changeForm({
        //       edited_field: "username",
        //       edited_value: value,
        //     })
        //   }
        ></TextInput>

<TextInput
          style={Style.text}
          placeholder="confirm password"
          placeholderTextColor="grey"
        //   onChangeText={(value) =>
        //     changeForm({
        //       edited_field: "username",
        //       edited_value: value,
        //     })
        //   }
        ></TextInput>
        
         

           
            

        
        <View style={{ alignSelf: "center",marginTop:hp("0%") }}>
            <TouchableOpacity
              style={{ ...Style.buttons }}
            //   onPress={() => {
            //     this.props.openModal({
            //       content3: <SubmitOTPModal
            //       onClose={() => {
            //        closeModal();
            //      }} />, 
            //       heading3: 'FORGOT PASSWORD', 
            //       bodyFlexHeight3: .80,
                  
            //   })
            //     //  this.props.clear();
            //     // NavigationService.navigate("UserScreen");
            //   }}
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
                  {"SUBMIT"}
                </Text>
              </LinearGradient>
            </TouchableOpacity>
          
          </View>

         
        </View>
      </View>
     
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
  openModal: (params) => dispatch(CommonActions.openModalThree(params)),

});

export default connect(mapStateToProps, mapDispatchToProps)(ChangePasswordModal);
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
      
        alignSelf:'center',
        marginTop: 20,
        width:wp("86%")
      },
      text: {
        width: wp("80%"),
        height: hp("6%"),
        borderColor: Colors.primary,
        // borderWidth: 2,
        marginTop: hp("2%"),
      alignSelf:"center",
        borderRadius: 17,
        fontSize: 17,
        color: "#9A9A9A",
        paddingHorizontal: wp("5%"),
        backgroundColor:"black"

      },
});