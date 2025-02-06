import { useEffect, useReducer, useRef } from "react";

const initialState = {
    clock: 0,
    isTicking: false
}

function reducer(state, action) {
    switch (action.type) {
        case 'START': 
            return { ...state, isTicking: true};
        case 'PAUSE': 
            return { ...state, isTicking: false};
        case 'RESET': 
            return {clock: 0, isTicking: false};
        case 'TICK': 
            return { ...state, clock: state.clock + 1}
        default: 
            return state;
    }
}


function Timer() {

    const [time, dispatch] = useReducer(reducer, initialState);
    const myTimerRef = useRef(0);

    useEffect(() => {
        if (!time.isTicking) {
            return;
        }
        myTimerRef.current = setInterval(() => dispatch({type: 'TICK'}), 1000);
        return () => {
            clearInterval(myTimerRef.current);
            myTimerRef.current = 0
        }
    }, [time.isTicking])


    return (
        <div className="container">

            <p>{time.clock} sec</p>

            <button onClick={() => dispatch({type: 'START'})}>START</button>

            <button onClick={() => dispatch({type: 'PAUSE'})}>PAUSE</button>

            <button onClick={() => dispatch({type: 'RESET'})}>RESET</button>

        </div>
    )
}

export default Timer