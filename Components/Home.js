import React from 'react'
import {Text, StyleSheet, View, Image, Dimensions, ScrollView, ActivityIndicator} from 'react-native'
import { getMap } from '../API/AirParif'

class Home extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            isLoading:true
        }
    }  

    componentDidMount(){
        this.setState({
            isLoading:false
        })
    }

    _displayLoading() {
        if (this.state.isLoading) {
            return (
                <View style={styles.viewLoadingContainer}>
                    <ActivityIndicator size='large' />
                </View>
            )
        }
    }

    render () {
        return (
            <View style = {styles.main_container}>
                <Image
                    style = {styles.imageView}
                    source = {{uri:getMap()}}
                    loadingIndicatorSource = {require('../Images/mario.png')}/>
                {this._displayLoading()}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    viewLoadingContainer: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 100,
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center',
    },
    main_container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    imageView:{
        width: Dimensions.get('window').width,
        height: (Dimensions.get('window').width*617/768),
    }
})

export default Home
