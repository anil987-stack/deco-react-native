import React, { Component } from "react";
import { View, Alert } from "react-native";
import { Button, Text } from "native-base";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Style from "./KycStyle";
import BlueButton from "../../../Components/BlueButton";
import WhiteButton from "../../../Components/WhiteButton";
import menuActions from "App/Stores/Menu/Actions";
import NavigationService from "App/Services/NavigationService";
import { HelperService } from "App/Services/Utils/HelperService";

import BackArrowButton from "App/Components/BackArrowButton";
class KycScreen extends React.Component {
  goTo(screen) {
    NavigationService.navigate(screen, { show: false });
  }

  render() {
    const { code } = this.props;
    return (
      <View style={Style.box1}>
        <BackArrowButton
          backStyle={{
            color: "white",
            fontSize: 32,
            paddingRight: 300,
            paddingTop: 0,
          }}
        />
        {/* <Wave customStyles={Style.svgCurve} /> */}
        <View style={Style.waveBox}>
          <Text
            style={{
              ...Style.header,
              ...Style.titleText,
              marginTop: "18%",
              marginRight: "17%",
            }}
          >
            {"Select Contractor"}
          </Text>
          <WhiteButton
            style={{ ...Style.buttons1 }}
            textStyle={{ ...Style.buttontextStyle, ...Style.textClr }}
            title={"Jodidars"}
            onPress={() => {
              NavigationService.navigate("Jodidar", {
                id: "JODIDARS",
                show: true,
              });
              this.props.clearKycForm();
            }}
          />
          <WhiteButton
            style={Style.buttons1}
            textStyle={{ ...Style.buttontextStyle, ...Style.textClr }}
            title={"Retailer"}
            onPress={() => {
              NavigationService.navigate("Retailer", {
                id: "RETAILER",
                show: true,
              });
              this.props.clearKycForm();
            }}
          />
          <WhiteButton
            style={Style.buttons1}
            textStyle={{ ...Style.buttontextStyle, ...Style.textClr }}
            title={"2WH Mechanic"}
            onPress={() => {
              NavigationService.navigate("Mechanic", {
                id: "2WH MECHANIC",
                show: true,
              });
              this.props.clearKycForm();
            }}
          />
          <WhiteButton
            style={Style.buttons1}
            textStyle={{ ...Style.buttontextStyle, ...Style.textClr }}
            title={"2WH Retailer"}
            onPress={() => {
              NavigationService.navigate("WHRetailer", {
                id: "2WH RETAILER",
                show: true,
              });
              this.props.clearKycForm();
            }}
          />
        </View>
      </View>
    );
  }
}
const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  clearKycForm: (params) => dispatch(menuActions.clearKycForm(params)),
});
export default connect(mapStateToProps, mapDispatchToProps)(KycScreen);
