import React from 'react'
import { View, Text } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import { StackActions } from '@react-navigation/native';
import Favorites from '../screens/Favorites';

const stack = createStackNavigator();

export default function FavoritesStacks() {
    return (
     <Stack.Navigation>
         <Stack.Screen 
            name="favorites"
            component={Favorites}
            options={{ title: "Favoritos"}}
         />
     </Stack.Navigation>
    )
}