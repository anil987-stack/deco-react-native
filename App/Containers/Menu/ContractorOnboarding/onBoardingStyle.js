import { StyleSheet } from 'react-native'
import { Colors, Metrics, Helpers, Fonts, ApplicationStyles } from 'App/Theme'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default StyleSheet.create({
  parentContainer: {
    flex: 1,
  },
  actionContainer: {
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    paddingLeft:  wp('1%'),
    paddingRight:  wp('1%'),
    alignItems: 'center', 
    height: hp('12%')
  },
  actionButton: {
    borderWidth: 1.5,
    borderRadius:20, 
    alignSelf: 'center',
    height: hp('5%')
  },
  actionButtonText: {
    fontSize: wp('2.8%'),
    fontFamily: ApplicationStyles.textMediumFont
  },
  actionButtonIcon: {
    color: Colors.button, 
    fontSize: 20, 
    marginRight: 0, 
    marginLeft: 12
  },
  callAction: {
    width: wp('20%')
  },
  locationAction: {
     width: wp('30%')
  },
  directionAction: {
    width: wp('38%')
  },
  view1: {
    height: 164,
    backgroundColor: 'white',
    paddingHorizontal: '6%',
  },
  view2: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  view3: {marginVertical: hp('3%')},

  grey: {color: 'grey'},
  
  text1: {fontSize: 17, fontWeight: 'bold'},

  tabs: {
    backgroundColor: Colors.user,
    color: Colors.white,
    marginBottom: hp("10%"),
    borderBottomWidth: 0,
    paddingHorizontal: 10,
    borderRadius: 5  
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
     backgroundColor: Colors.primary
   },
   mainTabs: {
     
     backgroundColor: Colors.white
   },
   tabTextStyle: {
    color: Colors.primary,
    fontWeight: "bold",
    fontSize: wp('3.5%'),
  },
   noDataText: {
     color: Colors.button,
     fontFamily: ApplicationStyles.textMsgFont,
     fontSize: 16,
     textAlign: 'center'
   },
   plusIcon: {
    borderRadius: 50,
    bottom:45,
    position: 'absolute',
    right: 25,
    borderRadius: 50,
    height: 45,
    width: 45,
    backgroundColor: Colors.button,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },

});
