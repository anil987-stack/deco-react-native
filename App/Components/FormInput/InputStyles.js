import { StyleSheet } from "react-native";
import { Colors, ApplicationStyles } from "App/Theme";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export default StyleSheet.create({
  input: {
    borderColor: "transparent",
    borderRadius: 4,
    borderWidth: 0,
    color: Colors.inputText,
    fontFamily: ApplicationStyles.textMsgFont,
    padding: 10,
    fontSize: wp("4%"),
    justifyContent: "center",
    height: hp("5"),
    alignItems: "center",
  },
  inputError: {
    borderColor: Colors.error,
  },
  item: {
    borderBottomWidth: 0,
    marginBottom: 7,
    marginTop: 7,
  },
  itemNumber: {
    marginVertical: 10,
  },

  label: {
    color: "black",
    fontFamily: ApplicationStyles.textMsgFont,
    paddingLeft: 5,
    fontSize: wp("4.4%"),
  },
  placeholder: {
    color:"lightgrey",
    fontFamily: ApplicationStyles.textMsgFont,
    fontSize: wp("2%"),
  },
  textArea: {
    borderColor: Colors.border,
    borderRadius: 10,
    borderWidth: 1,
    color: Colors.fadeRed,
    fontFamily: ApplicationStyles.textMediumFont,
    paddingLeft: 20,
  },
  placeHolderTextStyle: {
    fontFamily: ApplicationStyles.textMsgFont,
    color: Colors.fadeRed,
  },
  textStyle: {
    fontFamily: ApplicationStyles.textMsgFont,
    color: Colors.grey,
  },
  indicatorView: {
    width: "100%",
    backgroundColor: "white",
    borderColor: "black",
    borderWidth: 1,
  },
  input1: {
    // borderColor: "transparent",
    borderRadius: 4,
    borderWidth: 1,
    color: Colors.inputText,
    fontFamily: ApplicationStyles.textMsgFont,
    padding: 10,
    fontSize: wp("4%"),
    justifyContent: "center",
    height: hp("5"),
    alignItems: "center",
  },
});
