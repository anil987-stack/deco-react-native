import { StyleSheet,Dimensions} from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import {ApplicationStyles, Colors,Metrics} from 'App/Theme';
export default StyleSheet.create({
    label:{
      alignSelf:'center',
      color:Colors.grey
    },
    value:{
      marginLeft:'40%',
      justifyContent:'flex-end',
      color:Colors.darkGrey,
      padding:'1%'
    },
    list:{
      paddingTop:'2%'
    },
    container: {
        flex: 1,
        backgroundColor: Colors.white
    },
    tabs:{
      flex:1,
      marginTop:hp('1.6'),
      width:wp('90%'),
      alignSelf:'center'
    },
})