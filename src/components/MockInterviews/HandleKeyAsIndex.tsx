import { useState } from "react";
import { Fragment } from "react/jsx-runtime";

const FRUITS = ["apple", "banana", "orange"];

const HandleKeyAsIndex = () => {
  const [fruits, setFruits] = useState(FRUITS);
  const removeItem = (index: number) => {
    setFruits(fruits.filter((_, i) => i !== index));
  };
  const addItems = () => {
    setFruits([...fruits, "mango"]);
  };
  return (
    <Fragment>
      <h2>HandleKeyAsIndex</h2>
      <p>
        Using array index as a key is problematic because when items are added,
        removed, or reordered, their indices change. Since React uses keys to
        identify elements during reconciliation, changing indices causes React
        to associate the wrong components with the wrong data, which can lead to
        incorrect UI updates or state mismatches.
      </p>
      <p>
        Type inside banana Remove apple Your typed text appears in orange 💥
        This is a real bug — not theoretical.
      </p>

      <button
        className="px-4 py-2 bg-blue-600 text-white font-medium rounded hover:bg-blue-700 transition"
        onClick={addItems}
      >
        Add Items
      </button>

      <div>
        {fruits.map((fruit, index) => (
          <div key={index} className="flex items-center gap-2">
            <input
              className="bg-white border border-gray-300 text-gray-900 px-1 py-2 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              key={index}
              defaultValue={fruit}
            />
            <span>
              {index}: {fruit}
            </span>
            <button
              className="w-6 h-6 flex items-center justify-center text-red-600 hover:text-red-800 rounded hover:bg-red-100 transition"
              onClick={() => removeItem(index)}
            >
              X
            </button>
          </div>
        ))}
      </div>
    </Fragment>
  );
};
export default HandleKeyAsIndex;
