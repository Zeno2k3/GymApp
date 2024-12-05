import React, { useState } from 'react'
import {
  ButtonComponent,
  ContainerComponent,
  TextComponent
} from '../../components'
import SectionComponent from '../../components/SectionComponent'
import { appColors } from '../../constants/appColor'
import SpaceComponent from '../../components/SpaceComponent'



const AgeScreen = ({ navigation }: any) => {
  return (
    <ContainerComponent step={2} steps={8} back percent={20} onPress={() => navigation.goBack()} >
      <SpaceComponent height={30} />
      <SectionComponent
        styles={{
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
      <ButtonComponent text="Continue" type="a"
        onPress={() => navigation.navigate('HeightScreen')} />
      <SpaceComponent height={30} />
    </ContainerComponent>
  )
}

export default AgeScreen