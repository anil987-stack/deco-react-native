import React, { Component } from "react";
import { View, Text, Alert, TouchableOpacity } from "react-native";
import { Picker, Card } from "native-base";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import WhiteButton from "../../Components/WhiteButton";
import SearchableDropdown from "../../Components/SearchableDropdown";
import Style from "./PresentScreenStyle";
import BlueButton from "../../Components/BlueButton";
import { CANCEL, SUBMIT, LEAVE, WEEK_OFF } from "../../Constants";
import { smallBottomMargin } from "../../Theme/Metrics";
import NavigationService from "App/Services/NavigationService";
import LayoutScreen from "../Layout/LayoutScreen";
import { HelperService } from "App/Services/Utils/HelperService";
import UserActions from "App/Stores/User/Actions";
import Wave from "../../Components/WaveCurls/Wave";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Helpers, Metrics, Fonts, Colors, ApplicationStyles } from "App/Theme";
import CommonActions from "App/Stores/Common/Actions";
import LinearGradient from "react-native-linear-gradient";

class WorkFromHomeScreen extends Component {
  async submit() {
    this.props.userStartDayLoading();

    let location = await HelperService.requestLocation();

    if (location == "DENIED") {
      Alert.alert(
        "Location permission is required to proceed.",
        "Go App Permissions and Turn on Location Permission for Re-Konekt."
      );
      this.props.userStartDayLoadingStop();
      return;
    } else if (!location) {
      this.props.userStartDayLoadingStop();
      return;
    }

    this.props.updateUserLocation(location);

    this.props.startUserDay({
      UserID: this.props.sfid,
      StartDay: "true",
      Type: "Present",
      PresentType: "Work From Home",
      StartTime: HelperService.getCurrentTimestamp(),
      Latitude: location.latitude,
      Longitude: location.longitude,
      AttendanceDate: HelperService.dateReadableFormatWithHyphen(
        HelperService.getCurrentTimestamp()
      ),
      Image: "",
      TravelThrough: "",
      token: this.props.token,
    });
  }

  render() {
    const { area, agentid, token, sfid, openModal, closeModal } = this.props;
    // console.log(sfid);
    // console.log(token);
    return (
      <View style={Style.box1}>
        {/* <Wave customStyles={Style.svgCurve} /> */}
        <View style={{ ...Style.buttonBox, marginTop: hp("10%") }}>
          <Text
            style={{ ...Style.header, ...Style.titleText, marginTop: hp("2%"), }}
          >
            {"You'll only be allowed to perform "}
           
          </Text>
          <Text
              style={{
                ...Style.header,
                ...Style.titleText,
                fontStyle: "italic",
                fontWeight: "bold",
                marginTop: hp("0%")
              }}
            >
              "Call Based Activities"
            </Text>

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
          <View style={{ alignSelf: "center" }}>
            <TouchableOpacity
              style={{ ...Style.buttons }}
              onPress={() => {
                this.props.closeModal(),
                  NavigationService.navigate("EndDayScreen");
              }}
            >
              <LinearGradient
                colors={[Colors.primary, Colors.darkRed]}
                start={{ x: 0, y: 0.2 }}
                end={{ x: 0, y: 0.7 }}
                style={{
                  height: 50,
                  width: 200,
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
                    fontWeight: "bold",
                    alignSelf: "center",
                    paddingVertical: 10,
                    fontSize: 19,
                  }}
                >
                  {"SUBMIT"}
                </Text>
              </LinearGradient>
            </TouchableOpacity>
            {/* <WhiteButton
              style={{ ...Style.buttons1 }}
              textStyle={{ ...Style.buttontextStyle, ...Style.clr }}
              title={"Cancel"}
              onPress={() =>
                this.props.closeModal()
              }
            />
            <WhiteButton
              loading={this.props.userStartDayLoader}
              disabled={this.props.userStartDayLoader}
              style={Style.buttons1}
              textStyle={{ ...Style.buttontextStyle }}
              title={"Submit"}
              // onPress={() => this.submit()}
              onPress={() =>{this.props.closeModal(), NavigationService.navigate("EndDayHome")}}

            /> */}
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

WorkFromHomeScreen.propTypes = {
  area: PropTypes.string,
  validation: PropTypes.object,
  userStartDayLoader: PropTypes.bool,
  agentAreas: PropTypes.array,
  token: PropTypes.string,
  //agentid: PropTypes.string
};

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

export default connect(mapStateToProps, mapDispatchToProps)(WorkFromHomeScreen);
