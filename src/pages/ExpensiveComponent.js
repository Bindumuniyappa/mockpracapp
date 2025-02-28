import React, { useState, useMemo } from "react";

function ExpensiveComponent() {
  const [count, setCount] = useState(0);
  const [number, setNumber] = useState(5);

  // Expensive calculation
  const factorial = useMemo(() => {
    console.log("Calculating Factorial...");
    let result = 1;
    for (let i = 1; i <= number; i++) {
      result *= i;
    }
    return result;
  }, [number]); // 🔹 Recomputes only when "number" changes

  return (
    <div>
      <h2>
        Factorial of {number} is: {factorial}
      </h2>
      <button onClick={() => setNumber(number + 1)}>Increment Number</button>
      <button onClick={() => setCount(count + 1)}>Re-render ({count})</button>
    </div>
  );
}

export default ExpensiveComponent;
