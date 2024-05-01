import React, { useState } from 'react';
import './App.css';

function CalcButton({ label, buttonClassName = "CalcButton", onClick }) {
  return (
    <button className={buttonClassName} onClick={onClick}>
      {label}
    </button>
  );
}

function CalcDisplay({ display }) {
  return (
    <div className="output-display">
      <div className="previous-operand"></div>
      <div className="current-operand">{display}</div>
    </div>
  );
}

function App() {
  const [disp, setDisp] = useState(0);
  const [num1, setNum1] = useState(null);
  const [num2, setNum2] = useState(null);
  const [op, setOp] = useState(null);

  const clrClickHandler = () => {
    setDisp(0);
    setNum1(null);
    setNum2(null);
    setOp(null);
  };

  const equalClickHandler = () => {
    console.log('Num1 ' + num1 + ' | ' + 'Op ' + op + ' | ' + 'Num2 ' + num2);
    if (op === "+") {
      setDisp(parseInt(num1) + parseInt(num2));
    } else if (op === "-") {
      setDisp(parseInt(num1) - parseInt(num2));
    } else if (op === "x") {
      setDisp(parseInt(num1) * parseInt(num2));
    } else if (op === "÷") {
      setDisp(parseInt(num1) / parseInt(num2));
    } else {
      setDisp('Invalid Operation');
    }
  };

  const numberClickHandler = (value) => {
    if (op === null) {
      if (num1 === null) {
        setNum1(value);
        setDisp(value);
      } else {
        setNum1(num1 + value);
        setDisp(num1 + value);
      }
    } else {
      if (num2 === null) {
        setNum2(value);
        setDisp(value);
      } else {
        setNum2(num2 + value);
        setDisp(num2 + value);
      }
    }
  };

  const opClickHandler = (value) => {
    setOp(value);
    setDisp(value);
  };

  return (
    <div className="calculator-container">
      <CalcDisplay display={disp} />
      <div className="button-grid">
        <CalcButton label={"÷"} buttonClassName="operation" onClick={() => opClickHandler("÷")} />
        <CalcButton label={7} onClick={() => numberClickHandler("7")} />
        <CalcButton label={8} onClick={() => numberClickHandler("8")} />
        <CalcButton label={9} onClick={() => numberClickHandler("9")} />
        <CalcButton label={"x"} buttonClassName="operation" onClick={() => opClickHandler("x")} />
        <CalcButton label={4} onClick={() => numberClickHandler("4")} />
        <CalcButton label={5} onClick={() => numberClickHandler("5")} />
        <CalcButton label={6} onClick={() => numberClickHandler("6")} />
        <CalcButton label={"+"} buttonClassName="operation" onClick={() => opClickHandler("+")} />
        <CalcButton label={1} onClick={() => numberClickHandler("1")} />
        <CalcButton label={2} onClick={() => numberClickHandler("2")} />
        <CalcButton label={3} onClick={() => numberClickHandler("3")} />
        <CalcButton label={"-"} buttonClassName="operation" onClick={() => opClickHandler("-")} />
        <CalcButton label={"C"} buttonClassName="operation" onClick={clrClickHandler} />
        <CalcButton label={0} onClick={() => numberClickHandler("0")} />
        <CalcButton label={"="} buttonClassName="operation" onClick={equalClickHandler} />
      </div>
    </div>
  );
}

export default App;
