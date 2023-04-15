import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Login from '../screens/Login';
import SignUp from '../screens/SignUp';
import homePage from '../screens/HomePage';
const Stack=createStackNavigator();
const StackNavigation = () => {

  return (
   <Stack.Navigator initialRouteName='landing'>
       <Stack.Screen
       name='landing'
       component={Login}
       options={{headerShown:false}}
        
       />
       <Stack.Screen
       name='signUp'
       component={SignUp}
       />
     <Stack.Screen
     name='homePage'
     component={homePage}/>
     
   </Stack.Navigator>
  )
}

export default StackNavigation