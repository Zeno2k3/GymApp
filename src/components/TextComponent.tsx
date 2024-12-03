import { View, Text, StyleProp, TextStyle } from 'react-native'
import React, { StyleHTMLAttributes } from 'react'
import { globalStyles } from '../styles/globalStyles'
import { appFontFamilies } from '../constants/appFontFamilies'
import { appColors } from '../constants/appColor'

interface Props {
    text: string
    color?: string
    styles?: StyleProp<TextStyle>
    size?: number
    font?: string
    title ?: boolean
}
const TextComponet = (props: Props) => {
    const { text, color, styles, size, font, title } = props
    return (
        <Text
            style={
                [
                    globalStyles.text,
                    {
                        color: color ?? appColors.gray,
                        fontSize: size ?? title ? 26 : 16,
                        fontFamily: font ?? title ? appFontFamilies.Blod : appFontFamilies.regular
                    },
                    styles
                ]
            }
        >{text}</Text>
    )
}

export default TextComponet