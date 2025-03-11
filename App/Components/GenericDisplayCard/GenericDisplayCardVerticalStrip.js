import React from 'react'
import { Text, View, TouchableWithoutFeedback } from 'react-native'
import Style from './GenericStyle'
import { ORDER_DATE, ORDER_VALUE, ORDER_NUM } from '../../Constants'
import {HelperService} from 'App/Services/Utils/HelperService';
import NavigationService from 'App/Services/NavigationService'

const DisplayCardStripVertical = ({
  label,
  value,
  dark,
  labelStyle,
  valueStyle,
  style
}) => (
    <View style={{...Style.strip, ...style}}>
      	<Text style={dark ? Style.darkTtl : {...Style.ttl,  ...labelStyle}}>{`${label}`}</Text>
          <Text style={dark ? Style.darkTtl : {...Style.ttl,  ...valueStyle}}>{`${value}`}</Text>
      
    </View>
);

export default DisplayCardStripVertical