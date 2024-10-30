import { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);

 const incCount =() => {
  setCount (count+1);
 }
  const decCount =() => {
setCount (count-1);
  }
  const resCount =() => {
    setCount (0); 
  }

  return (
    <div>
    <button onClick={incCount}> increment </button>
    <button onClick={decCount}> decrement </button>
    <button onClick={resCount}> reset </button>
    <div>count: {count}</div>
    </div>
  );
}

