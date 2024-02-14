import { useState, useEffect } from 'react'
import axios from 'axios'
import Countries from './components/Countries'
import FoundCountry from './components/FoundCountry'
import TooMany from './components/TooMany'
import countryService from './services/countries'

const api_key = import.meta.env.VITE_SOME_KEY

const App = () => {
  const [value, setValue] = useState('')
  const [countryName, setCountryName] = useState(null)
  const [countryOutput, setCountryOutput] = useState({})
  const [countryList, setCountryList] = useState([])
  const [tooManyError, setTooManyError] = useState(null)
  const [weather, setWeather] = useState([])

  useEffect(() => {
    console.log('effect run, country is now', countryName)
    if (countryName) {
      console.log('finding country...')
      countryService
        .getCountry(countryName)
        .then(returnedCountry => {
          const dataOutput = returnedCountry
          countryService
            .getWeather(dataOutput.capitalInfo.latlng[0], dataOutput.capitalInfo.latlng[1], api_key)          
            .then(weatherResponse => {
              const weatherOutput = weatherResponse
              console.log(weatherOutput.main.temp)
              setWeather(weatherOutput)
              setCountryOutput(dataOutput)
              setCountryList([])
              setTooManyError(null)
            })
        })
        .catch(error => {
          countryService
            .getAll()
            .then(allCountries => {
              filterCountries(allCountries)
            })
        })
    }
  }, [countryName])

  const filterCountries = (countries) => {
    const filteredCountries = countries.filter(country => country.name.common
      .toLowerCase()
      .includes(countryName
        .toLowerCase()
        )
      )
    if (filteredCountries.length > 10) {
      setTooManyError('Too many matches, specify another filter')
      setCountryList([])
      setCountryOutput({})
    } else {
      setCountryList(filteredCountries)
      setTooManyError(null)
      setCountryOutput({})
    }
  }

  const handleChange = (event) => {
    setValue(event.target.value)
  }

  const onSearch = (event) => {
    event.preventDefault()
    setCountryName(value)
  }

  const displayCountry = name => {
    setCountryName(name)
  }
  

  return (
   <div>
    <form onSubmit={onSearch}>
      find countries: <input value={value} onChange={handleChange} />
    </form>
    <Countries countries={countryList} showCountry={displayCountry} />
    <TooMany message={tooManyError}/>
    <FoundCountry country={countryOutput} weather={weather}/>
   </div>
  
  )
}

export default App
