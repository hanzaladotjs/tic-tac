import { useState } from "react";
import "./App.css";


function App() {
  
  const [color, setColor] = useState<any>("");
  
  function handleColor() {
    setColor("bg-black text-white");
  }
  return (
    <div className={color}>
      <div className="flex flex-col justify-center items-center min-h-220">
    
        <div className="flex">
          <Button ></Button>
          <Button ></Button>
          <Button ></Button>
        </div>
        <div className="flex">
          <Button ></Button>
          <Button ></Button>
          <Button ></Button>
        </div>
        <div className="flex mb-10">
          <Button></Button>
          <Button></Button>
          <Button></Button>
        </div>
        <button onClick={handleColor} className="border border-red-800 p-3 rounded">dark mode </button>
      </div>
    </div>
  );
}

const Button = () :any => {
  const [shape, setShape] = useState<string>("")
  function handleShape() {
    setShape("x");
  }

  return (
      <button className="border md:w-30 md:h-30 w-20 h-20" onClick={handleShape}  >
         {shape}
      </button>
  )
}





export default App;
