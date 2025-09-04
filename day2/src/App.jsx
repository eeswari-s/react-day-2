import React from 'react'
import Navbar from './Components/Navbar'
import CompA from './Components/CompA';
import CompB from './Components/CompB';
import CompC from './Components/CompC';


function App() {
let a=10;
let arr=[1,2,3,4,5];
const obj={"batch":"react","team":"3"};
const arrobj = [
  { id: 1, name: "sachin", marks: 100 },
  { id: 2, name: "virat", marks: 200 },
  { id: 3, name: "rohit", marks: 300 }
];
  return (
    /*<!-- <h1>App</h1> -->*/
    <div>
      <h1>Title -{a}</h1>
     <Navbar/>
     <CompA arr={arr}/>
     <CompB obj={obj}/>
      <CompC arrObj={arrobj} />  
    </div>
  )
}

export default App
