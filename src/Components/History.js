import React from 'react';


function History({ history, clearHistory, showHistory, setShowHistory }) {
  return (
    <div className={`history ${showHistory ? 'show' : ''}`}>
      <button onClick={clearHistory}>Clear History</button>
      <div className="history-list">
        {history.map((item, index) => (
            <div className="history-item" key={index}>
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}

export default History;
