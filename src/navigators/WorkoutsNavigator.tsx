import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { WorkoutsScreen } from '../screens';


const WorkoutsNavigator = () => {
    const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator screenOptions={{
        headerShown: false
    }}>
        <Stack.Screen name='WorkoutsScreen' component={WorkoutsScreen}/>
    </Stack.Navigator>
  )
}

export default WorkoutsNavigator
