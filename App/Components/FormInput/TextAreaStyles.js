import { StyleSheet, Dimensions } from 'react-native'
import { Colors, ApplicationStyles } from 'App/Theme'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export default StyleSheet.create({
  input: {
    borderColor:'#515C6F',
    borderRadius:4,
    borderWidth: 1,
    color: Colors.inputText,
    fontFamily: ApplicationStyles.textMediumFont,
    paddingLeft: 20,
    width: (Dimensions.get('window').width - 65)
  },
  inputError: {
    borderColor: Colors.error,
  },
  item: {
    borderBottomWidth: 0,
    marginBottom: 7,
    marginTop: 7,
    alignSelf: 'center'
  },
  label: {
    color: "black",
    fontFamily: ApplicationStyles.textMsgFont,
    paddingLeft: 5,
    fontSize: wp("4.4%"),
    top:hp("1%")
  },
  placeholder: {
    color:"grey",
    fontFamily: ApplicationStyles.textMsgFont,
  },
  textArea: {
    borderColor: Colors.border,
    borderRadius: 10,
    borderWidth: 1,
    color: Colors.inputText,
    fontFamily: ApplicationStyles.textMediumFont,
    paddingLeft: 20,
  },
})
