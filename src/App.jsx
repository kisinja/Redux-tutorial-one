import DisplayCount from "./components/DisplayCount";
import CheckWhetherCountIsThere from "./components/CheckWhetherCountIsThere";
import { useDispatch, useSelector } from "react-redux";
import {
  increment,
  decrement,
  reset,
  incrementByAmount,
} from "./slices/counterSlice";

const App = () => {
  // let count = 0;
  const { count } = useSelector((state) => state.counter);

  const dispatch = useDispatch();

  return (
    <div className="container mx-auto bg-white shadow py-6 px-8 rounded-lg">
      <h1 className="font-medium text-2xl text-gray-600">Redux Tutorial</h1>

      <div>
        <DisplayCount count={count} />
        <CheckWhetherCountIsThere />
      </div>

      <div className="flex justify-center items-center mt-6">
        {/* Increment Button */}
        <button
          className="bg-indigo-600 text-white py-2 px-4 rounded cursor-pointer hover:bg-indigo-700"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        {/* Decrement Button */}
        <button
          className="bg-indigo-600 text-white py-2 px-4 rounded cursor-pointer hover:bg-indigo-700"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
        {/* Increment Button */}
        <button
          className="bg-red-600 text-white py-2 px-4 rounded cursor-pointer hover:bg-red-700"
          onClick={() => dispatch(reset())}
        >
          Reset
        </button>

        {/* Increment by Amount Button */}
        <button
          className="bg-green-600 text-white py-2 px-4 rounded cursor-pointer hover:bg-green-700"
          onClick={() => dispatch(incrementByAmount(5))}
        >
          Increment by 5
        </button>
      </div>
    </div>
  );
};

export default App;
