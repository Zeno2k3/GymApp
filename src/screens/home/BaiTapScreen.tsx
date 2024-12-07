import {View, Text, ImageBackground, StatusBar, ScrollView} from 'react-native';
import React, {useLayoutEffect} from 'react';
import {appInfors} from '../../constants/appInfors';
import {appColors} from '../../constants/appColor';
import HeaderWork from '../workouts/components/HeaderWork';
import { ButtonComponent, TextComponent } from '../../components';
import SpaceComponent from '../../components/SpaceComponent';
import SectionComponent from '../../components/SectionComponent';
import { appFontFamilies } from '../../constants/appFontFamilies';
import ExemItem from '../workouts/components/ExemItem';

const BaiTapScreen = ({navigation}: any) => {
  useLayoutEffect(() => {
    navigation.getParent()?.setOptions({
      tabBarStyle: {display: 'none'},
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
    <>
      <HeaderWork
        pathimage={require('../../image/baitap.png')}
        title={'Armored Chest : Beginner Essentials'}
        time={30}
        kcal={112}
        workouts={6}
        onPress={() => navigation.goBack()}
      />
      <ScrollView
        style= {{
          flex: 2,
          paddingHorizontal: 16
        }}
      >
        <SpaceComponent height={80}/>
        <TextComponent styles= {{
          color: appColors.gray,
          fontFamily:  appFontFamilies.medium
        }}
        text='Lets start the challenge of FitnetsX. This is a comprehensive exercise to build 1 toned chest muscle'
        />
      <SpaceComponent height={30}/>
      <TextComponent text='Body Parts: Chest' title/>
      <ExemItem title={'Incline Push-Up'} content={'3 Sets x 12 reps'} path={require('../../image/expushUp21.png')}/>
      <SpaceComponent height={30}/>
      <ExemItem title={'Push-Up'} content={'1 Sets x 12 reps'} path={require('../../image/expushUp22.png')}/>
      <SpaceComponent height={30}/>
      <ExemItem title={'Wide Arm Push-Up'} content={'1 Sets x 12 reps'} path={require('../../image/expushUp23.png')}/>
      <SpaceComponent height={30}/>
      <ExemItem title={'Decline Push-Up'} content={'2 Sets x 8 reps'} path={require('../../image/expushUp24.png')}/>
      <SpaceComponent height={30}/>
      <ExemItem title={'Diamond Push-Up'} content={'1 Sets x 12 reps'} path={require('../../image/expushUp25.png')}/>
      <SpaceComponent height={30}/>
      <ExemItem title={'Wall Push-Up'} content={'3 Sets x 12 reps'} path={require('../../image/expushUp26.png')}/>
      <SpaceComponent height={30}/>
      <ButtonComponent text={'Start'} type ='a'></ButtonComponent>
      <SpaceComponent height={30}/>
      </ScrollView>
    </>
  );
};

export default BaiTapScreen;
