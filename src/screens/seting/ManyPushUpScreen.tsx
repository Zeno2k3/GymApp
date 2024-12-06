import React, { useState } from 'react'
import {
  ButtonComponent,
  ContainerComponent,
  TextComponent
} from '../../components'
import SectionComponent from '../../components/SectionComponent'
import { appColors } from '../../constants/appColor'
import SpaceComponent from '../../components/SpaceComponent'
import { Advanced, Athlete2, Beginner, Goat, Intermediate, Tick } from '../../image/Svg'

const ManyPushUpScreen = ({navigation}: any) => {

  const [selectedButton, setSelectedButton] = useState(null);

  const buttons = [
    { id: 1, text: 'Beginner', commet:'Little to no exercise', iconPath: <Beginner/>},
    { id: 2, text: 'Intermediate', commet:'Exercise or sports 1-3 days a week', iconPath: <Intermediate/>},
    { id: 3, text: 'Advanced',commet:'Exercise or sports 3-5 days a week', iconPath: <Advanced />},
    { id: 4, text: 'Athlete', commet:'Exercise or sports 6-7 days a week', iconPath: <Athlete2/>},
    { id: 5, text: 'GOAT',commet:'Physical job or training twice a day ', iconPath: <Goat/>},
  ];
  const handlePress = (id: any) => {
    setSelectedButton(id);
  };

    return (
        <ContainerComponent step={7} steps={8} back percent={80} onPress={() => navigation.goBack()} >
          <SpaceComponent height={10} />
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
            <SpaceComponent height={10} />
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
            onPress={() => navigation.navigate('WorkoutPlanScreen')} />
          <SpaceComponent height={30} />
        </ContainerComponent>
      )
}

export default ManyPushUpScreen