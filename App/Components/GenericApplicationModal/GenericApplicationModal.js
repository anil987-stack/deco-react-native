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

//onSubmit
export default class ActionModal extends Component {
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
    } = this.props;

    let parentFlex = 1;
    let topContainerFlexHeight = 0.4;
    let bottomContainerFlexHeight = 0.6;

    if (!!bodyFlexHeight) {
      bottomContainerFlexHeight = bodyFlexHeight;
      topContainerFlexHeight = parentFlex - bottomContainerFlexHeight;
    }

    if (heading == "") {
      topContainerFlexHeight = 0.19;
    }

    if (heading == "Filter"){
      topContainerFlexHeight = .08;
    }

    return (
      <SafeAreaView>
        <Modal
          // animationType={animationType || 'slide'}
          transparent={true}
          visible={visible}
          onRequestClose={() => {
            this.hideModal();
          }}
        >
          <GestureHandlerRootView style={{ flex: 1 }}>
            <TouchableWithoutFeedback
              onPress={() => close()}
              disabled={disabled}
            >
              <View
                style={{
                  flex: topContainerFlexHeight,
                  backgroundColor: "rgba(0, 0, 0, 0.1)",
                  zIndex: 5,
                }}
              ></View>
            </TouchableWithoutFeedback>

            <View
              style={{
                flex: bottomContainerFlexHeight,
                zIndex: 4,
                backgroundColor: "#4d0d0d",
                borderWidth: 1,
                borderColor: "transparent",
                width: "95%",
                alignSelf: "center",
                borderRadius: 25,
                elevation: 7,
                opacity: 0.98,
              }}
            >
              
              <View
                style={{
                  flex: 0.13,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Text
                  style={{
                    color: Colors.white,
                    alignSelf: "center",
                    fontFamily: ApplicationStyles.textMsgFont,
                    fontSize: 20,
                  }}
                >
                  {heading}
                </Text>
                <TouchableHighlight
                  style={{
                    paddingTop: 2,
                    position: "absolute",
                    left: 0,
                    paddingLeft: 8,
                  }}
                  disabled={disabled}
                  onPress={() => {
                    close();
                  }}
                >
                  <GenericIcon
                    name={"close-circle"}
                    style={{ fontSize: 30, color: Colors.white }}
                    show={true}
                  />
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
            </View>
          </GestureHandlerRootView>
        </Modal>
      </SafeAreaView>
    );
  }
}
