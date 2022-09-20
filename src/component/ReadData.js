    import React, { useEffect, useState } from 'react'
    import axios from "axios"
    import {Link } from "react-router-dom";
    import {useNavigate} from "react-router-dom";

    const ReadData = () => {
        const [search, setSearch] = useState('');
        const [data, setData] = useState([]);
        const [filteredData, setFilteredData] = useState([]);
        const history = useNavigate();

        const getData = () =>{
            axios
            .get("https://6322bbdf362b0d4e7dd22eaf.mockapi.io/crud-operation")
            .then((res)=>{          
                console.log(res.data);       
                setData(res.data);       
            });
        }

        
        useEffect(() => {
            axios
            .get("https://6322bbdf362b0d4e7dd22eaf.mockapi.io/crud-operation")
            .then((response)=>{             
                setData(response.data);       
            });
        }, [])

        useEffect(() => {
            setFilteredData(
                data.filter((user) => user.name.toLowerCase().includes(search.toLowerCase()) )
            )
        },[search,data])

        const handleDelete = (id) =>{
            axios.delete(`https://6322bbdf362b0d4e7dd22eaf.mockapi.io/crud-operation/${id}`)
            .then(()=>{       
               getData();  
            });
        }

        const setToLocalStorage = (id,name,email,mobile) =>{
            console.log("dasd" ,id,name,email,mobile);
            localStorage.setItem("id" ,id);
            localStorage.setItem("Name" ,name);
            localStorage.setItem("Email" ,email);
            localStorage.setItem("Mobile" ,mobile)
        };


        return (
        
            <div className='read-data col-md-6 m-auto pt-5'>
                <div className='headings'>
                    <h2>Data info</h2>
                    <Link to={'/create'} className="btn-primary p-2 link-btn">Create</Link>
                </div>
                <div className='searchbar my-5'>
                    <input type="text" placeholder="search" onChange={(e)=>{setSearch(e.target.value)}}/>
                </div>
                <table className="table">
                    <thead className='bg-dark'>
                            <tr>
                            <th scope="col" className='text-white'>id</th>
                            <th scope="col" className='text-white'>Name</th>
                            <th scope="col" className='text-white'>Mobile</th>
                            <th scope="col" className='text-white'>Email</th>
                            <th></th>
                            </tr>
                    </thead>
                    <tbody>
                        {filteredData.map((dataVal)=>{
                                return(
                                    <tr key={dataVal.id}>                        
                                        <td>{dataVal.id}</td>
                                        <td>{dataVal.name}</td>
                                        <td>{dataVal.Email}</td>
                                        <td>{dataVal.Mobile}</td>
                                        <td>
                                            <Link to={'/update'}>
                                            <button type="button" className="btn  m-0" 
                                            onClick={()=> setToLocalStorage(dataVal.id,dataVal.name,dataVal.Email,dataVal.Mobile)}>Edit</button>
                                            </Link>
                                            <button type="button" className="btn m-0 ms-2" onClick={()=>handleDelete(dataVal.id)}>Delete</button>
                                        </td>
                                        
                                    </tr>
                                )
                            })
                        }   
                    </tbody>
                </table>
            </div>
        )
    }

    export default ReadData