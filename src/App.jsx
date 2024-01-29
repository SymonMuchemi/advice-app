/**
 * App component
 * 
 * @module App
 */

import { useEffect, useState } from "react";

/**
 * The main App component
 * 
 * @returns {React.Element} The rendered DOM element
 */
export default function App() {
  /**
   * @type {React.useState}
   * @default ""
   */
  const [advice, setAdvice] = useState("");

  /**
   * @type {React.useState}
   * @default 0
   */
  const [count, setCount] = useState(0);

  /**
   * Fetches advice form the API and updates the state
   * 
   * @async
   * @function getAdvice
   */
  async function getAdvice() {
    const res = await fetch("https://api.adviceslip.com/advice");
    const data = await res.json();

    setAdvice(data.slip);
    setCount((cnt) => cnt + 1);
    console.log(data);
  }

  // call getAdvice on initial render
  useEffect(function () {
    getAdvice();
  }, []);
  return (
    <div>
      <h1>
        {advice.id + ": " + advice.advice}
      </h1>
      <button onClick={getAdvice}>Get Advice</button>
      <p>
        You have read <strong>{count}</strong> pieces of advice{" "}
      </p>
    </div>
  );
}
