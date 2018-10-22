import axios from 'axios';

const defaultHeaders = () => {
	const token = localStorage.getItem('token');
	return {
		Authorization: !token ? null : `Bearer ${token}`,
		'content-type': 'application/json',
	}
};

export const GET = (url = '', params = {}) => axios.get(url, { params, headers: defaultHeaders() });
export const POST = (url = '', data = {}) => axios.post(url, data, { headers: defaultHeaders() });

export const MOCK_REQUEST = (data) => new Promise(resolve => setTimeout(() => resolve(data), 1500));