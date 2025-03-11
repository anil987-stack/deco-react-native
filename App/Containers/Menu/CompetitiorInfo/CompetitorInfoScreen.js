import React, { Component } from "react";
import { View, Text, Alert } from "react-native";
import { Picker, Card } from "native-base";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import WhiteButton from "App/Components/WhiteButton";
import SearchableDropdown from "App/Components/SearchableDropdown";
import Style from "./CompetitorInfoStyle";
import BlueButton from "App/Components/BlueButton";
// import { CANCEL, SUBMIT, LEAVE, WEEK_OFF } from 'App/Constants'
import { smallBottomMargin } from "App/Theme/Metrics";
import NavigationService from "App/Services/NavigationService";
// import LayoutScreen from 'App/Layout/LayoutScreen';
import { HelperService } from "App/Services/Utils/HelperService";
import UserActions from "App/Stores/User/Actions";
import Wave from "App/Components/WaveCurls/Wave";

class CompetitorInfoScreen extends Component {
  render() {
    const { area, agentid, token, sfid } = this.props;

    return (
      <View style={Style.box1}>
        <Wave customStyles={Style.svgCurve} />
        <View style={Style.buttonBox}>
          {/* <Text style={{...Style.header,...Style.titleText}}>
           {'You Choose Four Wheeler'}
           <Text style={{...Style.header,...Style.clr,...Style.titleText}}>{' for today'}</Text>
          </Text>  */}
          <View style={Style.box2}>
            <WhiteButton
              style={{ ...Style.buttons1 }}
              textStyle={{ ...Style.buttontextStyle }}
              title={"New Product"}
              onPress={() => NavigationService.navigate("CreateNewCompetitor")}
            />
            <WhiteButton
              disabled={this.props.userStartDayLoader}
              style={Style.buttons1}
              textStyle={{ ...Style.buttontextStyle }}
              title={"Existing Product"}
              onPress={() =>
                NavigationService.navigate("CreateExistingProduct")
              }
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
)(CompetitorInfoScreen);
