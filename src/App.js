import logo from './logo.svg';
import './App.css';
import User from './User';
import User2 from './User2';
import Counter from './Counter';
import Input from './Input';
import MyButton from './MyButton';

import MyForm from './MyForm';
import Profile from './Profile';
import FormValidation from './FormValidation';
import { useState } from 'react';
//  Using Function Component
function App() {

  const passFunction=()=>{
    console.log("buton CLicked");
  }
  const [count, setCount]=useState(0);

  // print the counter
  const countFunction= ()=>{
    <h2>count</h2>
    console.log(count);
  }

  // ?increment count by 1 
  const incrementFunction=()=>{
    setCount(count + 1);
  }
  return (
    <div className="App">
 
      {/* <User2/> */}
 {/* Increment the couter */}
      {/* <Counter/> */}

      {/* Get input box value without using form */}
      {/* <Input/> */}

      {/* Covering hide and show with button */}
      {/* <myButton/> */}
      
      {/* Form in React */}
      {/* <MyForm/> */}

      {/* <Profile></Profile> */}

      {/* <FormValidation/> */}

      
      {/* pass function as props */}
    <User passFunction={passFunction} count={count} increment={incrementFunction} />

    </div>
  );
}




/// Using class 

// import React, { Component } from "react"
// import UserList from './UserList';
// class App extends Component {

//   constructor(){
//     super();
//       this.state={
//         name:"Aniket kale"
//       }
//   }
//   render() {
  
//     return (
//       <div className="App">
//         <h3> With class </h3>
       
//         <UserList name={this.state.name} />
//         <button onClick={()=>{ this.setState({name:"i am "})}}>Click on </button>
//       </div>
//     );
//   }
// }
export default App;