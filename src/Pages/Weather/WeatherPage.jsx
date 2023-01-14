import { useEffect, useState } from 'react';
import { FcSearch } from 'react-icons/fc';

import {
  getWeatherByCityName,
  getWeatherByGeoPosition,
} from '../../Utils/weatherApi';
export const WeatherPage = () => {
  const [cityName, setCityName] = useState('');
  const [locationEroor, setLocationEroor] = useState(null);
  const [status, setStatus] = useState('idle');
  const [weather, setWeather] = useState('');
  console.log(locationEroor);
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      position => {
        const Latitude = position.coords.latitude;
        const Longitude = position.coords.longitude;
        setStatus('pending');
        getWeatherByGeoPosition(Latitude, Longitude)
          .then(resalt => {
            setWeather(resalt);
            setStatus('fulfilled');
          })
          .catch(err => {
            setStatus('rejected');
            console.log(err);
          });
      },
      err => {
        const error = new Error(err.message);
        error.status = 400;
        setLocationEroor(error);
      }
    );
  }, []);

  const handlcityNameChange = evt => {
    const { value } = evt.target;
    setCityName(value);
  };
  console.log(weather);
  const handleSubmit = evt => {
    evt.preventDefault();
    setStatus('pending');
    getWeatherByCityName(cityName)
      .then(resalt => {
        setWeather(resalt);
        setStatus('fulfilled');
      })
      .catch(err => {
        setStatus('rejected');
        console.log(err);
      });
  };

  // if (!weather) return;
  return (
    <>
      <h1>Weather 🌤</h1>
      <form onSubmit={handleSubmit}>
        <label>
          <input
            onChange={handlcityNameChange}
            value={cityName}
            type="text"
            placeholder="Search city 🌤 "
          />
        </label>
        <button type="submit">
          <FcSearch size="24px" />
        </button>
      </form>

      {status === 'fulfilled' && (
        <div>
          <p>
            Location: {weather.name}, {weather.sys.country}
          </p>
          <p>Tempreture: {Math.round(weather.main.temp)}</p>
          <p>
            Feels_like:
            {Math.round(weather.main.temp)}
          </p>
          <p>Max: {Math.round(weather.main.temp_max)}</p>
          <p>Min: {Math.round(weather.main.temp_min)}</p>
          <p>Wind speed: {weather.wind.speed} m/s</p>
          <p>Description: {weather.weather[0].description}</p>
          <p>Pressure: {weather.main.pressure}</p>
          <p>Latitude: {weather.coord.lat}</p>
          <p>Longitude: {weather.coord.lon}</p>
        </div>
      )}
    </>
  );
};
