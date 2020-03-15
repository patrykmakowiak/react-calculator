import unifyToEvaluate from './unifyToEvaluate';

it('should return string sliced about last char if last char in the input is not digit',
  () => {
    expect(unifyToEvaluate('5121+512-')).toBe('5121+512');
    expect(unifyToEvaluate('5121+512+')).toBe('5121+512');
  }
);

it('should return the same string like input string if last char in the input is digit',
  () => {
    expect(unifyToEvaluate('5121+512')).toBe('5121+512');
    expect(unifyToEvaluate('321-12*4')).toBe('321-12*4');
  }
);