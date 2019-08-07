import { FETCH_PORTFOLIO } from '../actions';

export default function(state = {}, action) {
	switch(action.type) {
		case FETCH_PORTFOLIO:
		return action.payload.data;
	default:
		return state;
	}
}
