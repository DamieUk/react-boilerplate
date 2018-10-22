import _isArray from 'lodash/isArray';

export const actionTypesCreator = (namespace = '', typesMap = {}) => {
	const typesObj = {};
	Object.keys(typesMap).forEach((type) => {
		const prev = typesMap[type];
		const value = _isArray(prev) ? prev.join('/') : prev;
		typesObj[type] = `${namespace}/${value}`;
	});
	return typesObj;
};

export const createAction = (type, payload = null) => ({ type, payload });