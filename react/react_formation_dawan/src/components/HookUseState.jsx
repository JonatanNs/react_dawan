import { useState } from "react";

function HookUseState(){

    const [cpt, setCpt] = useState(0);

    console.log("cpt", cpt);

    const increment = () =>{
        setCpt((prevValue) => prevValue +1);
    }

    const decrement = () =>{
        setCpt((prevValue) => prevValue -1);
    }

    const reset = () =>{
        setCpt(0);
    }

    return (
        <>
            <h1>Le hook use state</h1>
            <p>{cpt}</p>
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
            <button onClick={reset}>Reset</button>
        </>
    )
}

export default HookUseState