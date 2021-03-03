import React from 'react'
import { NavigationContainer } from 'react-native'
import AccountsStacks from './AccountsStacks';
import FavoritesStacks from './FavoritesStack';
import RestaurantsStacks from './RestaurantsStacks';
import SearchStacks from './SearchStacks';
import TopRestaurantsStacks from './TopRestaurantsStack';

const Tab = createButtonTabNavigator();

export default function Navigation() {
    return (
        <NavigationContainer>
            <Tab.Navigator>
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
                    name = "top restaurants"
                    component = {TopRestaurantsStacks}
                    options = {{title: "Top"}}
                 />
            </Tab.Navigator>
        </NavigationContainer>
    )
}
