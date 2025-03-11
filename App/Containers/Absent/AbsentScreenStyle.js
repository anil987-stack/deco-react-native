import { StyleSheet, Dimensions } from 'react-native'
import { Colors, Metrics, Helpers, Fonts, ApplicationStyles } from 'App/Theme'
import { Row } from 'native-base'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen'

export default StyleSheet.create({
  action: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: hp('2%'),
  },
  area: {
    flexDirection: 'row',
    justifyContent: 'center',
    fontFamily: ApplicationStyles.textFont
  },
  actionButton: {
    ...Metrics.smallBottomMargin,
     width: 250,
     alignSelf: 'center',
     height: hp('5.5%'),
    borderRadius: 7,

     
   },
  actionButton1: {
    ...Metrics.smallBottomMargin,
     width: 250,
     alignSelf: 'center',
     height: hp('5.5%'),
    borderRadius: 7,
    backgroundColor:Colors.lightBlue,

     
   },
  button: {
    ...Metrics.smallBottomMargin,
    width: 120,
    height: hp('5.5%'),
    borderRadius: 7,


  },
  buttonBox: {
    backgroundColor:Colors.white,
    width: '100%',
    height:hp('45%'),
    marginTop:hp('25.9%')


    
  },
  container: {
    display: 'flex',
    flex: 1,
    padding: Metrics.tiny,
    fontFamily: ApplicationStyles.textMsgFont,
    backgroundColor: Colors.white,
    // marginHorizontal: 10
  },
  header:{
    // marginBottom: 300,
    fontSize: 26,
    fontFamily: ApplicationStyles.textMsgFont,
    color: Colors.primary,
    alignSelf:'auto',
    alignSelf:'center',
    marginTop: 0
  },
  title: {
    marginTop:'10%',
    fontSize: 26,
    // alignSelf:'baseline',
    color:Colors.primary,
    fontWeight:'bold',
    marginHorizontal:35,
    // flexWrap:'wrap'
  },
  card: {
    padding: 15,
    elevation: 0,
    height: hp('55%'),
    justifyContent: 'center',
    backgroundColor: Colors.greyClr,

  },
  mt30: {
    marginTop: 30
  },
  mv10: {
    marginTop: 20,
    marginBottom: 10
  },
 
  selectedAction: {
    color: Colors.white,
    backgroundColor: Colors.greyClr
  },
  
  svgCurve:{
    position: 'absolute',
    width: Dimensions.get('window').width,
    marginTop:hp('35%')
    // backgroundColor: Colors.greyClr,
    

    
  },
  clr:{
    color:Colors.subtitle,
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
