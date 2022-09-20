import React ,{useEffect, useState} from 'react'

const UseEffact1 = () => {


    const [count, setCount] = useState(0)

    useEffect(()=>{

        if(count>=1){
            document.title = `Chats (${count})`
        }
        else{
            document.title = `Chats`
        }


    },[count])
    

  return (
    <div className='effact-content'>
        <h2>{count}</h2>
        <button className='btn' onClick={()=> setCount(count + 1)}>
            click
        </button>
    </div>
  )
}

export default UseEffact1