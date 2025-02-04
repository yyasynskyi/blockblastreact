import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Board from "./components/Board/Board.jsx";
import Game from "./components/Game/Game.jsx";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <Game/>
    </>
  )
}

export default App
