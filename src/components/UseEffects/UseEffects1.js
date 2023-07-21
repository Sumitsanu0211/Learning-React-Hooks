import React, { useEffect, useState } from 'react'

const UseEffects1 = () => {

      const [count, setCount] = useState(0);
      useEffect( ()=> {
            if(count >= 1){
                  document.title = `chats(${count})`;   
            }else{
                  document.title = `chat`  
            }
            
      });
      
      
  return (
    <>
      <h1 className="sent">{count} </h1>
      <button className="btn" onClick={()=> setCount(count+1)}>Click</button>
    </>
  )
}

export default UseEffects1
