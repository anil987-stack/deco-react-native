import React from "react";
import { View, Text, TouchableOpacity, TextInput } from "react-native";
import { Item, Input, Label } from "native-base";
import Style from "./InputStyles";
import { Card } from "react-native-paper";
import { Colors, ApplicationStyles } from "App/Theme";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { StyleSheet, Dimensions } from "react-native";
import GenericIcon from "App/Components/GenericIcon";
import LinearGradient from "react-native-linear-gradient";

const FormBackground = ({
  placeholder = "",
  onChange = () => {},
  labelstyle = {},
  style = {},
  value = "",
  error = false,
  label = "",
  multiline = false,
  numberOfLines = 4,
  editable = true,
  autoCapitalize = "",
  onPress,
  layoutStyle,
  cardStyle,
  content,
  label2 = "",
}) => (
  <>
    <Card
      style={{
        ...Styles.cardStyle,
        ...cardStyle,
      }}
    >
      <View>
       

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
    </Card>
  </>
);

export default FormBackground;
const Styles = StyleSheet.create({
  cardStyle: {
    height: hp("65%"),
    width: wp("93%"),
    alignSelf: "center",
    borderRadius: 25,
    backgroundColor: "#4d0d0d",
    borderWidth: 1,
    borderColor: "transparent",
    elevation: 7,
    opacity: 0.7,
    // width: Dimensions.get("window").width - 65,
  },
  layout: {
    flexDirection: "row",
    alignSelf: "flex-end",
    marginRight: wp("-1%"),
    marginTop: hp("-2%"),
  },
});
