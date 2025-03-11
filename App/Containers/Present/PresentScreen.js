import React, { Component } from "react";
import { View, Text, Alert } from "react-native";
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

class PresentScreen extends Component {
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
      AttendanceDate: HelperService.dateReadableFormatWithHyphen(
        HelperService.getCurrentTimestamp()
      ),
      Latitude: location.latitude,
      Longitude: location.longitude,
      token: this.props.token,
      UserID: this.props.sfid,
      StartDay: "true",
      Type: "Present",
      // team__c: this.props.sfid,
      PresentType: "Market Visit",
      StartTime: HelperService.getCurrentTimestamp(),
      // ( new Date(  HelperService.getCurrentTimestamp())),
    });
  }

  render() {
    const { area, agentid, token, sfid } = this.props;
    // console.log(sfid);
    // console.log(token);
    return (
      <View style={Style.box1}>
        <Wave customStyles={Style.svgCurve} />
        <View style={Style.buttonBox}>
          <Text style={{ ...Style.header, ...Style.titleText }}>
            {"You will be marked Present for today"}
            <Text style={{ ...Style.header, ...Style.clr, ...Style.titleText }}>
              {" for today"}
            </Text>
          </Text>
          <View
            style={{ flexDirection: "row", justifyContent: "space-around" }}
          >
            <WhiteButton
              style={{ ...Style.buttons1 }}
              textStyle={{ ...Style.buttontextStyle, ...Style.clr }}
              title={"Cancel"}
              onPress={() => NavigationService.navigate("PresentScreen")}
            />
            <WhiteButton
              loading={this.props.userStartDayLoader}
              disabled={this.props.userStartDayLoader}
              style={Style.buttons1}
              textStyle={{ ...Style.buttontextStyle }}
              title={"Submit"}
              // onPress={() => this.submit()}
            />
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

PresentScreen.propTypes = {
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
});

export default connect(mapStateToProps, mapDispatchToProps)(PresentScreen);
