import React, { useState } from 'react';
import Calculator from './Components/Calculator';
import History from './Components/History';
import './App.css';

function App() {
  const [history, setHistory] = useState(JSON.parse(localStorage.getItem('calcHistory')) || []);
  const [showHistory, setShowHistory] = useState(true);

  const addToHistory = (entry) => {
    const newHistory = [...history, entry];
    setHistory(newHistory);
    localStorage.setItem('calcHistory', JSON.stringify(newHistory));
  };

  const clearHistory = () => {
    setHistory([]);
    localStorage.removeItem('calcHistory');
  };

  return (
    <div className="app">
      <Calculator addToHistory={addToHistory} />
      <button className="hamburger" onClick={() => setShowHistory(!showHistory)}>
        {showHistory ? 'X' : '='}
      </button>
      <History
        history={history}
        clearHistory={clearHistory}
        showHistory={showHistory}
      />
    </div>
  );
}

export default App;
