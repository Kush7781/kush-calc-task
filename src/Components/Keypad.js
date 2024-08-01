import React from 'react';

function Keypad({ onButtonClick, onEqualsClick }) {
  return (
    <div className="keypad">
      <button onClick={() => onButtonClick('7')}>7</button>
      <button onClick={() => onButtonClick('8')}>8</button>
      <button onClick={() => onButtonClick('9')}>9</button>
      <button onClick={() => onButtonClick('/')}>/</button>

      <button onClick={() => onButtonClick('4')}>4</button>
      <button onClick={() => onButtonClick('5')}>5</button>
      <button onClick={() => onButtonClick('6')}>6</button>
      <button onClick={() => onButtonClick('*')}>*</button>

      <button onClick={() => onButtonClick('1')}>1</button>
      <button onClick={() => onButtonClick('2')}>2</button>
      <button onClick={() => onButtonClick('3')}>3</button>
      <button onClick={() => onButtonClick('-')}>-</button>

      <button onClick={() => onButtonClick('0')}>0</button>
      <button onClick={() => onButtonClick('.')}>.</button>
      <button onClick={() => onButtonClick('+')}>+</button>
      <button onClick={() => onButtonClick('C')}>C</button>
      <button onClick={() => onButtonClick('CE')}>CE</button>
      <button onClick={() => onButtonClick('backspace')}>&lt;</button>

      <button onClick={onEqualsClick}>=</button>
    </div>
  );
}

export default Keypad;
