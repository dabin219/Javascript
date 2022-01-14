import { useState } from 'react'; 

export const useCalculator = () => {
  const [result, setResult] = useState(0);

  const add = (num: number) => {
    setResult(result + num)
  }
  const substract = (num: number) => {
    setResult(result - num)
  }

  return {result, add, substract}
}
