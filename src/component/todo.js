import React ,{useEffect, useState} from 'react'
import { FaPlus } from "react-icons/fa";
import { FaTrashAlt } from "react-icons/fa";


//get data from local storage
const getLocalItems = () =>{

    let list =localStorage.getItem('list');
    console.log(list);
    if(list){
        return JSON.parse(localStorage.getItem('list'));
    }else{
        return [];
    }
}
const Todo = () => {
    const [inputData, setinputData] = useState('')
    const [items, setItems] = useState(getLocalItems())
        // add items to todo list
        const addItem = () =>{

                if(!inputData){

                }
                else{

                    setItems([...items , inputData])
                    setinputData('')
                }
        }


    //delete data
    const deleteItem = (id) =>{
        console.log(id)

        const updateitems = items.filter((elem,ind) =>{
            return ind != id;
        });

        setItems(updateitems)
    }

    //add data to local storage


    useEffect(() => {
        localStorage.setItem('list',JSON.stringify(items));
    },[items])

    return (
        <>
        <div className='container h-100'>
            <div className='h-100 d-flex align-items-center'>
                <div className='mainDiv text-center col-md-4 m-auto'>
                    <div className='childDiv'>
                        <h4>ToDo App</h4>
                    </div>
                
                    <div className='inpoutDiv d-flex justify-content-center align-items-center'>
                        <div className='custom-input w-100'>
                            <input type='text' value={inputData} onChange={(e)=> setinputData(e.target.value)}/>
                        </div>
                        <button className='icon-button' onClick={addItem}> <FaPlus/></button>
                    </div>
                    <div className='append-card'>
                            {
                                items.map((elem ,ind) =>{ 
                                    return(
                                        <div className='div-li card mb-2' key={ind}>
                                            <span className='text-start'>{elem}</span>
                                            <button className='icon-button' onClick ={() => deleteItem(ind)}> <FaTrashAlt/></button>
                                        </div>
                                    )
                                })
                            }
                    </div>
                    
                    <button className='btn'> CheckList</button>
                </div>
            </div>
        </div>
        </>
    )
}

export default Todo