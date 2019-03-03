import React from 'react'
import { createStackNavigator, createAppContainer } from 'react-navigation'
import Home from '../Components/Home'
import GeoMap from '../Components/GeoMap'

import { StyleSheet, Image, Text } from 'react-native'

const HomeStackNavigator = createStackNavigator ({
    HomeView: {
        screen: Home,
        navigationOptions: {
            title: 'Air Parif'
        }
    },
    GeoMapView: {
        screen: GeoMap,
        navigationOptions: {
            title: 'Air Parif - Map'
        }
    }
})

export default createAppContainer(HomeStackNavigator)
