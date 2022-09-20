import React from 'react'

function UseStateObject() {
    const [myObject, setMyObject] = React.useState({
        myName:'Priya Patel',myAge:27,degree:'MCS'
    })
    const changeObject = () =>{
        setMyObject({...myObject, degree:'MCA'})
    }
  return (
    <div>
        <div>
            <h2>Name: {myObject.myName}</h2>
            <h2>Age: {myObject.myAge}</h2>
            <h2>Degree: {myObject.degree}</h2>
        </div>
        <button className='btn' onClick={changeObject}>Update</button>
    </div>
  )
}

export default UseStateObject