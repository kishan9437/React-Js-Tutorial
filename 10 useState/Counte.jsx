import React, { useState } from "react";

function Counte(){
    let [data,setData]=useState(0)

    const increment=()=>{
        setData(data+1)
    }
    return(
        <>
            <h1>{data}</h1>
            <button onClick={increment}>Increment</button>
        </>
    )
}
export default Counte;