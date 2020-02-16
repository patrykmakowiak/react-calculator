const converPercentValueToNumber = (percentValue) => +percentValue.replace(/%/g, '') / 100;
const convertPercentage = (expressionStr) => expressionStr.replace(/\d+%/g, converPercentValueToNumber);

export default convertPercentage;
