import React, { useEffect, useRef } from "react";

type Props = {
  effectFunction: React.EffectCallback;
  deps: React.DependencyList;
};

export default function useEffectOnUpdate({ effectFunction, deps }: Props) {
  const firstRender = useRef(true);
  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
    } else {
      effectFunction();
    }
  }, deps);
}
