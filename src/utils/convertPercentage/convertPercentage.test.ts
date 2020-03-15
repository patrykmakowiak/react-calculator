import convertPercentage from './convertPercentage';

it('should return expression with converted percentage to number if input is expression' ,
  () => {
    expect(convertPercentage('5121+512-100%')).toBe('5121+512-1');
    expect(convertPercentage('5121+512*135%')).toBe('5121+512*1.35');
    expect(convertPercentage('5121+512/12%')).toBe('5121+512/0.12');
    expect(convertPercentage('5121+512+50%')).toBe('5121+512+0.5');
  }
);

it('should return the same expression like input if input is expression and do not have percentage value',
  () => {
    expect(convertPercentage('5121+512-100')).toBe('5121+512-100');
    expect(convertPercentage('5121+512*135')).toBe('5121+512*135');
    expect(convertPercentage('5121+512/12')).toBe('5121+512/12');
    expect(convertPercentage('5121+512+50')).toBe('5121+512+50');
  }
);