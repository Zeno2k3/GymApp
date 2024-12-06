import { View, Text, ImageBackground, StatusBar } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { appInfors } from '../../constants/appInfors';
import { appColors } from '../../constants/appColor';
import HeaderWork from '../workouts/components/HeaderWork';



const BaiTapScreen = ({navigation}:any) => {

  useLayoutEffect(() => {
    navigation.getParent()?.setOptions({
      tabBarStyle: { display: 'none' },
    });
    return () => {
      navigation.getParent()?.setOptions({
        tabBarStyle: {
          borderTopWidth: 0,
          height: 80,
          justifyContent: 'center',
          alignItems: 'center',
        },
      });
    };
  }, [navigation]);
  return (
      <HeaderWork 
      pathimage={require('../../image/baitap.png')}
      title={'Armored Chest : Beginner Essentials'} time={0} kcal={0} workouts={0} />
  )
}

export default BaiTapScreen