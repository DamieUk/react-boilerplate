import axios from 'axios';

const defaultHeaders = () => {
	const token = localStorage.getItem('token');
	return {
		Authorization: !token ? null : `Bearer ${token}`,
		'content-type': 'application/json',
	}
};

export const GET = (url: string = '', params: object = {}) => axios.get(url, { params, headers: defaultHeaders() });
export const POST = (url: string = '', data: object = {}) => axios.post(url, data, { headers: defaultHeaders() });