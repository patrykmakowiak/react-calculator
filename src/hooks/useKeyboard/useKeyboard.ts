import { useEffect, useCallback } from 'react';

import calculatorButtons from '../../constants/calculatorButtons';

type AddValue = (value: string) => void;

const useKeyboard = (addValue: AddValue) => {
  const handleKeyboard = useCallback((e: KeyboardEvent): void => {
    const selectedButton = calculatorButtons
      .find(({ value, key, keyCodes }) => {
        if (e.key) {
          return value === e.key || key === e.key;
        }
        if (e.keyCode && keyCodes) {
          return keyCodes.find((keyCode) => keyCode === e.keyCode);
        }
        return false;
      });

    if (selectedButton) {
      addValue(selectedButton.value);
    }
  }, [addValue]);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyboard);
    return () => {
      window.removeEventListener('keydown', handleKeyboard);
    };
  }, [handleKeyboard]);
}

export default useKeyboard;
