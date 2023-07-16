import React, {useState} from 'react'

const UsestateArray = () => {

      
      //creating array
      const bioData = [
            {
                  id: 0, myName: "Sumit kumar", age: 23
            },{
                  id: 1, myName: "Vineet kumar", age: 24
            }
      ]
      const[array, setArray] = useState(bioData);
      const clearArray =()=>{
     
                  setArray([])
            
      }

  return (
    <>
    {
      array.map((curElem) => {
       return <h1 className="sent" key={curElem.id}>My name is {curElem.myName} & my age is {curElem.age}</h1>
      })
    }
    <button className="click" onClick={clearArray}>Click here</button>

    </>
  )
}

export default UsestateArray
