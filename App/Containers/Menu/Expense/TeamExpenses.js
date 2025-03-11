
import Colors from 'App/Theme/Colors';
import { Tab, Tabs, ScrollableTab } from 'native-base';
import React, { Component } from 'react';
import { ScrollView, StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import BlueButton from 'App/Components/BlueButton'
import BackArrowButton from 'App/Components/BackArrowButton';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import NavigationService from 'App/Services/NavigationService'


class TeamExpenses extends Component {

    render() {

        return (
            <View style={{}}>

                <View style={Styles.card}
                // onPress={() => NavigationService.navigate('SalesOrder')}
                >
                    <View style={Styles.v1}>
                        <Text style={Styles.t1}>Expense ID</Text>
                        <Text style={Styles.t1}>User</Text>
                        <Text style={Styles.t1}>Amount</Text>
                    </View>
                    <View style={Styles.v1}>
                        <Text style={{ color: '#515C6F', marginVertical: 2, }}>0112</Text>
                        <Text style={{ color: '#515C6F', marginVertical: 2, }}>Mahesh </Text>
                        <Text style={{ color: '#515C6F', marginVertical: 2, }}>4500</Text>
                        
                    </View>
                </View>

                <TouchableOpacity style={Styles.card}
                // onPress={() => NavigationService.navigate('SalesOrder')}
                >
                    <View style={Styles.v1}>
                        <Text style={Styles.t1}>Expense ID</Text>
                        <Text style={Styles.t1}>Amount</Text>
                        <Text style={Styles.t1}>Status</Text>
                    </View>
                    <View style={Styles.v1}>
                        <Text style={{ color: '#515C6F', marginVertical: 2, }}>0112</Text>
                        <Text style={{ color: '#515C6F', marginVertical: 2, }}>4450 </Text>
                        <BlueButton style={{ height: hp('3%'), width: wp('40%') }}
                            title={'Pending for approval'}
                            textStyle={{ color: 'white', fontSize: 11 }}
                        ></BlueButton>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={Styles.card}
                // onPress={() => NavigationService.navigate('SalesOrder')}
                >
                    <View style={Styles.v1}>
                        <Text style={Styles.t1}>Expense ID</Text>
                        <Text style={Styles.t1}>Amount</Text>
                        <Text style={Styles.t1}>Status</Text>
                    </View>
                    <View style={Styles.v1}>
                        <Text style={{ color: '#515C6F', marginVertical: 2, }}>0112</Text>
                        <Text style={{ color: '#515C6F', marginVertical: 2, }}>4450 </Text>
                        <BlueButton style={{ height: hp('3%'), width: wp('20%') }}
                            title={'approved'}
                            textStyle={{ color: 'white', fontSize: 11 }}
                        ></BlueButton>
                    </View>
                </TouchableOpacity>


            </View >

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
)(TeamExpenses)


const Styles = StyleSheet.create({

    t1: {
        marginVertical: 2, fontWeight: 'bold', color: '#9A9A9A', textAlign: 'right'
    }, v1: {
        flexDirection: 'column',margin:15, marginHorizontal:35
    }, card:{
        height: hp('13%'), marginTop:22, width: wp('90%'),
        borderWidth: 0, elevation: 3, borderRadius: 3,alignSelf:'center',
        backgroundColor: 'white', flexDirection: 'row', 
    }
});