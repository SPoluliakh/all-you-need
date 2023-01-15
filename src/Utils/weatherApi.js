import axios from 'axios';

const URL_ADRESS = 'https://api.openweathermap.org/data/2.5/weather';
const URL_KEY = 'b3ca09d4ba07492c8255e30aa5bcf2bb';

export const getWeatherByCityName = async (city, measure = 'metric') => {
  const params = new URLSearchParams({
    q: `${city}`,
    units: `${measure}`,
    appid: `${URL_KEY}`,
  });
  const { data } = await axios.get(`${URL_ADRESS}?${params}`);
  return data;
};

export const getWeatherByGeoPosition = async (lat, lon, measure = 'metric') => {
  const params = new URLSearchParams({
    lat: `${lat}`,
    lon: `${lon}`,
    units: `${measure}`,
    appid: `${URL_KEY}`,
  });
  const { data } = await axios.get(`${URL_ADRESS}?${params}`);

  return data;
};
