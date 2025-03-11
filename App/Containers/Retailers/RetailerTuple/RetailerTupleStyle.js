import { StyleSheet, Dimensions } from 'react-native'
import { Colors, Metrics, Helpers, Fonts, ApplicationStyles } from 'App/Theme'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default StyleSheet.create({
  box: {
    alignSelf: 'center',
    backgroundColor: Colors.clrF1F9FF,
    width: Dimensions.get('window').width - 30,
    marginVertical: 5,
    padding: 15,
    borderRadius: 10,
    position: 'relative'
  },
  surface: {
    elevation: 10,
    backgroundColor: Colors.white,
    marginVertical: hp('0.2'),
    paddingHorizontal: "5%",
    paddingTop: 10,
    paddingBottom:15,
    marginTop:'2%',
    width:'90%', 
    alignSelf:'center',
    borderRadius:10, 
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    width:wp('45'),
    //justifyContent: "space-between",
    marginBottom:'0%',
  },
  keyvalue: {
    marginVertical: 4,
    flexDirection: "row",
    
    alignItems: "center",
    marginHorizontal:15,
    justifyContent: "space-between",
    
  },
  head: { color: Colors.primary, fontWeight: "bold",...Fonts.cardtext,fontFamily:ApplicationStyles.textTransform,fontSize:hp('2.4') },
  head2: { color: Colors.primary, fontWeight: "bold",...Fonts.cardtext,fontFamily:ApplicationStyles.textTransform,fontSize:hp('1.8'),marginLeft:'2%' },
  subhead: { fontSize: hp('1'), color: Colors.black },
  key: { color: Colors.grey, fontWeight:'800',fontSize:hp('2.1'),fontFamily:ApplicationStyles.textTransform },
  value: {
    color: Colors.black,
    fontWeight: "bold",
    width: wp('30'),
    fontSize:hp('2.1'),
    fontFamily:ApplicationStyles.textTransform
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
  }
})
