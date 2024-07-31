import React,{useState} from 'react'

export default function FormHandlling() {
    const [formData,setFormData]=useState({
        username:'',
        email:'',
        password:'',
        isSubscribed:'',
        role:'',
    })
    const handleChange = (e) =>{
        const {name,value,type,checked}=e.target;
        const fieldValue = type === 'checkbox' ? checked : value;

        setFormData({
            ...formData,
            [name]:fieldValue
        })
    }
    const handleSubmit = (e) =>{
        e.preventDefault()
        console.log('form Data ',formData)
    }
  return (
    <>
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                <label htmlFor='username'>UserName : </label>
                <input
                    type='text'
                    id='username'
                    name='username'
                    value={formData.username}
                    onChange={handleChange} 
                ></input>
                </div>
                
                <div>
                <label htmlFor='email'>Email : </label>
                <input
                    type='email'
                    id='email'
                    name='email'
                    value={formData.email}
                    onChange={handleChange} 
                ></input>
                </div>
                
                <div>
                <label htmlFor='password'>password : </label>
                <input
                    type='password'
                    id='password'
                    name='password'
                    value={formData.password}
                    onChange={handleChange} 
                ></input>
                </div>
                
                <div>
                <label htmlFor='isSubscribed'>Subscribe : </label>
                <input
                    type='checkbox'
                    id='isSubscribed'
                    name='isSubscribed'
                    value={formData.isSubscribed}
                    onChange={handleChange} 
                ></input>
                </div>
                
                <div>
                <label htmlFor='role'>Role : </label>
                <select
                id='role'
                name='role'
                value={formData.role}
                    onChange={handleChange}
                >
                    <option value="">Select Role</option>
                    <option value="admin">admin</option>
                    <option value="user">User</option>
                    <option value="guest">Guest</option>
                </select>
                </div>
                <button type='submit'>Submit</button>
            </form>
        </div>
    </>
    
  )
}
