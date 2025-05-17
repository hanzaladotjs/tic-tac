import { useState } from "react";
import "./App.css";

function App() {
  // const [color, setColor] = useState<any>("");
  const [mode, setMode] = useState<boolean>(true);
  const [square, setSquare] = useState<any>(Array(9).fill(null));
  const [shape, setShape] = useState<boolean>(true);

  // theme
  function handleColor() {
    if (mode == false) {
      setMode(true);
    } else {
      setMode(false);
    }
  }

  //storing state of squares and x an o alternating
  function handleClick(i: any) {
    if (square[i] || calculateWinner(square)) {
      return;
    }
    const nextSquares = square.slice();
    if (shape) {
      nextSquares[i] = "x";
    } else {
      nextSquares[i] = "o";
    }
    setSquare(nextSquares);
    setShape(!shape);
  }

  function calculateWinner(square: any) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (square[a] && square[a] === square[b] && square[a] === square[c]) {
        return square[a];
      } 
    }
    return null;
  }

  const winner: any = calculateWinner(square)
  let status
  if (winner){
    status = "winner -> " + winner
  } else {
    status = "game draw / not started yet"
  }


  return (
    <div className={!mode ? "bg-black text-white text-xl" : "bg-white text-black text-xl"}>
      <div className="flex flex-col justify-center items-center min-h-220">
        <div className="flex">
          <Button
            shape={square[0]}
            onSquareClick={() => handleClick(0)}
          ></Button>
          <Button
            shape={square[1]}
            onSquareClick={() => handleClick(1)}
          ></Button>
          <Button
            shape={square[2]}
            onSquareClick={() => handleClick(2)}
          ></Button>
        </div>
        <div className="flex">
          <Button
            shape={square[3]}
            onSquareClick={() => handleClick(3)}
          ></Button>
          <Button
            shape={square[4]}
            onSquareClick={() => handleClick(4)}
          ></Button>
          <Button
            shape={square[5]}
            onSquareClick={() => handleClick(5)}
          ></Button>
        </div>
        <div className="flex mb-10">
          <Button
            shape={square[6]}
            onSquareClick={() => handleClick(6)}
          ></Button>
          <Button
            shape={square[7]}
            onSquareClick={() => handleClick(7)}
          ></Button>
          <Button
            shape={square[8]}
            onSquareClick={() => handleClick(8)}
          ></Button>
        </div>

        <button
          onClick={handleColor}
          className="border border-red-800 p-3 mb-2 rounded"
        >
          {" "}
          {mode ? "dark mode" : "light mode"}{" "}
        </button>
        <h2 className="font-mono">{status}</h2>
      </div>
    </div>
  );
}

// squares 
const Button = ({ shape, onSquareClick }: any): any => {
  return (
    <button
      className="border md:w-30 md:h-30 w-20 h-20"
      onClick={onSquareClick}
    >
      {shape}
    </button>
  );
};

export default App;
