import React, {useState} from 'react'
import UsestateArray from './components/UsestateArray';
import './App.css';
import './Style.css'

function App() {
  //var myname = "Sumit Kumar"
  //const [myname, setMyName] = useState("Sumit Kumar ");
  //const [count, setCount] = useState(0)
//const changeHead = () =>{
  //let val = myname;
  //if(val === "Sumit Kumar" ){
 //   setMyName("Kya haal hai maalik");
 // }else{
   // setMyName("Sumit Kumar" );
 // }

//}
 
  return (
    
    <>
  
  {/*  <h1 className="head">{myname}</h1>
  // <button className="btn" onClick={changeHead} >Click me</button>

    <div className="container">
      <button className='plus' onClick={() => setCount(count+1)}>+</button>
      <h1 className="num">{count}</h1>
      <button className="minus" onClick={() =>
        (count === 0) ?
          setCount(0)
          :
            setCount(count-1)
          
      } >- </button> 
    </div>
    */}
    <UsestateArray />
    </>
      
  );
}

export default App;
