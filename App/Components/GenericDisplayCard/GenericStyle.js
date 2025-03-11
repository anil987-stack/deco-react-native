import { StyleSheet, Dimensions } from "react-native";
import { Colors, ApplicationStyles, Metrics } from "App/Theme";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export default StyleSheet.create({
  /*  card: {
    ...Metrics.normalPadding,
    backgroundColor: Colors.clrF1F9FF,
    borderRadius: 10,
    margin: 7,
    width: Dimensions.get('window').width - 30,
    elevation: 3,
    alignSelf: 'center'
  },
 */
  box: {
    ...Metrics.normalPadding,
    backgroundColor: Colors.clrF1F9FF,
    borderRadius: 10,
    elevation: 3,
    alignSelf: "center",
    backgroundColor: Colors.white,
    width: wp("90%"),
    marginVertical: 6,
    paddingLeft: wp("3%"),
    paddingRight: wp("0%"),
    paddingTop: hp("2%"),
    paddingBottom: hp("2%"),
    borderRadius: 10,
    position: "relative",
    borderColor: Colors.lightGrey,
    borderWidth: wp(".1%"),
    elevation: 10,
  },
  darkCard: {
    ...Metrics.normalPadding,
    width: wp("92%"),
    backgroundColor: Colors.label,
    borderRadius: 10,
    margin: 5,
    elevation: 3,
    alignSelf: "center",
  },
  darkDetail: {
    fontSize: wp("3.5%"),
    color: Colors.clrF1F9FF,
    fontFamily: ApplicationStyles.textMsgFont,
  },
  darkTitle: {
    color: Colors.white,
    fontFamily: ApplicationStyles.textMsgFont,
    fontSize: wp("4.5%"),
    marginBottom: 5,
    textTransform: "capitalize",
  },
  darkTtl: {
    color: Colors.clrF1F9FF,
    fontSize: wp("3.5%"),
    fontFamily: ApplicationStyles.textFont,
  },
  detail: {
    color: Colors.clr66,
    fontSize: wp("3.5%"),
    fontFamily: ApplicationStyles.textMsgFont,
  },
  strip: {
    flexDirection: "column",
    justifyContent: "center",
    marginBottom: hp(".4%"),
  },
  strip1: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: hp(".4%"),
  },

  stripV: {
    flexDirection: "column",
    justifyContent: "space-around",
    marginLeft: wp("2%"),
    marginRight: wp("2%"),
    marginBottom: wp("1%"),
  },
  title: {
    color: Colors.primary,
    fontFamily: ApplicationStyles.textMsgFont,
    fontSize: wp("4.4%"),
    marginBottom: 5,
    textTransform: "capitalize",
  },
  ttl: {
    color: Colors.grey,
    fontSize: wp("3.5%"),
    fontFamily: ApplicationStyles.textMsgFont,
    // backgroundColor:'red'
  },

  ttl1: {
    color: Colors.black,
    fontWeight: "700",
    fontSize: wp("3.9%"),

    fontFamily: ApplicationStyles.textFont,
  },
  detail1: {
    color: Colors.grey,
    fontWeight: "900",
    fontSize: wp("4%"),
    fontFamily: ApplicationStyles.textMsgFont,
  },
});
