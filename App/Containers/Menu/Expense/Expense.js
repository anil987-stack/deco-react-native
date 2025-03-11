import LocalActions from 'App/Stores/LocalExpense/Actions';
import Colors from 'App/Theme/Colors';
import { Tab, Tabs, Icon, Container } from 'native-base';
import React, { Component } from 'react';
import { ApplicationStyles } from "App/Theme";
import { connect } from 'react-redux';
import BackArrowButton from 'App/Components/BackArrowButton'
import BlueButton from 'App/Components/BlueButton'
import MyExpenses from './MyExpenses';
import TeamExpenses from './TeamExpenses';
import { View, StyleSheet, Text, TouchableOpacity, TextInput, Image, ScrollView, Modal } from "react-native";
import NavigationService from 'App/Services/NavigationService'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'



class Expense extends Component {

    render() {
        const { changeType, type } = this.props;
        return (
            <View>
                <View style={{ marginVertical: 2 }}>
                    <BackArrowButton />
                </View>

                <View style={{ flexDirection: 'row' }}>
                    <TouchableOpacity
                        transparent
                    >
                        <Icon
                            name={'caret-left'}
                            ios={'caret-left'}
                            android={'caret-left'}
                            style={{
                                color: Colors.primary,
                                fontSize: 50,
                                alignSelf: 'center',
                                paddingHorizontal: 20,bottom:7
                            }}
                            type={'FontAwesome5'}
                        />
                    </TouchableOpacity>
                    <View style={{
                        backgroundColor: Colors.primary,
                        borderRadius: 10, width: wp('30%'), height: hp('5%')
                    }}>
                        {/* <DatePicker style={{}}>

						</DatePicker> */}
                    </View>
                    <TouchableOpacity
                        transparent
                    >
                        <Icon
                            name={'caret-right'}
                            ios={'caret-right'}
                            android={'caret-right'}
                            style={{
                                color: Colors.primary,
                                fontSize: 50,
                                alignSelf: 'center',
                                paddingHorizontal: 20,bottom:7
                            }}
                            type={'FontAwesome5'}
                        />
                    </TouchableOpacity>

                    <BlueButton style={{ height: hp('5%'), width: wp('28%') }}
                        title={'Get Expenses'}
                        textStyle={{ color: 'white', fontSize: 13 }}
                    ></BlueButton>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', height:hp('100%')}}>
                    <View style={Styles.tabs}>
                        <Container>
                            <Tabs
                                tabBarUnderlineStyle={{ width: '40%', marginHorizontal: 20 }}
                            >

                                <Tab heading="My Expenses "
                                    textStyle={{ color: "#fff", fontSize: 15, }}
                                    tabStyle={{ backgroundColor: "#02ADD7", flex: 1 }}
                                    activeTextStyle={{ color: "#fff", fontSize: 15 }}
                                    activeTabStyle={{ backgroundColor: '#02ADD7' }}>
                                    <MyExpenses/>
                                </Tab>
                                <Tab heading="Team Expenses"
                                    textStyle={{ color: "#fff", fontSize: 15 }}
                                    tabStyle={{ backgroundColor: "#02ADD7", flex: 1 }}
                                    activeTextStyle={{ color: "#fff", fontSize: 15 }}
                                    activeTabStyle={{ backgroundColor: '#02ADD7' }}>
                                    <TeamExpenses/>
                                </Tab>
                            </Tabs>
                        </Container>
                    </View>
                </View>
            </View>



        )
    }
}


const mapStateToProps = (state) => ({
    // type: state.local.type
});

const mapDispatchToProps = (dispatch) => ({
    changeType: (params) => dispatch(LocalActions.changeType(params))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Expense)

const Styles = StyleSheet.create({

    tabs: {
        backgroundColor: Colors.user,
        color: Colors.white,
        marginBottom: 0,
        borderBottomWidth: 0,
        paddingHorizontal: 0,
        borderRadius: 5,
    },
    tabText: {
        color: Colors.white,
        fontFamily: ApplicationStyles.textMsgFont,
        fontSize: wp('4%')
    },
    tabHeading: {
        backgroundColor: Colors.primary,
        paddingHorizontal: 0,
        // paddingHorizontal: 10

    },
    tabUnderLine: {
        backgroundColor: Colors.white,
        width: '30%',
        marginHorizontal: 10,
        marginBottom: 4,
        borderRadius: 5,
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


});