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

import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';


class DistributorTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            HeadTable: ['Distributor Name', 'Target', 'Actual'],
            DataTable: [
                ['Mk Traders', '400', '300'],
                ['Mk Traders', '400', '300'],
                ['Mk Traders', '400', '300'],['Mk Traders', '400', '300'],['Mk Traders', '400', '300'],['Mk Traders', '400', '300'],['Mk Traders', '400', '300'],['Mk Traders', '400', '300'],
            ]
        }
    }
    render() {
        const state = this.state;

        return (
            
            <View style={Styles.container}>
                <Table borderStyle={{ borderWidth: 1, borderColor: '#02ADD7' }}>
                    <Row data={state.HeadTable} style={Styles.HeadStyle} textStyle={Styles.TableText2} />
                    <Rows data={state.DataTable}  style={Styles.HeadStyle2} textStyle={Styles.TableText} />
                </Table>
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
)(DistributorTable)

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 60,
        paddingTop:hp('10%'),
        backgroundColor: '#ffffff'
    },
    HeadStyle: {
        height: 45,
        alignContent: "center",
        backgroundColor: '#02ADD7',
    },

    HeadStyle2: {
        height: 40,
        alignContent: "center",
        backgroundColor: 'white',
    },
    TableText: {
        margin: 0, textAlign: 'center',
    },
    TableText2: {
        margin: 0, textAlign: 'center',color:'white'
    }




});