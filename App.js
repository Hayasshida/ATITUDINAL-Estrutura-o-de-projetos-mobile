import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import  HomeScreen  from './src/screens/HomeScreen';
import Settings from './src/screens/Settings';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function App({ navigation }) {
  
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={HomeScreen}/>
        <Stack.Screen name="Settings" component={Settings}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}