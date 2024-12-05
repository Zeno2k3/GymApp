import { View, Text, StyleProp, ViewStyle } from 'react-native'
import React, { ReactNode } from 'react'
import { globalStyles } from '../styles/globalStyles'

interface Prpos {
    children: ReactNode
    justyfi ?: "center" | "flex-start" | "flex-end" | "space-between" | "space-around" | "space-evenly"
    styles ?: StyleProp<ViewStyle>
}

const RowComponent = (props: Prpos) => {
    const {children, justyfi, styles} = props
    return (
        <View
            style={[
                globalStyles.row,
                {
                    justifyContent: justyfi
                },
                styles
            ]}>
            {children}
        </View>
    )
}

export default RowComponent