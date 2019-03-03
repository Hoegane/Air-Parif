import React from 'react'
import { getMap, getCapabilities } from '../API/AirParif'
import {
    ActivityIndicator,
    Alert,
    Button,
    Dimensions,
    Image,
    Picker,
    ScrollView,
    StyleSheet,
    Text,
    ToastAndroid,
    View,
} from 'react-native'

class Home extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            isLoading:true,
            data:{results:{}},
            version:1.4,
            layer:'indice',
            height: 617,
            width: 768,
            format: 'image/png'
        }
    }

    /*componentDidUpdate(){
        //console.log('>> componentDidUpdate : ', this.state.data)
    }*/

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

    _buttonGetCapabilities(){
        //console.log('>> _buttonGetCapabilities', this.state.data)
        getCapabilities().then(response =>  {
            const parseString = require('react-native-xml2js').parseString;
            var tmp = []
            parseString(response, function (err, result) {
                //console.log(">> " + result)
                tmp = result
            });

            this.setState({
                data:tmp
            }, () => {
                //console.log('>> _buttonGetCapabilities', this.state.data.WMS_Capabilities.Service[0].Title[0])
            })
        })
        .catch((err) => {
            console.log('>> _buttonGetCapabilities - err', err)
        })
    }

    _displayMap = () => {
        //console.log(">> displayMap : boubou", this.state.layer)
        //ToastAndroid.show('Go to Map : ', ToastAndroid.SHORT)

        this.props.navigation.navigate('GeoMapView', {
            version: this.state.version,
            layer: this.state.layer,
            height: this.state.height,
            width: this.state.width,
            format: this.state.format,
        })
        //this.props.navigation.navigate('FilmDetailView', {idFilm: idFilm })
    }

    render () {
        return (
            <View style = {styles.main_container}>
            <Picker
                selectedValue={this.state.version}
                style={styles.layer_picker}
                onValueChange={(itemValue, itemIndex) => this.setState({version: itemValue})}>
                    <Picker.Item label="1.4" value="1.4" />
                    <Picker.Item label="1.3" value="1.3" />
                    <Picker.Item label="1.1.1" value="1.1.1" />
                    <Picker.Item label="1.1.0" value="1.1.0" />
                    <Picker.Item label="1.0.0" value="1.0.0" />
            </Picker>
            <Picker
                selectedValue={this.state.layer}
                style={styles.layer_picker}
                onValueChange={(itemValue, itemIndex) => this.setState({layer: itemValue})}>
                    <Picker.Item label="Indice" value="indice" />
                    <Picker.Item label="NO2" value="no2" />
                    <Picker.Item label="PM10" value="pm10" />
                    <Picker.Item label="O3" value="o3" />
                    <Picker.Item label="PM2.5" value="pm25" />
            </Picker>
            <Picker
                selectedValue={this.state.format}
                style={styles.layer_picker}
                onValueChange={(itemValue, itemIndex) => this.setState({format: itemValue})}>
                    <Picker.Item label="PNG" value="image/png" />
                    <Picker.Item label="PNG8" value="image/png8" />
                    <Picker.Item label="JPG" value="image/jpeg" />
                    <Picker.Item label="GIF" value="image/gif" />
                    <Picker.Item label="TIFF" value="image/tiff" />
            </Picker>
                <View style = {styles.button_container}>
                    <Button
                        onPress = {this._displayMap}
                        style = {styles.button_test}
                        title = 'Get Map'/>
                </View>
            </View>
        )
    }
}

//onPress={() => {this._buttonGetCapabilities()}}/>

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
    layer_picker:{
        //flex: 1,
        height: 50,
        width: 120,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image_container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    imageView:{
        width: Dimensions.get('window').width,
        height: (Dimensions.get('window').width*617/768),
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

export default Home
