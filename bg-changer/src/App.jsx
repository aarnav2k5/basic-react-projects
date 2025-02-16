import { useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState("gray");

  /* function changeColor(color) {
    setColor(color);
  } */

  return (
    <div
      className="bg-gray-600 h-screen w-full duration-1000"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white rounded-3xl px-2 py-2">
          <button
            className="outline-none px-4 py-1 bg-red-600 rounded-full text-black shadow-lg"
            onClick={() => setColor("red")}
          >
            Red
          </button>
          <button
            className="outline-none px-4 py-1 bg-green-500 rounded-full text-black shadow-lg"
            onClick={() => setColor("green")}
          >
            Green 
          </button>
          <button
            className="outline-none px-4 py-1 bg-blue-500 rounded-full text-black shadow-lg"
            onClick={() => setColor("#2B7FFF")}
          >
            Blue
          </button>
          <button
            className="outline-none px-4 py-1 bg-purple-500 rounded-full text-black shadow-lg"
            onClick={() => setColor("#AD46FF")}
          >
            Purple
          </button>
          <button
            className="outline-none px-4 py-1 bg-yellow-500 rounded-full text-black shadow-lg"
            onClick={() => setColor("#F0B100")}
          >
            Yellow
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
