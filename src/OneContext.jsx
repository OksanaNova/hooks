import { useContext } from "react";
import { Context } from "./Context";

function OneContext () {

    const [context, setContext] = useContext(Context);

    return (
        <div className="container">

            <p>COMPONENT ONE</p>

            <button onClick={() => setContext('New state!')}>CHANGE THE TEXT</button>

        </div>
    )
}

export default OneContext