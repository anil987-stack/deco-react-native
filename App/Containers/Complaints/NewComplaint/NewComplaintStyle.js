import { StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

import { Colors, Metrics, Helpers, Fonts, ApplicationStyles } from "App/Theme";
export default StyleSheet.create({
  mb10: {
    marginBottom: hp("2%"),
    height: hp("5.5%"),
    fontSize: wp("3.5%"),
    borderWidth: 0,
    elevation: 4,
    marginHorizontal: 2,
    backgroundColor: "white",
    borderRadius:4,
  },
  mb11: {
    marginBottom: hp("2%"),
    height: hp("14.5%"),
    width: wp("87%"),
    fontSize: wp("3.5%"),
    borderWidth: 0.3,
    marginHorizontal: 2,
    elevation: 4,
    backgroundColor: "white",
    borderRadius:4,
    top:hp("1.5%")
  },

  picker: {
    borderRadius:4,
    borderColor: "#515C6F",
    width: wp("88%"),
    borderWidth: 0.3,
    elevation: 5,
    backgroundColor: "white",
    // height: hp('5.5%'),
    marginTop: 5,
    marginBottom: hp("2%"),
    fontSize: wp("2%"),
    justifyContent: "center",
  },
  backIcon: {
    color: Colors.button,
    padding: 15,
    fontSize: wp("6%"),
  },
  pickerLabel: {
    color: Colors.placeHolder,
    fontSize: 16,
    fontFamily: ApplicationStyles.textFont,
    textAlign: "left",
    width: "97%",
    padding: 10,
    marginLeft: 15,
    flexDirection: "row",
  },
  action: {
    // marginTop: 80,
    width: wp("90%"),
    marginHorizontal: 0,
  },
  container: {
    ...Metrics.tinyHorizontalPadding,
    ...Metrics.tinyVerticalPadding,

    backgroundColor: Colors.white,
    flex: 1,
  },
  heading: {
    alignSelf: "center",
    color: Colors.primary,
    fontFamily: ApplicationStyles.textMsgFont,
    fontSize: 24,
    marginBottom: 15,
  },
  buttonContainer: {
    flexDirection: "row",
    marginTop: hp("3%"),
    marginBottom: hp("4%"),
  },
  button: {
    backgroundColor: Colors.primary,
    width: wp('30'),
    height:wp('10'),
    marginRight: 8,
    marginLeft: 120,
  },
  bottomMargin: {
    marginBottom: hp("2%"),
    width: "100%",
  },
  recurringActionButtonText: {
    color: Colors.button,
    fontSize: wp("4%"),
    textTransform: "capitalize",
    fontFamily: ApplicationStyles.textMediumFont,
  },
  recurringActionButtonIcon: {
    color: Colors.primary,
    fontSize: wp("4%"),
  },
});
