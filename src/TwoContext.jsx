import { useContext } from "react";
import { Context } from "./Context";

function TwoContext () {

    const [context, setContext] = useContext(Context);

    return (
        <div className="container">

            <p>COMPONENT TWO</p>

            <p>{context}</p>

        </div>
    )
}

export default TwoContext