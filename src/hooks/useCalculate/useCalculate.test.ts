import { renderHook, act } from '@testing-library/react-hooks';

import useCalculate from './useCalculate';

describe('Initial states value', () => {
  it('should return empty string for expression', () => {
    const { result } = renderHook(useCalculate);
    expect(result.current.expression).toBe('');
  })

  it('should return false for showResult', () => {
    const { result } = renderHook(useCalculate);
    expect(result.current.showResult).toBeFalsy();
  })
});

describe('Modify states value', () => {
  it('should return an empty string if last added value is AC', () => {
    const { result } = renderHook(useCalculate);

    act(() => {
      result.current.addValueToExpression('2');
    });
    act(() => {
      result.current.addValueToExpression('3');
    });
    act(() => {
      result.current.addValueToExpression('AC');
    });

    expect(result.current.expression).toBe('');
    expect(result.current.showResult).toBeFalsy();
  });

  it('should return clear last char if last added value is C', () => {
    const { result } = renderHook(useCalculate);

    act(() => {
      result.current.addValueToExpression('2');
    });
    act(() => {
      result.current.addValueToExpression('3');
    });
    act(() => {
      result.current.addValueToExpression('C');
    });

    expect(result.current.expression).toBe('2');
    expect(result.current.showResult).toBeFalsy();
  });

  it('should return expression with latest operator', () => {
    const { result } = renderHook(useCalculate);

    act(() => {
      result.current.addValueToExpression('2');
    });

    act(() => {
      result.current.addValueToExpression('+');
    });

    act(() => {
      result.current.addValueToExpression('-');
    });

    expect(result.current.expression).toBe('2-');
    expect(result.current.showResult).toBeFalsy();
  })
});


