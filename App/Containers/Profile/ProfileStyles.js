import { StyleSheet, Dimensions } from "react-native";
import { Colors, Metrics, Helpers, Fonts, ApplicationStyles } from "App/Theme";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export default StyleSheet.create({
  box: {
    alignSelf: "center",
    width: Dimensions.get("window").width - 30,
    marginVertical: 5,
    padding: 15,
    borderRadius: 10,
    position: "relative",
  },
  tabText: {
    color: Colors.grey,
    fontFamily: ApplicationStyles.textMsgFont,
    fontSize: wp("4%"),
    fontWeight: "800",
  },
  activetabText: {
    color: Colors.primary,
    fontFamily: ApplicationStyles.textMsgFont,
    fontSize: wp("4%"),
    fontWeight: "800",
  },
  tabHeading: {
    backgroundColor: Colors.white,
    paddingHorizontal: 0,
  },
  tabUnderLine: {
    backgroundColor: Colors.primary,
    // bottom: "10%",
    borderRadius: 5,
    // width: 95,

    // marginHorizontal: "8%",
  },
  mainTabs: {
    backgroundColor: Colors.white,
  },
  valuestyle: {
    ...Fonts.Medium,
    fontFamily: ApplicationStyles.textMsgFont,
    borderWidth: 1,
    marginTop: 7,
    borderColor: "transparent",
    borderBottomColor: Colors.grey,
    color: Colors.black,
  },
  label: {
    ...Fonts.Medium,
    fontFamily: ApplicationStyles.textMsgFont,
  },
});
