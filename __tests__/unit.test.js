// unit.test.js

import {
	isPhoneNumber,
	isEmail,
	isStrongPassword,
	isDate,
	isHexColor,
} from "../code-to-unit-test/unit-test-me";

//tests for isPhone Number
//true cases

test("isPhoneNumber: 555-555-5555 should return true", () => {
	expect(isPhoneNumber("555-555-5555")).toBe(true);
});

test("isPhoneNumber: (921) 565-3423 should return true", () => {
	expect(isPhoneNumber("(921) 565-3423")).toBe(true);
});

//false cases

test("isPhoneNumber: alphanumeric characters and incorrect length should return false", () => {
	expect(isPhoneNumber("abc123")).toBe(false);
});

test("isPhoneNumber: 123-456-789, incorrect length:  should return false", () => {
	expect(isPhoneNumber("123-456-789")).toBe(false);
});

//test isEmail
//true cases
//ucsd email
test("isEmail: sasrinath@ucsd.edu should return true", () => {
	expect(isEmail("sasrinath@ucsd.edu")).toBe(true);
});

test("isEmail: generic .com extension should return true", () => {
	expect(isEmail("iLovemyCountry@email.com")).toBe(true);
});

//false cases
//custom country extension doesn't match regex
test("isEmail: custom country extension should return false", () => {
	expect(isEmail("tw@icplsw.co.tw")).toBe(false);
});

//missing @ symbol
test("isEmail: missing @ symbol should return false", () => {
	expect(isEmail("twicplsw.co.tw")).toBe(false);
});

//test isStrongPassword
//true cases

//lowercase start, 3 letters, 1 number
test("isStrongPassword: abc1 should return true", () => {
	expect(isStrongPassword("abc1")).toBe(true);
});

//uppercase start, 14 letters
test("isStrongPassword: Abcdefghijklmnop should return true", () => {
	expect(isStrongPassword("Abcdefghijklmno")).toBe(true);
});

//false cases
//incorrect length(2 characters and starts with a number)
test("isStrongPassword: 1a should return false", () => {
	expect(isStrongPassword("1a")).toBe(false);
});

//incorrect length(16 characters)
test("isStrongPassword: 1234567890123456 should return false", () => {
	expect(isStrongPassword("1234567890123456")).toBe(false);
});

//test isDate

//true cases
//current date
test("isDate: 05/06/2024 should return true", () => {
	expect(isDate("05/06/2024")).toBe(true);
});

//test old birthday
test("isDate: 6/8/1990 should return true", () => {
	expect(isDate("6/8/1990")).toBe(true);
});

//false cases
//incorrect year
test("isDate: 05/06/24 should return false", () => {
	expect(isDate("05/06/24")).toBe(false);
});

//incorrect seperators
test("isDate: 05-06-2024 should return false", () => {
	expect(isDate("05-06-2024")).toBe(false);
});

//test isHexColor

//true cases
//3 color hex with letters
test("isHexColor: #fff should return true", () => {
	expect(isHexColor("#fff")).toBe(true);
});

//6 color hex with numbers
test("isHexColor: 000000 should return true", () => {
	expect(isHexColor("000000")).toBe(true);
});

//false cases
//incorrect length
test("isHexColor: fff1236 should return false", () => {
	expect(isHexColor("fff1236")).toBe(false);
});

//uses invalid letters
test("isHexColor: #gggggg should return false", () => {
	expect(isHexColor("#gggggg")).toBe(false);
});
