import React, {useState} from 'react';

export default function Input(){
    const [inputValue, setIntputValue] =useState("");
    const [showValue, setShowValue] = useState(false);

    // display the value in textbox after clicking on button
    const displayValue=(event)=>{
        setShowValue(true);
    }

    const handleChange=(event)=>{
        console.log(event.target.value);
        setIntputValue(event.target.value);
    }

return(
    <>
    <div>
    <h2>{showValue ? inputValue : ''}</h2>
    
        <input type="text" onChange={handleChange}/>
        <button onClick={()=>setShowValue(true)}> value</button>
    </div>
    </>
)
}
