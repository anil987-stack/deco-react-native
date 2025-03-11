import { Tab, Tabs, Container } from 'native-base';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Colors, ApplicationStyles, Fonts } from 'App/Theme'
import BackArrowButton from 'App/Components/BackArrowButton'
import BlueButton from 'App/Components/BlueButton'
import NavigationService from 'App/Services/NavigationService'
import { View, StyleSheet, Text, TouchableOpacity, TouchableHighlight, Image, ScrollView } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'

class ProductPrice extends Component {

    render() {

        return (
            <View style={{ marginHorizontal: 5 }}>
                <View style={{ marginVertical: 5 }}>
                    <BackArrowButton />
                </View>
                <View style={{ marginLeft: '20%', bottom: 10 }}>
                    <Text style={Styles.head}>Products And Prices</Text>
                </View>

                <View style={Styles.card1}>
                    <View style={{ margin: 15, marginHorizontal: 25 }}>
                        <Text style={{ fontSize: 25, color: '#02ADD7', fontWeight: 'bold' }}>ABC</Text>
                    </View>
                    <View style={{ flexDirection: 'column', margin: 25 }}>
                        <View style={{ flexDirection: 'row' }}>
                            <View style={{ flexDirection: 'column', marginHorizontal: 20, marginVertical: 10 }}>
                                <Text style={{ fontWeight: 'bold', color: '#9A9A9A' }}>Price/MT:</Text>
                            </View>
                            <View style={{ flexDirection: 'column', marginVertical: 10 }}>
                                <Text style={{ color: '#515C6F', fontWeight: 'bold' }}>₹ 8000</Text>

                            </View>
                        </View>
                    </View>
                </View>

                <View style={Styles.card2}>
                    <View style={{ margin: 15, marginHorizontal: 25 }}>
                        <Text style={{ fontSize: 25, color: '#02ADD7', fontWeight: 'bold' }}>PQR</Text>
                    </View>
                    <View style={{ flexDirection: 'column', margin: 25 }}>
                        <View style={{ flexDirection: 'row' }}>
                            <View style={{ flexDirection: 'column', marginHorizontal: 20, marginVertical: 10 }}>
                                <Text style={{ fontWeight: 'bold', color: '#9A9A9A' }}>Price/MT:</Text>
                            </View>
                            <View style={{ flexDirection: 'column', marginVertical: 10 }}>
                                <Text style={{ color: '#515C6F', fontWeight: 'bold' }}>₹ 5400</Text>

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
)(ProductPrice)



const Styles = StyleSheet.create({


    head: {
        fontSize: 20, fontWeight: 'bold', marginLeft: wp('8%')
    },
    card1: {
        height: hp('10%'), marginVertical: 20, width: wp('90%'),
        borderWidth: 0, elevation: 5, borderRadius: 3,
        alignSelf: 'center', backgroundColor: 'white', flexDirection: 'row'
    },
    card2: {
        height: hp('10%'), marginVertical: 10, width: wp('90%'),
        borderWidth: 0, elevation: 5, borderRadius: 3,
        alignSelf: 'center', backgroundColor: 'white', flexDirection: 'row'
    }

});