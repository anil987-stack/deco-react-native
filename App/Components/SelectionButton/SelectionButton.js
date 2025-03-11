import { Body, Container, Header, Icon, Left, Right, Title } from "native-base";
import React from "react";
import { StyleSheet, TouchableOpacity, View, Text, Image } from "react-native";
import { Colors, ApplicationStyles } from "App/Theme";
import GenericIcon from "App/Components/GenericIcon";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const SelectionButton = ({
  style = {},
  textStyle = {},
  onPress,
  title,
  icon,
  disabled = false,
  loading = false,
  selected = false,
  children = [],
  img,
  imgStyle={},
}) => {
  return (
    <TouchableOpacity style={{ ...Styles.button, ...style }} onPress={onPress}>
      {icon ? (
        <View style={Styles.iconContainer}>
          <GenericIcon style={Styles.menuIcon} name={icon} />
        </View>
      ) : (
        []
      )}
      <Image
        style={{ height: wp("12"), width: wp("11"),...imgStyle}}
        source={img}
      />
      <View style={Styles.textContainer}>
        <Text style={{ ...Styles.text, ...textStyle }}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default SelectionButton;

const Styles = StyleSheet.create({
  button: {
    width: wp("38%"),
    marginHorizontal: wp("2%"),
    marginVertical: hp("1.4%"),
    backgroundColor: Colors.white,
    alignItems: "center",
    justifyContent: "center",
    // alignSelf: 'center',
    height: hp("17.2%"),

    borderColor: Colors.border,
    borderWidth: 1,
    flexDirection: "column",
    paddingTop: "10%",
  },
  menuIcon: {
    color: Colors.primary,
    fontSize: wp("10%"),
    marginBottom: hp("0%"),
    marginTop: "8%",
  },
  text: {
    color: Colors.primary,
    fontFamily: ApplicationStyles.textMsgFont,
    fontWeight: "bold",
    fontSize: wp("3.6%"),
    textTransform: "uppercase",
    alignSelf: "center",
    textAlign: "center",
    justifyContent: "center",
    // flexWrap: 'wrap'
  },
  iconContainer: {
    marginBottom: hp("1%"),
  },
  textContainer: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    paddingHorizontal: wp("2%"),
  },
});
