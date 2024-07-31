import React from 'react'

export default function ChildComponentA({sharedState,handleChange}) {
    const handleInputValue=(e)=>{
        const newVlaue=e.target.value;
        handleChange(newVlaue);
    }
  return (
    <div>
        <input type='text' value={sharedState} onChange={handleInputValue}/>
    </div>
  )
}
