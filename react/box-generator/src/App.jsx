import { useState } from 'react';
import './App.css'
import BoxForm from './components/BoxForm'
import Box from './components/Box';

function App() {
  const [boxes, setBoxes] = useState([])

  return (
    <>
      <BoxForm setBoxes={setBoxes}/>
        <div style={{display: "flex", flexWrap: "wrap", gap: "20px", padding: "20px" }}>

      {
            boxes.map((box, i) => (
              <Box key={i}color={box.color}/>
            ))
      }
        </div>
    </>
  )
}

export default App
