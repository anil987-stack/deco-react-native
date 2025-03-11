import React from 'react'
import { Container, Header, Content, Footer, FooterTab, Button,  Text } from 'native-base';
import Style from './FooterfilterStyle'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

const Footerfilter = ({ icon, iconText, active=false, disabled = false, onPress,show=''}) => (
  	<Button 
  		//vertical={true}
  		disabled={disabled}
  		active={active}
  		onPress={onPress}
  		style={active ? {...Style.iconButton, ...Style.iconActiveButton} : {...Style.iconButton}}
  	>
		  <Text style={active ? {...Style.iconText, ...Style.iconActive} : {...Style.iconText}}>{iconText} </Text>
	{show ? 	<MaterialIcon 
        name={`${icon}`}
        style={active ? {...Style.icon, ...Style.iconActive} : {...Style.icon}}
      />:	<Icon 
        name={`${icon}`}
        style={active ? {...Style.icon, ...Style.iconActive} : {...Style.icon}}
      />}
		
	</Button>
)

export default Footerfilter
