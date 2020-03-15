import convertPercentValueToNumber from './converPercentValueToNumber';

it('should convert the percentage to the number', () => {
  expect(convertPercentValueToNumber('135%')).toBe('1.35');
  expect(convertPercentValueToNumber('60%')).toBe('0.6');
  expect(convertPercentValueToNumber('1200%')).toBe('12');
});
