import { useState } from "react";
import useEffectOnUpdate from "./useEffectOnUpdate";

export type UseToggleProps = {
  initialValue?: boolean;
  onToggle?: () => void;
};

export default function useToggle({
  initialValue = false,
  onToggle = () => {},
}: UseToggleProps = {}): [boolean, () => void] {
  const [on, setOn] = useState(initialValue);

  function toggle() {
    setOn((prev) => !prev);
  }

  useEffectOnUpdate({
    effectFunction: onToggle,
    deps: [on],
  });

  return [on, toggle];
}
