import { isString, round } from 'lodash';

export interface IValidator {
  email: IGeneralFunc;
  phone: IGeneralFunc;
  required: IGeneralFunc;
}

export interface IRemCalc {
  (px: number): string;
}

export interface IGeneralFunc {
  (values: string): string | undefined;
}

export const generateId: IGeneralFunc = () => 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
  const r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
  return v.toString(16);
});

const required: IGeneralFunc = (val: string) => {
  let value = val;
  if (isString(value)) value = value.trim();
  return value ? undefined : 'Required';
};

const phoneRequired: IGeneralFunc = (val: string) => {
  return /^(1\s?)?((\([0-9]{3}\))|[0-9]{3})[\s\-]?[\0-9]{3}[\s\-]?[0-9]{4}$/g.test(val)
    ? undefined
    : 'Wrong phone number';
};

const emailValidate: IGeneralFunc = (val: string) => {
  const result = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/.test(val);
  return result ? undefined : 'Invalid email';
};

export const remCalc: IRemCalc = (px: number) => `${round(px / 16, 3)}rem`;

export const validator: IValidator = {
	email: emailValidate,
  phone: phoneRequired,
  required,
};