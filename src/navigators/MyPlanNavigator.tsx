

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from '../screens';

const MyPlanNavigator = () => {
    const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator screenOptions={{
        headerShown: false
    }}>
        <Stack.Screen name='HomeScreen' component={HomeScreen}/>
    </Stack.Navigator>
  )
}

export default MyPlanNavigator