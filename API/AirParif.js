import {getAPIToken} from '../APIToken' //getAPIToken just return the token as a string required by the API, but the file is hiden in the .gitignore

export function getMap(version, layer, width, height, format) {
    return 'https://magellan.airparif.asso.fr/geoserver/apisHorAir/wms?service=WMS'+'&'+
    'version=' + version +'&'+
    'request=GetMap' + '&' +
    'layers=apisHorAir:' + layer + '_api' + '&' +
    'styles='+'&'+
    'bbox=534892,2346865,690142,2471690'+'&'+
    'width=' + width + '&' +
    'height=' + height + '&' +
    'srs=EPSG:27572&' +
    'format=' + format + '&' +
    'authkey=' + getAPIToken()
}

export function getLegendGraphic(layer) {
    return 'https://magellan.airparif.asso.fr/geoserver/apisHorAir/wms?REQUEST=GetLegendGraphic&version=1.4.0&FORMAT=image/png&WIDTH=100&HEIGHT=20&LAYER=apisHorAir:' + layer + '_api&authkey=' + getAPIToken()
}

export function getCapabilities() {
    const url = 'https://magellan.airparif.asso.fr/geoserver/apisHorAir/wms?request=GetCapabilities&authkey=' + getAPIToken()
    const parseString = require('react-native-xml2js').parseString;

    /*return fetch(url)
        .then ((response) =>  {response.json()})
        .catch((error) => console.error('>> AirParif.js/error : ' + error))*/

    return fetch(url)
        .then(response => response.text())
        /*.then((response) => {
            parseString(response, function (err, result) {
                console.log(">> " + response)
                return JSON.stringify(result)
            });
        })*/
        .catch((err) => {
            console.log('>> fetch', err)
        })
}


/*export function getMap() {
    const url = 'https://magellan.airparif.asso.fr/geoserver/apisHorAir/wms?service=WMS&version=1.3&request=GetMap&layers=apisHorAir:no2_api&styles=&bbox=534892,2346865,690142,2471690&width=768&height=617&srs=EPSG:27572&format=image/png&authkey=' + API_TOKEN
    return fetch(url)
        .then ((response) =>  {response}
        )
        .catch((error) => console.error('>> AirParif.js/error : ' + error))fds
}*/
