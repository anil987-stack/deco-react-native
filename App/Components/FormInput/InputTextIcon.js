import React from "react";
import { View } from "react-native";
import { Item, Label } from "native-base";
import Style from "./InputStyles";
import { Colors, ApplicationStyles } from "App/Theme";
import Icon from "react-native-vector-icons/FontAwesome";
import { Input } from "react-native-elements";

const InputTextIcon = ({
  placeholder = "",
  onChange = () => {},
  style = {},
  value = "",
  error = false,
  label = "",
  multiline = false,
  numberOfLines = 4,
  editable = true,
  secureTextEntry = false,
  iconName = "",
  iconSize = "",
  iconColor = "",
  errorMessage = "",
}) => (
  <>
    <Item style={{ ...Style.item }}>
      <Input
        label={label}
        placeholder={placeholder}
      
        value={value}
        onChangeText={(value) => onChange(value)}
     
        leftIcon={
          <Icon
            name={iconName ? iconName : ""}
            size={iconSize ? iconSize : 24}
            color={iconColor ? iconColor : "black"}
          />
        }
        disabled={!editable}
        secureTextEntry={secureTextEntry}
        //autoFocus={}
        // containerStyle={{...Style.input, ...style}}
        inputStyle={{ ...Style.input, ...style }}
        disabledInputStyle={{ ...Style.input, color: Colors.lightGrey }}
        errorMessage={error ? errorMessage : ""}
        errorStyle={{ ...Style.textStyle, color: "red" }}
        containerStyle={{borderWidth:1,backgroundColor:"black",borderRadius:10,height:"66%",top:"1%",opacity:0.6}}
        inputContainerStyle={{borderBottomColor:"transparent"}}
      />
    </Item>
  </>
);

export default InputTextIcon;
