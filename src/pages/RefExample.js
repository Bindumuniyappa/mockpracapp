import React, { useRef } from "react";

const RefExample = () => {
  const InputRef = useRef(null);

  const focusInput = () => {
    InputRef.current.focus();
  };

  return (
    <div>
      RefExample:
      <input ref={InputRef} type="text" placeholder="enter something" />
      <button onClick={focusInput}>Focus</button>
    </div>
  );
};

export default RefExample;
