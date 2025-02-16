import { useState, useCallback, useEffect, useRef } from "react";
import "./App.css";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");
  const passwordRef = useRef(null);

  const generatePassword = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*()_+";

    for (let i = 0; i < length; i++) {
      const char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, numberAllowed, charAllowed]);

  useEffect(() => {
    generatePassword();
  }, [generatePassword]);

  const copyInClickboard = () => {
    window.navigator.clipboard.writeText(password);
    passwordRef.current?.select();
  };

  return (
    <>
      <div className="w-full max-w-md mx-auto text-center px-4 py-3 my-8 mb-4">
        <h1 className="text-4xl font-bold text-center my-1">
          Random Password Generator
        </h1>
        <p className="py-6">
          Generate Random Passwords in Just One Click {"\u2728"}
        </p>

        {/* input box with read only */}
        <div className="flex flex-col items-center rounded-lg">
          <input
            type="text"
            value={password}
            className="input input-primary"
            readOnly
            ref={passwordRef}
          />
          <button
            onClick={copyInClickboard}
            className="btn btn-soft btn-primary mt-3"
          >
            Copy
          </button>
        </div>

        {/* slider with length label */}
        <div className="flex justify-center mt-4 mb-7 gap-x-2">
          <input
            type="range"
            min={6}
            max={16}
            value={length}
            onChange={(e) => setLength(Number(e.target.value))}
            className="range range-primary "
          />
          <label className="font-bold" htmlFor="length">
            Length: {length}
          </label>
        </div>

        {/* checkbox */}
        <div className="flex  justify-center mt-4 mb-7 gap-x-2">
          <input
            type="checkbox"
            checked={numberAllowed}
            onChange={() => {
              setNumberAllowed((prev) => !prev);
            }}
            className="checkbox checkbox-primary"
          />
          <label className="font-bold" htmlFor="number">
            Numbers
          </label>
          <input
            type="checkbox"
            defaultChecked={charAllowed}
            onChange={() => {
              setCharAllowed((prev) => !prev);
            }}
            className="checkbox checkbox-primary"
          />
          <label className="font-bold" htmlFor="char">
            Characters
          </label>
        </div>
      </div>
    </>
  );
}

export default App;
