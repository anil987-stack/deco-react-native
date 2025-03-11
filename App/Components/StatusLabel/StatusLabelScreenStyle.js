import { StyleSheet, Dimensions } from 'react-native'
import { Colors, Metrics, Helpers, Fonts, ApplicationStyles } from 'App/Theme'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export default StyleSheet.create({
    statusBar: {
        height: hp('3%'),
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.green2,
        padding: 5,
        borderRadius: 5,
        margin: 2,
        width: '45%'
    },
    statusText: {
        fontFamily: ApplicationStyles.textMsgFont,
        fontSize: wp('3%'),
        color: Colors.white
    },
    rejected: {
        backgroundColor: '#C35755',
        width: wp('20%')
    },
    pending: {
        backgroundColor:Colors.fadeYellow,
        width: wp('35%')
    },
    approved: {
        backgroundColor: Colors.green2,
        width: wp('20%')
    },
    draft: {
        width: wp('20%')
    }
})