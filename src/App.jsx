
import { useState, useRef } from 'react';
import './App.css'

function App() {

  const [city, setCity] = useState("");
  const inputRef = useRef(null);

  const focus = () => {
    inputRef.current.focus()
  }

  return (
    <>
      <input ref={inputRef} value={city} onChange={e => setCity(e.target.value)} />
      <p>I want to go to {city}</p>
      <button onClick={focus}>Use Ref</button>

    </>
  )
}

export default App
