import { View, Text, StyleProp, ViewStyle, TextStyle, TouchableOpacity } from 'react-native'
import React, { ReactNode, useState } from 'react'
import { globalStyles } from '../styles/globalStyles'
import TextComponet from './TextComponent'
import LinearGradient from 'react-native-linear-gradient'
import { appColors } from '../constants/appColor'
import { appFontFamilies } from '../constants/appFontFamilies'
import SpaceComponent from './SpaceComponent'


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
    suffix?: ReactNode
}

const ButtonComponent = (props: Props) => {
    const { icon, text, textComment, styles, textColor, textStyles, iconFlex, onPress, type , suffix} = props
    return (
        type === 'a' ? (
            <TouchableOpacity
            style={[
              {
                alignItems: 'center',
                justifyContent: 'center',
              },
              styles,
            ]}
            onPress={onPress}
          >
            <LinearGradient
              start={{ x: 0.0, y: 0.0 }}
              end={{ x: 0.7, y: 1.0 }}
              colors={[appColors.blue2, appColors.blue3]}
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 1000,
                minWidth: 339,
                paddingVertical: 12, 
                paddingHorizontal: 16,
              }}
            >
              {icon && iconFlex === 'left' && <View style={{ marginRight: 12 }}>{icon}</View>}
              <TextComponet
                text={text}
                color={textColor ?? appColors.white}
                styles={[
                  textStyles,
                  { 
                    marginLeft: icon && iconFlex === 'left' ? 12 : 0,
                  },
                ]}
                font={appFontFamilies.Blod}
              />
              {icon && iconFlex === 'right' && <View style={{ marginLeft: 12 }}>{icon}</View>}
            </LinearGradient>
          </TouchableOpacity>          
        ) : type === 'b' ? (<TouchableOpacity
            style={[
                globalStyles.button,
                styles
            ]}
            onPress={onPress}>
            {icon && icon}
            <TextComponet
                text={text}
                color={textColor ?? appColors.black}
                styles={[
                    textStyles,
                    {marginLeft: icon && iconFlex === 'left' ? 12 : 0 }
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
                        justifyContent: 'flex-start',
                        minWidth: 339,
                    },
                    styles
                ]}
                onPress={onPress}>
                {icon && icon}
                <View style = {{
                    justifyContent: 'flex-start',
                    alignItems: 'flex-start',
                    paddingHorizontal: 12
                }}>
                    <TextComponet
                        text={text}
                        color={textColor ?? appColors.black}
                        styles=
                        {[
                            textStyles,
                            { fontSize:20,
                              marginLeft: icon && iconFlex === 'left' ? 12 : 0 }
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
                <View style= {{
                      flex: 1,
                      alignItems: 'flex-end',
                   }}>
                  {suffix??suffix}
                </View>
            </TouchableOpacity>
            
            )
    )
}
export default ButtonComponent