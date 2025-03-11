import React from 'react'
import { Platform, View, ActivityIndicator, Image, StyleSheet, Dimensions, ScrollView, FlatList } from 'react-native'
import { connect } from 'react-redux'
import { PropTypes } from 'prop-types'
import { liveInEurope } from 'App/Stores/Example/Selectors'
import { ApplicationStyles, Helpers, Images, Metrics } from 'App/Theme'
import { Container, Header, Title, Content, Button, Icon, Left, Body, Text, Input, Item, Right } from 'native-base';
import NavigationService from 'App/Services/NavigationService'
import WhiteButton from 'App/Components/WhiteButton'
import GenericIcon from 'App/Components/GenericIcon'
import { Colors } from 'App/Theme'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { HelperService } from '../../../Services/Utils/HelperService'
import DisplayCard from '../../../Components/GenericDisplayCard/GenericDisplayCard'
import DisplayCardStrip from '../../../Components/GenericDisplayCard/GenericDisplayCardStrip'
import Style from './style';
import DisplayCardStripVertical from '../../../Components/GenericDisplayCard/GenericDisplayCardVerticalStrip'
import moment from 'moment';

class PaymentScreen extends React.Component {
    render() {
        return (
            <View>
                <FlatList
                    data={[{ 'a': '1' }, { 'a': '2' }]}
                    renderItem={({ item, index }) =>
                        <View style={{ paddingTop: '2%', backgroundColor: Colors.white }}>
                            <DisplayCard
                                style={Style.list}
                                date={HelperService.getCurrentDate(new Date())}
                                month={moment(new Date()).utc().format("MMM").toUpperCase()}
                                sapId={'Date of Payment'}
                                onPress={() => { }}
                                content={[
                                    <DisplayCardStrip labelStyle={Style.label} valueStyle={Style.value} label={'Dealer'} value={'RK Traders'} />,
                                    <DisplayCardStrip labelStyle={Style.label} valueStyle={Style.value} label={'Mode of Payment'} value={'Digital'} />,
                                    <DisplayCardStrip labelStyle={Style.label} valueStyle={Style.value} label={'Amount'} value={'$1234'} />,
                                    <DisplayCardStrip labelStyle={Style.label} valueStyle={Style.value} label={'Due Date'} value={'1 Nov 2020'} />,
                                ]}
                            />
                        </View>
                    }

                    keyExtractor={item => item.a}
                //refreshing={}
                //onRefresh={() => {}}
                />
            </View>

        )
    }
}
//Style=StyleSheet.create({

//})

export default PaymentScreen