import React, { useState } from "react";

function MyButton() {
    const [data, setData] = useState("aniket");  // Declare 'data' as state

    const demo = () => {
        setData("aniket kale");  // Update the state
        alert(data);  // This will alert the old value due to asynchronous state updates
    };

    return (
        <>
            <div>
                <p>Current Data: {data}</p>  {/* Display the updated data */}
                <button onClick={demo}>
                    Click
                </button>
            </div>
        </>
    );
}

export default MyButton;
