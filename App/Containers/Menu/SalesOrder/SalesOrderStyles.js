import { StyleSheet } from 'react-native'
import { Helpers, Metrics, Fonts, Colors, ApplicationStyles } from 'App/Theme'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'

export default StyleSheet.create({
    tabs: {
        backgroundColor: Colors.user,
        color: Colors.white,
        marginBottom: 30,
        borderBottomWidth: 0,
        paddingHorizontal: 10,
        borderRadius: 5
    },
    head: {
        fontSize: 25, fontWeight: 'bold', textAlign: 'left'
    },
    card1: {
         marginVertical: 20, width: wp('95%'),
        borderWidth: 0, elevation: 3, borderRadius: 3,
        alignSelf: 'center', backgroundColor: 'white',
         flexDirection: 'row'
    },
    card2:{
        height: hp('55%'), marginVertical: 20, width: wp('95%'),
        borderWidth: 0, elevation: 3, borderRadius: 3,
        alignSelf: 'center', backgroundColor: 'white', 
        // flexDirection: 'row'
    },
    button: {
        width: wp('35%'),
        marginHorizontal: 30, height: hp('4%'), borderRadius: 5,
        marginTop: 2,
        left: 12, elevation: 3, backgroundColor: '#FFC303',marginLeft:'33%'
    }



})
