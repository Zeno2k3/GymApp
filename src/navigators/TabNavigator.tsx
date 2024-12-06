
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import MyPlanNavigator from './MyPlanNavigator';
import WorkoutsNavigator from './WorkoutsNavigator';
import RepostNavigator from './RepotsNavigator';
import FoodNavigator from './FoodNavigator';
import SettingsNavigator from './SettingsNavigator';

const TabNavigator = () => {
    const Tab = createBottomTabNavigator();
    return (
        <Tab.Navigator screenOptions={{
            headerShown: false
        }}>
            <Tab.Screen name= 'MyPlan' component={MyPlanNavigator} />
            <Tab.Screen name= 'Workouts' component={WorkoutsNavigator} />
            <Tab.Screen name= 'Report' component={RepostNavigator} />
            <Tab.Screen name= 'Food' component={FoodNavigator} />
            <Tab.Screen name= 'Settings' component={SettingsNavigator} />
        </Tab.Navigator>
    )
}

export default TabNavigator