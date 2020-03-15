import { converPercentValueToNumber} from '..';

const convertPercentage = (expressionStr: string): string => expressionStr
  .replace(/\d+%/g, converPercentValueToNumber);

export default convertPercentage;
