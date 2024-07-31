import React, { useId } from 'react'

function Email() {
    const id = useId()
    return (
        <>
            <label htmlFor='email'>Email : </label>
            <input type='email' id={id} autoComplete='off'></input>
        </>
    )
}

export default Email
