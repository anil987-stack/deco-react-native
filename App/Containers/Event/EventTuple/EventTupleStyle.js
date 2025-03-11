import { StyleSheet, Dimensions } from 'react-native'
import { Colors, Metrics, Helpers, Fonts, ApplicationStyles } from 'App/Theme'

export default StyleSheet.create({
    box: {
        alignSelf: 'center',
        backgroundColor: Colors.clrF1F9FF,
        width: Dimensions.get('window').width - 30,
        marginVertical: 5,
        padding: 15,
        borderRadius: 10,
        position: 'relative'
    },
    btmBox: {
        flexDirection: 'column',
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 10
    },
    desc: {
        color: Colors.button,
        fontSize: 12,
        fontFamily: ApplicationStyles.textFont,
    },
    detail: {
        fontFamily: ApplicationStyles.textMsgFont,
        color: Colors.clr66,
        fontSize: 14,
        textTransform: 'capitalize'
    },
    strip: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 8
    },
    title: {
        color: Colors.button,
        fontFamily: ApplicationStyles.textMsgFont,
        textAlignVertical: "center",
        fontSize: 16
    },
    ttl: {
        color: Colors.clr66,
        fontFamily: ApplicationStyles.textFont,
        fontSize: 14
    },
    tuple: {
        borderBottomColor: Colors.button,
        flexDirection: 'row',
        alignItems: 'center'
    },
    userCircle: {
        // marginTop: 80,
        alignItems: 'center',
        backgroundColor: Colors.user,
        borderRadius: 50,
        flexDirection: 'row',
        height: 56,
        justifyContent: 'center',
        width: 56,
    },
    userDtl: {
        padding: 10,
        paddingTop: 3
    },
    userIcon: {
        height: 16,
        width: 16,
    }
})
