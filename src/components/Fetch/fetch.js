import axios from 'axios';

export const fetch = async () => {
  const url = `https://openexchangerates.org/api/latest.json?app_id=f753f23a2da74203a8d7eafea24ee122`;
  const response = await axios.get(url);
  return response.data;
};
