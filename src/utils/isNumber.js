const isNumber = (n) => !Number.isNaN(parseFloat(n)) && !Number.isNaN(n - 0);

export default isNumber;
