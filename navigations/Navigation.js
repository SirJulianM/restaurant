import React from 'react'
import { NavigationContainer } from 'react-native'
import {Icon} from 'react-native-elements'

import AccountsStacks from './AccountsStacks';
import FavoritesStacks from './FavoritesStack';
import RestaurantsStacks from './RestaurantsStacks';
import SearchStacks from './SearchStacks';
import TopRestaurantsStacks from './TopRestaurantsStack';

const Tab = createButtonTabNavigator();

export default function Navigation() {
    const screenOptions = (route) => {
        let iconName,
        switch (route.name) {
            case "restaurants":
                iconName = "compass-outline"
                break;
            case "favorites":
                iconName = "heart-outline"
                break;
            case "top-restaurants":
                iconName = "star-outline"
                break;
            case "search":
                iconName = "magnify"
                break;
            case "accounts":
                iconName = "home-outline"
                break;
        }
        return (
            <Icon 
                type = "material-community"
                name = {iconName}
                size = {22}
                color = {color}
            />      
        )
    };

    return (
        <NavigationContainer>
            <Tab.Navigator
            initialRouteName = "restaurants"
            tabBarOption = {{
                inactiveTintColor = "",
                activeTintColor = ""
            }}
            screenOptions={({route}) => ({
                tabBarIcon: ({color}) => screenOptions(route, color)
            })}
            >
                <Tab.screen
                    name = "restaurants"
                    component = {RestaurantsStacks}
                    options = {{title: "Restaurants"}}
                 />
                 <Tab.screen
                    name = "accounts"
                    component = {AccountsStacks}
                    options = {{title: "Accounts"}}
                 />
                  <Tab.screen
                    name = "favorites"
                    component = {FavoritesStacks}
                    options = {{title: "Favorites"}}
                 />
                  <Tab.screen
                    name = "search"
                    component = {SearchStacks}
                    options = {{title: "Search"}}
                 />
                  <Tab.screen
                    name = "top-restaurants"
                    component = {TopRestaurantsStacks}
                    options = {{title: "Top"}}
                 />
            </Tab.Navigator>
        </NavigationContainer>
    )
}
