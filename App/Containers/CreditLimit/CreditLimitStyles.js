import { StyleSheet } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'

export default StyleSheet.create({
    card: {
        marginTop: hp('2%'),
        marginBottom: hp('1%'),
        width: wp('90%'),
        backgroundColor: 'white',
        elevation:5,
        marginHorizontal:5,
    },
    head: {
        fontWeight: 'bold',
        margin: 10
    }

})
