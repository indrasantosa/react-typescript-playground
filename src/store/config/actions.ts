import * as API from '../../utils/api';

import { Config, SET_GLOBAL_CONFIG } from './types';

import { Action } from 'redux';
import { AppState } from '../index';
import { ThunkAction } from 'redux-thunk';

export const setGlobalConfig = (globalConfig: Config) => ({
	type: typeof SET_GLOBAL_CONFIG,
	globalConfig
});

export const getGlobalConfig = (
	message: string
): ThunkAction<void, AppState, null, Action<string>> => async dispatch => {
	const response = await API.getGlobalConfig();
	dispatch(setGlobalConfig(response.data));
};
