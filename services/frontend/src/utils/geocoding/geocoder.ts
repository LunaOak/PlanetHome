const API_KEY = process.env.REACT_APP_GEOCODE_API_KEY
const URL = `https://maps.googleapis.com/maps/api/geocode/json?latlng=$LAT,$LONG&key=${API_KEY}`

interface GeocoderOptions {
  enableHighAccuracy: boolean
  timeout: number
  maximumAge: number
}

let location: any

export default class Geocoder {
  private options: GeocoderOptions

  constructor() {
      this.options = {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0,
      }
  }

  public getAddress() {
    if (!location) {
      navigator.geolocation.getCurrentPosition(this.success, this.error, this.options)
    }

    return location
  }

  private success = (pos: any) => {
    const crd = pos.coords

    fetch(URL.replace('$LAT', crd.latitude).replace('$LONG', crd.longitude))
    .then((data) => data.json())
    .then((res) => { location = res })
  }

  private error = (err: any) => {
    console.error(`ERROR(${err.code}): ${err.message}`)
  }
}
