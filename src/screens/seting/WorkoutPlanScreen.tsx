import React, { useState } from 'react'
import {
  ButtonComponent,
  ContainerComponent,
  TextComponent
} from '../../components'
import SectionComponent from '../../components/SectionComponent'
import { appColors } from '../../constants/appColor'
import SpaceComponent from '../../components/SpaceComponent'
const WorkoutPlanScreen = ({navigation}: any) => {
    return (
        <ContainerComponent step={8} steps={8} back percent={100} onPress={() => navigation.goBack()} >
          <SpaceComponent height={30} />
          <SectionComponent
            styles={{
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <TextComponent text="Select Your Activity Level" title />
            <TextComponent
              text="How often do you plan to work out each week? We’ll create a schedule for you."
              color={appColors.gray2}
            />
          </SectionComponent>
          <ButtonComponent text="Continue" type="a"
            onPress={() => navigation.navigate('EndSetingScreen')} />
          <SpaceComponent height={30} />
        </ContainerComponent>
      )
}
export default WorkoutPlanScreen