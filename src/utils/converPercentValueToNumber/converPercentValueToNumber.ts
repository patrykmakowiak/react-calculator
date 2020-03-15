const convertPercentValueToNumber = (percentValue: string): string => String(+percentValue
  .replace(/%/g, '') / 100);

export default convertPercentValueToNumber;