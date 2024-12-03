import { View, Text, StyleProp, ViewStyle, TextStyle, TouchableOpacity } from 'react-native'
import React, { ReactNode, useState } from 'react'
import { globalStyles } from '../styles/globalStyles'
import TextComponet from './TextComponent'
import LinearGradient from 'react-native-linear-gradient'
import { appColors } from '../constants/appColor'
import { appFontFamilies } from '../constants/appFontFamilies'
import { useTheme } from '@react-navigation/native'

interface Props {
    text: string,
    icon?: ReactNode,
    textComment?: string,
    color?: string,
    styles?: StyleProp<ViewStyle>
    textColor?: string
    textStyles?: StyleProp<TextStyle>
    iconFlex?: 'right' | 'left'
    onPress?: () => void
    type?: 'a' | 'b' | 'c'
}

const ButtonComponent = (props: Props) => {
    const { icon, text, textComment, styles, textColor, textStyles, iconFlex, onPress, type } = props
    return (
        type === 'a' ? (
            <LinearGradient
                start={{ x: 0.0, y: 0.0 }}
                end={{ x: 0.7, y: 1.0 }}
                colors={[appColors.blue2, appColors.blue3]}
                style={{
                    borderRadius: 1000,
                    minWidth: 339,
                }}
            >
                <TouchableOpacity
                    style={[
                        globalStyles.button,
                        {
                            borderWidth: 0,
                            flexDirection: 'row',
                        },
                        styles
                    ]}
                    onPress={onPress}>
                    {icon && icon}
                    <TextComponet
                        text={text}
                        color={textColor ?? appColors.white}
                        styles={[
                            textStyles,
                            { marginLeft: icon && iconFlex === 'left' ? 12 : 0 }
                        ]}
                        font={appFontFamilies.Blod}
                    />
                    {icon && iconFlex === 'right' && icon}
                </TouchableOpacity>
            </LinearGradient>
        ) : type === 'b' ? (<TouchableOpacity
            style={[
                globalStyles.button,
                {

                },
                styles
            ]}
            onPress={onPress}>
            {icon && icon}
            <TextComponet
                text={text}
                color={textColor ?? appColors.black}
                styles={[
                    textStyles,
                    { marginLeft: icon && iconFlex === 'left' ? 12 : 0 }
                ]}
                font={appFontFamilies.medium}
            />
            {icon && iconFlex === 'right' && icon}
        </TouchableOpacity>
        ) :
            (<TouchableOpacity
                style={[
                    globalStyles.button,
                    {
                        minWidth: 339,
                    },
                    styles
                ]}
                onPress={onPress}>
                {icon && icon}
                <View style = {{
                    flexDirection: 'column',
                    paddingHorizontal: 16
                }}>
                    <TextComponet
                        text={text}
                        color={textColor ?? appColors.black}
                        styles=
                        {[
                            textStyles,
                            { marginLeft: icon && iconFlex === 'left' ? 12 : 0 }
                        ]}
                        font={appFontFamilies.medium}
                    />
                    {icon && iconFlex === 'right' && icon}
                    <Text
                        style=
                        {
                            {
                                fontFamily: appFontFamilies.regular,
                                color: appColors.gray2
                            }
                        }
                    >{textComment}</Text>
                </View>
            </TouchableOpacity>
            )
    )
}
export default ButtonComponent