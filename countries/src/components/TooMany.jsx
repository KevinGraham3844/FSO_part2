const TooMany = ({ message }) => {
    if(message === null) {
      return null
    }
    return (
      <div>
        {message}
      </div>
    )
  }
  
  export default TooMany