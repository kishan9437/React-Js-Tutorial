import React from 'react'

export default function ChildComponentB({sharedState,alert}) {
    const data='kishan pithiya'
  return (
    <div>
        <div>Shared State : {sharedState}</div>

        <button onClick={()=>alert(data)}>click me</button>
    </div>
  )
}
