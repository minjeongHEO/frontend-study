import { useRef } from "react";
import MyInput from "./MyInput.js";

interface MyInputHandle {
  focus: () => void;
  opacity?: () => void;
}

export default function Form() {
  const ref = useRef<MyInputHandle>(null);

  const handleClick = () => {
    ref.current?.focus();
    // 이 작업은 DOM 노드가 노출되지 않으므로 작동하지 않습니다.
    //ref.current.style.opacity = 0.5;
    ref.current?.opacity?.();
  }

  return (
    <form>
      <MyInput placeholder="Enter your name" ref={ref} />
      <button type="button" onClick={handleClick}>
        Edit
      </button>
    </form>
  );
}
