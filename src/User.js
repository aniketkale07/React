import React,{useState} from 'react';

export default function User(props){
    return(
<>
<h1>User</h1>
<button onClick={props.passFunction}> click me</button>


<h4>counter : {props.count}</h4>

<button onClick={props.increment}>Increment</button>
</>

    )}