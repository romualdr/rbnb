import React from 'react'
import { TextInput } from 'react-native'

const AppTextInput = ({ input, style, ...inputProps }) => <TextInput
    onChangeText={input.onChange}
    onBlur={input.onBlur}
    onFocus={input.onFocus}
    value={input.value}
    style={style}
    {...inputProps}
/>

export default AppTextInput