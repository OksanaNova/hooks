import { useReducer } from "react";

function reducer(state, action) {
    switch (action.type) {
        case 'ADD': return {count: state.count +1};
        case 'SUBSTRACT': return {count: state.count -1};
        default: return state;
    }
}

function Reducer() {
    
    const [state, dispatch] = useReducer(reducer, { count: 0 })

    return (
        <div className="container">

            <p>{state.count}</p>
            <button onClick={() => dispatch({type: 'ADD'})} >ADD</button>
            <button onClick={() => dispatch({type: 'SUBSTRACT'})} >SUBSTRACT</button>

        </div>
    )
}

export default Reducer;