import React from 'react'
import {View ,Text,TouchableOpacity,TouchableHighlight,FlatList} from 'react-native';
import { connect } from 'react-redux'
import { PropTypes } from 'prop-types'
import { liveInEurope } from 'App/Stores/Example/Selectors'
import { ApplicationStyles, Helpers, Images, Metrics } from 'App/Theme'
import { Icon, Input,  ScrollableTab,Container,TabHeading,Tab,Tabs, Content, } from "native-base";
import NavigationService from 'App/Services/NavigationService'
import WhiteButton from 'App/Components/WhiteButton'
import GenericIcon from 'App/Components/GenericIcon'
import { Colors } from 'App/Theme'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { HelperService } from '../../../Services/Utils/HelperService'
import DisplayCard from '../../../Components/GenericDisplayCard/GenericDisplayCard'
import DisplayCardStrip from '../../../Components/GenericDisplayCard/GenericDisplayCardStrip'
//import Style from './style';
import DisplayCardStripVertical from '../../../Components/GenericDisplayCard/GenericDisplayCardVerticalStrip'
import moment from 'moment';
import Style from './style';
import ComplaintCard from '../../../Components/ComplaintComponent/ComplaintCard';
class Complaints extends React.Component {
    render(){
        return(
            <View style={Style.container}> 
              <View style={Style.tabs}>
               <Tabs tabBarUnderlineStyle={{width:wp('20%'),marginLeft:'10%'}}>
                <Tab heading="Pending12 " 
                    textStyle={{ color:Colors.white, fontSize: 15, }}
                    tabStyle={{ backgroundColor:Colors.primary,flex:1,}}
                    activeTextStyle={{ color: Colors.white, fontSize: 15 }}
                    activeTabStyle={{ backgroundColor:Colors.primary}}>
                    <FlatList
                        data={[{'a':'1'},{'a':'2'}]}
                        renderItem={({ item,index }) =>
                        <View style={Style.list}>
                            <DisplayCard
                                onPress={() => {}}
                                content={[
                                    <DisplayCardStrip labelStyle={Style.label} valueStyle={Style.value} label={'Date'} value={'11/04/2020'} />,
                                    <DisplayCardStrip labelStyle={Style.label} valueStyle={Style.value} label={'Ticket No.'} value={'TI-12345'}/>,
                                    <DisplayCardStrip labelStyle={Style.label} valueStyle={Style.value} label={'Category'} value={'Category1'}/>,
                                    <DisplayCardStrip labelStyle={Style.label} valueStyle={Style.value} label={'Remarks'} value={'Remarks1'}/>,
                                ]}            
                            />
                        </View>}
                            keyExtractor={item => item.a}
                            //refreshing={}
                            //onRefresh={() => {}}
                    />
                </Tab>
                <Tab heading="Resolved" 
                    textStyle={{ color: Colors.white, fontSize: 15 }}
                    tabStyle={{ backgroundColor:Colors.primary,flex:1}}
                    activeTextStyle={{ color: Colors.white, fontSize: 15 }}
                    activeTabStyle={{ backgroundColor:Colors.primary  }}>
                    <FlatList
                        data={[{'a':'1'},{'a':'2'}]}
                        renderItem={({ item,index }) =>
                        <View style={Style.list}>
                            <DisplayCard
                                onPress={() => {}}
                                content={[
                                    <DisplayCardStrip labelStyle={Style.label} valueStyle={Style.value} label={'Date'} value={'11/04/2020'} />,
                                    <DisplayCardStrip labelStyle={Style.label} valueStyle={Style.value} label={'Ticket No.'} value={'TI-12345'}/>,
                                    <DisplayCardStrip labelStyle={Style.label} valueStyle={Style.value} label={'Category'} value={'Category1'}/>,
                                    <DisplayCardStrip labelStyle={Style.label} valueStyle={Style.value}  valueStyle={{marginLeft:'40%',justifyContent:'flex-end',color:Colors.darkGrey,padding:'1%'}} label={'Remarks'} value={'Remarks1'}/>,
                                ]}            
                            />
                        </View>}
                            keyExtractor={item => item.a}
                            //refreshing={}
                            //onRefresh={() => {}}
                    />
                </Tab>
             </Tabs>
      </View>
      </View>
       
      
        )
    }
}

export default Complaints