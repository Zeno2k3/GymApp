import React, { useState } from 'react'
import {
  ButtonComponent,
  ContainerComponent,
  TextComponent
} from '../../components'
import SectionComponent from '../../components/SectionComponent'
import { appColors } from '../../constants/appColor'
import SpaceComponent from '../../components/SpaceComponent'



const ActiviLevelScreen = ({ navigation }: any) => {
  return (
    <ContainerComponent step={5} steps={8} back percent={55} onPress={() => navigation.goBack()} >
      <SpaceComponent height={30} />
      <SectionComponent
        styles={{
          justifyContent: 'center',
          alignItems: 'center',
          
        }}
      >
        <TextComponent text="Select Your Activity Level" title />
        <TextComponent
          text="Tell us about your daily activity level to tailor your workouts accordingly."
          color={appColors.gray2}
        />
      </SectionComponent>
      <ButtonComponent text="Continue" type="a"
        onPress={() => navigation.navigate('WorkoutGoalScreen')} />
      <SpaceComponent height={30} />
    </ContainerComponent>
  )
}

export default ActiviLevelScreen