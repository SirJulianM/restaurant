import React from 'react'
import { View, Text } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import { StackActions } from '@react-navigation/native';
import TopRestaurants from '../screens/TopRestaurants';

const stack = createStackNavigator();

export default function TopRestaurantsStacks() {
    return (
     <Stack.Navigation>
         <Stack.Screen 
            name="top restaurants"
            component={TopRestaurants}
            options={{ title: "Los mejores restaurantes"}}
         />
     </Stack.Navigation>
    )
}