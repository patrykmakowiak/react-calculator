import evaluateExpression from './evaluateExpression';

const errorMessage = 'error message';

it('should return evaluated expression number in evaluatedExpression with status success',
  () => {
    expect(evaluateExpression('121+56-78', errorMessage))
      .toStrictEqual({ evaluatedExpression: 99, status: 'succes' });
    expect(evaluateExpression('10+10*10', errorMessage))
      .toStrictEqual({ evaluatedExpression: 110, status: 'succes' });
    expect(evaluateExpression('10+10/10', errorMessage))
      .toStrictEqual({ evaluatedExpression: 11, status: 'succes' });
  }
);

it('should return error message in evaluatedExpression number with status error',
  () => {
    expect(evaluateExpression('12.0.1+35', errorMessage))
      .toStrictEqual({ evaluatedExpression: errorMessage, status: 'error' });
  }
);