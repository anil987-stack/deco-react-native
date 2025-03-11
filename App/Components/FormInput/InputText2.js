import React from 'react'
import { TouchableOpacity, View } from 'react-native'
import { Item, Input, Label } from 'native-base'
import Style from './InputStyles'
import GenericIcon from '../GenericIcon'

const InputText2 = ({ placeholder = '', onChange = () => { },name,styleicon, onpress, style = {}, value = '', error = false, label = '', multiline = false, numberOfLines = 4, editable = true }) => (
	<>
    <View style={{...Style.inputcontain, ...style}}>	
    <View style={{width:'60%'}}>	
        {label ? <Label style={{ ...Style.label }}>{label}</Label> : []}
        </View>
        <TouchableOpacity onPress={onpress} style={{width:"10%",alignSelf:"flex-end"}}>
        <GenericIcon
        // name={'navigate-next'}
        name={name}
        style={{...Style.iconstyle,...styleicon}}
        />
        </TouchableOpacity>
    </View>

		<Item style={{ ...Style.item }}>
			{/* <Input value={String(value || '')} placeholder={placeholder} style={error ? { ...Style.input, ...Style.inputError, ...style } : { ...Style.input, ...style }} onChangeText={(event) => onChange(event)} placeholderTextColor={Style.placeholder.color} multiline={multiline} numberOfLines={numberOfLines} editable={editable} /> */}
		</Item>
	</>
)

export default InputText2
