// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';
// isPhoneNumber tests
test('check phone number syntax', () =>{
  expect(isPhoneNumber('123-123-1234')).toBe(true);
});

test('check phone number empty', () =>{
  expect(isPhoneNumber('')).toBe(false);
});

test('check phone number with brackets', () =>{
  expect(isPhoneNumber('(123)123-1234')).toBe(true);
});

test('check phone number overflow', () =>{
  expect(isPhoneNumber('+11231231234')).toBe(false);
});
// isEmail tests
test('check email syntax', () =>{
  expect(isEmail('john_doe@example.com')).toBe(true);
});

test('check email empty', () =>{
  expect(isEmail('')).toBe(false);
});

test('check email with underscore', () =>{
  expect(isEmail('john_doe@example_test.com')).toBe(true);
});

test('check email with multiple domain', () =>{
  expect(isEmail('j_d@example.com.com')).toBe(false);
});
// isStrongPassword tests
test('check password', () =>{
  expect(isStrongPassword('A1235_23476')).toBe(true);
});

test('check empty password', () =>{
  expect(isStrongPassword('')).toBe(false);
});

test('check long password', () =>{
  expect(isStrongPassword('A12376858762354987')).toBe(false);
});

test('check password with exactly 15 characters', () =>{
  expect(isStrongPassword('ABCD___________')).toBe(true);
});

// isDate tests
test('check 2 digit MD', () =>{
  expect(isDate('01/02/1234')).toBe(true);
});

test('check 1 digit MD', () =>{
  expect(isDate('1/2/1234')).toBe(true);
});

test('check empty date', () =>{
  expect(isDate('')).toBe(false);
});

test('check date with 2 digit years', () =>{
  expect(isDate('01/02/34')).toBe(false);
});

// isHexColor tests
test('check 3 char color', () =>{
  expect(isHexColor('FFF')).toBe(true);
});

test('check 6 char color', () =>{
  expect(isHexColor('ABCDEF')).toBe(true);
});

test('check empty color', () =>{
  expect(isHexColor('')).toBe(false);
});

test('check out of bounds color', () =>{
  expect(isHexColor('GISYFB')).toBe(false);
});