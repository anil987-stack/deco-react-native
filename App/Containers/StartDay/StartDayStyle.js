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
    fontSize: 32,
    fontFamily: "HelveticaNeue_CondensedBold",
    color: Colors.primary,
    alignSelf: "auto",
    alignSelf: "center",
    marginTop: 20,
    fontWeight:"bold",
    flexWrap:"wrap",
    width:"85%"
  },
  clr: {
    color: Colors.primary,
  },
  clr1: {
    color: Colors.subtitle,
    alignSelf: "center",
    letterSpacing: 1,
  },
  buttons: {
    marginHorizontal: 60,
    marginTop: hp("4%"),
    width: wp("48.5%"),
    borderRadius: 13,
    height: hp("6%"),
    alignSelf: "center",
    // backgroundColor:"pink",
    // elevation:50,
   
  
  },

  buttons1: {
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
    fontSize:wp("5%")
  },
  input: {
    backgroundColor: Colors.error,
    borderRadius: 5,
    color: Colors.error,
    padding: 10,
    fontFamily: ApplicationStyles.textMsgFont,
  },
  mb10: {
    marginBottom: 60,
  },
  ml52: {
    marginLeft: 52,
  },
  mt30: {
    marginTop: 50,
  },
  title: {
    // margin: 'auto',
    ...Fonts.regular,
    color: Colors.primary,
    fontFamily: ApplicationStyles.textMsgFont,
  },
  wish: {
    color: Colors.primary,
    fontSize: 26,
    fontFamily: ApplicationStyles.textMsgFont,
    textTransform: "capitalize",
    top: hp("5%"),
    alignSelf: "center",
  },
  line: {
    borderBottomWidth: 2,
    width: 180,
    alignSelf: "center",
    top: hp("3%"),
  },
  titleText: {
    marginTop: 6,
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
    backgroundColor: Colors.primary,
    width: "100%",
    height: hp("44"),
    marginTop: hp("25.9%"),
  },
  imgBackground: {
    width: '100%',
    height: '100%',
    flex: 1 
},
time:{
  fontFamily: "HelveticaNeue_CondensedBold",
  color:"white",
  fontSize:28,
  fontWeight:"bold"
  
}
});
