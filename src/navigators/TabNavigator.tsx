import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { HomeScreen } from '../screens';
import MyPlanNavigator from './MyPlanNavigator';

const TabNavigator = () => {
    const Tab = createBottomTabNavigator();
    return (
        <Tab.Navigator screenOptions={{
            headerShown: false
        }}>
            <Tab.Screen name= 'MyPlanNavigator' component={MyPlanNavigator}/>
        </Tab.Navigator>
    )
}

export default TabNavigator