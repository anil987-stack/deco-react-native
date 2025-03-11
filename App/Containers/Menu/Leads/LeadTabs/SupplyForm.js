import React from "react";
import { View, Text, TouchableOpacity, TextInput } from "react-native";
import { Item, Input, Label } from "native-base";
// import Style from "./InputStyles";
import { Card } from "react-native-paper";
import { Colors, ApplicationStyles } from "App/Theme";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { StyleSheet, Dimensions } from "react-native";
import GenericIcon from "App/Components/GenericIcon";
import LinearGradient from "react-native-linear-gradient";

const SupplyForm = ({
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
}) => (
  <>
    <Card
      style={{
        ...Styles.cardStyle,
        ...cardStyle,
      }}
    >
      <View>
        <View style={{ ...Styles.layout, ...layoutStyle }}>
         

          <TouchableOpacity
            style={{
              paddingTop: 2,
              // position: "absolute",
              alignSelf: "flex-end",
              // backgroundColor:"black"
            }}
            // disabled={disabled}
            onPress={onPress}
          >
            <View style={{ flexDirection: "row" }}>
              <GenericIcon
                name={"truck"}
                style={{
                  fontSize: wp("8%"),
                  color: Colors.black,

                  zIndex: 10,

                  backgroundColor: "white",
                  borderRadius: 22,
                  elevation: 12,
                //   marginLeft: wp("7%"),
                }}
                show={true}
              />
              <LinearGradient
                colors={["transparent", "white", "transparent"]}
                start={{ x: 0.9, y: 0 }}
                end={{ x: 0, y: 0 }}
                style={{
                  height: hp("3%"),
                  width: wp("25%"),
                  alignSelf: "flex-end",
                  top: hp("-0.9%"),
                  marginLeft: wp("-3%"),
                }}
              >
                <Text
                  style={{
                    fontFamily: "HelveticaNeue_CondensedBold",
                    color: "white",
                    fontWeight: "bold",
                    alignSelf: "center",
                    paddingVertical: 4,
                    fontSize: wp("2.5%"),
                  }}
                >
                  {"ADD SUPPLY"}
                </Text>
              </LinearGradient>
            </View>
          </TouchableOpacity>
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
    </Card>
  </>
);

export default SupplyForm;
const Styles = StyleSheet.create({
  cardStyle: {
    height: hp("70%"),
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
