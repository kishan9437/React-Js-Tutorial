import React,{forwardRef,useRef,useImperativeHandle} from 'react'

function ChildrenComponent(props,ref) {
    const childRef=useRef()

    const handleButtonClick=()=>{
        console.log("child button clicked")
    }

    useImperativeHandle(ref,()=>({
        handleButtonClick,
    }))
  return (
    <div>
        <input type='text' ref={ref}/>
    </div>
  )
}
export default forwardRef(ChildrenComponent)