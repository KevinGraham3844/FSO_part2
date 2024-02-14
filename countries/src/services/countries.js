import axios from 'axios'
const specificCountryUrl = 'https://studies.cs.helsinki.fi/restcountries/api/name/'
const allCountryUrl = 'https://studies.cs.helsinki.fi/restcountries/api/all'

const getAll = () => {
    const request = axios.get(allCountryUrl)
    return request.then(response => response.data)
}

const getCountry = country => {
    const request = axios.get(`${specificCountryUrl}${country}`)
    return request.then(response => response.data)
}

const getWeather = (lat, long, api_key) => {
    const request = axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${api_key}`)
    return request.then(response => response.data)
}

export default { getAll, getCountry, getWeather }