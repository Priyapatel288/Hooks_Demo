import React ,{useState} from 'react'

const BasicForm = () => {
    const [email, setEmail] = useState("");
    const [password, setpassword] = useState("")

    const [allEntry, setNewentry] = useState([])

    const submitForm = (e) => {
        e.preventDefault();

        if(email && password){

            const newEntry ={ id:new Date().getTime.toString(), email, password };
            setNewentry([...allEntry, newEntry]);
          
            setEmail("");
            setpassword("");
        }
        else{
            alert("please fill the data");
        }
    }
  return (
    <>
        <div className='pt-5'>
            <form action="" onSubmit={submitForm}>
                <div className='mb-3'>
                    <label htmlFor='email'>Email</label>
                    <input type='text' name="email" id="email" autoComplete='off' value={email} onChange={(e) => setEmail(e.target.value)}/>
                </div>
                <div className='mb-3'>
                    <label htmlFor='password'>Password</label>
                    <input type='password' name="pass" id="pass" autoComplete='off' value={password} onChange={(e) => setpassword(e.target.value)}/>
                </div>
                <button type='submit' className='btn bg-dark text-white'>Login</button>
            </form>
        </div>
        <div className='mt-5'>
            {
                allEntry.map((items) => {
                    return(
                        <div className='details d-flex justify-content-center' key={items.id}>
                            <p>
                                {items.email}
                            </p>
                            <p>
                                {items.password}
                            </p>
                        </div>
                    )
                })
            }
        </div>
    </>
  )
}

export default BasicForm