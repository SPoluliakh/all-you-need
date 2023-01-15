import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import { WeatherForm } from '../../components/WetherForm/WeatherForm';
import {
  getWeatherByCityName,
  getWeatherByGeoPosition,
} from '../../Utils/weatherApi';

export const WeatherResult = () => {
  const [locationEroor, setLocationEroor] = useState(null);
  const [status, setStatus] = useState('idle');
  const [weather, setWeather] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();

  const query = searchParams.get('city') ?? '';

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
    setSearchParams(value !== '' ? { city: value } : {});
  };
  console.log(weather);
  const handleSubmit = evt => {
    evt.preventDefault();
    setStatus('pending');
    getWeatherByCityName(query)
      .then(resalt => {
        setWeather(resalt);
        setStatus('fulfilled');
      })
      .catch(err => {
        setStatus('rejected');
        console.log(err);
      });
  };

  return (
    <>
      {locationEroor && (
        <h2>
          Please enable geolocation to automatically provide weather for your
          region
        </h2>
      )}
      <WeatherForm
        name={query}
        onChange={handlcityNameChange}
        onSubmit={handleSubmit}
      />
      {status === 'fulfilled' && (
        <div>
          <p>
            Location: {weather.name}, {weather.sys.country}
          </p>
          <div>
            <img
              src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
              alt=""
            />
            <p>Tempreture: {Math.round(weather.main.temp)}</p>
          </div>

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
