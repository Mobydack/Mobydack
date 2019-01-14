const setActivePost = id => ({
	type: 'SET_ACTIVE',
	value: id
});
const requestPost = selector => ({
	type: 'REQUEST_POST',
	value: selector
});

export {
	setActivePost,
	requestPost,
}