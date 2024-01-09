import {convertToSimpleDateFormat, convertToWrittenDate, getRelativeDate } from "./utils/formatDate.js";

const testISODate1 = "2021-05-02T12:34:56Z"
const testISODate2 = "2023-01-01T12:34:56Z"
const testISODate3 = "2024-01-02T12:34:56Z"
const testISODate4 = "2017-05-17T12:34:56Z"
const testISODate5 = "2023-02-01T12:34:56Z"


console.log(convertToWrittenDate(testISODate1));
console.log(convertToWrittenDate(testISODate2));
console.log(convertToWrittenDate(testISODate3));
console.log(convertToWrittenDate(testISODate4));
console.log(convertToWrittenDate(testISODate5));

console.log(convertToSimpleDateFormat(testISODate1));
console.log(convertToSimpleDateFormat(testISODate2));
console.log(convertToSimpleDateFormat(testISODate3));
console.log(convertToSimpleDateFormat(testISODate4));
console.log(convertToSimpleDateFormat(testISODate5));

console.log(getRelativeDate(testISODate1));
console.log(getRelativeDate(testISODate2));
console.log(getRelativeDate(testISODate3));
console.log(getRelativeDate(testISODate4));
console.log(getRelativeDate(testISODate5));

