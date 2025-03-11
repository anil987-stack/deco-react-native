import { StyleSheet } from 'react-native'
import { Colors, ApplicationStyles } from 'App/Theme'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export default StyleSheet.create({
  input: {
    color: Colors.grey,
    fontFamily: ApplicationStyles.textMsgFont,
    fontSize: wp('3.7%'),
   
  },
  placeholderStyle: {
    color: Colors.inputText,
    fontFamily: ApplicationStyles.textMsgFont,
   

  },
  inputError: {
    borderColor: Colors.error,
   
  },
  item: {
    borderRadius: 100,
    width: 300,
    // borderColor: Colors.border,
    borderWidth: 2,
    borderColor: Colors.grey,
    backgroundColor: Colors.white,
    height: 45,
    borderBottomColor:"transparent"
  },
  placeHolderIcon: {
    color: Colors.grey,
    marginLeft: 10,
    marginRight: 10,
    fontSize: wp('6%'),
    
  }
})
