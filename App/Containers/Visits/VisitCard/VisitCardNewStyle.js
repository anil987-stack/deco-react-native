import { StyleSheet, Dimensions } from 'react-native'
import { Colors, Metrics, Helpers, Fonts, ApplicationStyles } from 'App/Theme'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default StyleSheet.create({
  box: {
    alignSelf: 'center',
    backgroundColor: Colors.white,
    width: wp('94%'),
    marginVertical: 0,
    paddingLeft: wp('3%'),
    paddingRight: wp('3%'),
  //  paddingTop: hp('5%'),
    paddingBottom: hp('2%'),
    borderRadius: 15,
    marginTop:12,
    position: 'relative',
    elevation:10,

  },
  disabledBox: {
    alignSelf: 'center',
    backgroundColor: Colors.disabled,
    width: wp('92%'),
    marginVertical: 8,
    paddingLeft: wp('3%'),
    paddingRight: wp('3%'),
    paddingTop: hp('2%'),
    paddingBottom: hp('2%'),
    borderRadius: 10,
    position: 'relative'
  },
  ratingBox: {
  	position: 'absolute',
  	right: wp('2%'),
  	top: hp('2.5%'),
  	flexDirection: 'row'
  },
  btmBox: {
    flexDirection: 'column',
    paddingLeft: wp('2%'),
    paddingRight: wp('2%'),
    paddingTop: hp('2%')
  },
  desc: {
    color: Colors.clr66,
    fontSize: 13,
    fontWeight: 'bold',
    fontFamily: ApplicationStyles.textFont,
    width: (Dimensions.get('window').width - 30)/1.9,
    // overflow:'hidden'
  },
  detail: {
    fontFamily: ApplicationStyles.textMsgFont,
    color: Colors.primary,
    fontSize: wp('3.5%'),
    textTransform: 'capitalize',
    fontWeight:'bold'
  },
  strip: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
    paddingRight:"5%",
    paddingBottom:"0%"
  },
  stripM: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 6,
     marginTop: 10
  },
  avatarContainer: {
    marginRight: 6,
  },
  title: {
    color: Colors.primary,
    fontFamily: ApplicationStyles.textMsgFont,
    fontSize: wp('4.2%'),
    marginBottom: 6,
    width: wp('75%'),
    overflow:'hidden',
    fontWeight:'bold',
    marginTop:7,
  },
  ttl: {
    color: Colors.subtitle,
    fontFamily: ApplicationStyles.textFont,
    fontSize: wp('3.5%'),
    fontWeight:'700'
  },
  ttlIcon: {
  	color: Colors.clr66,
    fontSize: wp('3%')
  },
  tuple: {
    borderBottomColor: Colors.button,
    flexDirection: 'row'
  },
  userDtl: {
     position: 'relative',
   
  },
  titleContainer: {
    flexDirection: "row",
   // width:'40%',,
   justifyContent:"space-between"
  },
  actionButton: {
   elevation:2,
    alignSelf: 'center', 
    backgroundColor: Colors.primary,
    width: wp('90%')*.20,
    height: hp('4%')
  },
  disabledActionButton: {
    borderWidth: 1.5, 
    alignSelf: 'center', 
    backgroundColor: Colors.disabled,
    width: wp('92%')*.30,
  
  },
  actionButtonText: {
    fontSize: wp('2.5%'),
    fontFamily: ApplicationStyles.textMediumFont,
    color: Colors.white,
  },
  actionButtonIcon: {
    color: Colors.firozi, 
    fontSize: wp('5%'),
    marginRight: 0,
    marginLeft: wp('3%')
  },
  callActionButtonIcon: {
    color: Colors.primary, 
    fontSize: wp('4%'),
  },
  actionContainer: {
    flexDirection: 'row', 
    justifyContent: "space-between", 
    alignItems: 'center', 
    marginTop: 10,
    marginLeft:"5%",
    marginRight:"5%"
  },
  editAction: {
    paddingTop: 5, 
    // marginTop: 10, 
    position: 'absolute', 
    right: 50, 

    // top: hp('0%')
  },
  visitStatusBarContainer: {
    paddingTop: 5, 
    marginTop: 5, 
    position: 'absolute', 
    right: 10, 
    top: hp('7.5%'),
    width: '66%',
    alignItems: 'flex-end'
  },
  editActionIcon: {
    fontSize: 18, 
    color: Colors.primary
  },
  cancelAction: {
    // paddingTop: 5, 
    // marginTop: 10, 
    // position: 'absolute', 
    right:15, 
    // top: hp('0%')
  },
  cancelActionIcon: {
    fontSize: 18, 
    color: Colors.button
  },
  actionText: {
    fontSize: 17, 
    color: Colors.primary
  },
  statusContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    width: wp('92%'),
  },
  callAction: {
    width: wp('92%')*.24
  },
  directionAction: {
    width: wp('92%')*.32
  },
  visitAction: {
    width: wp('92%')*.28
  },
  showVisitAction: {
    width: wp('92%')*.50
  },
  directionActionText: {
    fontSize: wp('3.5%')
  },
  visitActionText: {
    fontSize: wp('3.0%')
  }
})