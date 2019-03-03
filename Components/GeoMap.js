import React from 'react'
import { getMap, getCapabilities, getLegendGraphic } from '../API/AirParif'
import {
    ActivityIndicator,
    Alert,
    Button,
    Dimensions,
    Image,
    ScrollView,
    StyleSheet,
    Text,
    View,
} from 'react-native'

class GeoMap extends React.Component {

    constructor(props) {
        super(props)
        /*this.state = {
            currentVersion : this.props.navigation.state.params.version,
            currentLayer: this.props.navigation.state.params.layer,
            currentHeight: this.props.navigation.state.params.height,
            currentWidth: this.props.navigation.state.params.width,
        }
        console.log(this.state.currentVersion, this.state.currentLayer, this.state.currentHeight, this.state.currentWidth);*/
    }

    render () {
        const version = this.props.navigation.state.params.version
        const layer = this.props.navigation.state.params.layer
        const width = this.props.navigation.state.params.width
        const height = this.props.navigation.state.params.height
        const format = this.props.navigation.state.params.format

        return (
            <View style = {styles.main_container}>
                <View style = {styles.date_container}>
                    <Text> Don't forget to put date in here </Text>
                </View>
                <View style = {styles.image_container}>
                    <Image
                        style = {styles.geomap_image_view}
                        source = {{uri:getMap(version, layer, width, height, format)}}
                        loadingIndicatorSource = {require('../Images/mario.png')}/>
                    <Image
                        style = {styles.legend_image_view}
                        source = {{uri:getLegendGraphic(layer)}}
                        loadingIndicatorSource = {require('../Images/mario.png')}/>
                </View>
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
    },
    image_container:{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        //backgroundColor:'green',
    },
    geomap_image_view:{
        backgroundColor:'blue',
        width: Dimensions.get('window').width-20,
        height: ((Dimensions.get('window').width-20)*617/768),
    },
    legend_image_view:{
        resizeMode:'center',
        width: 20,
        height: ((Dimensions.get('window').width-20)*617/768),
        //backgroundColor:'pink',
    },
    button_container:{
        //width:200,
        margin:5
    },
    button_test:{
        flex:1,
        width:200,
    },
})

export default GeoMap
