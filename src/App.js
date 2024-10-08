import React, { useState } from 'react';
import './App.css';

function CalcButton({ label, buttonClassName = "CalcButton", onClick }) {
  return (
    <button className={buttonClassName} onClick={onClick}>
      {label}
    </button>
  );
}

function CalcDisplay({ display, previousOperand }) {
  return (
    <div className="output-display">
      <div className="previous-operand">{previousOperand}</div>
      <div className="current-operand">{display}</div>
    </div>
  );
}

export default function App() {
  const [disp, setDisp] = useState(0);
  const [num1, setNum1] = useState(null);
  const [num2, setNum2] = useState(null);
  const [op, setOp] = useState(null);
  const [previousOperand, setPreviousOperand] = useState('');

  const clrClickHandler = () => {
    setDisp(0);
    setNum1(null);
    setNum2(null);
    setOp(null);
    setPreviousOperand('');
  }

  const equalClickHandler = () => {
    if (num2 === null || op === null) {
      return;
    }

    let result = null;

    switch (op) {
      case "+":
        result = parseFloat(num1) + parseFloat(num2);
        break;
      case "-":
        result = parseFloat(num1) - parseFloat(num2);
        break;
      case "x":
        result = parseFloat(num1) * parseFloat(num2);
        break;
      case "÷":
        result = parseFloat(num1) / parseFloat(num2);
        break;
      default:
        result = null;
    }

    setDisp(result.toString());
    setPreviousOperand(`${num1} ${op} ${num2}`);
    setNum1(result.toString());
    setNum2(null);
    setOp(null);
  };

  const numberClickHandler = (e) => {
    e.preventDefault();
    const value = e.target.innerHTML;
  
    if (disp === '0' && value === '0') {
      return;
    }
  
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
  }

  const opClickHandler = (e) => {
    e.preventDefault();
    const value = e.target.innerHTML;

    setOp(value);
    if (num1 !== null && num2 !== null) {
      equalClickHandler();
    }
    if (num1 !== null) {
      setPreviousOperand(`${num1} ${value}`);
    }
    setDisp(value);
  }

  return (
    <div className="calculator-container">
      <CalcDisplay display={disp} previousOperand={previousOperand} />
      <div className="button-grid">
        <CalcButton label={7} onClick={numberClickHandler} />
        <CalcButton label={8} onClick={numberClickHandler} />
        <CalcButton label={9} onClick={numberClickHandler} />
        <CalcButton label={"÷"} buttonClassName="operation" onClick={opClickHandler} />
        <CalcButton label={4} onClick={numberClickHandler} />
        <CalcButton label={5} onClick={numberClickHandler} />
        <CalcButton label={6} onClick={numberClickHandler} />
        <CalcButton label={"x"} buttonClassName="operation" onClick={opClickHandler} />
        <CalcButton label={1} onClick={numberClickHandler} />
        <CalcButton label={2} onClick={numberClickHandler} />
        <CalcButton label={3} onClick={numberClickHandler} />
        <CalcButton label={"-"} buttonClassName="operation" onClick={opClickHandler} />
        <CalcButton label={"CLR"} buttonClassName="operation" onClick={clrClickHandler} />
        <CalcButton label={0} onClick={numberClickHandler} />
        <CalcButton label={"="} buttonClassName="operation" onClick={equalClickHandler} />
        <CalcButton label={"+"} buttonClassName="operation" onClick={opClickHandler} />
      </div>
    </div>
  );
}
