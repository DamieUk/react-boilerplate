import _isString from 'lodash/isString';
import _round from 'lodash/round';

export const generateId = () => 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
  const r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
  return v.toString(16);
});

const required = (val) => {
  let value = val;
  if (_isString(value)) value = value.trim();
  return value ? undefined : 'Required';
};

const phoneRequired = (val) => {
  return /^(1\s?)?((\([0-9]{3}\))|[0-9]{3})[\s\-]?[\0-9]{3}[\s\-]?[0-9]{4}$/g.test(val) //eslint-disable-line no-useless-escape
    ? undefined
    : 'Wrong phone number';
};

const emailValidate = val => {
  const result = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/.test(val);
  return result ? undefined : 'Invalid email';
};

export const generateArray = (count) => [...Array(count || 0)].map((e, i) => i + 1);

export const remCalc = px => `${_round(px / 16, 3)}rem`;

export const validator = {
	email: emailValidate,
  phone: phoneRequired,
  required,
};