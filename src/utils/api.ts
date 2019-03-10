import axios from 'axios';
import Api from '../config/api';

export const getGlobalConfig = () => {
	return axios.get(Api.CONFIG);
};
