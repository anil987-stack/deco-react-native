import React from 'react'
import { View } from 'react-native'
import { Picker, Label } from 'native-base'
import Style from './SelectStyle'

const Select = ({ selected = '', list = [], onChange = () => { }, style = {}, label = '', editable = true }) => (
  <>
    {label ? <Label style={{ ...Style.labelStyle }}>{label}</Label> : []}
    <View style={{ ...Style.select, ...style }}>
      <Picker note mode={'dropdown'} selectedValue={selected} onValueChange={onChange} enabled={editable}>
        {list.map(({ label, value }) => (
          <Picker.Item label={label} key={value} value={value} />
        ))}
      </Picker>
    </View>
  </>
)

export default Select
