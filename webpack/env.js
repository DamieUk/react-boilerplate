require('dotenv').config();

export default {
	IS_PROD: process.env.NODE_ENV !== 'development',
	NODE_ENV: process.env.NODE_ENV,
	APP_NAME: process.env.APP_NAME,
	PORT: process.env.PORT,
	API_URL: process.env.API_URL,
};