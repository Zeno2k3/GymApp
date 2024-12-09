import React, { useState } from 'react'
import {
  ButtonComponent,
  ContainerComponent,
  TextComponent
} from '../../components'
import SectionComponent from '../../components/SectionComponent'
import { appColors } from '../../constants/appColor'
import SpaceComponent from '../../components/SpaceComponent'
import SelectScrollComponent from './components/SelectScrollComponent'

const WeightScreen = ({ navigation }: any) => {
  return (
    <ContainerComponent step={4} steps={8} back percent={40} onPress={() => navigation.goBack()} >
      <SpaceComponent height={30} />
      <SectionComponent
        styles={{
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <TextComponent text="Enter Your Weight" title />
        <TextComponent
          text="Please provide your height in centimeters."
          color={appColors.gray2}
        />
      </SectionComponent>
      <SelectScrollComponent start={20} end={200} type={'200'}/>
      <ButtonComponent text="Continue" type="a"
        onPress={() => navigation.navigate('ActiviLevelScreen')} />
      <SpaceComponent height={30} />
    </ContainerComponent>
  )
}

export default WeightScreen;