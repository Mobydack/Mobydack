import { List, Map } from 'immutable';

const defaultState = Map({
	//TODO: оптимизировать, плохой код
	activePOST: null,
	posts: List(),
});

export default function navigation(state=defaultState, action) {
	switch(action.type) {
		case 'POST_SUCCEEDED':
			if ( ! Array.isArray(action.value) ) {
				action.value = [action.value];
			}
			
			return state
				.update('posts', list => list.push(...action.value))
				.update('activePOST', el => ({
						index: 0,
						body: action.value[0],
					})
				);
		case 'SET_ACTIVE':
			const index = state
					.get('posts')
					.findIndex(post => post.id === action.value);
			return state
				.update('activePOST', el => ({
					index,
					body: state.get('posts').get(index),
				}));
		default:
			return state;
	}
};