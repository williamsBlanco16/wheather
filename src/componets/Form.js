import React, { useState } from 'react';
import Error from './Error'

const Form = ({search, setSearch, setSave}) => {
  const [error, setError] = useState(false);

  const handleChange = e =>{
    setSearch({
      ...search,
      [e.target.name]:e.target.value
    })
  }

  const handleSubmit = e => {
    e.preventDefault()

    //validate
    if(!city.trim() || !country.trim()){
      setError(true)
      return
    }

    setError(false)
    setSave(true)
    
  }

  const {country, city} = search;
  return (
    <form onSubmit={handleSubmit}>
      {error && <Error msj='All Fields Are Required'/>}
      <div className='input-field col s12'>
        <input
          type="text"
          name='city'
          id='city'
          value={city}
          onChange={handleChange}
        />
        <label htmlFor="city">City:</label>
      </div>
      <div className="input-field col s12">
        <select name="country" id="country" value={country} onChange={handleChange}>
          <option value="">--seleccione un pais</option>
          <option value="US">Estados Unidos</option>
          <option value="MX">México</option>
          <option value="AR">Argentina</option>
          <option value="CO">Colombia</option>
          <option value="CR">Costa Rica</option>
          <option value="ES">España</option>
          <option value="PE">Perú</option>
          <option value="VE">Venezuela</option>
        </select>
        <label htmlFor="country">country:</label>
        <div className="input-field col s12">
          <button 
            type='submit'
            className='waves-effect waves-light btn-large btn-block yellow accent-4 btn-width-100'
          >
            Search Clima
          </button>
        </div>
      </div>
    </form>
  );
}

export default Form;
