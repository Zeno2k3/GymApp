import { createNativeStackNavigator } from "@react-navigation/native-stack"
import {
    ActiviLevelScreen,
    AgeScreen,
    EndSetingScreen,
    FocusArenaScreen,
    HeightScreen,
    ManyPushUpScreen,
    WeightScreen,
    WorkoutGoalScreen,
    WorkoutPlanScreen
} from "../screens"
import MainNavigator from "./MainNavigator"
const SetingNavigator = () => {
    const Stack = createNativeStackNavigator()
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}>
            <Stack.Screen name="FocusArenaScreen" component={FocusArenaScreen} />
            <Stack.Screen name="AgeScreen" component={AgeScreen} />
            <Stack.Screen name="HeightScreen" component={HeightScreen} />
            <Stack.Screen name="WeightScreen" component={WeightScreen} />
            <Stack.Screen name="ActiviLevelScreen" component={ActiviLevelScreen} />
            <Stack.Screen name="WorkoutGoalScreen" component={WorkoutGoalScreen} />
            <Stack.Screen name="ManyPushUpScreen" component={ManyPushUpScreen} />
            <Stack.Screen name="WorkoutPlanScreen" component={WorkoutPlanScreen} />
            <Stack.Screen name="EndSetingScreen" component={EndSetingScreen} />
            <Stack.Screen name="MainNavigator" component={MainNavigator} />
        </Stack.Navigator>
    )
}

export default SetingNavigator