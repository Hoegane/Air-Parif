import React from 'react'
import { createStackNavigator, createAppContainer } from 'react-navigation'
import Home from '../Components/Home'

import { StyleSheet, Image, Text } from 'react-native'

const HomeStackNavigator = createStackNavigator ({
    HomeScreen: {
        screen: Home,
        navigationOptions: {
            title: 'Air Parif'
        }
    },
})

export default createAppContainer(HomeStackNavigator)
