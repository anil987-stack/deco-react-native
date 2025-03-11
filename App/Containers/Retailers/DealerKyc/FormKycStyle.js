import { StyleSheet, Dimensions } from "react-native";
import { Helpers, Metrics, Fonts, Colors, ApplicationStyles } from "App/Theme";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Left } from "native-base";

export default StyleSheet.create({
  head: {
    height: hp("14%"),
    backgroundColor: Colors.primary,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    flexDirection: "column",
  },
  t1: {
    fontSize: hp("3"),
    fontWeight: "bold",
    color: "#FFFFFF",
  },
  t3: {
    fontSize: hp("3"),
    fontWeight: "bold",
    color: "black",
  },
  tabs: {
    flex: 1,
    // position:"absolute",
    marginTop: hp("-38%"),
    width: "90%",
    alignSelf: "center",
  },
  text: {
    marginLeft: "3%",
    color: "grey",
    fontSize: wp("3.9"),
    fontWeight: "bold",
  },
  inputtext: {
    height: hp("5"),
    borderColor: "white",
    borderWidth: 1,
    alignSelf: "center",
    backgroundColor: "white",
    borderColor: Colors.primary,
    color: "black",
    borderRadius: 1,
  },
  //   picker: {
  //     borderRadius: 0,
  //     width: "100%",
  //     height: hp("4.5%"),
  //     elevation: 2,
  //     alignSelf: "center",
  //     //  marginBottom: hp('5%'),
  //     // paddingHorizontal: 5,
  //     // marginLeft:wp("2.5%"),
  //     backgroundColor: Colors.white,
  //     borderWidth: 0.8,
  //   },
  picker: {
    // borderRadius: 100,
    borderColor:Colors.primary,
    width: wp("88%"),
    borderWidth: 0.8,
    elevation: 5,
    backgroundColor: "white",
    // height: hp('5.5%'),
    marginTop: 5,
    marginBottom: hp("2%"),
    fontSize: wp("2%"),
    justifyContent: "center",
    left:wp("2%")
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
  picker1: {
    // borderRadius: 100,
    borderColor:Colors.primary,
    width: wp("50%"),
    borderWidth: 0.8,
    elevation: 5,
    backgroundColor: "white",
    // height: hp('5.5%'),
    marginTop: 5,
    marginBottom: hp("2%"),
    fontSize: wp("2%"),
    justifyContent: "center",
  },
});
