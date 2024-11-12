import React, { useState } from "react";

function Counter() {
    // Initialize the state correctly with useState(0)
    const [counter, setCounter] = useState(0);

    // Function to increment the counter
    const incrementCounter = () => {
        setCounter(counter + 1); // Increment counter by 1
    };

    return (
        <div>
            <h4 className="text-3xl font-bold underline">Counter: {counter}</h4>
            <button onClick={incrementCounter}>Increment</button> {/* Add label to button */}
        </div>
    );
}

export default Counter;
