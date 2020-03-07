const converPercentValueToNumber = (percentValue: string): string => String(+percentValue
  .replace(/%/g, '') / 100);
const convertPercentage = (expressionStr: string): string => expressionStr
  .replace(/\d+%/g, converPercentValueToNumber);

export default convertPercentage;
