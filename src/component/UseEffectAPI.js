import React, { useEffect, useState } from 'react'
import { FcApproval } from "react-icons/fc";

const UseEffectAPI = () => {

    const [users, setUsers] = useState([])

    const getUsers = async ()=>{

        try{
            const response = await fetch('https://jsonplaceholder.typicode.com/photos');
            setUsers(await response.json());        
        }
        catch(error){
            console.log(error);
        }
    }

    useEffect(()=>{
        getUsers();
    },[])

  return (
    <>
        <h1>List Of Users</h1>
        <div className='container-fluid'>
            <div className='row text-center'>

                {
                    users.map((items)=>{
                        return(
                            <> 
                                <div className='col-10 col-md-4 mt-5' key={items.id}>
                                    <div className='card p-2'>
                                        <div className='d-flex align-items-center'>
                                            <FcApproval/>
                                            <div className='image'>
                                                <a href={items.url}>
                                                    <img src={items.thumbnailUrl} className='img-fluid'/>
                                                </a>                                                                                                   
                                            </div>
                                            <div className='w-100 text-start'>
                                                <h4>{items.id}</h4>
                                                <p>{items.title}</p>
                                            </div>
                                        
                                        </div>
                                    </div>
                                </div>
                            </>
                        )
                    })
                }
               
            </div>

        </div>
    </>
  )
}

export default UseEffectAPI