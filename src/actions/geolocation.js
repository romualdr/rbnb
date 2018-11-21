import { PermissionsAndroid } from 'react-native'
import { change } from 'redux-form'

export const GEOLOCATE_AUTHORIZE_REQUEST = 'GEOLOCATE_AUTHORIZE_REQUEST'
export const GEOLOCATE_AUTHORIZED = 'GEOLOCATE_AUTHORIZED'
export const GEOLOCATE_REQUEST = 'GEOLOCATE_REQUEST'

const getCurrentPosition = (result) => {
    return new Promise((ok, ko) => {
        if (result === PermissionsAndroid.RESULTS.DENIED)
            return ko('Permission denied')
        navigator.geolocation.getCurrentPosition(ok, ko)
    })
}

/** TODO(): Make this code iOS friendly */
const authorize = (...args) => {
    return PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION)
}

const getCity = ({ latitude, longitude}) => {
    return fetch(`https://geocode.xyz/${latitude},${longitude}?json=1`)
    .then(response => response.json())
}


export function geolocate() {
    return ( dispatch, getState ) => {
        authorize()
        .then(getCurrentPosition)
        .then(({ coords }) => getCity(coords))
        .then(result => dispatch(change('search', 'city', result.city)))
        .catch(() => alert('You need to allow location to use this feature.'))
    }
}