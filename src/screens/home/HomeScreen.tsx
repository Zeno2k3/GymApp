import { View, StatusBar } from 'react-native'
import React from 'react'
import { appColors } from '../../constants/appColor'
import RowComponent from '../../components/RowComponent'
import TextComponet from '../../components/TextComponent'
import SectionComponent from '../../components/SectionComponent'
import SpaceComponent from '../../components/SpaceComponent'
import { Sloger, Thongbao } from '../../image/Svg'
import { ButtonComponent, ProgressComponent } from '../../components'

const HomeScreen = ({navigation}: any) => {
  return (
    <View
      style ={{
        flex: 1,
        backgroundColor: appColors.white,
      }}>
        <StatusBar 
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent/>
        <SpaceComponent height={90}/>
          <SectionComponent>
          <RowComponent
            styles={{
              alignItems: 'center'
            }}>
            <View
              style={{
                alignItems: 'center',
                marginHorizontal: 10,
                width: 100,
                height: 100,
                borderRadius: 100,
                backgroundColor: appColors.textBtnLog
              }}>
            </View>
          <View>
              <RowComponent
                styles={{
                  alignItems: 'baseline',
                }}
              >
              <TextComponet text='Hello ' title/>
              <TextComponet text='Minh Quân'/>
              </RowComponent>
              <Sloger/>
          </View>
          <View>
            <Thongbao/>
            <SpaceComponent height={80}/>
          </View>
        </RowComponent>
        </SectionComponent>
        <SpaceComponent height={10}/>  
        <View
          style= {{
            justifyContent: 'center',
            alignItems: 'flex-start',
            paddingHorizontal: 12
          }}>
            <TextComponet text='Progress 0/21' color = {appColors.gray2}
          styles={
            {
              fontSize: 12,
            }
          }/>
        </View>
        <ProgressComponent height={10} percent = {0} styles = {{
            flex: 0,
            marginHorizontal: 12
         }}/>
    </View>
  )
}

export default HomeScreen