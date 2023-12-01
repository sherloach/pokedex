/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback, useRef, useState } from 'react';

interface UseControlledProps<T> {
  controlled: T;
  default: T;
}

function useControlled<T>({
  controlled,
  default: defaultProp,
}: UseControlledProps<T>): [T, (newValue: T | ((prevValue: T) => T)) => void] {
  // isControlled is ignored in the hook dependency lists as it should never change.
  const { current: isControlled } = useRef(controlled !== undefined);
  const [valueState, setValue] = useState(defaultProp);
  const value = isControlled ? controlled : valueState;

  const setValueIfUncontrolled = useCallback(
    (newValue: T | ((prevValue: T) => T)) => {
      if (!isControlled) {
        setValue(newValue);
      }
    },
    []
  );

  return [value, setValueIfUncontrolled];
}

export default useControlled;
