import logo from './logo.svg';
import './App.css';
import User from './User';
import User2 from './User2';
import Counter from './Counter';
import Input from './Input';
import MyButton from './MyButton';

//  Using Function Component
function App() {
  return (
    <div className="App">
 
      {/* <User2/> */}
 {/* Increment the couter */}
      {/* <Counter/> */}

      {/* Get input box value without using form */}
      <Input/>

      {/* Covering hide and show with button */}
      <myButton/>
      
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