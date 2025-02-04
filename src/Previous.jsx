import { useEffect, useRef, useState } from "react";

function Previous() {

    const [count, setCount] = useState(0);

    const previousCountRef = useRef(null);

    const previousCount = previousCountRef.current;

    useEffect(() => {
        console.log(count)
        console.log('before', previousCountRef.current)
        previousCountRef.current = count;
        console.log('after', previousCountRef.current)
    })

    return (
        <div className="container">
            <p>Current state: {count}</p>
            <p>Previous state: {previousCount}</p>
            <button onClick={() => setCount(count +1)}>Click here</button>
        </div>
    )
}

export default Previous