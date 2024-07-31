import React from "react";

export default function Jsx(props){
    console.log(props)
    const {name,age,email}=props;
    return(
        <>
            {/* example 1 */}
            {/* <h1>Hello {props.name}</h1>  */}

            {/* examle 2 */}
            <h1>Name: {name}</h1>
            <p>Age : {age}</p>
            <p>Email : {email}</p> 
        </>
    )
}