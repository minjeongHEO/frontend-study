import { DependencyList, Ref, useEffect } from "react";

// exports.useImperativeHandle = function(ref, create, deps) {
//   return resolveDispatcher().useImperativeHandle(ref, create, deps);
// };

// function useImperativeHandle<T, R extends T>(ref: Ref<T> | undefined, init: () => R, deps?: DependencyList): void;

export function useCustomImperativeHandle<T, R extends T>(
  ref: Ref<T> | undefined,
  init: () => R,
  deps?: DependencyList //readonly unknown[]
): void {

useEffect(() => {
  if (ref && typeof ref === 'object' && 'current' in ref) {
    const initValue = init();
    ref.current = {...ref.current, ...initValue}
    // ref.current = init();
  }

  return () => { //?
    if (ref && typeof ref === 'object' && 'current' in ref) {
      ref.current = null;
    }
  };
}, deps);
}