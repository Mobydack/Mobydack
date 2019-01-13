import { combineReducers } from 'redux';
import { Map } from 'immutable';

import navigation from './navigation';

const emptyState = Map({
	active: 0,
});
export default combineReducers({
	initialReducer: (state=emptyState, action) => {
		switch(action.type) {
			case 'SET_ACTIVE_TAB':
				return state.set('active', action.value);
			default:
				return state;
		}
	},
	navigation
});