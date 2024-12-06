import { View, Text, ViewStyle, StyleProp, Image, ImageStyle, ImageRequireSource } from 'react-native'
import React, { ReactNode } from 'react'
import { globalStyles } from '../../../styles/globalStyles'
import { TextComponent } from '../../../components'
import RowComponent from '../../../components/RowComponent'
import { Kalo, Time } from '../../../image/Svg'
import { appColors } from '../../../constants/appColor'
import { appFontFamilies } from '../../../constants/appFontFamilies'
import SpaceComponent from '../../../components/SpaceComponent'


interface Props {
    title: string
    image: ImageRequireSource
    time: number
    calo: number
    styles?: StyleProp<ViewStyle>
    imageStyle?: StyleProp<ImageStyle>
}

const FoodItem = (props: Props) => {

    const { title, image, time, calo, styles, imageStyle } = props
    return (
        <View
            style={[
                globalStyles.item,globalStyles.shadow,
                {
                    backgroundColor: appColors.textBtnLog
                },
                styles,
            ]}>
            <Image source={image}
             style = {[
                {
                    resizeMode: 'center',
                    width: 150,
                    height: 108,
                    
                },
                imageStyle,
             ]}
            />
            <View style={[{
                backgroundColor: appColors.white,
                borderBottomEndRadius: 10,
                borderBottomStartRadius: 10,
                
            }, globalStyles.shadow]}>
                  <TextComponent text ={title} />
                  <RowComponent
                  styles ={{
                    justifyContent:'space-between',
                  }}
                  >
                    <RowComponent>
                        <Time/>
                        <TextComponent text ={`${time} min`} styles = {{
                            fontFamily: appFontFamilies.medium,
                            color: appColors.textBtnLog
                        }}/>
                    </RowComponent>
                    <RowComponent>
                        <Kalo/>
                        <TextComponent text ={`${calo} kal`}
                        styles = {{
                            fontFamily: appFontFamilies.medium,
                            color: appColors.textBtnLog
                        }}/>
                    </RowComponent>
                  </RowComponent>
                </View>
        </View>
    )
}

export default FoodItem