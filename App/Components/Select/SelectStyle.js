import { StyleSheet } from 'react-native'
import { Colors, ApplicationStyles } from 'App/Theme'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export default StyleSheet.create({
  select: {
    borderColor: Colors.border,
    borderRadius: 10,
    borderStyle: 'solid',
    borderWidth: 1,
    color: Colors.border,
    // height: 33,
    // textAlignVertical: 'center',
    width: 100,
  },
  labelStyle: {
    color: '#515C6F',
    fontFamily: ApplicationStyles.textMsgFont,
    marginBottom: 2,
    marginLeft: 10,
    fontSize: wp('4.2%')
  }
})
