import { View, Text, StyleProp, ViewStyle, TextStyle, TouchableOpacity } from 'react-native'
import React, { ReactNode } from 'react'

interface Props {
    text: string,
    icon?: ReactNode,
    textComment ?: string,
    color?: string,
    styles?: StyleProp<ViewStyle>
    textColor?: string
    textStyles ?: StyleProp<TextStyle>
    iconFlex ?: 'right' | 'left' | 'cover'
    onPress ?: () => void 
}

const ButtonComponent = (props : Props) => {
    const {icon, text, textComment, styles, textColor, textStyles, iconFlex, onPress} = props
    return (
        <TouchableOpacity
        >         
        </TouchableOpacity> 
    )
}

export default ButtonComponent