import { isArray } from 'lodash';
import { Action } from 'redux';

interface IBaseShape {
  [key: string]: string | Array<string>
}

interface IActionCreator {
	(n: string, tMap: IBaseShape): IBaseShape;
}

export interface IAction extends Action {
	payload: any;
}

export interface IActionCreate {
	(type: string, payload: any): IAction
}

export const actionTypesCreator: IActionCreator = (namespace: string = '', typesMap: IBaseShape = {}) => {
	const typesObj: IBaseShape = {};
	Object.keys(typesMap).forEach((type) => {
		const prev = typesMap[type];
		const value = isArray(prev) ? prev.join('/') : prev;
		typesObj[type] = `${namespace}/${value}`;
	});
	return typesObj;
};

export const createAction: IActionCreate = (type: string, payload: any = null) => ({ type, payload });