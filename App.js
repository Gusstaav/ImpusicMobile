import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/RotasStack';

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar 
        style='light'
        backgroundColor="transparent"
      />
      <Routes />
    </NavigationContainer>
  );
}
