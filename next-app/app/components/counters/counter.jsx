"use client ";

import { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);

  //   const countPlus = (prev) => {
  //     setCounter((prev) => prev + 1);
  //     setCounter((prev) => prev + 1);
  //     setCounter((prev) => prev + 1);
  //   };

  //   const countMinus = () => {
  //     setCounter(counter - 1);
  //   };

  return (
    <div className="flex gap-4 align-middle">
      <button
        onClick={() => setCounter((prev) => prev - 1)}
        className="p-4 text-4xl border rounded-sm"
      >
        -
      </button>
      <p className="text-4xl">{counter}</p>
      <button
        onClick={() => setCounter((prev) => prev + 1)}
        className="p-4 text-4xl border rounded-sm"
      >
        +
      </button>
    </div>
  );
};

export default Counter;
