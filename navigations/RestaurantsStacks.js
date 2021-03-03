import React from 'react'
import { View, Text } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import { StackActions } from '@react-navigation/native';
import Restaurants from '../screens/Restaurants';

const stack = createStackNavigator();

export default function RestaurantsStacks() {
    return (
     <Stack.Navigation>
         <Stack.Screen 
            name="restaurants"
            component={Restaurants}
            options={{ title: "Restaurantes"}}
         />
     </Stack.Navigation>
    )
}
