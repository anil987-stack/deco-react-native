import { StyleSheet } from 'react-native'
import { Helpers, Metrics, Fonts, Colors, ApplicationStyles } from 'App/Theme'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';

export default StyleSheet.create({
  box: {
    alignItems: 'center',
    backgroundColor: Colors.white,
    color: Colors.error,
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    padding: Metrics.tiny,
    textAlign: 'center',
    fontFamily: ApplicationStyles.textMsgFont
  },
  buttons: {
    marginHorizontal: 60,
    marginTop: 30,
  },
  input: {
    backgroundColor: Colors.error,
    borderRadius: 5,
    color: Colors.error,
    padding: 10,
    fontFamily: ApplicationStyles.textMsgFont
  },
  mb10: {
    marginBottom: 10,
  },
  ml52: {
    marginLeft: 52,
  },
  mt30: {
    marginTop: 30
  },
  title: {
    // margin: 'auto',
    ...Fonts.regular,
    color: Colors.primary,
    fontFamily: ApplicationStyles.textMsgFont
  },
  wish: {
    alignSelf: 'center',
    color: Colors.label,
    fontSize: 34,
    fontFamily: ApplicationStyles.textMsgFont,
    textTransform: 'uppercase'
  },
  recurringActionButton: {
    borderColor: Colors.border,
    borderStyle: 'solid',
    borderWidth: 1,
    overflow: 'hidden',
    borderRadius: 100,
    borderWidth: 2, 
    alignSelf: 'center', 
    backgroundColor: Colors.clrF1F9FF,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'flex-end',
    marginRight: 20,
    marginBottom: 15,
    paddingLeft: 15,
    paddingRight: 15

  },
  recurringActionButtonText: {
    color: Colors.button,
    fontSize: 18,
    textTransform: 'capitalize',
    fontSize: 14,
    fontFamily: ApplicationStyles.textMediumFont
  },
  recurringActionButtonIcon: {
    color: Colors.button, 
    fontSize: 20, 
    marginRight: 0
  },

  actionButton: {
    overflow: 'visible',
    paddingLeft: wp('4%'),
    paddingRight: wp('4%'),
    marginBottom: hp('1%'),
    marginTop: hp('2.5%'),
    marginRight: wp('2%'),
    marginLeft: wp('1%'),
    height: hp('5.0%'),
    elevation:10,
    width: wp('10%'),
    borderTopWidth:2,
    borderColor:Colors.grey,
    opacity:0.6,
    
  },
  addActionButton: {
    borderWidth: 1.5, 
    alignSelf: 'flex-end',
    width: wp('35%'),
    marginRight:  wp('3%'),
    marginBottom: hp('1.5%'),
    height: hp('4%'),
    marginTop:hp('2%')

  },
  addActionButtonText: {
    fontSize: wp('3.3%'),
    fontFamily: "HelveticaNeue_CondensedBold", 
    textTransform: 'uppercase'
  },
  customSelectedTextStyle: {
    fontSize: wp('2.5%'),
    fontFamily: "HelveticaNeue_CondensedBold",
    color: Colors.white,
    fontWeight: 'bold',
  },
  selected: {
    borderWidth: 1.2,
    borderColor: '#bfbfbf',
    opacity:0.9,
    elevation:10,
    // backgroundColor:Colors.primary,

  },
  customSelectedStyleCorpBlue: {
    backgroundColor: '#400000',
    width: wp('28%'),
    height:hp("5.5%"),
    // marginLeft:wp("-2%")

  },
  actionButtonText: {
    fontSize: wp('2.5%'),
    fontWeight: 'bold',
    fontFamily: '"HelveticaNeue_CondensedBold"',
    color: '#bfbfbf',
    
  },
  tabs: {
    backgroundColor: Colors.user,
    color: Colors.white,
    marginBottom: hp("10%"),
    borderBottomWidth: 0,
    paddingHorizontal: 10,
    borderRadius: 5,
   
 },
   tabText: {
     color: Colors.headingBlack,
     fontFamily: ApplicationStyles.textMsgFont,
     fontSize: wp('3.5%'),
   },
   tabHeading: {
     backgroundColor: Colors.white,
     paddingHorizontal: 0,
     
 
   },
   tabUnderLine: {
     backgroundColor: Colors.primary,
    
     
   },
   mainTabs: {
     
     backgroundColor: Colors.white
   },
   tabTextStyle: {
    color: Colors.primary,
    fontWeight: "bold",
    fontSize: wp('3.5%'),
  },
})
