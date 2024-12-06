/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import {
  StyleSheet
} from 'react-native';

import {
  OnboardScreen,
  LoginScreen,
  SignInScreen,
  SignUpScreen,
  ForgotPassScreen,
  EnterOTP,
  NewPass,
  AllSet
} from '../screens/index'
import SetingNavigator from './SetingNavigator';

type RootStackParamList = {
  OnboardScreen: undefined;
  LoginScreen: undefined;
  SignInScreen: undefined;
  SignUpScreen: undefined;
  ForgotPassScreen: undefined;
  EnterOTP: undefined;
  SetingNavigator:  undefined;
  NewPass: undefined;
  AllSet: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

function AuthNavigator(): React.JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="OnboardScreen" component={OnboardScreen} />
        <Stack.Screen name='LoginScreen' component={LoginScreen} />
        <Stack.Screen name='SignInScreen' component={SignInScreen} />
        <Stack.Screen name='SignUpScreen' component={SignUpScreen} />
        <Stack.Screen name='SetingNavigator' component={SetingNavigator} />
        <Stack.Screen name='ForgotPassScreen' component={ForgotPassScreen} />
        <Stack.Screen name='EnterOTP' component={EnterOTP} />
        <Stack.Screen name='NewPass' component={NewPass} />
        <Stack.Screen name='AllSet' component={AllSet} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
  },
});

export default AuthNavigator;
