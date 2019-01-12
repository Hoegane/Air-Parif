import {getAPIToken} from '../APIToken' //getAPIToken just return the token as a string required by the API, but the file is hiden in the .gitignore

export function getMap() {
    return 'https://magellan.airparif.asso.fr/geoserver/apisHorAir/wms?service=WMS&version=1.4&request=GetMap&layers=apisHorAir:no2_api&styles=&bbox=534892,2346865,690142,2471690&width=768&height=617&srs=EPSG:27572&format=image/png&authkey=' + getAPIToken()
}

/*export function getMap() {
    const url = 'https://magellan.airparif.asso.fr/geoserver/apisHorAir/wms?service=WMS&version=1.3&request=GetMap&layers=apisHorAir:no2_api&styles=&bbox=534892,2346865,690142,2471690&width=768&height=617&srs=EPSG:27572&format=image/png&authkey=' + API_TOKEN
    return fetch(url)
        .then ((response) =>  {response}
        )
        .catch((error) => console.error('>> AirParif.js/error : ' + error))fds
}*/
