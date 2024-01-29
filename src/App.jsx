import { useEffect, useState } from "react";

export default function App() {
  const [advice, setAdvice] = useState("");
  const [count, setCount] = useState(0);

  async function getAdvice() {
    const res = await fetch("https://api.adviceslip.com/advice");
    const data = await res.json();

    setAdvice(data.slip);
    setCount((cnt) => cnt + 1);
    console.log(data);
  }
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
