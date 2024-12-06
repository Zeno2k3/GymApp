import React, { useState } from 'react'
import {
  ButtonComponent,
  ContainerComponent,
  TextComponent
} from '../../components'
import SectionComponent from '../../components/SectionComponent'
import { appColors } from '../../constants/appColor'
import SpaceComponent from '../../components/SpaceComponent'
import { LoseWeight, Other, StayFit, Tick, Very } from '../../image/Svg'

const WorkoutGoalScreen = ({navigation}: any) => {
  const [selectedButton, setSelectedButton] = useState(null);

  const buttons = [
    { id: 1, text: 'Weight', iconPath: <LoseWeight/>},
    { id: 2, text: 'Muscle', iconPath: <Very/>},
    { id: 3, text: 'Fit', iconPath: <StayFit />},
    { id: 4, text: 'Other (Specitfy)', iconPath: <Other/>},
  ];
  const handlePress = (id: any) => {
    setSelectedButton(id);
  };
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
    <SectionComponent>
          {buttons.map((button) => (
                <ButtonComponent
                  isComment 
                  icon={button.iconPath}
                  key={button.id}
                  styles={{
                    
                    borderColor:
                      selectedButton === button.id
                        ? appColors.blue 
                        : appColors.textBtnLog,
                  }}
                  type="c"
                  text={button.text}
                  suffix = {selectedButton === button.id ? <Tick/>: null}
                  onPress={() => handlePress(button.id)}
                />
              ))}
            </SectionComponent>
    <ButtonComponent text="Continue" type="a"
      onPress={() => navigation.navigate('ManyPushUpScreen')} />
    <SpaceComponent height={30} />
  </ContainerComponent>
  )
}

export default WorkoutGoalScreen