import { useState, useRef } from "react";

function Focus() {

    const [city, setCity] = useState("");
    const inputRef = useRef(null);

    const focus = () => {
        inputRef.current.focus()
    }

    return (
        <div>
            <input ref={inputRef} value={city} onChange={e => setCity(e.target.value)} />
            <p>I want to go to {city}</p>
            <button onClick={focus}>Use Ref</button>
        </div>
    )
}

export default Focus