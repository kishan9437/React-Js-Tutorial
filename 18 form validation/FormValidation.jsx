import React, { useState } from 'react'

export default function FormValidation() {
    const [name,setName]=useState("")
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const [errors,setErrors]=useState({})
    const [submittedData,setSubmittedData]=useState(null)

    const validateForm = () => {
        let isValid = true;
        const newError = {}

        if(!name.trim())
        {
            newError.name="Name is Required";
            isValid=false;
        }
        if(!email.trim()){
            newError.email="Email is Required";
            isValid=false;
        }else if(!/\S+@\S+\.\S+/.test(email)){
            newError.email="Email is Invalid";
            isValid=false;
        }
        if(!password.trim()){
            newError.password="Password is Required";
            isValid=false;
        }else if(password.length < 6){
            newError.password="Password should be at least 6 characters long";
            isValid=false;
        }
        setErrors(newError)
        return isValid;
    }  
    
    const handleSubmit = (e) =>{
        e.preventDefault();

        if(validateForm()){
            const submittedData={
                name,
                email,
                password
            };
            setSubmittedData(submittedData);
            console.log('form submited : ',submittedData)
        }
    }
  return (
    <>
        <form onSubmit={handleSubmit}>
            <div>
                <label>Name : </label>
                <input type='text' value={name} onChange={(e)=>setName(e.target.value)}/>
                {errors.name && <span className='error'>{errors.name}</span>}
            </div>

            <div>
                <label>Email : </label>
                <input type='email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
                {errors.email && <span className='error'>{errors.email}</span>}
            </div>

            <div>
                <label>Password : </label>
                <input type='password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
                {errors.password && <span className='error'>{errors.password}</span>}
            </div>  
            <button type='submit'>Submit</button>  
        </form> 

        {submittedData && (
            <div>
                <h2>Submitted Data:</h2>
                <p>Name : {submittedData.name}</p>
                <p>Email : {submittedData.email}</p>
                <p>Password : {submittedData.password}</p>
            </div>
        )}
    </>
  )
}
