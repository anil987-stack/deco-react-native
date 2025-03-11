import { StyleSheet } from 'react-native'
import { Colors, Metrics, Helpers, Fonts, ApplicationStyles } from 'App/Theme'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default StyleSheet.create({
  action: {
    marginTop: hp('42%'),
    width: wp('80%'),
    justifyContent: 'center',
    alignSelf:'center'
  },
  button: {
    ...ApplicationStyles.formButton,
    alignSelf: 'center',
    marginTop: hp('1%'),
    maxHeight: hp('5%'),
    width:wp('34%'),
    elevation:18,
    borderRadius:10,
    paddingBottom:13
    // borderColor:"grey",
  
    // opacity:0.8

    // borderWidth:1
  },
  buttonBox: {
    ...Helpers.textCenter,
    backgroundColor:Colors.white,
    height:hp('40%'),
    width:wp('100%'),
    justifyContent:'center',
    top:"-5%"
  /* a */

  },
  bottomView:{
flex:1.5,
backgroundColor:'white',
bottom:50,
borderTopStartRadius:60,
borderTopEndRadius:60,

  },
  container: {
   // ...Metrics.mediumHorizontalPadding,
    //...Metrics.mediumVerticalPadding,
   // ...Helpers.center,
  //  alignSelf:'center',
  // backgroundColor: Colors.ligthGrey,
  flex: 1,
   // marginHorizontal: 30,
    //marginVertical: hp('10%'),
   // shadowColor: Colors.white, 
  },
  inputId:{
    borderColor: Colors.grey,
    color:"white",
    borderRadius:5,
    // borderWidth:1,
    padding:9,
    marginTop:0,
    fontSize: wp('4.0%'),
    fontFamily: "HelveticaNeue_CondensedBold",
    // backgroundColor:"black",

  },
  link: {
    color: Colors.label,
    flexDirection: 'row',
    height: 30,
    justifyContent: 'flex-end',
  },
  linkText: {
    ...Fonts.input,
    color: Colors.label,
  },
  text: {
    color: Colors.white,
    fontFamily: ApplicationStyles.textFont,
    fontSize: 18,
  },
  mb10: {
    marginBottom: 10
  },
  logoContainer:{
    width: 250, 
    height: 150, 
    resizeMode: 'contain'
  },
  imgBackground: {
    width: '100%',
    height: '100%',
    flex: 1 
},
// 
});
