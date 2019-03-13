import Api from '../config/api';
import axios from 'axios';

export const getGlobalConfig = () => {
  return axios.get(Api.BASE_URL + Api.CONFIG);
};
