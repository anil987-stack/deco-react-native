import LocalActions from 'App/Stores/LocalExpense/Actions';
import { Tab, Tabs, Container } from 'native-base';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Colors, ApplicationStyles, Fonts } from 'App/Theme'
import BackArrowButton from 'App/Components/BackArrowButton'
import BlueButton from 'App/Components/BlueButton'
import NavigationService from 'App/Services/NavigationService'
// import SalesOrderTrack from './SalesOrderTrack';
import Dash from 'react-native-dash';
import { View, StyleSheet, Text, TextInput, TouchableOpacity, Image, ScrollView } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import { HelperService } from 'App/Services/Utils/HelperService';



const DealerOrderCard= ({ onPress, id, data, areas, competitors,productdata, showdata }) => (
     <View style={Styles.Card}>
                        <Text style={{ fontWeight: 'bold', margin: '1%', marginHorizontal: 25, marginVertical: 10 }}>
                        {HelperService.getNameFromSFID( productdata ,data.Material__c)}
                        </Text>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', right: 30 }}>
                            <View style={{justifyContent:'center'}}>
                                <Text style={{ fontWeight: 'bold',marginLeft:5 }}>
                                   
                                </Text>
                                <Text style={Styles.t1}>MOP</Text>
                            </View>
                            <View style={{}}>
                                <Text style={{ fontWeight: 'bold',marginLeft:5 }}>
                                   
                                </Text>
                                <Text style={Styles.t1}>UOM</Text>
                            </View>
                            <View style={{}}>
                                <Text style={{ fontWeight: 'bold',marginLeft:wp('5')}}>
                                   {data.Item_Quantity__c}
                                </Text>
                                <Text style={Styles.t1}>Quantity</Text>
                            </View>
                        </View>
                    </View> 

)

export default DealerOrderCard


const Styles = StyleSheet.create({
    Head: {
        height: hp('6%'), width: wp('100%'), backgroundColor: Colors.primary
    },
    head_txt: {
        fontSize: 23, color: 'white', margin: 5, left: 20
    },
    Card: {
        
        width: wp('92%'),
        borderWidth: 1,
        elevation: 3,
        borderRadius: 5, backgroundColor: 'white', alignSelf: 'center',
        paddingTop: 1,paddingBottom: 5, marginTop: '1%', borderColor: '#8B8B8B0F',
        marginBottom:hp('2%')
    },
    Card2: {
        height: hp('12%'),
        width: wp('92%'),
        borderWidth: 1,
        elevation: 3,
        borderRadius: 5, backgroundColor: 'white', alignSelf: 'center',
        marginVertical: 20, borderColor: '#8B8B8B0F'
    },
    t1: {
        color: '#9A9A9A', fontWeight: 'bold'
    }, t2: {
        marginVertical: 7, fontWeight: 'bold'
    }, v1: {
        borderBottomColor: '#9A9A9A', borderBottomWidth: 1, width: wp('35%'),
    },
    text4: {
        color: '#707070', fontSize: 11.5, textAlign: 'center'
    }, text5: {
        width: 20, height: 22, borderRadius: 22, backgroundColor: '#9A9A9A', marginLeft: 70, justifyContent: 'center', alignItems: 'center'
    }, tt1:{
        height: hp('3.5%'), width: wp('25%'), borderRadius: 3, backgroundColor: '#E95454', marginLeft: wp('10%') 
    }

});