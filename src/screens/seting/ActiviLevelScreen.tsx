import React, { useState } from 'react'
import {
  ButtonComponent,
  ContainerComponent,
  TextComponent
} from '../../components'
import SectionComponent from '../../components/SectionComponent'
import { appColors } from '../../constants/appColor'
import SpaceComponent from '../../components/SpaceComponent'
import { Athlete, LightlyActive, Moderately, Sendentary, Tick, Very } from '../../image/Svg'



const ActiviLevelScreen = ({ navigation }: any) => {

  const [selectedButton, setSelectedButton] = useState(null);

  const buttons = [
    { id: 1, text: 'Sendentary', commet:'Little to no exercise', iconPath: <Sendentary />},
    { id: 2, text: 'Lightly Active', commet:'Exercise or sports 1-3 days a week', iconPath: <LightlyActive />},
    { id: 3, text: 'Moderately Active',commet:'Exercise or sports 3-5 days a week', iconPath: <Moderately />},
    { id: 4, text: 'Very Active', commet:'Exercise or sports 6-7 days a week', iconPath: <Very />},
    { id: 5, text: 'Athlete',commet:'Physical job or training twice a day ', iconPath: <Athlete/>},
  ];
  const handlePress = (id: any) => {
    setSelectedButton(id);
  };
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
      <SectionComponent>
        {buttons.map((button) => (
              <ButtonComponent
                textComment={button.commet}
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
        onPress={() => navigation.navigate('WorkoutGoalScreen')} />
      <SpaceComponent height={30} />
    </ContainerComponent>
  )
}

export default ActiviLevelScreen