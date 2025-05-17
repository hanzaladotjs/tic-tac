import { useState } from "react";
import "./App.css";

function App() {
  // const [color, setColor] = useState<any>("");
  const [mode, setMode] = useState<boolean>(true);
  const [square, setSquare] = useState<any>(Array(9).fill(null));

  function handleColor() {
    if (mode == false) {
      setMode(true);
    } else {
      setMode(false);
    }
  }

  function handleClick(i :any) {
    const nextSquares = square.slice()
    nextSquares[i] ="x"
    setSquare(nextSquares)


  }

  return (
    <div className={!mode ? "bg-black text-white" : "bg-white text-black"}>
      <div className="flex flex-col justify-center items-center min-h-220">
        <div className="flex">
          <Button shape={square[0]} onSquareClick={() =>handleClick(0)}></Button>
          <Button shape={square[1]} onSquareClick={ () => handleClick(1)}></Button>
          <Button shape={square[2]} onSquareClick={ () => handleClick(2)}></Button>
        </div>
        <div className="flex">
          <Button shape={square[3]} onSquareClick={ () => handleClick(3)}></Button>
          <Button shape={square[4]} onSquareClick={() => handleClick(4)}></Button>
          <Button shape={square[5]} onSquareClick={() => handleClick(5)}></Button>
        </div>
        <div className="flex mb-10">
          <Button shape={square[6]} onSquareClick={() => handleClick(6)}></Button>
          <Button shape={square[7]} onSquareClick={() => handleClick(7)}></Button>
          <Button shape={square[8]} onSquareClick={() => handleClick(8)}></Button>
        </div>
        
        <button
          onClick={handleColor}
          className="border border-red-800 p-3 rounded"
        >
          {" "}
          {mode ? "dark mode" : "light mode"}{" "}
        </button>
      </div>
    </div>
  );
}

const Button = ({ shape , onSquareClick}: any): any => {
  return <button className="border md:w-30 md:h-30 w-20 h-20" onClick={onSquareClick}>{shape}</button>;
};

export default App;
