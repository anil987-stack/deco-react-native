import { StyleSheet } from 'react-native'
import { Colors, Metrics, Helpers, Fonts, ApplicationStyles } from 'App/Theme'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default StyleSheet.create({
  heading: {
  	fontSize: wp('2.2%'),
  	fontFamily: ApplicationStyles.textFont,
  	color: Colors.clr66
  },
  Screen:{
    width:'90%',
    // paddingBottom:30,
    backgroundColor:'#fff',
    marginTop:hp('1'),
    marginBottom:5,
    marginHorizontal:20,
    
    shadowOffset: {
            width: 0,
            height: 2,
        },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    shadowColor: "#000",
    elevation:6,borderRadius:10,borderWidth:1,borderColor:'#fff'
},

})
