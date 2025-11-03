import React,{ useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Square from './Square'
function App()  {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);

  const calculateWinner = (squares) => {
    const lines = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
      [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
      [0, 4, 8], [2, 4, 6] // diagonals
    ];

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  };

  const handleClick = (i) => {
    if (calculateWinner(squares) || squares[i]) return;
    
    const newSquares = squares.slice();
    newSquares[i] = xIsNext ? 'X' : 'O';
    setSquares(newSquares);
    setXIsNext(!xIsNext);
  };

  const winner = calculateWinner(squares);
  const status = winner 
    ? `Winner: ${winner}`
    : squares.every(square => square)
    ? "Game Draw!"
    : `Next player: ${xIsNext ? 'X' : 'O'}`;

  const resetGame = () => {
    setSquares(Array(9).fill(null));
    setXIsNext(true);
  };
  console.log(squares)

  return (
    < >
    <div className='bg-blue' style={{backgroundColor:"red"}}>
    <div className="game-container" >
      <div className="status mb-4">
        <h2>{status}</h2>
      </div>
      <div className="game-board">
        {[0, 1, 2].map((row) => (
          <div key={row} className="board-row">
            {[0, 1, 2].map((col) => {
              const index = row * 3 + col;
              return (
                <Square 
                  key={index}
                  value={squares[index]}
                  onClick={() => handleClick(index)}
                />
              );
            })}
          </div>
        ))}
      </div>
      <button 
        className="btn btn-primary mt-4" 
        onClick={resetGame}
      >
        Reset Game
      </button>
    </div>
    </div>
  </>);
}



export default App
