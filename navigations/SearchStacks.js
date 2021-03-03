import React from 'react'
import { View, Text } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import { StackActions } from '@react-navigation/native';
import Search from '../screens/Search';

const stack = createStackNavigator();

export default function SearchStacks() {
    return (
     <Stack.Navigation>
         <Stack.Screen 
            name="search"
            component={Search}
            options={{ title: "Busqueda"}}
         />
     </Stack.Navigation>
    )
}