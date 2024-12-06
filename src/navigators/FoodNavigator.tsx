import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { FoodScreen, HomeScreen, SetingsScreen } from '../screens';

const FoodNavigator = () => {
    const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator screenOptions={{
        headerShown: false
    }}>
        <Stack.Screen name='FoodScreen' component={FoodScreen}/>
    </Stack.Navigator>
  )
}

export default FoodNavigator