import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen, ReportsScreen, SetingsScreen } from '../screens';

const RepostNavigator = () => {
    const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator screenOptions={{
        headerShown: false
    }}>
        <Stack.Screen name='RepostsScreen' component={ReportsScreen}/>
    </Stack.Navigator>
  )
}

export default RepostNavigator