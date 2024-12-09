import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import FoodItem from './components/FoodItem'
import SpaceComponent from '../../components/SpaceComponent'

const FoodScreen = () => {
  return (
    <SafeAreaView
    style={{
      flex: 1,
      flexDirection:'row',
      justifyContent:'center', alignItems: 'center'}}>
      <ScrollView
        style={{
          flex: 1,
          marginHorizontal: 20 }}
      showsVerticalScrollIndicator = {false}
      >
         <FoodItem title={'Nem nuong'} image={require('../../image/nemnuong.webp')} time={20} calo={442}/>
            <SpaceComponent height={20}/>
             <FoodItem title={'Goi Cuon'} image={require('../../image/goicuon.webp')} time={30} calo={220}/> 
            <SpaceComponent height={20}/>
            <FoodItem title={'Com Tam'} image={require('../../image/comtam.webp')} time={45} calo={262}/>
            <SpaceComponent height={20}/>
            <SpaceComponent height={20}/>
             <FoodItem title={'Goi Cuon'} image={require('../../image/goicuon.webp')} time={30} calo={220}/> 
            <SpaceComponent height={20}/>
            <FoodItem title={'Com Tam'} image={require('../../image/comtam.webp')} time={45} calo={262}/>
            <SpaceComponent height={20}/>
      </ScrollView>
      <ScrollView
      style={{
        flex: 1,
        marginHorizontal: 20 }}
      showsVerticalScrollIndicator = {false}
      >
         <FoodItem title={'Nem nuong'} image={require('../../image/nemnuong.webp')} time={20} calo={442}/>
            <SpaceComponent height={20}/>
             <FoodItem title={'Goi Cuon'} image={require('../../image/goicuon.webp')} time={30} calo={220}/> 
            <SpaceComponent height={20}/>
            <FoodItem title={'Com Tam'} image={require('../../image/comtam.webp')} time={45} calo={262}/>
            <SpaceComponent height={20}/>
            <SpaceComponent height={20}/>
             <FoodItem title={'Goi Cuon'} image={require('../../image/goicuon.webp')} time={30} calo={220}/> 
            <SpaceComponent height={20}/>
            <FoodItem title={'Com Tam'} image={require('../../image/comtam.webp')} time={45} calo={262}/>
            <SpaceComponent height={20}/>
      </ScrollView>
      </SafeAreaView>
  )
}

export default FoodScreen