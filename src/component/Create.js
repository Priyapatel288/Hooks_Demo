import React, { useState} from 'react';
import axios from "axios"
import {useNavigate} from "react-router-dom";
import {Link } from "react-router-dom";
const Create = () => {

    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [mobile, setMobile] = useState();
    const history = useNavigate();
    
    const handleSubmit = (e) =>{
        e.preventDefault();
        axios.post('https://6322bbdf362b0d4e7dd22eaf.mockapi.io/crud-operation',{
           name:name,
           Email:email,
           Mobile:mobile
        })
        .then(()=>{
            history("/read");
        });
        
    }
    
  return (
    <div className='container'>

        <div className='headings'>
            <h2>Create data</h2>
            <Link to={'/read'} className="link-btn">Read</Link>
        </div>
        <div className='form-data col-md-6 m-auto pt-5'>
           
            <form>
                <div className='form-group d-flex mb-3'>
                    <label>Name</label>
                    <input type='text' className='form-control' onChange={(e)=> setName(e.target.value)}/>
                </div>
                <div className='form-group d-flex mb-3'>
                    <label>Email</label>
                    <input type='email' className='form-control' onChange={(e)=> setEmail(e.target.value)}/>
                </div>
                <div className='form-group d-flex mb-3'>
                    <label>Mobile</label>
                    <input type='email' className='form-control' onChange={(e)=> setMobile(e.target.value)}/>
                </div>
                <div className='form-group text-center' onClick={handleSubmit}>
                    <button className='btn btn-primary'>Submit</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Create