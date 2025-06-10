import React, { useState } from "react";
import DisplayCount from "./components/DisplayCount";
import CheckWhetherCountIsThere from "./components/CheckWhetherCountIsThere";

const App = () => {
  const [count, setCount] = useState(0);
  // let count = 0;

  const increment = () => {
    setCount(count + 1);
    // count += 1;
  };
  const decrement = () => {
    setCount(count - 1);
    // count -= 1;
  };
  const reset = () => {
    setCount(0);
    // count = 0;
  };

  return (
    <div className="container mx-auto bg-white shadow py-6 px-8 rounded-lg">
      <h1 className="font-medium text-2xl text-gray-600">Redux Tutorial</h1>

      <div>
        <DisplayCount count={count} />
        {/* <CheckWhetherCountIsThere /> */}
      </div>

      <div className="flex justify-center items-center mt-6">
        {/* Increment Button */}
        <button
          className="bg-indigo-600 text-white py-2 px-4 rounded cursor-pointer hover:bg-indigo-700"
          onClick={increment}
        >
          Increment
        </button>
        {/* Decrement Button */}
        <button
          className="bg-indigo-600 text-white py-2 px-4 rounded cursor-pointer hover:bg-indigo-700"
          onClick={decrement}
        >
          Decrement
        </button>
        {/* Increment Button */}
        <button
          className="bg-red-600 text-white py-2 px-4 rounded cursor-pointer hover:bg-red-700"
          onClick={reset}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default App;
