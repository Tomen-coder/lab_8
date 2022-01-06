import NaturalNumberInput from "./NaturalNumberInput";
import CalculationResult from "./CalculationResult";
import { useState, useEffect } from "react";
import { Fibonacci } from "./fibonacci";

export default function App() {
  const [inputValue, setInputValue] = useState("");
  const [result, setResult] = useState(undefined);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!isLoading || inputValue === "") return;
    function handleCalculateButtonClick() {
      setResult(Fibonacci(inputValue));
      setIsLoading(false);
    }
    handleCalculateButtonClick();
  }, [isLoading, inputValue]);

  return (
    <div className="App-background">
      <div className="App-container column">
        <div className="column horizontal-center content">
          <h1>Fibonacci Calculator</h1>
          <NaturalNumberInput
            value={inputValue}
            setValue={setInputValue}
            setResult={setResult}
          />
          <br></br>
          <br></br>
          <button
            className="calculate-fibonacci-button"
            onClick={(e) => {
              if (inputValue !== "") setIsLoading(true);
            }}
          >
            Calculate Fibonacci
          </button>
          <CalculationResult result={result} isLoading={isLoading} />
        </div>
      </div>
    </div>
  );
}
