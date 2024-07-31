import React from 'react'

export default function Profile() {
    const isLoggedIn=false;

    const items=["apple","banana","orange"]
    return <>
        {isLoggedIn ? <h2>welcome user</h2> : <h2>welcome guest</h2>}

        <div>
            {items.length>0 ? (
            <ul>
                {
                    items.map((item,index)=>(
                        <li key={index}>{item}</li>
                    ))
                }
            </ul>
        ):(
            <p>No item to display</p>
        )}</div>    
    </>
    
}
