import { StyleSheet, Dimensions } from 'react-native'
import { Colors, ApplicationStyles, Metrics } from 'App/Theme'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default StyleSheet.create({

    editActionIcon: {
        fontSize: wp('6.8%'), 
        color: Colors.backarrow,
        alignSelf:'center',
      },
      container:{
        width:wp('100%'),
        flexDirection:'row',
        height:hp('6%'),
        backgroundColor:'white',
        alignSelf: 'center',
        elevation:6,
        padding:wp('1.5'),
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
      },
      

      },
      text:{
        fontFamily: ApplicationStyles.textMsgFont,
        textAlign:'center',
        fontSize:hp('2.5')
      },
      triangle: {
        width: 0,
        height: 0,
        backgroundColor: 'transparent',
        borderStyle: 'solid',
        borderTopWidth: 38.5,
        borderLeftWidth: 153,
        borderRightWidth: 30,
        // borderBottomWidth: 50,
        borderLeftColor: '#5c5c5c',
        borderRightColor: 'transparent',
        // borderBottomColor: '#e76f51',
        borderTopColor:"#5c5c5c",
        marginTop:"0%"
        // transform: [{ rotate: '180deg' }]
      },
      triangle1: {
        width: 0,
        height: 0,
        backgroundColor: 'transparent',
        borderStyle: 'solid',
        borderTopWidth: 32,
        borderLeftWidth: 150,
        borderRightWidth: 25,
        // borderBottomWidth: 50,
        borderLeftColor: 'white',
        borderRightColor: 'transparent',
        // borderBottomColor: '#e76f51',
        borderTopColor:"white",
        marginTop:hp("-4.8%"),
        elevation:20,
        fontFamily: "HelveticaNeue_CondensedBold",
 
        fontWeight: "bold",
       
        fontSize: wp("4%"),
        textAlignVertical:"center",
        textAlign:"left",
        // transform: [{ rotate: '180deg' }]
      },
      textStyle:{
        fontFamily: "HelveticaNeue_CondensedBold",
        // top: hp("0%"),
        // left: "2%",
        fontWeight: "bold",
        zIndex: 30,
        paddingLeft:wp("11%"),
        fontSize:wp("4.8%")
        // textAlign:"center",
        // backgroundColor:"pink",
        // marginTop:hp("-3%")
      },
      
      imgBackground: {
        width: '100%',
        height: '100%',
        flex: 1 
    },

})