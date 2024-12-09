import {ScrollView } from 'react-native'
import React from 'react'

import SpaceComponent from '../../components/SpaceComponent'

import ExemItem from './components/ExemItem'
import { SafeAreaView } from 'react-native-safe-area-context'


const WorkoutsScreen = () => {
  return (
    <SafeAreaView
     style={{justifyContent:'center', alignItems: 'center'}}>
       <ScrollView
       showsVerticalScrollIndicator = {false}
       >
     <ExemItem title={'Incline Push-Up'} content={'3 Sets x 12 reps'} path={require('../../image/expushUp21.png')}/>
     <SpaceComponent height={30}/>
      <ExemItem title={'Push-Up'} content={'1 Sets x 12 reps'} path={require('../../image/expushUp22.png')}/>
      <SpaceComponent height={30}/>
      <ExemItem title={'Wide Arm Push-Up'} content={'1 Sets x 12 reps'} path={require('../../image/expushUp23.png')}/>
      <SpaceComponent height={30}/>
      <ExemItem title={'Decline Push-Up'} content={'2 Sets x 8 reps'} path={require('../../image/expushUp24.png')}/>
      <SpaceComponent height={30}/>
      <ExemItem title={'Diamond Push-Up'} content={'1 Sets x 12 reps'} path={require('../../image/expushUp25.png')}/>
      <SpaceComponent height={30}/>
      <ExemItem title={'Wall Push-Up'} content={'3 Sets x 12 reps'} path={require('../../image/expushUp26.png')}/>
      <SpaceComponent height={30}/>
      <ExemItem title={'Decline Push-Up'} content={'2 Sets x 8 reps'} path={require('../../image/expushUp24.png')}/>
      <SpaceComponent height={30}/>
      <ExemItem title={'Diamond Push-Up'} content={'1 Sets x 12 reps'} path={require('../../image/expushUp25.png')}/>
      <SpaceComponent height={30}/>
      <ExemItem title={'Wall Push-Up'} content={'3 Sets x 12 reps'} path={require('../../image/expushUp26.png')}/>
    </ScrollView>
    </SafeAreaView>
   
  )
}

export default WorkoutsScreen