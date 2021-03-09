import React from 'react'
import { View, Text } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import { StackActions } from '@react-navigation/native';
import Accounts from '../screens/account/Accounts';

const stack = createStackNavigator();

export default function AccountsStacks() {
    return (
     <Stack.Navigation>
         <Stack.Screen 
            name="accounts"
            component={Accounts}
            options={{ title: "Cuentas"}}
         />
         <Stack.Screen 
            name="login"
            component={Login}
            options={{ title: "Iniciar Sesión"}}
         />
         <Stack.Screen 
            name="register"
            component={Register}
            options={{ title: "Registrar usuario"}}
         />
     </Stack.Navigation>
    )
}