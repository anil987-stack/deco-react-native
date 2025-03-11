import GenericIcon from 'App/Components/GenericIcon';
import WhiteButton from 'App/Components/WhiteButton';
import NavigationService from 'App/Services/NavigationService';
import { ApplicationStyles, Colors } from 'App/Theme';
import { Header } from 'native-base';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { connect } from 'react-redux';



class UpdateLocalExpenseLayout extends React.Component {
    render() {
        return (
            <View>
               
                    <View style={Styles.container}>
                        <View style={Styles.arrowContainer}>
                            <GenericIcon
                                name={'arrow-back'}
                                onPress={NavigationService.goback}
                                style={Styles.backArrow}
                            />
                        </View>
                        <WhiteButton
                            title={'Travel Info'}
                            style={Styles.actionButton}
                            textStyle={Styles.actionButtonText}
                            onPress={() => NavigationService.navigate('LocalExpenseInfoScreen')}
                            selected={this.props.currentScreen == 'LocalExpenseInfoScreen'}
                        />

                        <WhiteButton
                            title={'Attachments'}
                            style={Styles.actionButton}
                            textStyle={Styles.actionButtonText}
                            onPress={() => NavigationService.navigate('LocalAttachmentScreen')}
                            selected={this.props.currentScreen == 'LocalAttachmentScreen'}
                        />
                    </View>
                
                {this.props.children}
            </View>
        )
    }
}



const mapStateToProps = (state) => ({
    isConnected: state.network.isConnected,
    isVisible: state.common.isNetworkBannerVisible,
    currentScreen: state.common.currentScreen,
})

export default connect(
    mapStateToProps
)(UpdateLocalExpenseLayout)


const Styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        // justifyContent: 'flext-start',
        width: wp('100%'),
        height:hp('7')
    },
    header: {
        alignItems: 'center',
        height: hp('14%')
    },
    arrowContainer: {
        width: wp('10%'),
        alignItems: 'flex-start',
        justifyContent: 'center'
    },
    backArrow: {
        color: Colors.button,
        paddingLeft: 5,fontSize:35
    },
    actionButton: {
        borderWidth: 1,
        width: wp('40%'),
        height:hp('5'),
        marginLeft: 10,
        paddingRight: 0,
        paddingTop: 0,
        paddingBottom: 0,
        marginTop: 5
    },
    customActionButton: {
        borderWidth: 1,
        width: wp('40%'),
        paddingLeft: 0,
        paddingRight: 0,
        paddingTop: 0,
        paddingBottom: 0,
        marginTop: 5
    },
    actionButtonText: {
        fontSize: wp('3.5%'),
        fontFamily: ApplicationStyles.textMediumFont
    }
});
