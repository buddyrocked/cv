import { FETCH_SKILL } from '../actions';

export default function(state = {}, action) {
	switch(action.type) {
		case FETCH_SKILL:
		return action.payload.data;
	default:
		return state;
	}
}
