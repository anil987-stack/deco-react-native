import { ApplicationStyles, Colors, Fonts, Helpers, Metrics } from 'App/Theme';
import { StyleSheet } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';

export default StyleSheet.create({
    action: {
        // marginTop: 80,
        width: wp('88%'),
        height:hp('100%')
    },
    button: {
        // ...Metrics.smallBottomMargin,
        width: 100,
        height:40,
        marginRight: 8,
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'center',
        
    },
    container: {
        // ...Metrics.tinyHorizontalPadding,
        // ...Metrics.tinyVerticalPadding,
        // ...Helpers.center,
        // backgroundColor: Colors.white,
        justifyContent: 'center',
        // backgroundColor:'red',
        alignItems: 'center',
        alignSelf: 'center',
      
        backgroundColor:'transparent',
        
    },
    heading: {
        alignSelf: 'center',
        color: Colors.clr0094FF,
        fontFamily: ApplicationStyles.textMsgFont,
        fontSize: 24,
        marginBottom: 15
    },
    link: {
        color: Colors.label,
        flexDirection: 'row',
        height: 30,
        justifyContent: 'flex-end',
    },
    linkText: {
        ...Fonts.input,
        color: Colors.label,
    },
    mb10: {
        marginBottom: hp('2%'),
        height: hp('5.5%'),
        fontSize: wp('3.5%')
    },
    text: {
        color: Colors.button,
        fontFamily: ApplicationStyles.textFont,
        fontSize: 16,
        opacity: 0.7,
    },
    picker: {
        borderRadius: 100,
        width: wp('88%'),
        height: hp('5.5%'),
        marginTop: 5,
        marginBottom: hp('2%'),
        fontSize: wp('2%'),
        justifyContent: 'center'
    },
    recurringActionButton: {
        borderColor: Colors.border,
        borderStyle: 'solid',
        borderWidth: 1,
        overflow: 'hidden',
        borderRadius: 100,
        borderWidth: 2,
        alignSelf: 'center',
        backgroundColor: Colors.clrF1F9FF,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        paddingLeft: wp('4%'),
        paddingRight: wp('4%'),
        marginRight: wp('6%')

    },
    recurringActionButtonText: {
        color: Colors.button,
        fontSize: wp('4%'),
        textTransform: 'capitalize',
        fontFamily: ApplicationStyles.textMediumFont
    },
    recurringActionButtonIcon: {
        color: Colors.button,
        fontSize: wp('4%')
    },
    bottomMargin: {
        margin: hp('1%'),
        width: '100%'
    },

    pickerLabel: {
        color: Colors.placeHolder,
        fontSize: 16,
        fontFamily: ApplicationStyles.textFont,
        textAlign: "left",
        width: "97%",
        padding: 10,
        marginLeft: 15,
        flexDirection: "row"
    },
    buttonContainer: {
        flexDirection: 'row'
    },
    iconStyle: {
        fontSize: wp('20%'),
        margin: 12,
        opacity: 0.3,
        color: Colors.button
    }
})
