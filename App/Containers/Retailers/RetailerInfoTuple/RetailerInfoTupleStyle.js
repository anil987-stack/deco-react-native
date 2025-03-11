import { StyleSheet, Dimensions } from 'react-native'
import { Colors, Metrics, Helpers, Fonts, ApplicationStyles } from 'App/Theme'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export default StyleSheet.create({
  box: {
    width: Dimensions.get('window').width,
    backgroundColor: Colors.clrF1F9FF,
    flexDirection: 'row',
    padding: 15,
    paddingLeft: 30,
    position: 'relative'
  },
  btmBox: {
    flexDirection: 'column'
  },
  desc: {
    color: Colors.button,
    fontSize: 12,
    fontFamily: ApplicationStyles.textFont,
  },
  detail: {
    // fontFamily: ApplicationStyles.textMsgFont,
    color: Colors.clr66,
    fontWeight: '700',
  },
  strip: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    color: Colors.button,
    fontSize: 18,
    fontFamily: ApplicationStyles.textMsgFont
  },
  ttl: {
    color: Colors.clr66,
    fontSize: 14,
  },
  tuple: {
    borderBottomColor: Colors.clrF1F9FF,
    borderRadius: 1,
    flexDirection: 'row',
  },
  userCircle: {
    // marginTop: 80,
    alignItems: 'center',
    backgroundColor: Colors.user,
    borderRadius: 50,
    flexDirection: 'row',
    height: 70,
    justifyContent: 'center',
    width: 70,
  },
  userDtl: {
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 3,
    overflow: 'hidden',
    width: Dimensions.get('window').width - 120
  },
  userIcon: {
    height: 16,
    width: 16,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 12,
  },
  card: { backgroundColor: 'white', paddingHorizontal: '6%', marginTop: hp('-47%') },
  grey: { color: 'grey', marginHorizontal: 2, fontWeight: '700' },
  width50: { width: '50%' },
  width25: { width: '25%' },
  width20: { width: '20%' },
  width30: { width: '30%' },
  width33: { width: '33%' },
  width35: { width: '35%' },
  paddingTop: { paddingTop: 0 },

  editIcon: {
    fontSize: wp('3.4%'),
    color: Colors.primary,
    paddingHorizontal: 5,
    paddingTop: 0,

  },
  rate_text: {
    fontSize: 10, color: Colors.primary, fontWeight: 'bold', textAlign: 'center'
  },
  amount: {
    fontSize: 10, color: '#000000', fontWeight: 'bold', textAlign: 'center'
  },
  Text1: {
    color: '#343434', fontWeight: 'bold', marginVertical: 3, textAlign: 'right', fontSize: 13
  },
  Text2: {
    color: '#343434', fontWeight: 'bold', marginVertical: 3, fontSize: 13
  },
  textContainer: {
    // width: '100%',
    // backgroundColor: Colors.lightGrey,
    // padding: 10,
    // alignItems: 'flex-start',
    // justifyContent: 'center',
    borderRadius: 5,
    // marginTop: 7 ,
    width: '80%', borderColor: 'grey', borderBottomWidth: 1,

    //marginBottom:"5%"
  },

})
