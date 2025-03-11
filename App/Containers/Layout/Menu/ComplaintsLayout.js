import React from 'react'
import Header from 'App/Components/Header/index'
import { Platform, View, ActivityIndicator, Image, StyleSheet, Dimensions, ScrollView } from 'react-native'

class ComplaintsLayout extends React.Component {
    render(){
        return(
            <View>
                <Header style={{justifyContent:'center'}} title={'TICKETS'} />
            </View>
        )
    }
}

export default ComplaintsLayout