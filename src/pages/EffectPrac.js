// import React, { useContext, useEffect } from "react";
// import UserContext from "../CommonComp/UserContext";

// const EffectPrac = () => {
//   const { details, setDetails } = useContext(UserContext);
//   console.log(details);
//   //   useEffect(() => {
//   //     console.log("useEffect inside");
//   //   });
//   //   console.log("useEffect outside");

//   return (
//     <div>
//       {details.id}
//       {details.user}
//     </div>
//   );
// };

// export default EffectPrac;

// If no dependency array ([]) is provided, the effect runs after every render.
// Effect runs after every render, causing multiple logs in the console.
// import React, { useState, useEffect } from "react";

// const Counter = () => {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     console.log("Component rendered or updated!");
//   });

//   return (
//     <div>
//       <p>Count: {count}</p>
//       <button onClick={() => setCount(count + 1)}>Increment</button>
//     </div>
//   );
// };

// export default Counter;

//If [] is passed as the second argument, the effect runs only once (on mount).
//Effect runs only once when the component mounts.

// import React, { useEffect } from "react";

// const TitleUpdater = () => {
//   useEffect(() => {
//     document.title = "Welcome to React!";
//   }, []); // Runs only once on mount

//   return <h1>Check the page title!</h1>;
// };

// export default TitleUpdater;

//If dependencies ([count]) are provided, the effect runs only when those values change.
// 📌 Effect runs only when count updates. If another state changes, it won't run.
import React, { useState, useEffect } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(`Count changed: ${count}`);
  }, [count]); // Runs when `count` changes

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

export default Counter;
