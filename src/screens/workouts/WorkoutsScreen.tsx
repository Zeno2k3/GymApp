import { View, Text, Image } from 'react-native'
import React from 'react'
import FoodItem from '../food/components/FoodItem'
import { appColors } from '../../constants/appColor'
import SpaceComponent from '../../components/SpaceComponent'
import WorkItem from './components/WorkItem'
import ExemItem from './components/ExemItem'


const WorkoutsScreen = () => {
  return (
    <View
    style = {{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: appColors.white
    }}>
     <ExemItem title={'Incline Push-Up'} content={'3 Sets x 12 reps'} path={require('../../image/expushUp21.png')}/>
    </View>
  )
}

export default WorkoutsScreen