const API_KEY = process.env.REACT_APP_GEOCODE_API_KEY
const GEOCODE_URL = `https://maps.googleapis.com/maps/api/geocode/json?latlng=$LAT,$LONG&key=${API_KEY}`

interface GeocoderOptions {
  enableHighAccuracy: boolean
  timeout: number
  maximumAge: number
}

const options: GeocoderOptions = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0,
}

let currentLocation: any

const success = (pos: any): Promise<any> => {
  const crd = pos.coords

  return fetch(GEOCODE_URL.replace('$LAT', crd.latitude).replace('$LONG', crd.longitude))
  .then((data) => data.json())
  .then((res) => {
    currentLocation = res
  })
  .then(() => Promise.resolve(currentLocation))

}

const error = (err: any) => {
  console.error(`ERROR(${err.code}): ${err.message}`)
}

export const getCurrentLocation = (): (pos?: any) => Promise<any> => {
  if (!location) {
    navigator.geolocation.getCurrentPosition(success, error, options)
    return success
  }

  return () => Promise.resolve(location)
}
