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



const AgeScreen = ({ navigation }: any) => {
  return (
    <ContainerComponent step={2} steps={8} back percent={20} onPress={() => navigation.goBack()} >
      <SpaceComponent height={30} />
      <SectionComponent
        styles={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <TextComponent text="Enter Your Age" title />
        <TextComponent
          text="Your age helps us design suitable workouts."
          color={appColors.gray2}
        />
      </SectionComponent>
        <SectionComponent 
        styles={{
          flex: 8,
          justifyContent: "center",
          alignItems: 'center',
        }}
        >
        <SelectScrollComponent start={1} end={50} type='a'/>
        </SectionComponent>
      <SectionComponent
        styles={{
          flex: 1,
          justifyContent: "flex-end",
          alignItems: 'center',
        }}
      >
      <ButtonComponent text="Continue" type="a"
        onPress={() => navigation.navigate('HeightScreen')} />
      <SpaceComponent height={20} />
      </SectionComponent>
    </ContainerComponent>
  )
}

export default AgeScreen