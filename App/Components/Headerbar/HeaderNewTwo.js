import NavigationService from "App/Services/NavigationService";
import * as React from "react";
import Style from "./HeaderbarTwoStyle";
import { Appbar } from "react-native-paper";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import GenericIcon from "App/Components/GenericIcon";
import LinearGradient from "react-native-linear-gradient";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Colors, Metrics, Helpers, Fonts, ApplicationStyles } from "App/Theme";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

export const HeaderNew = ({
  title,
  outerStyle = {},
  boxStyle = {},
  textStyle,
  onPress,
  onPressTwo,
  buttonTitle,
  buttonTitleTwo,
  onpressContainerStyle = {},
  iconname,
  iconTwoName,
  iconStyle = {},
  buttonTitleStyle = {},
  gradientStyle = {},
  fontAwesome,
}) => {
  return (
    <View style={{ flexDirection: "row" }}>
      <View>
        <View style={{ flex: 1, backgroundColor: "transparent" }}>
          <View style={{ ...Style.triangle, ...outerStyle }} />
          <Text style={{ ...Style.triangle1, ...boxStyle }}> {title}</Text>
        </View>
      </View>
      <View style={{ marginLeft: -12 }}>
        <TouchableOpacity
          style={{
            paddingTop: 2,
            // position: "absolute",
            alignSelf: "flex-end",
            height: hp("5%"),
            marginTop: "2%",

            ...onpressContainerStyle,
          }}
          // disabled={disabled}
          onPress={onPress}
        >
          <View style={{ flexDirection: "row", top: "-36%" }}>
            {fontAwesome == true ? (
              <FontAwesome5
                name={iconname ? iconname : "user-circle"}
                style={{
                  fontSize: wp("6%"),
                  color: Colors.grey,
                  left: "15%",
                  zIndex: 10,
                  marginTop: "35%",
                  backgroundColor: "white",
                  borderRadius: 22,

                  padding: wp(".8%"),
                  ...iconStyle,
                }}
                show={true}
              />
            ) : (
              <GenericIcon
                name={iconname ? iconname : "user-circle"}
                style={{
                  fontSize: wp("6%"),
                  color: Colors.grey,
                  left: "15%",
                  zIndex: 10,
                  marginTop: "35%",
                  backgroundColor: "white",
                  borderRadius: 22,

                  padding: wp(".8%"),
                  ...iconStyle,
                }}
                // show={true}
              />
            )}
            <LinearGradient
              colors={["#943e3e", "transparent"]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1.1, y: 0 }}
              style={{
                height: 29,
                width: wp("30%"),
                alignSelf: "flex-end",
                top: "-1%",
                ...gradientStyle,
              }}
            >
              <Text
                style={{
                  fontFamily: "HelveticaNeue_CondensedBold",
                  color: "white",
                  fontWeight: "bold",
                  alignSelf: "center",
                  paddingVertical: 6.5,
                  fontSize: 11,
                  ...buttonTitleStyle,
                }}
              >
                {buttonTitle ? buttonTitle : "BACK"}
              </Text>
            </LinearGradient>
          </View>
        </TouchableOpacity>
      </View>

      <View style={{ marginLeft: -28 }}>
        <TouchableOpacity
          style={{
            paddingTop: 2,
            // position: "absolute",
            alignSelf: "flex-end",
            height: hp("5%"),
            marginTop: "2%",

            ...onpressContainerStyle,
          }}
          // disabled={disabled}
          onPress={onPressTwo}
        >
          <View style={{ flexDirection: "row", top: "-36%" }}>
            <GenericIcon
              name={iconTwoName ? iconTwoName : "chevron-left-circle-outline"}
              style={{
                fontSize: wp("6%"),
                color: Colors.grey,
                left: "15%",
                zIndex: 10,
                marginTop: "35%",
                backgroundColor: "white",
                borderRadius: 22,
                padding: wp(".7%"),

                ...iconStyle,
              }}
              show={true}
            />
            <LinearGradient
              colors={["#943e3e", "transparent"]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1.1, y: 0 }}
              style={{
                height: 29,
                width: 90,
                alignSelf: "flex-end",
                top: "0%",
                ...gradientStyle,
              }}
            >
              <Text
                style={{
                  fontFamily: "HelveticaNeue_CondensedBold",
                  color: "white",
                  fontWeight: "bold",
                  alignSelf: "center",
                  paddingVertical: 6.5,
                  fontSize: 11,
                  ...buttonTitleStyle,
                }}
              >
                {buttonTitleTwo ? buttonTitleTwo : "BACK"}
              </Text>
            </LinearGradient>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};
