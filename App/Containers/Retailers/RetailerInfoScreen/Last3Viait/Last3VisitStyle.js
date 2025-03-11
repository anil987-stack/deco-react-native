import { StyleSheet } from 'react-native'
import { Colors, Metrics, Helpers, Fonts, ApplicationStyles } from 'App/Theme'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default StyleSheet.create({
  parentContainer: {
    flex: 1,
  },
  card: { backgroundColor: 'white', marginTop: hp('-47%') },
  grey: { color: 'grey', marginHorizontal: 2, fontWeight: '700' },
  
  paddingTop: { paddingTop: 0 },
  Screen:{
    width:wp('90'),
    backgroundColor:'#fff',
    marginTop:10,
    marginHorizontal:20,
    marginVertical:20,
    paddingBottom:20,
   
    shadowOffset: {
            width: 0,
            height: 2,
        },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    shadowColor: "#000",
    elevation:6,borderRadius:2,borderWidth:1,borderColor:'#fff'
},


});
