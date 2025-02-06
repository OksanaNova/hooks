import { useReducer } from "react";


function reducer(state, action) {
    switch(action.type) {
        case 'multiply': return {count: state.count * 5};
        case 'divide': return {count: state.count / 5};
        default: return state;
    }
}

function HomeworkOne() {

    const [state, dispatch] = useReducer(reducer, {count: 2})

    return (
        <div className="container">

            <p>My number: {state.count}</p>

            <button onClick={() => dispatch({type: 'multiply'})}>multiply by 5</button>

            <button onClick={() => dispatch({type: 'divide'})}>divide by 5</button>

        </div>
    )
}

export default HomeworkOne