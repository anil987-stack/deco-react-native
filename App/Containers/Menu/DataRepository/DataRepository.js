import { Tab, Tabs, Container } from 'native-base';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Colors, ApplicationStyles, Fonts } from 'App/Theme'
import BackArrowButton from 'App/Components/BackArrowButton'
import BlueButton from 'App/Components/BlueButton'
import NavigationService from 'App/Services/NavigationService'
import { View, StyleSheet, Text, TouchableOpacity, TouchableHighlight, Image, ScrollView } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'

class DataRepository extends Component {

    render() {

        return (
            <View style={{ marginHorizontal: 5 }}>
                <View style={{ marginVertical: 5 }}>
                    <BackArrowButton />
                </View>
                <View style={{ marginLeft: '20%', bottom: 10, flexDirection: 'row' }}>
                    <Image
                        style={{ height: 30, width: 30 }}
                        source={require("../../../Assets/Images/folder.png")}
                    />
                    <Text style={Styles.head}>Data Respository</Text>
                </View>

                <View style={Styles.v1}>
                    <View style={{ margin: 15, marginHorizontal: 25 }}>
                        <Image
                            style={{ height: 50, width: 40 }}
                            source={require("../../../Assets/Images/pdf.png")}
                        />
                    </View>
                    <View style={{ flexDirection: 'column', margin: 10 }}>
                        <View style={{ flexDirection: 'row' }}>
                            <View style={Styles.cv1}>
                                <Text style={Styles.h1}>Rate Chart</Text>
                                <Text style={{ fontWeight: 'bold', color: '#9A9A9A' }}>Area wise</Text>
                            </View>
                            <View style={{ flexDirection: 'column', marginHorizontal: 35 }}>
                                <Text style={Styles.date}>01/02/2021</Text>
                            </View>
                        </View>
                    </View>
                </View>

                <View style={Styles.v2}>
                    <View style={{ margin: 15, marginHorizontal: 25 }}>
                        <Image
                            style={{ height: 35, width: 45 }}
                            source={require("../../../Assets/Images/youtube.png")}
                        />
                    </View>
                    <View style={{ flexDirection: 'column', margin: 0 }}>
                        <View style={{ flexDirection: 'row' }}>
                            <View style={Styles.cv1}>
                                <Text style={Styles.h1}>MYK Grand Event</Text>
                            </View>
                            <View style={{ flexDirection: 'column', marginHorizontal: 0 }}>
                                <Text style={Styles.date}>01/02/2021</Text>
                            </View>
                        </View>
                    </View>
                </View>


            </View>

        )
    }
}


const mapStateToProps = (state) => ({

});

const mapDispatchToProps = (dispatch) => ({

});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(DataRepository)



const Styles = StyleSheet.create({


    head: {
        fontSize: 20, fontWeight: 'bold', marginLeft: wp('5%')
    },
    v2: {
        height: hp('10%'), marginVertical: 10, width: wp('90%'),
        borderWidth: 0, elevation: 5, borderRadius: 3,
        alignSelf: 'center', backgroundColor: 'white', flexDirection: 'row'
    }, v1: {
        height: hp('10%'), marginVertical: 20, width: wp('90%'),
        borderWidth: 0, elevation: 5, borderRadius: 3,
        alignSelf: 'center', backgroundColor: 'white', flexDirection: 'row'
    }, cv1: {
        flexDirection: 'column', marginHorizontal: 20, marginVertical: 10
    },
    h1: { fontWeight: 'bold', color: '#343434', fontSize: 14 },
    date: {
        color: '#046EC5', fontWeight: 'bold'
    }

});