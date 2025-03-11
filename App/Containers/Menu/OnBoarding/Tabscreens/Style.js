import { StyleSheet, Dimensions } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { ApplicationStyles, Colors, Metrics } from "App/Theme";
export default StyleSheet.create({
  text: { marginLeft: "5%", color: "black", fontSize: wp("3.9") },
  inputtext: {
    height: hp("5"),
    borderColor: "white",
    borderWidth: 1,
    alignSelf: "center",
    backgroundColor: "white",
    elevation:5,
    color: "black",
    borderRadius: 0,
  },
  picker: {
    borderRadius: 0,
    width: "97%",
    height: hp("5%"),
    elevation: 5,
    alignSelf: "center",
    //  marginBottom: hp('5%'),
    paddingHorizontal: 0,
    marginLeft: 0,
    backgroundColor: Colors.white,
    borderWidth: 0,
  },
  mb11: {
    marginBottom: hp("2%"),
    height: hp("14.5%"),
    width: wp("87%"),
    fontSize: wp("3.5%"),
    borderWidth: 0,
    marginHorizontal: 2,
    elevation: 4,
    backgroundColor: "white",
    borderRadius: 10,
    top:hp("1.5%")
  },
  pickerLabel: {
    color:"lightgrey",
    fontFamily: ApplicationStyles.textFont,
    textAlign: "left",
    width: "99%",
    padding: 10,
    fontSize: 14,
    // fontWeight: "bold",
    flexDirection: "row",
  },

  text1: { marginLeft: "5%", color: Colors.primary, fontSize: wp("3.9"), fontWeight:"bold" },
});
