import { useEffect, useState } from "react";

export default function useDebounce(value, delay) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(
    () => {
      // setTimeout을 통해 delay 이후에 debouncedValue를 얻습니다.
      const timer = setTimeout(() => {
        setDebouncedValue(value);
      }, delay);

      return () => {
        clearTimeout(timer); // 이 전의 timer를 clear합니다.
      };
    },
    [value] // value 값이 변경될때만 실행됩니다.
  );

  return debouncedValue;
}