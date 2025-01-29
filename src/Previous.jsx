import { useEffect, useRef, useState } from "react";

function Previous() {

    const [count, setCount] = useState(0);

    const previousCountRef = useRef();

    const previousCount = previousCountRef.current;

    useEffect(() => {
        previousCountRef.current = count;
    })

    return (
        <div>
            <p>Current state: {count}</p>
            <p>Previous state: {previousCount}</p>
            <button onClick={() => setCount(count +1)}>Click here</button>
        </div>
    )
}

export default Previous