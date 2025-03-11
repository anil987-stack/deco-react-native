import { StyleSheet } from 'react-native'
import { Helpers, Metrics, Fonts, Colors, ApplicationStyles } from 'App/Theme'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen'


export default StyleSheet.create({
  container: {
  flex:1,
    backgroundColor:"black",

  },
  plusIcon: {
  	borderRadius: 50,
    bottom: 75,
    position: 'absolute',
    right: 25,
    borderRadius: 50,
    height: 45,
    width: 45,
    backgroundColor:"black",
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  plusIcon1: {
  	borderRadius: 50,
    bottom: 75,
    position: 'absolute',
    right: 25,
    borderRadius: 50,
    height: 45,
    width: 45,
    backgroundColor: Colors.mustard,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
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
  iconContainer: {
  	flexDirection:'row',
  	alignItems: 'center',
  	justifyContent: 'center',
  	bottom: 75,
    position: 'absolute',
    right: 90
  },
  iconMessage: {
  	fontSize: 14,
  	padding: 2
  },
  firstView:{
    width:'90%',
	// height:'auto', 
	elevation:15,
	borderWidth:0,
	alignSelf:'center',
	backgroundColor:"red",
	// flexDirection:'row',
	// padding:10,
	marginBottom:0,
	marginTop:13,
  borderRadius:13
  },
  firstView1:{
  width:'90%',
	//height:'auto', 
	elevation:3,
	borderWidth:0,
	alignSelf:'center',
	backgroundColor:'white',
	// flexDirection:'row',
	// padding:10,
	marginBottom:0,
	marginTop:30
  },
  imgBackground: {
    width: '100%',
    height: '100%',
    flex: 1 
},
container: {
  flex: 1,
  backgroundColor: 'transparent',
  // alignItems: 'center',
  // justifyContent: 'center',
},
shape_container: {
  // height: 120,
  // alignItems: 'center',
  // justifyContent: 'center',
  // margin: 10,
},
triangle: {
  width: 0,
  height: 0,
  backgroundColor: 'transparent',
  borderStyle: 'solid',
  borderTopWidth: 38.5,
  borderLeftWidth: 153,
  borderRightWidth: 30,
  // borderBottomWidth: 50,
  borderLeftColor: '#5c5c5c',
  borderRightColor: 'transparent',
  // borderBottomColor: '#e76f51',
  borderTopColor:"#5c5c5c",
  
  // transform: [{ rotate: '180deg' }]
},
triangle1: {
  width: 0,
  height: 0,
  backgroundColor: 'transparent',
  borderStyle: 'solid',
  borderTopWidth: 32,
  borderLeftWidth: 150,
  borderRightWidth: 25,
  // borderBottomWidth: 50,
  borderLeftColor: 'white',
  borderRightColor: 'transparent',
  // borderBottomColor: '#e76f51',
  borderTopColor:"white",
  marginTop:"-9.5%",
  elevation:20,
  fontFamily: "HelveticaNeue_CondensedBold",
 
  fontWeight: "bold",
 
  fontSize: wp("3.6%"),
  textAlignVertical:"center",
  textAlign:"center",
  
  // transform: [{ rotate: '180deg' }]
},
cropCard: {
  width: 0,
  height: 0,
  backgroundColor: 'transparent',
  borderStyle: 'solid',
  borderBottomWidth: 34,
  borderLeftWidth: 130,
  borderRightWidth: 25,
  // borderBottomWidth: 50,
  borderLeftColor: 'black',
  borderRightColor: 'transparent',
  // borderBottomColor: '#e76f51',
  borderBottomColor:"black",
  marginTop:"-9.5%",
  elevation:20,
  zIndex:15,
  opacity:1
  
  // transform: [{ rotate: '180deg' }]
},
cropCard1: {
  width: 0,
  height: 0,
  backgroundColor: 'transparent',
  borderStyle: 'solid',
  borderBottomWidth: 26,
  borderLeftWidth: 90,
  borderRightWidth: 25,
  // borderBottomWidth: 50,
  borderLeftColor: 'yellow',
  borderRightColor: 'transparent',
  // borderBottomColor: '#e76f51',
  borderBottomColor:"yellow",
  marginTop:"-7.5%",
  elevation:20,
  marginLeft:"-8%",
  opacity:0.5
  
 
  
  // transform: [{ rotate: '180deg' }]
},
button: {
  ...ApplicationStyles.formButton,
 
  marginTop: hp('-5.8%'),
  maxHeight: hp('8%'),
  width:wp('28%'),
  elevation:18,
  borderRadius:10,
  paddingBottom:13,
  marginLeft:wp("100%")
  // borderColor:"grey",

  // opacity:0.8

  // borderWidth:1
},

searchContainer: {
  // paddingVertical: 21,
  width: "100%",
  borderRadius: 7,
  // paddingHorizontal: 1,
  elevation: 0,
  backgroundColor:"white",
  fontSize: wp("3.8%"),
  fontWeight: "700",
  
  alignSelf: "center",
  // marginBottom: "2%",
  marginTop: "-0.5%",
  height: hp("4.5%"),
 
  borderWidth:1,
  marginLeft:"-0.5%",
  
  borderColor:"white",
 opacity:0.3
 
  // padding
},

Screen:{
  width:'95%',
  // paddingBottom:30,
  // backgroundColor:'#fff',
  marginTop:hp('1.5'),
  marginBottom:5,
  marginHorizontal:12,
  
  shadowOffset: {
          width: 0,
          height: 2,
      },
  shadowOpacity: 0.25,
  shadowRadius: 3.84,
  shadowColor: "#000",
  elevation:6,
},
})
