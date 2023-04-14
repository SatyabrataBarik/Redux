import { View, Text } from 'react-native'
import React from 'react'
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';

import StackNavigation from './src/components/navigation';
import Login from './src/components/screens/Login';
const App = () => {
  return (
    <NavigationContainer>
      <StackNavigation/>
    </NavigationContainer>

  )
}

export default App