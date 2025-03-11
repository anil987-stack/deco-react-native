import React from 'react'
import { Text, View, Image, TouchableWithoutFeedback } from 'react-native'
import Style from './SurveyTupleStyle'
import { Icon, Input, Button } from 'native-base'
import { AREA, PREV_ORDER_VAL, VISIT_THIS_WEEK, MAIN_COMPETETOR } from 'App/Constants'
import { Colors, Metrics, Helpers, Fonts, ApplicationStyles } from 'App/Theme'
import NavigationService from 'App/Services/NavigationService'
import {HelperService} from 'App/Services/Utils/HelperService';
import BlueButton from 'App/Components/BlueButton'
import GenericIcon from 'App/Components/GenericIcon'



const SurveyTuple = ({ onPress, id, data, areas, competitors, showdata ,transport}) => (
  <TouchableWithoutFeedback >
    <View style={data.exception_case__c ? Style.customBox : Style.box}>
            <View style={Style.btmBox}>
                <View style={Style.strip}>
                    <Text style={Style.ttl}>{'Survey Id'}</Text>
                    <Text style={Style.detail}>{data.Name}</Text>
                </View>
                <View style={Style.strip}>
                    <Text style={Style.ttl}>{'Start Date'}</Text>
                    <Text style={Style.detail}>{data.From_Date__c|| 'None'}</Text>
                </View>

                <View style={Style.strip}>
                    <Text style={Style.ttl}>{'End Date'}</Text>
                    <Text style={Style.detail}>{data.To_Date__c|| 'None'}</Text>
                </View>
                {/* <View style={Style.strip}>
                    <Text style={Style.ttl}>{'Month'}</Text>
                    <Text style={Style.detail}>{data.month__c}</Text>
                </View> */}

            <View style={Style.strip}>
                    <Text style={Style.ttl}>{'Region'}</Text>
                    <Text style={Style.detail}>{data.Region__r}</Text>
                </View>
                <BlueButton 
                    title={"Start Survey"} 
                    style={Style.quizButton} 
                    textStyle={Style.quizText} 
                    onPress={onPress}>
                     
                  </BlueButton>
                
            </View>
        </View>
  </TouchableWithoutFeedback>
)

export default SurveyTuple