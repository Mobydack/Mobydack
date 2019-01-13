import 'regenerator-runtime/runtime';
import { put, call, takeEvery } from "redux-saga/effects";
import API from '../api/getPost';

function* requestPost() {
	try {
		const posts = yield call(API, '*');
		yield put({
			type: 'POST_SUCCEEDED',
			value: posts
		})
	} catch (e) {
		console.log('fail');
	}
};

export default [
	takeEvery('REQUEST_POST', requestPost),
]