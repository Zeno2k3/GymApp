import React, { useState } from 'react'
import {
  ButtonComponent,
  ContainerComponent,
  TextComponent
} from '../../components'
import SectionComponent from '../../components/SectionComponent'
import { appColors } from '../../constants/appColor'
import SpaceComponent from '../../components/SpaceComponent'

const WorkoutGoalScreen = ({navigation}: any) => {
  return (
    <ContainerComponent step={6} steps={8} back percent={66} onPress={() => navigation.goBack()} >
    <SpaceComponent height={30} />
    <SectionComponent
      styles={{
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <TextComponent text="Set Your Workout Goal" title />
      <TextComponent
        text="What’s your primary fitness goal? We’ll crec plan to help you achieve it."
        color={appColors.gray2}
      />
    </SectionComponent>
    <ButtonComponent text="Continue" type="a"
      onPress={() => navigation.navigate('ManyPushUpScreen')} />
    <SpaceComponent height={30} />
  </ContainerComponent>
  )
}

export default WorkoutGoalScreen