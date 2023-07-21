//clean up function
import React, { useState, useEffect } from 'react'

const UseEffects2 = () => {
      const [size, setSize] = useState(window.screen.width);

      const actualWidth = () =>{
            setSize(window.innerWidth);
      }
      useEffect ( ()=>{
            console.log("add event")
            window.addEventListener("resize", actualWidth);
            //cleanup
            
            return ()=>{
                  console.log("remove event")
                  window.removeEventListener("resize", actualWidth);
            }
      })
  return (
    <>
     <h1 className="sent">Hii my screen size is:</h1> 
     <h1 className="sent">{size}</h1>
    </>
  )
}

export default UseEffects2
