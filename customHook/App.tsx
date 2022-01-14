import "./styles.css";
import { useState } from "react";
import { useCalculator } from "./useCalculator";

export default function App() {
  const [value, setValue] = useState(0);
  const { result, add, substract } = useCalculator();

  return (
    <>
      <div>result: {result}</div>
      <input value={value} onChange={(e) => setValue(Number(e.target.value))} />
      <button onClick={() => add(value)}>plus</button>
      <button onClick={() => substract(value)}>substract</button>
    </>
  );
}
