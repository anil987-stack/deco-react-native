import { StyleSheet,Dimensions} from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import {ApplicationStyles, Colors,Metrics} from 'App/Theme';
export default StyleSheet.create({
    label:{
      alignSelf:'flex-start',
      color:Colors.grey,
      padding:'1%'
    },
    value:{
      marginLeft:'10%',
      justifyContent:'flex-end',
      color:Colors.darkGrey,
      padding:'1%'
    },
    list:{
      paddingTop:'2%',
    },
})