import { Tab, Tabs, Container } from 'native-base';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Colors, ApplicationStyles, Fonts } from 'App/Theme'
import BackArrowButton from 'App/Components/BackArrowButton'
import BlueButton from 'App/Components/BlueButton'
import NavigationService from 'App/Services/NavigationService'
import { View, StyleSheet, Text, TouchableOpacity, TouchableHighlight, Image, ScrollView } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'

class Competitors extends Component {

    render() {

        return (
            <View style={{ marginHorizontal: 5 }}>
                <View style={{ marginVertical: 5 }}>
                    <BackArrowButton />
                </View>
                <View style={{ marginLeft: '20%', bottom: 10 }}>
                    <Text style={Styles.head}>Competitors</Text>
                </View>



                <TouchableHighlight
                    onPress={() => NavigationService.navigate('ProductPrice')}>

                    <View
                        style={Styles.card1}>
                        <View style={{ flexDirection: 'column', margin: 15, width: '17%' }}>
                            <Image
                                style={{ height: 60, width: 80, marginVertical: 20 }}
                                source={require("../../../Assets/Images/idcard.png")}
                            />
                        </View>
                        <View style={{ flexDirection: 'column' }}>
                            <View>
                                <Text style={Styles.Head}>Asian Granito Indian Limited</Text>
                            </View>
                            <View style={{ flexDirection: 'row', marginLeft: 10 }}>
                                <View style={{ flexDirection: 'column', marginHorizontal: 20, marginVertical: 10 }}>
                                    <Text style={{ marginVertical: 2, fontWeight: 'bold', color: '#9A9A9A', textAlign: 'right' }}>No. Of Dealers</Text>
                                    <Text style={{ marginVertical: 2, fontWeight: 'bold', color: '#9A9A9A', textAlign: 'right' }}>Captured Products</Text>
                                </View>
                                <View style={{ flexDirection: 'column', marginVertical: 10 }}>
                                    <Text style={{ color: '#515C6F', marginVertical: 2, fontWeight: 'bold' }}>80</Text>
                                    <Text style={{ color: '#515C6F', marginVertical: 2, fontWeight: 'bold' }}>70</Text>
                                </View>
                            </View>
                        </View>
                    </View>


                </TouchableHighlight>




                <View style={Styles.card2}>
                    <View style={{ flexDirection: 'column', margin: 15, width: '17%' }}>
                        <Image
                            style={{ height: 60, width: 80, marginVertical: 20 }}
                            source={require("../../../Assets/Images/idcard.png")}
                        />
                    </View>
                    <View style={{ flexDirection: 'column' }}>
                        <View>
                            <Text style={Styles.Head}>NITCO Limited</Text>
                        </View>
                        <View style={{ flexDirection: 'row', marginLeft: 10 }}>
                            <View style={{ flexDirection: 'column', marginHorizontal: 20, marginVertical: 10 }}>
                                <Text style={{ marginVertical: 2, fontWeight: 'bold', color: '#9A9A9A', textAlign: 'right' }}>No. Of Dealers</Text>
                                <Text style={{ marginVertical: 2, fontWeight: 'bold', color: '#9A9A9A', textAlign: 'right' }}>Captured Products</Text>
                            </View>
                            <View style={{ flexDirection: 'column', marginVertical: 10 }}>
                                <Text style={{ color: '#515C6F', marginVertical: 2, fontWeight: 'bold' }}>80</Text>
                                <Text style={{ color: '#515C6F', marginVertical: 2, fontWeight: 'bold' }}>70</Text>
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
)(Competitors)



const Styles = StyleSheet.create({


    head: {
        fontSize: 20, fontWeight: 'bold', marginLeft: wp('16%')
    },
    Head: {
        color: '#02ADD7', fontWeight: 'bold', marginHorizontal: 20, marginTop: 20, marginLeft: 30, width: wp('50%')
    },
    Head2: {
        color: '#515C6F', marginHorizontal: 20, marginTop: 15, marginLeft: 30, width: wp('60%')
    }, card1: {
        height: hp('20%'), marginVertical: 20, width: wp('90%'),
        borderWidth: 0, elevation: 5, borderRadius: 3,
        alignSelf: 'center', backgroundColor: 'white', flexDirection: 'row'
    }, card2: {
        height: hp('20%'), marginVertical: 5, width: wp('90%'),
        borderWidth: 0, elevation: 5, borderRadius: 3,
        alignSelf: 'center', backgroundColor: 'white', flexDirection: 'row'
    }
});