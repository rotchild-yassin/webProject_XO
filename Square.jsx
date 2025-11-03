import React from 'react';

function Square({ value, onClick }) {
  return (
    <button 
      className="btn btn-outline-primary square" 
      onClick={onClick}
    >
      {value}
    </button>
  );
}

export default Square;