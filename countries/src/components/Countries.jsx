const ListItem = ({ name, showCountry }) => {
    return ( 
      <li>{name}
        <button onClick={showCountry}>show</button>
      </li>
    )
  }
  
  const Countries = ({ countries, showCountry }) => {
    if (countries.length === 0) {
      return ''
    }
    return (
      <ul>
        {countries.map(country =>
          <ListItem 
            key={country.name.common} 
            name={country.name.common}
            showCountry={() => showCountry(country.name.common)}
          />
        )}
      </ul>
    )
  }

  export default Countries