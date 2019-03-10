import { Config, Action, SET_GLOBAL_CONFIG } from './types';

export const INITIAL_STATE: Config = {
	applicationStatuses: null,
	aws: null,
	days: null,
	durations: null,
	emailTemplates: null,
	experiences: null,
	foundings: null,
	frequencies: null,
	levels: null,
	subjects: null,
	periods: null,
	qualifications: null,
	schools: null,
	genders: null,
	years: null,
	plusPoints: null,
	rates: null,
	jobStasuses: null,
	isActivatedStatuses: null,
	userRoles: null
};

const configReducer = (state = { ...INITIAL_STATE }, action: Action) => {
	switch (action.type) {
		case SET_GLOBAL_CONFIG:
			return {
				...state,
				...action.payload
			};
		default:
			return {
				...state
			};
	}
};
export default configReducer;
