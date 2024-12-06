
import React, { ReactNode } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import MyPlanNavigator from './MyPlanNavigator';
import WorkoutsNavigator from './WorkoutsNavigator';
import RepostNavigator from './RepotsNavigator';
import FoodNavigator from './FoodNavigator';
import SettingsNavigator from './SettingsNavigator';
import { appColors } from '../constants/appColor';
import { TextComponent } from '../components';
import Ionicons from 'react-native-vector-icons/Ionicons'
import { Food, Foodlink, Icon, Iconlink, Repost, Repostlink, Settings, Settingslink, Workouts, Workoutslink } from '../image/Svg';

const TabNavigator = () => {
    const Tab = createBottomTabNavigator();
    return (
        <Tab.Navigator screenOptions={({route}) => ({
            headerShown: false,
            tabBarStyle: {
                height: 80,
                justifyContent: 'center',
                alignItems: 'center'
            },
            tabBarIcon:({focused, color, size}) => {
                let icon: ReactNode;
                color = focused ? appColors.blue : appColors.textBtnLog
                switch (route.name) {
                    case 'MyPlan':
                    icon =  focused ? <Iconlink /> : <Icon/> 
                    break;
                }
                switch (route.name) {
                    case 'Workouts':
                    icon =  focused ? <Workoutslink /> : <Workouts/> 
                    break;
                }
                switch (route.name) {
                    case 'Report':
                    icon =  focused ? <Repostlink /> : <Repost/> 
                    break;
                }
                switch (route.name) {
                    case 'Food':
                    icon =  focused ? < Foodlink/> : <Food/> 
                    break;
                }
                switch (route.name) {
                    case 'Settings':
                    icon =  focused ? <Settingslink /> : <Settings/> 
                    break;
                }
                return icon;
            },
            tabBarLabel({focused}) {
                return (
                    <TextComponent
                        text= {route.name}
                        color= {focused ? appColors.blue : appColors.textBtnLog}
                        styles= {{
                            marginBottom: 12,
                        }}
                    />
                )
            },
        })}>
            <Tab.Screen name= 'MyPlan' component={MyPlanNavigator} />
            <Tab.Screen name= 'Workouts' component={WorkoutsNavigator} />
            <Tab.Screen name= 'Report' component={RepostNavigator} />
            <Tab.Screen name= 'Food' component={FoodNavigator} />
            <Tab.Screen name= 'Settings' component={SettingsNavigator} />
        </Tab.Navigator>
    )
}

export default TabNavigator