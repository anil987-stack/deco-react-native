import React, { Component } from "react";
import { View, Text, Alert } from "react-native";
import { Picker, Card } from "native-base";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import WhiteButton from "App/Components/WhiteButton";
import SearchableDropdown from "App/Components/SearchableDropdown";
import Style from "./style";
import BlueButton from "App/Components/BlueButton";
// import { CANCEL, SUBMIT, LEAVE, WEEK_OFF } from 'App/Constants'
import { smallBottomMargin } from "App/Theme/Metrics";
import NavigationService from "App/Services/NavigationService";
// import LayoutScreen from 'App/Layout/LayoutScreen';
import { HelperService } from "App/Services/Utils/HelperService";
import UserActions from "App/Stores/User/Actions";
import Wave from "App/Components/WaveCurls/Wave";

class PublictransportScreen extends Component {
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

    const { data } = this.props.navigation.state.params;

    this.props.startUserDay({
      UserID: this.props.sfid,
      StartDay: "true",
      Type: "Present",
      PresentType: "Market Visit",
      StartTime: HelperService.getCurrentTimestamp(),
      Latitude: location.latitude,
      Longitude: location.longitude,
      AttendanceDate: HelperService.dateReadableFormatWithHyphen(
        HelperService.getCurrentTimestamp()
      ),
      Image: data.Address_proof ? data.Address_proof : "",
      TravelThrough: "Public Transport",
      token: this.props.token,
    });
  }

  render() {
    const { area, agentid, token, sfid } = this.props;

    return (
      <View style={Style.box1}>
        <Wave customStyles={Style.svgCurve} />
        <View style={Style.buttonBox}>
          <Text style={{ ...Style.header, ...Style.titleText }}>
            {"You Choose Public Transport"}
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
              onPress={() => NavigationService.navigate("TravelModeScreen")}
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
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PublictransportScreen);
