import { StyleSheet } from "react-native";
import { Colors, Metrics, Helpers, Fonts, ApplicationStyles } from "App/Theme";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export default StyleSheet.create({
  heading: {
    fontSize: 13,
    fontFamily: ApplicationStyles.textFont,
    color: Colors.lightGrey,
    //   fontWeight:'bold'
  },
  value: {
    paddingTop: 10,
    paddingBottom: 3,
    fontWeight: "bold",
    fontSize: 13,
    top: "8%",
    fontFamily: ApplicationStyles.textMsgFont,
  },
  container: {
    paddingTop: 30,
    width: 110,
    left: "10%",
    margin: "5%",
    borderBottomWidth: 2,
    borderColor: Colors.tabBorder,
    height: 70,
    justifyContent: "center",
  },
  textContainer: {
    width: "100%",
    backgroundColor: Colors.lightGrey,
    padding: 10,
    alignItems: "flex-start",
    justifyContent: "center",
    borderRadius: 5,
    marginTop: 7,
  },
  areacontainer: {
    width: 300,
    margin: "5%",

    height: 110,
  },
  valuecontainer: {
    display: "flex",
    flexDirection: "row",

    justifyContent: "flex-start",
    flexWrap: "wrap",
  },
  value1: {
    width: 110,
    fontWeight: "bold",
    fontSize: 13,
    marginBottom: 10,
    marginRight: 10,
    marginTop: "2%",
    padding: 10,
    justifyContent: "center",
    fontSize: 13,
    top: "8%",
    borderWidth: 2,
    borderColor: Colors.tabBorder,
    borderRadius: 25,
  },
  container1: {
    width: 255,
    margin: "4%",
    borderBottomWidth: 1,
    height: 45,
    justifyContent: "center",
    borderColor: Colors.tabBorder,
  },
});
