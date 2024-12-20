import React from 'react'
import {
  ButtonComponent,
  ContainerComponent,
  TextComponent
} from '../../components'
import SectionComponent from '../../components/SectionComponent'
import { appColors } from '../../constants/appColor'
import SpaceComponent from '../../components/SpaceComponent'
import SelectScrollComponent from './components/SelectScrollComponent'

const HeightScreen = ({ navigation }: any) => {
  return (
    <ContainerComponent step={3} steps={8} back percent={30} onPress={() => navigation.goBack()} >
      <SpaceComponent height={30} />
      <SectionComponent
        styles={{
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <TextComponent text="Enter Your Height" title />
        <TextComponent
          text="Please provide your height in centimeters."
          color={appColors.gray2}
        />
      </SectionComponent>
      <SelectScrollComponent start={100} end={200} type={''}/>
      <ButtonComponent text="Continue" type="a"
        onPress={() => navigation.navigate('WeightScreen')} />
      <SpaceComponent height={30} />
    </ContainerComponent>
  )
}

export default HeightScreen