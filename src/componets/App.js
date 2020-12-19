import React, {useState, useEffect} from 'react';
import '../index.css'
import Error from './Error';
import Form from './Form';
import Header from './Header';
import Wheather from './Wheather';

const App = () => {
  const [search, setSearch] = useState({
    country: '',
    city: ''
  });

  const [weatherData, setweatherData] = useState({});

  const [save, setSave] = useState(false);
  const [error, setError] = useState(false);

  const {city, country} = search

  useEffect(() => {
    const resApi = async () => {
      const apiKey = '32bc4eb2a6a197ea8ef79dd9b9855f89'
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${apiKey}`
      
      try {
        const response = await fetch(url)
        const resultjson = await response.json()
        if(resultjson.cod === '404') {
          setError(true)
        }else {
          setError(false)
          setweatherData(resultjson)
        }
      } catch (e) {
        setError(true)
        console.error(e)
      } finally {
        setSave(false)
      }
      
    } 

    save && resApi()

  }, [save]);

  return (
    <>
      <Header title='Wheather'/>
      <div className='contenedor-form'>
        <div className="container">
          <div className='row'>
            <div className='col m6 s12'>
              <Form 
                search={search}
                setSearch={setSearch}
                setSave={setSave}
              />
            </div>
            <div className='col m6 s12'>
            {error
              ? <Error msj='no se encontraron datos' />
              : <Wheather weatherData={weatherData}/>}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
