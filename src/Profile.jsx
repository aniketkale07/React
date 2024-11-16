import React from "react";
import "./App.css";

export default function Profile() {
   const list = ["pineapple", "watermelon", "strawberries"];
    const isLogged = false;
const list2ph = ["Lion", "Tiger", "Elephant", "Monkey", "Giraffe"];
    return (
        <>
            <div>
                {isLogged ? <h2>Hello User ..</h2> : <h2>New User </h2>}
            </div>

            <div>
                {list.length > 0 ? (
                    list.map((item, index) => {
                        return <div key={index}>{item}</div>;
                    })
                ) : (
                    <p>There are no items in the list</p>
                )}
            </div>
        </>
    );
}
