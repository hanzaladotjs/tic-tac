import { useState } from "react";
import "./App.css";
import { Button } from "./components/Button";

function App() {
  const [shape, setShape] = useState<string>("");
  const [color, setColor] = useState<any>("");
  const handleShape = () => {
    setShape("O");
  }
  function handleColor() {
    setColor("bg-black text-white");
  }
  return (
    <div className={color}>
      <div className="flex flex-col justify-center items-center min-h-220">
    
        <div className="flex">
          <Button onClick={handleShape} props={shape}></Button>
          <Button onClick={handleShape} props={shape}></Button>
          <Button onClick={handleShape} props={shape}></Button>
        </div>
        <div className="flex">
          <Button onClick={handleShape} props={shape}></Button>
          <Button onClick={handleShape} props={shape}></Button>
          <Button onClick={handleShape} props={shape}></Button>
        </div>
        <div className="flex mb-10">
          <Button props={shape}></Button>
          <Button props={shape}></Button>
          <Button props={shape}></Button>
        </div>
        <button onClick={handleColor} className="border border-red-800 p-3 rounded">dark mode </button>
      </div>
    </div>
  );
}

export default App;
