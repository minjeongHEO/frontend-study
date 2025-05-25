import { useRef, useImperativeHandle, forwardRef } from "react";
import { useCustomImperativeHandle } from "./useCustomImperativeHandle";

interface MyInputHandle {
  focus: () => void;
  opacity?: () => void;
}

const MyInput = forwardRef<MyInputHandle, React.InputHTMLAttributes<HTMLInputElement>>(({ ...props }, ref) => {
  const inputRef = useRef<HTMLInputElement>(null);

  // useImperativeHandle( 
  //   ref,
  //   () => {
  //     return {
  //       focus() {
  //         inputRef.current?.focus();
  //         console.log("focus!");
  //       },
  //       opacity() {
  //         if (inputRef.current) {
  //           inputRef.current.style.opacity = "0.2";
  //           setTimeout(() => {
  //             if (inputRef.current) {
  //               inputRef.current.style.opacity = "1";
  //             }
  //           }, 1000);
  //         }
  //       },
  //     };
  //   },
  //   []
  // );

  useCustomImperativeHandle(ref, () => ({
    focus() {
      inputRef.current?.focus();
    },
    
  }),[]);

  return <input {...props} ref={inputRef} />;
});

MyInput.displayName = "MyInput";

export default MyInput;
