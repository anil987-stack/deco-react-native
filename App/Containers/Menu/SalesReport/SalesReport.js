import LocalActions from 'App/Stores/LocalExpense/Actions';
import Colors from 'App/Theme/Colors';
import { Tab, Tabs, Icon, Container } from 'native-base';
import React, { Component } from 'react';
import { ApplicationStyles } from "App/Theme";
import { connect } from 'react-redux';
import SearchableDropdown from 'App/Components/SearchableDropdown';
import BackArrowButton from 'App/Components/BackArrowButton'
import BlueButton from 'App/Components/BlueButton'
import { View, StyleSheet, Text, TouchableOpacity, TextInput, Image, ScrollView, Modal } from "react-native";
import NavigationService from 'App/Services/NavigationService'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import DistributorTable from './DistributorTable';


class SalesReport extends Component {

    render() {
        const { changeType, type } = this.props;
        return (
            <View>
                <View style={{ marginVertical: 2 }}>
                    <BackArrowButton />
                </View>
                <ScrollView horizontal={true} style={{ paddingBottom: 10 }} showsHorizontalScrollIndicator={false}>


                    <View style={{ flexDirection: 'row', marginRight: 10 }}>
                        <BlueButton style={Styles.button}
                            onPress={() => NavigationService.navigate('DistributorTable')}
                            title={'Distributor'}
                            textStyle={{ color: 'white', fontSize: 13 }}
                        ></BlueButton>
                        <BlueButton style={Styles.button2}
                            title={'Dealer'}
                            textStyle={{ color: '#02ADD7', fontSize: 13 }}
                        ></BlueButton>
                        <BlueButton style={Styles.button2}
                            title={'Products'}
                            textStyle={{ color: '#02ADD7', fontSize: 13 }}
                        ></BlueButton>
                        <BlueButton style={Styles.button2}
                            title={'Outstandings'}
                            textStyle={{ color: '#02ADD7', fontSize: 13 }}
                        ></BlueButton>
                    </View>
                </ScrollView>




                <View style={{ flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: hp('68%') }}>

                    <View>
                        <Container style={{ width: wp('90%'), }}>
                            <Tabs tabBarUnderlineStyle={{ width: '40%', marginHorizontal: 20 }}>
                                <Tab heading="Top 10"
                                    textStyle={{ color: "#fff", fontSize: 15, }}
                                    tabStyle={{ backgroundColor: "#02ADD7" }}
                                    activeTextStyle={{ color: "#fff", fontSize: 15 }}
                                    activeTabStyle={{ backgroundColor: '#02ADD7' }}>
                                    <DistributorTable />
                                </Tab>
                                <Tab heading="Bottom 10"
                                    textStyle={{ color: "#fff", fontSize: 15 }}
                                    tabStyle={{ backgroundColor: "#02ADD7", }}
                                    activeTextStyle={{ color: "#fff", fontSize: 15 }}
                                    activeTabStyle={{ backgroundColor: '#02ADD7' }}
                                >
                                    {/* <TeamExpenses /> */}
                                </Tab>

                            </Tabs>
                        </Container>
                    </View>


                </View>
                <View style={{ bottom: hp('61.5%') }}>
                    <SearchableDropdown
                        // dataSource={cityList}
                        placeHolderText={`This Month`}

                        customPickerStyles={Styles.picker}
                        labelStyles={Styles.pickerLabel}
                    />
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
)(SalesReport)

const Styles = StyleSheet.create({
    button: {
        height: hp('5%'), marginBottom: 10, width: wp('28%'), borderRadius: 20, marginLeft: 10

    }, picker: {
        borderRadius: 100,
        width: wp('80%'),
        // height: hp('5.5%'),
        marginTop: 5,
        marginBottom: hp('2%'),
        fontSize: wp('2%'),
        alignSelf: 'center', borderWidth: 0, backgroundColor: 'white', elevation: 10
    },

    button2: {
        height: hp('5%'), marginBottom: 10, width: wp('28%'),
        borderRadius: 20, marginLeft: 10, backgroundColor: '#F1F8FE'

    },

    pickerLabel: {
        color: '#02ADD7',
        fontSize: 16,
        fontFamily: ApplicationStyles.textFont,
        textAlign: "left",
        width: "90%",
        padding: 10,
        marginLeft: 15,
        flexDirection: "row"
    },

});