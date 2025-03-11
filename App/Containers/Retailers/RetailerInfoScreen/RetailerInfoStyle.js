import { StyleSheet } from "react-native";
import { Colors, Metrics, Helpers, Fonts, ApplicationStyles } from "App/Theme";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export default StyleSheet.create({
  parentContainer: {
    flex: 1,
  },
  actionContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: wp("1%"),
    paddingRight: wp("1%"),
    alignItems: "center",
    height: hp("12%"),
  },
  actionButton: {
    borderWidth: 1.5,
    borderRadius: 20,
    alignSelf: "center",
    height: hp("5%"),
  },
  actionButton1: {
    borderWidth: 1.5,
    borderRadius: 20,
    height: hp("5%"),
    left: wp("60%"),
    position: "absolute",
  },
  actionButtonText: {
    fontSize: wp("2.8%"),
    fontFamily: ApplicationStyles.textMediumFont,
  },
  actionButtonText1: {
    fontSize: wp("4%"),
    fontFamily: ApplicationStyles.textMediumFont,
    color: Colors.primary,
    fontWeight: "bold",
  },
  actionButtonIcon: {
    color: Colors.button,
    fontSize: 20,
    marginRight: 0,
    marginLeft: 12,
  },
  callAction: {
    width: wp("20%"),
  },
  locationAction: {
    width: wp("30%"),
  },
  directionAction: {
    width: wp("38%"),
  },
  view1: {
    height: 164,
    backgroundColor: "white",
    paddingHorizontal: "6%",
  },
  view2: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  view3: { marginVertical: hp("3%"),width:wp("60%") },

  grey: { color: "grey" },

  text1: { fontSize: 17, fontWeight: "bold" },

  tabText: {
    color: Colors.grey,
    fontFamily: ApplicationStyles.textMsgFont,
    textAlign:"center"
    // fontSize: wp('4%')
  },
  tabHeading: {
    backgroundColor: Colors.white,
    // width: "20%",
    // paddingHorizontal: 0,
    // paddingHorizontal: 10
  },
  tabUnderLine: {
    backgroundColor: Colors.primary,
    // width: "18%",
    // marginHorizontal: 10,
    marginBottom: 4,
    borderRadius: 5,
  },

  tabTextStyle: {
    color: Colors.primary,
    fontWeight: "normal",
    textAlign:"center"
  },
  mainTabs: {
    marginTop: hp("0%"),
    backgroundColor: Colors.white,
  },
  noDataText: {
    color: Colors.button,
    fontFamily: ApplicationStyles.textMsgFont,
    fontSize: 16,
    textAlign: "center",
  },
});
