import { StyleSheet, Dimensions } from "react-native";
import { Helpers, Metrics, Fonts, Colors, ApplicationStyles } from "App/Theme";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Left } from "native-base";

export default StyleSheet.create({
  box: {
    // backgroundColor: Colors.white,
    // color: Colors.error,
    display: "flex",
    flex: 1,
    // justifyContent: 'center',
    padding: Metrics.tiny,
    // textAlign: 'center',
    fontFamily: ApplicationStyles.textMsgFont,
    backgroundColor: Colors.white,
  },

  box1: {
    display: "flex",
    flex: 1,
    padding: Metrics.tiny,
    fontFamily: ApplicationStyles.textMsgFont,
    backgroundColor: Colors.white,
  },

  header: {
    // marginBottom: 300,
    fontSize: 30,
    fontFamily: ApplicationStyles.textMsgFont,
    color: Colors.primary,
    alignSelf: "auto",
    alignSelf: "center",
    marginTop: 0,
  },
  clr: {
    color: Colors.white,
  },
  clr2: {
    color: Colors.subtitle,
  },
  clr1: {
    color: Colors.white,
    alignSelf: "center",
    letterSpacing: 1,
  },
  buttons: {
    marginHorizontal: 60,
    marginTop: 30,
    width: wp("60%"),
    borderRadius: 28,
    height: hp("7%"),
    alignSelf: "center",
  },

  buttons1: {
    marginTop: 15,
    width: wp("70%"),
    borderRadius: 7,
    height: hp("6%"),
    borderColor: Colors.primary,
    borderWidth: 1,
    alignSelf: "center",
  },
  buttontextStyle: {
    textTransform: "uppercase",
    alignSelf: "center",
    fontSize:15
  },
  input: {
    backgroundColor: Colors.error,
    borderRadius: 5,
    color: Colors.error,
    padding: 10,
    fontFamily: ApplicationStyles.textMsgFont,
  },
  mb10: {
    marginBottom: 65,
    color:"#000080"
  },
  ml52: {
    marginLeft: 52,
  },
  mt30: {
    marginTop: 110,
  },
  title: {
    // margin: 'auto',
    ...Fonts.regular,
    color: Colors.primary,
    fontFamily: ApplicationStyles.textMsgFont,
  },
  wish: {
    color: Colors.white,
    fontSize: 26,
    fontFamily: ApplicationStyles.textMsgFont,
    textTransform: "capitalize",
    marginTop: 5,
    marginLeft: 20,
  },
  line: {
    marginLeft: 20,
    marginTop: -10,
    borderBottomWidth: 3,
    width: 180,
  },
  titleText: {
    marginTop: 2,
    fontSize: 26,
    // alignSelf:'baseline',
    marginHorizontal: 35,
    flexWrap: "wrap",
  },
  svgCurve: {
    position: "absolute",
    width: Dimensions.get("window").width,
    marginTop: hp("34%"),
  },
  buttonBox: {
    backgroundColor: Colors.white,
    width: "100%",
    height: hp("44"),
    marginTop: hp("25.9%"),
  },
});
