import React, { useState } from 'react'
import {
  ButtonComponent,
  ContainerComponent,
  TextComponent
} from '../../components'
import SectionComponent from '../../components/SectionComponent'
import { appColors } from '../../constants/appColor'
import SpaceComponent from '../../components/SpaceComponent'

const ManyPushUpScreen = ({navigation}: any) => {
    return (
        <ContainerComponent step={7} steps={8} back percent={80} onPress={() => navigation.goBack()} >
          <SpaceComponent height={30} />
          <SectionComponent
            styles={{
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <TextComponent text="How Many Push-Ups Can You Do" title />
            <TextComponent
              text="Help us measure your fitness level by telling us how many push-ups you can do at one time."
              color={appColors.gray2}
            />
          </SectionComponent>
          <ButtonComponent text="Continue" type="a"
            onPress={() => navigation.navigate('WorkoutPlanScreen')} />
          <SpaceComponent height={30} />
        </ContainerComponent>
      )
}

export default ManyPushUpScreen