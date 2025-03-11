import { StyleSheet,Dimensions } from 'react-native'
import { Helpers, Metrics, Fonts, Colors, ApplicationStyles } from 'App/Theme'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Left } from 'native-base';

export default StyleSheet.create({
  box: {
    // backgroundColor: Colors.white,
    // color: Colors.error,
    
    flex: 1,
    // // justifyContent: 'center',
    // padding: Metrics.tiny,
    // // textAlign: 'center',
    // fontFamily: ApplicationStyles.textMsgFont,
    // backgroundColor: Colors.primary,
  },

  box1: {
    display: 'flex',
    flex: 1,
    padding: Metrics.tiny,
    fontFamily: ApplicationStyles.textMsgFont,
    backgroundColor: Colors.white,
   
  },

  box2: {
    justifyContent:'space-around',
    marginTop:hp('10')
  },

   
  header:{
    // marginBottom: 300,
    fontSize: 30,
    fontFamily: ApplicationStyles.textMsgFont,
    color: Colors.white,
    alignSelf:'auto',
    alignSelf:'center',
    marginTop: 20
  },
  clr:{
    color:Colors.headerClr,
  },
  clr1:{
    color:Colors.white,
    alignSelf:'center',
    letterSpacing: 1

  },
  buttons: {
    marginHorizontal: 60,
    marginTop: 30,
    width: wp('60%'),
    borderRadius:28,
    height:hp('7%'),
    alignSelf: 'center'

  },

  buttons1: {
    
    marginTop: 30,
    width: wp('70%'),
    borderRadius:7,
    height:hp('6%'),
    
    borderColor:Colors.primary,
    borderWidth:1,
    alignSelf:'center'
  },
  buttontextStyle: {
    textTransform : 'uppercase',
    alignSelf:'center',
  },
  input: {
    backgroundColor: Colors.error,
    borderRadius: 5,
    color: Colors.error,
    padding: 10,
    fontFamily: ApplicationStyles.textMsgFont
  },
  mb10: {
    marginBottom: 65,
  },
  ml52: {
    marginLeft: 52,
    
    
  },
  mt30: {
    marginTop: 110
  },
  title: {
    // margin: 'auto',
    ...Fonts.regular,
    color: Colors.primary,
    fontFamily: ApplicationStyles.textMsgFont
  },
  wish: {
    color: Colors.white,
    fontSize: 26,
    fontFamily: ApplicationStyles.textMsgFont,
    textTransform: 'capitalize',
    marginTop: 5,
    marginLeft: 20
   
  },
  line:{
    
    marginLeft: 20,
    marginTop: -10,
    borderBottomWidth: 3,
    width: 180
    
    


  },
  titleText:{
    marginTop:'20%',
    fontSize: 26,
    // alignSelf:'baseline',
    marginHorizontal:35,
    flexWrap:'wrap'

  },
  svgCurve:{
    position: 'absolute',
    width: Dimensions.get('window').width,
    marginTop:hp('34%')
  },
  buttonBox: {
    backgroundColor:Colors.primary,
    width: '100%',
    height:hp('45'),
    marginTop:hp('25.9%')
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
  picker: {
    borderRadius: 0,
    width: "94%",
    height: hp("5%"),
    elevation: 5,
    alignSelf: "center",
    //  marginBottom: hp('5%'),
    paddingHorizontal: 0,
    marginLeft: 0,
    backgroundColor: Colors.white,
    borderWidth: 0,
  },
  inputtext: {
    height: hp("5"),
   
    marginLeft:wp('4'),
    marginRight:wp('5'),
    borderWidth: 1,
    elevation:5,
    backgroundColor:'white',
    alignSelf: "center",
    borderColor:'white',
    color: "black",
    borderRadius: 0,
  },
  pickerLabel: {
    color: Colors.primary,
    fontFamily: ApplicationStyles.textFont,
    textAlign: "left",
    width: "99%",
    padding: 10,
    fontSize: 13,
    fontWeight: "bold",
    flexDirection: "row",
  },
  addPart:{
    fontSize:15,
    marginLeft:wp('57'),
    color:Colors.primary,
    fontWeight:'bold'
  },
  labelStyle:{fontSize:15
    ,marginLeft:wp('3')
    ,color:'#515C6F'},

})
