import { StyleSheet } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import {ApplicationStyles, Colors} from 'App/Theme';
export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    backIcon: {
        color: Colors.button,
        padding: 15,
        fontSize: wp('6%')
      },

      tabs:{
        flex:1,
        marginTop:hp('1.6'),
        width:'90%',
        alignSelf:'center'
      },
       plusIcon: {
        borderRadius: 50,
        bottom: 75,
        position: 'absolute',
        right: 25,
        borderRadius: 50,
        height: 45,
        width: 45,
        backgroundColor: Colors.button,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    }, 
     heading: {
      alignSelf: 'center',
      color: '#0720C4',
      fontFamily: ApplicationStyles.textMsgFont,
      fontSize: 24,
      marginBottom: 10
  }, 
  tabText: {
    color: Colors.white,
    fontFamily: ApplicationStyles.textMsgFont,
    // fontSize: wp('4%')
  },
  tabHeading: {
    backgroundColor: Colors.primary,
    // width: "20%",
    // paddingHorizontal: 0,
    // paddingHorizontal: 10
  },
  tabUnderLine: {
    backgroundColor: Colors.white,
    // width: "18%",
    // marginHorizontal: 10,
    marginBottom: 4,
    borderRadius: 5,
  },

  tabTextStyle: {
    color: Colors.white,
    fontWeight: "normal",
  },
})