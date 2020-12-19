import React from 'react';

const Wheather = ({weatherData}) => {
  const {name, main} = weatherData

  if(!name) return null

  const kelvin = 273.15
  return (
    <div className="card-panel col-s12 white">
      <div className="black-text">
        <h2>El clima de {name} es:  </h2>
        <p className='temperatura'>
          {parseFloat(main.temp - kelvin, 10).toFixed (2) } <span>&#x2103;</span>
        </p>
        <p>
          Temperatura maxima: {parseFloat(main.temp_max - kelvin, 10).toFixed (2) } <span>&#x2103;</span>
        </p>
        <p>
          Temperatura minima: {parseFloat(main.temp_min - kelvin, 10).toFixed (2) } <span>&#x2103;</span>
        </p>
      </div>
    </div>
  );
}

export default Wheather;
