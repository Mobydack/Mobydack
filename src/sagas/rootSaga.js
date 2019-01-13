import { all } from 'redux-saga/effects';

import navigation from './navigation';

export default function* rootSaga() {
	yield all([
		...navigation,
	])
}