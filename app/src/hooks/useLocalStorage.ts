import { useState } from "react";

export function useLocalStorage<T>(
  key: string,
  initialValue: T
): [T, (n: T) => void] {
  const localValue = () => {
    try {
      // console.log("key ", key);
      return JSON.parse(localStorage.getItem(key) ?? "") as T;
    } catch {
      // console.log("initialValue", initialValue);
      return initialValue;
    }
  };

  const [value, setNewValue] = useState(localValue);

  const setValue = (newValue: T) => {
    localStorage.setItem(key, JSON.stringify(newValue));
    setNewValue(newValue);
  };

  return [value, setValue];
}
