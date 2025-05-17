import { useState } from "react";
import "./App.css";


function App() {
  
  // const [color, setColor] = useState<any>("");
  const [mode, setMode] = useState<boolean>(true)
  
  function handleColor() {
    if(mode == false){
      setMode(true)
    } else {
      setMode(false)
    }
  }

  return (
    <div className={!mode ? "bg-black text-white" : "bg-white text-black"}>
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
        <button onClick={handleColor} className="border border-red-800 p-3 rounded"> {mode ? "dark mode" : "light mode"} </button>
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
