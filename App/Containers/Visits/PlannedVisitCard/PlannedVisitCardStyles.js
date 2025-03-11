import { StyleSheet, Dimensions } from 'react-native'
import { Colors, Metrics, Helpers, Fonts, ApplicationStyles } from 'App/Theme'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default StyleSheet.create({
  box: {
    alignSelf: 'center',
    backgroundColor: Colors.white,
    width: wp('94%'),
    marginVertical: hp('1%'),
    paddingVertical: hp('2%'),
    paddingHorizontal: wp('4%'),
    borderRadius: 10,
    position: 'relative',
    elevation:5,
  },
  box2:{
    width:'90%',
    // paddingBottom:30,
    backgroundColor:'#fff',
    marginTop:hp('1.5'),
    marginBottom:5,
    marginHorizontal:20,
    
    shadowOffset: {
            width: 0,
            height: 2,
        },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    shadowColor: "#000",
    elevation:6,borderRadius:10,borderWidth:1,borderColor:'#fff'
  },
  ratingBox: {
  	position: 'absolute',
  	right: wp('4%'),
  	top: hp('2.5%'),
  	flexDirection: 'row'
  },
  desc: {
    color: Colors.clr66,
    fontSize: wp('3.5%'),
    fontFamily: ApplicationStyles.textFont
  },
  detail: {
    fontFamily: ApplicationStyles.textMsgFont,
    color: Colors.clr66,
    fontSize: 14,
    textTransform: 'capitalize'
  },
  title: {
    color: Colors.button,
    fontFamily: ApplicationStyles.textMsgFont,
    fontSize: wp('5%'),
    marginBottom: hp('.8%'),
    width: wp('94%')*.6,
    fontWeight:'bold'
  },
  tuple: {
    borderBottomColor: Colors.button,
    flexDirection: 'row',
    marginBottom:'3%'
  },
  actionContainer: {
    flexDirection: 'row', 
    justifyContent: 'flex-end', 
    
    alignItems: 'center', 
    // marginTop: hp('0.5%')
  },
  callActionButton: {
    borderWidth: 1.5, 
    alignSelf: 'center', 
    backgroundColor: Colors.clrF1F9FF,
    width: wp('86%')*.28,
    height:'70%'
  },
  directionActionButton: {
    borderWidth: 1.5, 
    alignSelf: 'center', 
    backgroundColor: Colors.clrF1F9FF,
    width: wp('86%')*.38,
    height:'75%'
  },
  addActionButton: {
    borderWidth: 1.5, 
    alignSelf: 'center',
    width: wp('82%')*.28,
    backgroundColor:Colors.primary,
    height: hp('4.5%')
    
  },
  callActionButtonText: {
   fontSize: wp('3.5%'),
   fontFamily: ApplicationStyles.textMediumFont
  },
  directionActionButtonText: {
    fontSize: wp('3.5%'),
    fontFamily: ApplicationStyles.textMediumFont
  },
  addActionButtonText: {
    fontSize: wp('4%'),
    fontFamily: ApplicationStyles.textMediumFont, 
    textTransform: 'uppercase'
  },
  callButtonIcon: {
    color: Colors.button, 
    fontSize: wp('5%'),
    marginRight: 0
  },
  directionActionButtonIcon:{
    color: Colors.button, 
    fontSize: wp('5%'),
    marginRight: 0
  },
  addActionButtonIcon: {
    color: Colors.white, 
    fontSize: wp('5.5%'),
   
  },

// car
box: {
  alignSelf: 'center',
  backgroundColor: Colors.clrF1F9FF,
  width: Dimensions.get('window').width - 30,
  marginVertical: 5,
  padding: 15,
  borderRadius: 10,
  position: 'relative',
},
surface: {
  elevation: 10,
  backgroundColor: Colors.white,
  marginVertical: 10,
  paddingHorizontal: "5%",
  paddingTop: 10,
  paddingBottom:15,
  marginTop:'7%',
  width:'90%', 
  alignSelf:'center',
  borderRadius:10, 
},
row: {
  flexDirection: "row",
  alignItems: "center",
 // width:'10%',
  //justifyContent: "space-between",
  marginBottom:'0%',
  marginTop:"1%",
  
},
keyvalue: {
  marginVertical: 4,
  flexDirection: "row",
  
  alignItems: "center",
  marginHorizontal:15,
  justifyContent: "space-between",
  
  
},
head: { color: Colors.primary, fontWeight: "bold",...Fonts.cardtext,fontFamily:ApplicationStyles.textTransform,fontSize:17 },
subhead: { fontSize: 16, color: Colors.black },
key: { color: Colors.subtitle, fontWeight:'800',fontSize:14 },
value: {
  color: Colors.primary,
  fontWeight: "bold",
  width: "50%",
  fontSize:14
},
marginTop: { marginTop: 18 },
btmBox: {
    flexDirection: 'column',
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 5
},
desc: {
  color: Colors.button,
  fontSize: 12,
  fontFamily: ApplicationStyles.textFont,
},
detail: {
  fontFamily: ApplicationStyles.textMsgFont,
  color: Colors.clr66,
  fontSize: 14,
  textTransform: 'capitalize'
},
strip: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  marginBottom: 8
},
title: {
  color: Colors.button,
  fontFamily: ApplicationStyles.textMsgFont,
  fontSize: 16
},
ttl: {
  color: Colors.clr66,
  fontFamily: ApplicationStyles.textFont,
  fontSize: 14
},
tuple: {
  borderBottomColor: Colors.button,
  flexDirection: 'row'
},
userCircle: {
  // marginTop: 80,
  alignItems: 'center',
  backgroundColor: Colors.user,
  borderRadius: 50,
  flexDirection: 'row',
  height: 56,
  justifyContent: 'center',
  width: 56,
},
userDtl: {
  padding: 10,
  paddingTop: 3
},
userIcon: {
  height: 16,
  width: 16,
},
Screen:{
  width:'90%',
  // paddingBottom:30,
  backgroundColor:'#fff',
  marginTop:hp('1.5'),
  marginBottom:5,
  marginHorizontal:20,
  
  shadowOffset: {
          width: 0,
          height: 2,
      },
  shadowOpacity: 0.25,
  shadowRadius: 3.84,
  shadowColor: "#000",
  elevation:6,borderRadius:10,borderWidth:1,borderColor:'#fff'
},

value1: {
  // color: Colors.primary,
  fontWeight: "bold",
  // width: "100%",
  fontSize:14,
},


})
