import NavigationService from "App/Services/NavigationService";
import * as React from "react";
import Style from "./HeaderbarStyle";
import { Appbar } from "react-native-paper";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import GenericIcon from "App/Components/GenericIcon";
import LinearGradient from "react-native-linear-gradient";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Colors, Metrics, Helpers, Fonts, ApplicationStyles } from "App/Theme";
export const HeaderNew = ({
  title,
  outerStyle = {},
  boxStyle = {},
  textStyle,
  onPress,
  buttonTitle,
  onpressContainerStyle = {},
  iconname,
  iconStyle = {},
  buttonTitleStyle = {},
  gradientStyle = {},
}) => {
  return (
    <View style={{ flexDirection: "row" }}>
      <View>
        <View
          style={{
            flex: 1,
            backgroundColor: "transparent",
            marginBottom:
              title == "TELESALES" || title == "AIDP" ? wp("9%") : 0,
          }}
        >
          <View style={{ ...Style.triangle, ...outerStyle }} />
          <Text style={{ ...Style.triangle1, ...boxStyle }}> {title}</Text>
        </View>
        {/* <Text
        style={{
          ...Style.textStyle,
          ...textStyle,
        }}
      >
        {title}
      </Text> */}
      </View>
      {title == "TELESALES" ||
      title == "AIDP" ||
      title == "TICKET TASK" ? null : (
        <View>
          <TouchableOpacity
            style={{
              paddingTop: 2,
              // position: "absolute",
              alignSelf: "flex-end",
              height: hp("5%"),
              marginTop: "2%",
              marginLeft:
                title == "VISIT PERFORMNCE" || title == "LEAD PERFORMNCE"
                  ? wp("10%")
                  : wp("16%"),
              ...onpressContainerStyle,
            }}
            // disabled={disabled}
            onPress={onPress}
          >
            <View style={{ flexDirection: "row", top: "-33%" }}>
              <GenericIcon
                name={iconname ? iconname : "chevron-left-circle-outline"}
                style={{
                  fontSize: wp("8%"),
                  color: Colors.black,
                  left: "15%",
                  zIndex: 10,
                  marginTop: "35%",
                  backgroundColor: "white",
                  borderRadius: 22,
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
                  width: 80,
                  alignSelf: "flex-end",
                  top: "-2%",
                  ...gradientStyle,
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
                    ...buttonTitleStyle,
                  }}
                >
                  {buttonTitle ? buttonTitle : "BACK"}
                </Text>
              </LinearGradient>
            </View>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};
