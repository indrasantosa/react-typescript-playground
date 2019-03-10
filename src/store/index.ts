import { combineReducers } from 'redux';
import configReducer from './config/reducers';

const rootReducer = combineReducers({
	config: configReducer
});
export default rootReducer;

export type AppState = ReturnType<typeof rootReducer>;
