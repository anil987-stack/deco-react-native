import React, { Component } from "react";
import { View, Alert } from "react-native";
import { Button, Text } from "native-base";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Style from "./StartDaySelectionStyle";
import BlueButton from "../../Components/BlueButton";
import WhiteButton from "../../Components/WhiteButton";
import LayoutScreen from "../Layout/LayoutScreen";
import { START, ABSENT, GOOD, MORNING, LEAVE } from "../../Constants";
import NavigationService from "App/Services/NavigationService";
import { HelperService } from "App/Services/Utils/HelperService";
import UserActions from "App/Stores/User/Actions";
import Wave from "../../Components/WaveCurls/Wave";

export default class StartDaySelectionScreen extends React.Component {
  goTo(screen) {
    NavigationService.navigate(screen);
  }

  render() {
    return (
      <View style={Style.box1}>
        {/* <Wave customStyles={Style.svgCurve} /> */}
        <View style={Style.buttonBox}>
          <Text style={{ ...Style.header, ...Style.titleText }}>
            {"Mark Attendance"}
            <Text style={{ ...Style.header, ...Style.clr2, ...Style.titleText }}>
              {" for today"}
            </Text>
          </Text>
          <BlueButton
            style={{ ...Style.buttons1, marginTop: 28 }}
            textStyle={{ ...Style.buttontextStyle, ...Style.clr }}
            title={"Market Visit"}
            onPress={() => this.goTo("TravelModeScreen")}
          />
          {/* <BlueButton
            style={Style.buttons1}
            textStyle={{ ...Style.buttontextStyle, ...Style.clr }}
            title={"IN OFFICE"}
            onPress={() => this.goTo("InOfficeScreen")}
          /> */}
          <BlueButton
            style={Style.buttons1}
            textStyle={{ ...Style.buttontextStyle, ...Style.clr }}
            title={"Work From Home"}

            onPress={() => this.goTo("WorkFromHomeScreen")}
          />
          {/* <BlueButton
            style={Style.buttons1}
            textStyle={{ ...Style.buttontextStyle, ...Style.clr }}
            title={"Tour/Outstation Market"}
            onPress={() => this.goTo("MarketScreen")}
          /> */}
        </View>
      </View>
    );
  }
}
