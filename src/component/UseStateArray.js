import React, { useState } from 'react'


const UseStateArray = () => {

    const biodata = [
        {
            id:0,
            myName:'priya',
            age:26
        },
        {
            id:1,
            myName:'rinkal',
            age:27
        },
        {
            id:2,
            myName:'sonu',
            age:22
        }
    ]

    const [myArray, setfirst] = useState(biodata)

    const clearArray = () =>{
        setfirst([]);
    }
    const removeElem = (id) =>{
        console.log(id);
        const myNewArray = myArray.filter((item) => {
            return item.id !== id;
        })
        setfirst(myNewArray);
    }

  return (
    <>
    <div className='items'>
        {
            myArray.map((items) => {
                return(

                <div key={items.id}> 
                    <h2>Name : {items.myName}</h2>
                    <h2>Age : {items.age}</h2>
                    <button className='btn-remove' onClick={ () => removeElem(items.id)}>remove</button>
                </div>
                );
            })
        }
        <button className='btn' onClick={clearArray}>Clear</button>
        
    </div>
    </>
  )
}

export default UseStateArray