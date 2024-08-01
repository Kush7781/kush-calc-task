import React, { useState } from 'react';
import Keypad from './Keypad';

function Calculator({ addToHistory }) {
  const [input, setInput] = useState('0');
  const [operator, setOperator] = useState(null);
  const [operand, setOperand] = useState(null);

  const handleButtonClick = (value) => {
    if (value === 'C') {
      setInput('0');
      setOperator(null);
      setOperand(null);
    } else if (value === 'CE') {
      
      const lastOperatorIndex = Math.max(
        input.lastIndexOf('+'),
        input.lastIndexOf('-'),
        input.lastIndexOf('*'),
        input.lastIndexOf('/')
      );

      if (lastOperatorIndex !== -1) {
        
        const newInput = input.slice(0, lastOperatorIndex + 1);
        setInput(newInput || '0');
      } else {
        setInput('0');
      }
    } else if (value === 'backspace') {
      if (input.length > 1) {
        setInput(input.slice(0, -1));
      } else {
        setInput('0');
      }
    } else if (['+', '-', '*', '/'].includes(value)) {
      if (operator && operand !== null) {
        const result = calculate(input);
        setInput(result + value);
        setOperand(result);
      } else {
        setInput(input + value);
      }
      setOperator(value);
    } else {
      if (input === '0' && value !== '.') {
        setInput(value);
      } else {
        setInput(input + value);
      }
    }
  };

  const calculate = (expression) => {
    const ops = {
      '+': (a, b) => a + b,
      '-': (a, b) => a - b,
      '*': (a, b) => a * b,
      '/': (a, b) => a / b,
    };

    const parts = expression.split(/([+\-*/])/);
    let result = parseFloat(parts[0]);

    for (let i = 1; i < parts.length; i += 2) {
      const operator = parts[i];
      const nextOperand = parseFloat(parts[i + 1]);
      result = ops[operator](result, nextOperand);
    }

    return result;
  };

  const calculateResult = () => {
    try {
      const result = calculate(input);
      if (!isNaN(result) && isFinite(result)) {
        addToHistory(`${input} = ${result}`);
        setInput(result.toString());
      } else {
        alert('Result is invalid (Not a Number). Please enter a valid number.');
        setInput('0');
      }
      setOperator(null);
      setOperand(null);
    } catch (error) {
      alert('An error occurred. Please enter a valid number.');
      setInput('0');
    }
  };

  return (
    <div className="calculator">
      <input
        type="text"
        className="display"
        value={input}
        readOnly
      />
      <Keypad onButtonClick={handleButtonClick} onEqualsClick={calculateResult} />
    </div>
  );
}

export default Calculator;
