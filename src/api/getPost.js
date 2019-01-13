export default function getpPost(selector) {
	const baseSelector = 'https://jsonplaceholder.typicode.com/posts';
	
	return fetch(baseSelector)
		.then(res => res.json())
};