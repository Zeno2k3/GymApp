import React from 'react'
import RowComponent from './RowComponent'
import LinearGradient from 'react-native-linear-gradient'
import { appColors } from '../constants/appColor'
import { TextComponent } from '.'
import { View } from 'react-native'
import SpaceComponent from './SpaceComponent'

interface Props {
    height?: number,
    percent: number
}
const ProgressComponent = (props: Props) => {
    const {height, percent} = props

    return (
        <View style={{ 
            flex: .9,
            height,
            backgroundColor: appColors.textBtnLog,
            borderRadius: height,
            top: 6.5
            }}>
            <LinearGradient
                start={{ x: 0.0, y: 0.0 }}
                end={{ x: 1.0, y: 0.0 }} 
                colors={[appColors.blue2, appColors.blue3]}
                style={{
                    height,
                    width: `${percent}%`, 
                    borderRadius: height,
                }}
            />
        </View>
    )
}

export default ProgressComponent
