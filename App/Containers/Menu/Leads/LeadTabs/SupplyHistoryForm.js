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

const SupplyHistoryForm = ({
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
               
              <Text
                style={{
                  fontSize: wp("5%"),
                  color: Colors.black,
                  fontFamily: "HelveticaNeue_CondensedBold",
                  zIndex: 10,
                  height: hp("3.7%"),
                  backgroundColor: "white",
                  borderRadius: 50,
                  elevation: 12,
                  width: wp("7%"),
                  fontWeight: "bold",
                    // marginLeft: wp("3%"),
                    paddingLeft: wp("2%"),
                   
                }}
              >
                {"2"}
              </Text>
              
              <LinearGradient
                colors={["transparent", "white", "transparent"]}
                start={{ x: 0.9, y: 0 }}
                end={{ x: 0, y: 0 }}
                style={{
                  height: hp("3%"),
                  width: wp("27%"),
                  alignSelf: "flex-end",
                marginTop:hp("-0.5%"),
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
                  {"SUPPLY COUNT"}
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

export default SupplyHistoryForm;
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
