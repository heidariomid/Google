import {actions} from '../actions';
export const initialState = {
	term: false,
};

export const reducer = (state = initialState, action) => {
	let result = state;
	switch (action.type) {
		case actions.SET_SEARCH_TERM:
			result = {...state, term: action.payload.terms};
			break;
		default:
			result = state;
			break;
	}
	return result;
};
