import { StyleSheet, Dimensions } from 'react-native'
import { Colors, ApplicationStyles, Metrics } from 'App/Theme'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default StyleSheet.create({
    psmPickerStyles: {
		marginTop: -5,
		backgroundColor: 'white',
		paddingVertical: 8,
		paddingHorizontal: '8%',
		width: '90%',
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		borderRadius: 25,
		elevation: 5,
		marginLeft:'5%',
	},
	customPickerStyles: {
		marginTop: hp('0'),
		backgroundColor: 'white',
		paddingVertical: 0,
		paddingHorizontal: '3%',
		width: '60%',
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignSelf:'center',
		alignItems: 'center',
		elevation: 5,
	marginLeft:"1%",
	height:33.5
	
		  },

	contactType:{
		color: Colors.button,
		fontFamily: ApplicationStyles.textFont,
		fontSize: 14,
		color: '#718b90',
		marginBottom: hp('1'),
		marginLeft:"1%"
		
	},

	containerStyle: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'space-around',
		 alignItems: 'flex-end'
	},
	content: {
		width: '95%',
		height: '100%',
		backgroundColor: 'white',
		overflow: 'hidden',
	  },
	centeredView: {
		
		justifyContent: "center",
		alignItems: "center",
		// marginTop: 22
	  },
	  modalView: {
		// margin: 20,
		// width:wp('98'),
		backgroundColor: "white",
		borderRadius: 20,
		height:hp('60'),
		alignSelf:'center',
		padding:0,
		alignItems: "center",
		shadowColor: "#000",
		shadowOffset: {
		  width: 0,
		  height: 2
		},
		shadowOpacity: 0.25,
		shadowRadius: 4,
		elevation: 5
	  },
	inputtext:{
		
		borderColor:'white',
		borderWidth:1,
		alignSelf:'center',
		backgroundColor:'white',
		borderBottomColor:'lightgrey',
		color:'black'
	},
container:{
		width:'90%',
		alignSelf:'center',
 		marginTop:'13%',
 		elevation:3,
 		borderWidth:0,
 		borderColor:'transparent',
 		padding:10,
 		// marginBottom:20,
		 backgroundColor:'white',
},
secondCont:{
	width:'90%',
	//height:'3%', 
	// elevation:3,
	borderWidth:0,
	alignSelf:'center',
	backgroundColor:'white',
	justifyContent:'center',
	flexDirection:'row',
	// padding:10,
	marginBottom:10
},
secondCont1:{
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
leadScreen:{
	width:'90%',
	paddingBottom:30,
	backgroundColor:'#fff',
	marginTop:40,
	marginBottom:10,
	marginHorizontal:20,

	shadowOffset: {
			width: 0,
			height: 2,
		},
	shadowOpacity: 0.25,
	shadowRadius: 3.84,
	shadowColor: "#000",
	elevation:6,borderRadius:2,borderWidth:1,borderColor:'#fff'
},
child:{
	backgroundColor: Colors.LIGHTGRAY,
	// padding:16,
	
},
plusIcon:
{
	bottom: hp('5'),
	position: 'absolute',
   // right: 25,
	alignSelf:'flex-end',
	borderRadius: 50,
	backgroundColor: Colors.icon,
	flexDirection: 'row',
	justifyContent: 'center',
	alignItems: 'center',
	width:'12%',
	height:'6.5%',
	borderWidth:0,
	right:"10%"
},
plusAddContactIconAcc:{
	top:hp('1%'),
	position: 'absolute',
   // right: 25,
	alignSelf:'flex-end',
	borderRadius: 50,
	backgroundColor: Colors.primary,
	// flexDirection: 'row',
	justifyContent: 'center',
	alignItems: 'center',
	width:'7%',
	height:25,
	borderWidth:0,
	right:"-5%"
},
plusAddContactIcon:
{
	top: hp('8'),
	position: 'absolute',
   // right: 25,
	alignSelf:'flex-end',
	borderRadius: 50,
	backgroundColor: Colors.primary,
	flexDirection: 'row',
	justifyContent: 'center',
	alignItems: 'center',
	width:'10%',
	height:35,
	borderWidth:0,
	right:"10%"



},
datePicker: {
    alignSelf: "center",
    backgroundColor: Colors.primary,
    borderRadius: 100,
    flexDirection: "row",
    width: wp("43%"),
    alignItems: "center",
    justifyContent: "center",
    padding: 8,
  },
  monthPicker: {
    alignSelf: "center",
    backgroundColor: Colors.button,
    borderRadius: 100,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    width: wp("25%"),
  },
  dateText: {
    fontFamily: ApplicationStyles.textMediumFont,
    color: Colors.white,
    fontSize: wp("3.3%"),
    textTransform: "capitalize",
  },
  dateIcon: {
    color: "black",
    fontSize: wp("7%"),
    marginLeft: 0,
    marginRight: 0,
    zIndex: 2,
    paddingLeft: wp("3%"),
  },
  dateChangeIcon: {
    color: Colors.button,
    alignSelf: "center",
    paddingHorizontal: wp("3%"),
    fontSize: wp("11%"),
  },
  psmPickerStyles: {
    marginTop: -5,
    backgroundColor: "white",
    paddingVertical: 8,
    paddingHorizontal: "8%",
    width: "90%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: 25,
    elevation: 5,
    marginLeft: "5%",
  },

})