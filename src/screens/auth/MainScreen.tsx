import { View, Text } from 'react-native'
import React from 'react'
import { ButtonComponent } from '../../components'
import { appColors } from '../../constants/appColor'


const MainScreen = () => {
  return (
    <View
    style= {{
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      }}>
        <ButtonComponent
        type='a'
        text='Continue' 
        onPress={() => console.log('main Screen')}
        textComment='aksd'
        />
    </View>
  )
}

export default MainScreen