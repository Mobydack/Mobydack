import { List, Map } from 'immutable';

const defaultState = Map({
	active: null,
	posts: List(),
});

export default function navigation(state=defaultState, action) {
	switch(action.type) {
		case 'POST_SUCCEEDED':
			if ( ! Array.isArray(action.value) ) {
				action.value = [action.value];
			}
			return state.update('posts', list => list.push(...action.value));
		case 'SET_ACTIVE':
			return state.update('active', id => action.value);
		default:
			return state;
	}
};