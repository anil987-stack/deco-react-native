import React, { Component } from 'react'
import { View, Alert, ScrollView, Text } from 'react-native'
import SpeedoMeter from 'App/Components/SpeedoMeter'
import CircularProgressBar from 'App/Components/CircularProgressBar'
import Style from './CreditLimitStyles'
import { connect } from 'react-redux'
import _ from 'lodash'
import { FlatList, Dimensions } from 'react-native'
import RetailersActions from 'App/Stores/Retailers/Actions'
import CommonActions from 'App/Stores/Common/Actions';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'


class CreditLimit extends React.Component {

    componentDidMount() {

        const {
            fetchCreditLimit,
            fetchCreditLimitLoading,
        } = this.props;

        this.fetchCreditCall()

    }

    fetchCreditCall() {
        const {
            token,
            fetchCreditLimit,
            selectedRetailer,
        } = this.props;

        fetchCreditLimit
            ({
                token,
                account_id: selectedRetailer.id
            });
    }


    render() {
        const { data } = this.props;

        return (
            <ScrollView style={{ marginTop: hp('-42%'),flex:1,alignSelf:'center' }}>

                {/* <View style={{ ...Style.card}}>
                    <Text style={Style.head}>Paper</Text>
                    <SpeedoMeter datasource={data && data.length && data[0] ? data[0] : ''} />
                </View> */}

                <View style={{ ...Style.card }}>
                    {/* <Text style={Style.head}>Board</Text> */}
                    <View style={{ flexDirection: "row", marginBottom: wp(1.5) }}>
          <Text
            style={{
              marginVertical: 2,
              fontWeight: "bold",
              color: "#9A9A9A",
              textAlign: "right",
              marginRight: wp("5%"),
              width: wp("33%"),
            }}
          >
           Name :
          </Text>
          <Text
            style={{
              color: "#515C6F",
              marginVertical: 2,
              width: "40%",
              textAlign: "left",
            }}
          >
            {"Ridham"}
          </Text>
        </View>
                    <View style={{ flexDirection: "row", marginBottom: wp(1.5) }}>
          <Text
            style={{
              marginVertical: 2,
              fontWeight: "bold",
              color: "#9A9A9A",
              textAlign: "right",
              marginRight: wp("5%"),
              width: wp("33%"),
            }}
          >
           D.O.B :
          </Text>
          <Text
            style={{
              color: "#515C6F",
              marginVertical: 2,
              width: "40%",
              textAlign: "left",
            }}
          >
            {"08-02-1999"}
          </Text>
        </View>
                    <View style={{ flexDirection: "row", marginBottom: wp(1.5) }}>
          <Text
            style={{
              marginVertical: 2,
              fontWeight: "bold",
              color: "#9A9A9A",
              textAlign: "right",
              marginRight: wp("5%"),
              width: wp("33%"),
            }}
          >
           T-Shirt Size :
          </Text>
          <Text
            style={{
              color: "#515C6F",
              marginVertical: 2,
              width: "40%",
              textAlign: "left",
            }}
          >
            {"38"}
          </Text>
        </View>
                </View>

               
            </ScrollView>
        )
    }
}


const mapStateToProps = (state) => ({
    token: state.user.token,
    fetchCreditLimitLoading: state.retailers.fetchCreditLimitLoading,
    fetchCreditLimitList: state.retailers.fetchCreditLimitList,
    data: state.retailers.fetchCreditLimitList,
    selectedRetailer: state.retailers.selectedRetailer,

});

const mapDispatchToProps = (dispatch) => ({
    fetchCreditLimit: (params) => dispatch(RetailersActions.fetchCreditLimit(params)),

});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CreditLimit)
