const Language = ({ origin }) => <li>{origin}</li>

const FoundCountry = ({ country, weather }) => {
  if (Object.keys(country).length === 0) {
    return ''
  }
  const languages = Object.values(country.languages)
  const icon = weather.weather[0].icon
  const temperature = weather.main.temp
  return (
    <div>
    <h1>{country.name.common}</h1>
    <p>capital {country.capital}</p>
    <p>area {country.area}</p>
    <strong>languages:</strong>
    <ul>
      {languages.map(language => 
        <Language
          key={language}
          origin={language}
        />
        )}
    </ul>
    <img src={country.flags.png} alt={country.flags.alt}/>
    <h2>weather in {country.capital[0]}</h2>
    <p>temperature {Math.round(temperature - 273.15)} Celcius</p>
    <img src={`https://openweathermap.org/img/wn/${icon}@2x.png`} alt={weather.weather[0].description}/>
    <p>wind {weather.wind.speed} m/s</p>
    </div>
  )
}

export default FoundCountry