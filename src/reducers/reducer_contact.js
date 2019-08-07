import { CREATE_CONTACT } from '../actions';

export default function(state = {}, action) {
	switch(action.type) {
		case CREATE_CONTACT:
		return action.payload.data;
	default:
		return state;
	}
}
