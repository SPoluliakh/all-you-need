import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import { WeatherForm } from '../../components/WetherForm/WeatherForm';
import {
  getWeatherByCityName,
  getWeatherByGeoPosition,
} from '../../Utils/weatherApi';

import * as SC from './WeatherResult.styled';

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
    <SC.Wrap>
      <SC.MainTitle>Weather 🌤</SC.MainTitle>
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
          <SC.Text>
            Location: {weather.name}, {weather.sys.country}
          </SC.Text>
          <SC.InnerWrap>
            <img
              src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
              alt=""
            />
            <SC.Text>Tempreture: {Math.round(weather.main.temp)} °C </SC.Text>
          </SC.InnerWrap>
          <SC.Text>Description: {weather.weather[0].description}</SC.Text>
          <SC.Text>
            Feels_like:
            {Math.round(weather.main.temp)} °C
          </SC.Text>
          <SC.Text>Wind speed: {weather.wind.speed} m/s</SC.Text>

          <SC.Text>Pressure: {weather.main.pressure}</SC.Text>
          <SC.Text>Latitude: {weather.coord.lat}</SC.Text>
          <SC.Text>Longitude: {weather.coord.lon}</SC.Text>
        </div>
      )}
    </SC.Wrap>
  );
};
