import React, { Component } from "react";
import { View, Text } from "react-native";
import { Button, Card } from "native-base";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import WhiteButton from "../../Components/WhiteButton";
import Style from "./AbsentScreenStyle";
import BlueButton from "../../Components/BlueButton";
import { CANCEL, SUBMIT, LEAVE, WEEK_OFF } from "../../Constants";
import { smallBottomMargin } from "../../Theme/Metrics";
import NavigationService from "App/Services/NavigationService";
import LayoutScreen from "../Layout/LayoutScreen";
import UserActions from "App/Stores/User/Actions";
import { HelperService } from "App/Services/Utils/HelperService";
import Wave from "../../Components/WaveCurls";
import SearchableDropdown from "../../Components/SearchableDropdown";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Helpers, Metrics, Fonts, Colors, ApplicationStyles } from 'App/Theme'
class AbsentScreen extends Component {
  async submit() {
    


    this.props.userMarkedAbsentLoading();

    let location = await HelperService.requestLocation();

    if (location == 'DENIED') {
      Alert.alert(
        "Location permission is required to proceed.",
        "Go App Permissions and Turn on Location Permission for Re-Konekt."
      );
      this.props.userMarkedAbsentLoadingStop();
      return;
    } else if (!location) {
      this.props.userMarkedAbsentLoadingStopa();
      return;
    }

    this.props.updateUserLocation(location);
  
    this.props.markUserAbsent({
            "UserID":this.props.sfid,
            "StartDay":"false",
            "Type":"Absent",
            "AbsentType":this.props.reason,
            "StartTime":HelperService.getCurrentTimestamp(),
            "Latitude":location.latitude,
            "Longitude":location.longitude,
            "AttendanceDate":HelperService.dateReadableFormatWithHyphen(HelperService.getCurrentTimestamp()),
             "token":this.props.token
         
        });
   
  }

  updateAbsentReason(reason) {
    this.props.updateUserMarkedAbsentReason({ absentReason: reason });
  }

  render() {
    const{reason}=this.props;
    return (
      <View style={Style.container}>
      {/* <Wave customStyles={Style.svgCurve} /> */}
        
        {/* <Card style={Style.card}> */}
        <View style={Style.buttonBox}>
          <Text style={{ ...Style.header,...Style.title }}>
            {"You will be marked absent"}
            <Text style={{ ...Style.header, ...Style.clr, }}>
              {" for today"}
            </Text>
          </Text>

          <View
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
        </View>
          {/* <WhiteButton
            style={reason=="Planned"?{ ...Style.actionButton1, ...Style.mv10, }:{ ...Style.actionButton, ...Style.mv10, }}
            title={"Planned"}
            textStyle={reason=="Planned"?{color:"white"}:{color:"black"}}
            onPress={() => this.updateAbsentReason("Planned")}
          />
          <WhiteButton
            style={reason=="Ad-hoc"?{ ...Style.actionButton1, ...Style.mv10, }:{ ...Style.actionButton, ...Style.mv10, }}
            title={"Ad-hoc"}
            textStyle={reason=="Ad-hoc"?{color:"white"}:{color:"black"}}
            onPress={() => this.updateAbsentReason("Ad-hoc")}
          /> */}

<View style={Style.action}>
                            <WhiteButton style={Style.button} textStyle={{...Style.buttontextStyle,...Style.clr}} rounded title={CANCEL} disabled={!!this.props.userMarkedAbsentLoader} onPress={() => { NavigationService.goback() }} />
                            <WhiteButton style={Style.button} rounded large title={SUBMIT} disabled={!!this.props.userMarkedAbsentLoader} loading={this.props.userMarkedAbsentLoader} onPress={() => this.submit()} />
                        </View>
        </View>
     
        {/* </Card> */}
      </View>
    );
  }
}

AbsentScreen.propTypes = {
  area: PropTypes.string,
  validation: PropTypes.object,
  agentAreas: PropTypes.array,
  token: PropTypes.string,
  agentid: PropTypes.string,
};

const mapStateToProps = (state) => ({
  area: state.user.area,
  agentAreas: state.user.agentAreas,
  validation: state.user.validation,
  userStartDayLoader: state.user.userStartDayLoading,
  token: state.user.access_token,
  agentid: state.user.id,
  reason:state.user.absentReason,
  sfid: state.user.loginDetails.userId,
});

const mapDispatchToProps = (dispatch) => ({
  markUserAbsent: (params) => dispatch(UserActions.markUserAbsent(params)),
  userMarkedAbsentLoading: () =>
    dispatch(UserActions.userMarkedAbsentLoading()),
  userMarkedAbsentLoadingStop: () =>
    dispatch(UserActions.userMarkedAbsentLoadingStop()),
  updateUserMarkedAbsentReason: (params) =>
    dispatch(UserActions.updateUserMarkedAbsentReason(params)),
    updateUserLocation: (location) => dispatch(UserActions.updateUserLocation(location)),
updateabsent:(params)=>dispatch(UserActions.updateSearchFilters(params))
  });


export default connect(mapStateToProps, mapDispatchToProps)(AbsentScreen);
