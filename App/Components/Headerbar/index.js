import NavigationService from 'App/Services/NavigationService'
import * as React from "react";
import Style from './HeaderbarStyle';
import { Appbar } from "react-native-paper";
import { StyleSheet,View,Text } from "react-native";
import GenericIcon from 'App/Components/GenericIcon'
export const Headerbar = ({ title,show,name,name2,onPress,titleStyle={}, showSide=false, onPressSide }) => {

return(
<View style={Style.container}>
  <View>
<GenericIcon
name={'arrow-back'}
style={Style.editActionIcon}
onPress={onPress}
/>
</View>
<View style={{alignSelf:'center',width:'80%'}}>
  {show? <GenericIcon
   name={name}
   show={true}
   style={Style.editActionIcon}
   /> :<Text style={{...Style.text,...titleStyle}}>{title}</Text>  
  }
  </View>
  {showSide?
  <View>
<GenericIcon
name={'add'}
style={Style.editActionIcon}
onPress={onPressSide}
/>
</View>
:[]}
</View>
);
};