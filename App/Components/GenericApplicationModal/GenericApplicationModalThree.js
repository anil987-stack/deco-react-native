import React, { Component } from "react";
import {
  Modal,
  Text,
  TouchableHighlight,
  View,
  Alert,
  TouchableOpacity,
  SafeAreaView,
  TouchableWithoutFeedback,
  StyleSheet,
} from "react-native";
import GenericIcon from "App/Components/GenericIcon";
import BlueButton from "App/Components/BlueButton";
import WhiteButton from "App/Components/WhiteButton";

import { Colors, Metrics, Helpers, Fonts, ApplicationStyles } from "App/Theme";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { watchPosition } from "react-native-geolocation-service";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

import LinearGradient from "react-native-linear-gradient";
import { ImageBackground } from "react-native";
import { connect } from "react-redux";
//onSubmit
class ActionModalThree extends Component {
  state = {
    modalVisible: false,
  };

  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }

  toggleModal() {
    this.setState({
      modalVisible: !this.state.visible,
    });
  }

  hideModal() {
    this.setState({
      modalVisible: false,
    });
  }

  onSubmit() {
    this.setState({
      modalVisible: false,
    });

    //this.props.onSubmit()
  }

  onClose() {
    this.setState({
      modalVisible: false,
    });

    //this.props.onClose();
  }

  onClear() {
    this.props.onClear();
  }

  render() {
    const {
      heading,
      children,
      visible,
      disabled,
      animationType,
      content,
      close,
      bodyFlexHeight,
      headingStyle,
      KeyboardEvent,
    } = this.props;

    let parentFlex = 1;
    let topContainerFlexHeight = 0.7;
    let bottomContainerFlexHeight = 0.3;

    if (!!bodyFlexHeight) {
      bottomContainerFlexHeight = bodyFlexHeight;
      topContainerFlexHeight = parentFlex - bottomContainerFlexHeight;
    }
    let headerMargin = hp("32%");
    if (!!headingStyle) {
      headerMargin = headingStyle;
    }

    return (
      <SafeAreaView>
        <Modal
          animationType={animationType || "slide"}
          transparent={true}
          visible={visible}
          onRequestClose={() => {
            this.hideModal();
          }}
        >
          <GestureHandlerRootView
            style={{
              flex: 1,

              width: "100%",
              backgroundColor: "rgba(0,0,0,.7)",
            }}
          >
            <TouchableWithoutFeedback
              onPress={() => close()}
              disabled={disabled}
            >
              <View
                style={{
                  // flex: topContainerFlexHeight,
                  flex: 1,
                  backgroundColor: "transparent",
                  zIndex: 100,
                }}
              ></View>
            </TouchableWithoutFeedback>
            <ImageBackground
              style={{
                flex: 1,
              }}
              resizeMode="stretch"
              source={require("App/Assets/Images/Popup_3_cut.png")}
            >
              {/* <View style={heading=="PLAN A VISIT"?{ marginTop: hp("34.5%"),...headingStyle }:{ marginTop:headerMargin,...headingStyle }}> */}
              <View>
                <LinearGradient
                  colors={["transparent", "#1c1919"]}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1.1, y: 0 }}
                  style={{
                    marginTop: hp(".5%"),
                    height: hp("4.5%"),
                    width: wp("70%"),
                    alignSelf: "flex-end",
                  }}
                >
                  <Text
                    style={{
                      fontFamily: "HelveticaNeue_CondensedBold",
                      color: "white",
                      fontWeight: "bold",
                      alignSelf: "flex-end",
                      paddingVertical: 8,
                      fontSize: wp("4%"),
                      right: wp("2%"),
                      textTransform: "uppercase",
                    }}
                  >
                    {heading}
                  </Text>
                </LinearGradient>
                {/* <View style={{height:hp('6'),alignItems: 'center', justifyContent: 'center', backgroundColor:Colors.primary, borderTopLeftRadius:10, borderTopRightRadius:10, }}> */}
                {/* <Text style={{color: Colors.white, alignSelf: 'center', fontFamily: ApplicationStyles.textMsgFont, fontSize: 20}}>{heading}</Text> */}
                <TouchableHighlight
                  style={{
                    paddingTop: 2,
                    position: "absolute",
                    alignSelf: "flex-end",
                    height: hp("0%"),
                    marginTop: "15%",
                    zIndex: 2,
                  }}
                  disabled={disabled}
                  onPress={() => {
                    close();
                  }}
                  activeOpacity={0.6}
                  underlayColor="transparent"
                >
                  <View style={{ flexDirection: "row", top: "-36%" }}>
                    <GenericIcon
                      name={"chevron-left-circle-outline"}
                      style={{
                        fontSize: wp("8%"),
                        color: Colors.black,
                        left: "15%",
                        zIndex: 1,
                        marginTop: "35%",
                        backgroundColor: "white",
                        borderRadius: 22,
                      }}
                      show={true}
                    />
                    <LinearGradient
                      colors={["#943e3e", "transparent"]}
                      start={{ x: 0, y: 0 }}
                      end={{ x: 1.1, y: 0 }}
                      style={{
                        height: 28,
                        width: 90,
                        alignSelf: "flex-end",
                        top: "-2%",
                      }}
                    >
                      <Text
                        style={{
                          fontFamily: "HelveticaNeue_CondensedBold",
                          color: "white",
                          fontWeight: "bold",
                          alignSelf: "center",
                          paddingVertical: 4,
                          fontSize: 14,
                        }}
                      >
                        {"BACK"}
                      </Text>
                    </LinearGradient>
                  </View>
                </TouchableHighlight>
              </View>

              <View
                style={{
                  flex: 1,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {content}
              </View>
            </ImageBackground>
          </GestureHandlerRootView>
        </Modal>
      </SafeAreaView>
    );
  }
}

const mapStateToProps = (state) => ({
  KeyboardEvent: state.common.KeyboardEvent,
});

export default connect(mapStateToProps, null)(ActionModalThree);