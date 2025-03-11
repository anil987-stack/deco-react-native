import React from 'react'
import { View } from 'react-native'
import { Item, Input, Label } from 'native-base'
import Style from './InputStyles'

const InputText = ({ placeholder = '', onChange = () => { },labelstyle={}, style = {}, value = '', error = false, label = '', multiline = false, numberOfLines = 4, editable = true,autoCapitalize='' }) => (
	<>
		{label ? <Label style={{ ...Style.label,...labelstyle }}>{label}</Label> : []}
		<Item style={{ ...Style.item }}>
			<Input value={String(value || '')}
			autoCapitalize={autoCapitalize} placeholder={placeholder} style={error ? { ...Style.input, ...Style.inputError, ...style } : { ...Style.input, ...style }} onChangeText={(event) => onChange(event)} placeholderTextColor={Style.placeholder.color} multiline={multiline} numberOfLines={numberOfLines} editable={editable} />
		</Item>
	</>
)

export default InputText
