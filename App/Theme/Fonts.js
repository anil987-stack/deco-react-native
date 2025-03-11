import { StyleSheet } from 'react-native'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const size = {
  h1: 38,
  h2: 34,
  h3: 30,
  h4:26,
  cardtittle:20,
  input: 18,
  regular: 17,
  medium: 13,
  small: 12,
}

export default StyleSheet.create({
  h1: {
    fontSize: size.h1,
  },
  h2: {
    fontSize: size.h2,
  },
  h3: {
    fontSize: size.h3,
  },
  h4: {
    fontSize: size.h4,
  },
  normal: {
    fontSize: size.regular,
  },
  Medium:{
    fontSize: size.medium,
  },
  Small:{
    fontSize: size.small,
  },
  iconText: {
    fontSize: wp('1.9%')
  },
  cardtext:{
    fontSize:size.cardtittle
  }
})
