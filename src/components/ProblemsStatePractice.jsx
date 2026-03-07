import React, { useState } from 'react';
import { use } from 'react';
function ProblemStatePractice({ items }) {
    const [count,setCount] = useState(0);
    const handleIncrease = () => {
        if(count <11){
            setCount(count + 1);
        }
    };

    const handleDecrease = () => {
        if(count > 0){
            setCount(count - 1);
        }
    };
    const reset = () => {
        setCount(0);
    };


    return (
        <div>
            <h2>Counter With Limit</h2>
            <h1>{count}</h1>
            <button onClick={handleIncrease}>Increase</button>
            <button onClick={handleDecrease}>Decrease</button>
            <button onClick={reset}>Reset</button>
        </div>
    )
}
export default ProblemStatePractice;