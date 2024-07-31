import React from 'react'

export default function ReusableList({items}) {
  return (
    <div>
        <ul className='list-unstyled'> 
            {items.map((item,index)=>(
                <li key={index}>{item}</li>
            ))}
        </ul>
    </div>
  )
}
