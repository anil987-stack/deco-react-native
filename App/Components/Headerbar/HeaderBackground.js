import NavigationService from "App/Services/NavigationService";
import * as React from "react";
import Style from "./HeaderbarStyle";
import { Appbar } from "react-native-paper";
import { StyleSheet, View, Text,TouchableOpacity, } from "react-native";
import GenericIcon from "App/Components/GenericIcon";
import LinearGradient from "react-native-linear-gradient";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Colors, Metrics, Helpers, Fonts, ApplicationStyles } from "App/Theme";
import { ImageBackground } from "react-native";
export const HeaderBackground = ({
  title,
  outerStyle = {},
  boxStyle = {},
  textStyle,
  onPress,
  content

}) => {
  return (
    <>
    <ImageBackground
      style={Style.imgBackground}
      //  blurRadius={this.props.openModal ? 4 : 0.6}
      resizeMode="cover"
      source={require("App/Assets/Images/startDay.png")}
    >
    <View style={{flexDirection:"row"}}>
    <View>
      <View style={{ flex: 1, backgroundColor: "transparent" }}>
        <View style={{ ...Style.triangle, ...outerStyle }} />
        <Text style={{ ...Style.triangle1, ...boxStyle }}>
        {title}
        </Text>
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
    <View>
      <TouchableOpacity
      style={{
        paddingTop: 2,
        // position: "absolute",
        alignSelf: "flex-end",
        height: hp("5%"),
        marginTop: "2%",
        marginLeft:wp("16%"),
        
      }}
      // disabled={disabled}
      onPress={onPress}
    >
      <View style={{ flexDirection: "row", top: "-36%" }}>
        <GenericIcon
          name={"chevron-left-circle-outline"}
          style={{
            fontSize: wp("8%"),
            color: Colors.black,
            left: "15%",
            zIndex: 10,
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
            height: 29,
            width: 50,
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
    </TouchableOpacity>
    </View>
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
    </>
  );
};
