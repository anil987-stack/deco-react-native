import { StyleSheet } from "react-native";
import { Colors, Metrics, Helpers, Fonts, ApplicationStyles } from "App/Theme";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export default StyleSheet.create({
  heading: {
    fontFamily: ApplicationStyles.textFont,
    color: Colors.lightGrey,
    fontSize: 13,
  },
  value: {
    paddingBottom: 3,
    fontWeight: "bold",
    fontSize: 13,
    top: "8%",
  },
  container: {
    paddingTop:25,
    width: 115,
    left: "10%",
    margin: "5%",
    borderBottomWidth: 2,
    height: 50,
    justifyContent: "center",
    borderColor: Colors.tabBorder,
  },
  container1: {
    left: "3%",
    width: 250,
    margin: "5%",
    borderBottomWidth: 2,
    height: 45,
    justifyContent: "center",
    borderColor: Colors.tabBorder,
  },
  
  
  
 
  
});
