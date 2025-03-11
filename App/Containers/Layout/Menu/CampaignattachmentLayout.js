import React from 'react'
import Header from 'App/Components/Header/index'
import { Platform, View, ActivityIndicator, Image, StyleSheet, Dimensions, ScrollView } from 'react-native'

class CampaignAttachmentLayout extends React.Component {
    render(){
        return(
            <View>
                <Header style={{justifyContent:'center'}} title={'Attachment'} />
            </View>
        )
    }
}

export default CampaignAttachmentLayout