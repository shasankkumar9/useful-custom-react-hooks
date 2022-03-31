import { useState } from "react";

/* 
  toggleValue() -> negates the current boolean value
  toggleValue(true) -> set value to true
  toggleValue(false) -> set value to false
*/

export default function useToggle(defaultValue) {
  const [value, setValue] = useState(defaultValue);

  function toggleValue(value) {
    setValue((currentValue) =>
      typeof value === "boolean" ? value : !currentValue,
    );
  }

  return [value, toggleValue];
}
