import React, { useEffect, useState } from 'react'
import axios from "axios"
import {Link, useNavigate, useParams} from "react-router-dom";
const Update = () => {

    const {ID} = useParams();
    console.log(ID)

    const [id, setId] = useState(0);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [mobile, setMobile] = useState("");
    const history = useNavigate();

    useEffect(() => {
        setId(localStorage.getItem("id"));
        setName(localStorage.getItem("Name"));
        setEmail(localStorage.getItem("Email"));
        setMobile(localStorage.getItem("Mobile"));
    }, [])
    
  const handleUpdate = () =>{
   console.log('====================================');
   console.log("update");
   console.log('====================================');
    axios.put(`https://6322bbdf362b0d4e7dd22eaf.mockapi.io/crud-operation/${id}`,{
        name:name,
        Email:email,
        Mobile:mobile
    }).then(()=>{
        history("/read");
    });
  }

  return (
    <>
     <div className='headings py-5'>
            <h2>Update data</h2>
            <Link to={'/read'}>Read</Link>
        </div>
    <div className='form-data col-md-6 m-auto'>
        <form>
            <div className='form-group d-flex mb-3'>
                <label>Name</label>
                <input type='text' className='form-control' value={name} 
                onChange={(e)=> setName(e.target.value)}
                />
            </div>
           
            <div className='form-group d-flex mb-3'>
                <label>Email</label> 
                <input type='email' className='form-control' value={email} 
                onChange={(e)=> setEmail(e.target.value)}
                />
            </div>
            <div className='form-group d-flex mb-3'>
                <label>Mobile</label>
                <input type='text' className='form-control'  value={mobile}
                 onChange={(e)=> setMobile(e.target.value)}
                 />
            </div>
            <div className='form-group text-center'>
                <button className='btn btn-primary' 
                onClick={handleUpdate}
                >Update
                </button>
            </div>
        </form>
    </div>
    </>
  )
}

export default Update