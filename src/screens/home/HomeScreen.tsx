import { View, StatusBar, Image, ScrollView } from 'react-native'
import React from 'react'
import { appColors } from '../../constants/appColor'
import RowComponent from '../../components/RowComponent'
import TextComponet from '../../components/TextComponent'
import SectionComponent from '../../components/SectionComponent'
import SpaceComponent from '../../components/SpaceComponent'
import { Sloger, Thongbao } from '../../image/Svg'
import { ProgressComponent } from '../../components'
import FoodItem from '../food/components/FoodItem'
import WorkItem from '../workouts/components/WorkItem'

const HomeScreen = ({navigation}: any) => {
  return (
    <ScrollView
      showsVerticalScrollIndicator = {false}
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
         <SectionComponent>
         <SpaceComponent height={100}/>
          <ScrollView
             showsHorizontalScrollIndicator = {false}
             horizontal={true}>
          <WorkItem pathImage={require('../../image/121.png')} id={1} title={'Armored Chest :Beginner Essentials'} kalo={112} level={'Beginer'} time={12}
          onPress={() => navigation.navigate('BaiTapScreen')}/>
          <WorkItem pathImage={require('../../image/221.jpg')} id={2} title={'Full and WideShoulders'} kalo={21} level={'Beginer'} time={12} isnotDay = {true}/>
          <WorkItem pathImage={require('../../image/321.png')} id={3} title={'Kegel.Comprehensive Male.Enhancement'} kalo={19} level={'Beginer'} time={12} isnotDay = {true}/>
          <WorkItem pathImage={require('../../image/421.png')} id={4} title={'Npm Start Aroid Studio'} kalo={1000} level='GOAT' time={120} isnotDay = {true}/>
          </ScrollView>
         </SectionComponent>
         <SectionComponent>
         <SpaceComponent height={10}/>
          <ScrollView
          showsHorizontalScrollIndicator = {false}
          horizontal={true}>
            <SpaceComponent width={10}/>
            <FoodItem title={'Nem nuong'} image={require('../../image/nemnuong.webp')} time={20} calo={442}/>
            <SpaceComponent width={10}/>
             <FoodItem title={'Goi Cuon'} image={require('../../image/goicuon.webp')} time={30} calo={220}/> 
            <SpaceComponent width={10}/>
            <FoodItem title={'Com Tam'} image={require('../../image/comtam.webp')} time={45} calo={262}/>
            <SpaceComponent width={10}/>
          </ScrollView>
         </SectionComponent>
    </ScrollView>
  )
}

export default HomeScreen