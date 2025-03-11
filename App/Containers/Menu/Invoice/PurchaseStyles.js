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
    tabText: {
        color: Colors.white,
        fontFamily: ApplicationStyles.textMsgFont,
        // fontSize: wp('4%')
    },
    tabHeading: {
        backgroundColor: Colors.primary,
        // paddingHorizontal: 0

    },
    tabUnderLine: {
        backgroundColor: Colors.white,
        // width:'20%',
        // marginHorizontal:10,
        marginBottom:4,
        borderRadius:5,
    },
    mainTabs: {
        marginTop: hp('1%'),
        marginHorizontal: 10,
        backgroundColor: Colors.user
    },
    noDataText: {
        color: Colors.button,
        fontFamily: ApplicationStyles.textMsgFont,
        fontSize: 16,
        textAlign: 'center'
    },
    tabTextStyle: {
        color: Colors.white,
        fontWeight: 'normal'
    },
    container: {
        // margin:5
    },
    button: {
        width: wp('27%'),
        height: hp('4%'), borderRadius: 5, marginTop: 2, marginHorizontal: 10, left: 12, elevation: 5
    }
})
