

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen, SetingsScreen } from '../screens';

const SettingsNavigator = () => {
    const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator screenOptions={{
        headerShown: false
    }}>
        <Stack.Screen name='SetingsScreen' component={SetingsScreen}/>
    </Stack.Navigator>
  )
}

export default SettingsNavigator