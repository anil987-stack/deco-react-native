// import { StyleSheet } from 'react-native'
// import { Colors, Metrics, Helpers, Fonts } from 'App/Theme'
// import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

// export default StyleSheet.create({
//   action: {
//     marginTop: 60,
//     width: 250,
//   },
//   button: {
//     ...Metrics.smallBottomMargin,
//   },
//   buttonBox: {
//     ...Metrics.bottomMargin,
//     ...Helpers.textCenter,
//   },
//   clock: {
//     ...Helpers.colCenter,
//     borderColor: "black",
//     borderRadius: 200,
//     borderWidth: 7,
//     color: Colors.white,
//     height: 220,
//     marginTop: 30,
//     width: 220,
//     elevation:50,
//     backgroundColor:"white"
//   },
//   buttons: {
   
   
//     width: '100%',
//     borderRadius:10,
//     height:hp('6%')
//   },

//   buttontextStyle: {
//     textTransform : 'uppercase',
//     alignSelf:'center'
//   },
//   container: {
//     ...Metrics.mediumHorizontalPadding,
//     ...Metrics.mediumVerticalPadding,
//     ...Helpers.center,
//     backgroundColor: Colors.white,
//     // borderBottomWidth: 0,
//     borderColor: Colors.shadow,
//     flex: 1
//   },
//   card: {
//     padding: 40,
//    //shadowColor: Colors.button,
//    // shadowOpacity: 1,
//     //shadowRadius: 25,
//     //shadowOffset: { width: 5, height: 5 },
//     borderRadius: 10,
//     elevation: 5,
//     flexDirection: 'column',
//     justifyContent: 'center',
//     alignItems: 'center',
//     borderColor:Colors.primary
//   },
//   time: {
//     ...Fonts.h1,
//     color: Colors.clr66,
//     // margin: 'auto',
//     top:"-60%",
//     left:"9%"
//   },
// })

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
    marginTop: 25,
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
    fontSize:18
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
