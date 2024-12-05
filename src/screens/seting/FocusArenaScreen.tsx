import React, { useState } from 'react'
import { 
  ButtonComponent, 
  ContainerComponent, 
  TextComponent
} from '../../components'
import RowComponent from '../../components/RowComponent'
import SectionComponent from '../../components/SectionComponent'
import { appColors } from '../../constants/appColor'
import SpaceComponent from '../../components/SpaceComponent'
import { Image} from 'react-native'


const paths = {
  body1: require('../../image/body1.png'),
  fullbody: require('../../image/fullbody.png'),
  back: require('../../image/back.png'),
  chest: require('../../image/chest.png'),
  abdominals: require('../../image/abdominals.png'),
  leg: require('../../image/leg.png'),
  shoulder: require('../../image/shoulder.png'),
  bicep: require('../../image/bicep.png'),
  tricep: require('../../image/tricep.png'),
}

const FocusArenaScreen = ({navigation}: any) => {
  const [path, setPath] = useState(paths.body1);
  const [selectedButton, setSelectedButton] = useState(null);

  const buttons = [
    { id: 1, text: 'Full Body', imgPath: paths.fullbody },
    { id: 2, text: 'Back', imgPath: paths.back },
    { id: 3, text: 'Chest', imgPath: paths.chest },
    { id: 4, text: 'Abdominals', imgPath: paths.abdominals },
    { id: 5, text: 'Leg', imgPath: paths.leg },
    { id: 6, text: 'Shoulder', imgPath: paths.shoulder },
    { id: 7, text: 'Bicep', imgPath: paths.bicep },
    { id: 8, text: 'Tricep', imgPath: paths.tricep },
  ];

  const handlePress = (id: any, imgPath: any) => {
    setSelectedButton(id); 
    setPath(imgPath);
  };

  return (
    <ContainerComponent step = {1} steps={8} percent={10} isScrollView = {true}>
      <SpaceComponent height={30} />
      <SectionComponent
        styles={{
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <TextComponent text="Choose Your Focus Area" title />
        <TextComponent
          text="Tell us which part of your body you’d like to focus on during your workouts."
          color={appColors.gray2}
        />
      </SectionComponent>
      <SectionComponent>
        <RowComponent>
          <SectionComponent
            styles={{
              justifyContent: 'center',
              alignItems: 'flex-start',
            }}>
            {buttons.map((button) => (
              <ButtonComponent
                key={button.id}
                styles={{
                  borderColor:
                    selectedButton === button.id
                      ? appColors.blue 
                      : appColors.textBtnLog,
                }}
                type="b"
                text={button.text}
                onPress={() => handlePress(button.id, button.imgPath)}
              />
            ))}
          </SectionComponent>
          <Image
            style={{
              position: 'absolute',
              resizeMode: 'contain',
              width: 243,
              height: 317,
              left: 136,
            }}
            source={path}
          />
        </RowComponent>
      </SectionComponent>
      <ButtonComponent text="Continue" type="a" 
        onPress={() => navigation.navigate('AgeScreen')}/>
      <SpaceComponent height={30} />
    </ContainerComponent>
  );
};

export default FocusArenaScreen;
