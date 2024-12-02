import { View, Text, StyleProp, TextStyle } from 'react-native'
import React, { StyleHTMLAttributes } from 'react'

interface Props {
    text: string
    color ?: string
    styles ?: StyleProp<TextStyle>
    size ?: number 
    font ?: string
}


const TextComponet = (props: Props) => {
    const {text, color, styles, size, font} = props 
    return (
        <Text></Text>
    )
}

export default TextComponet