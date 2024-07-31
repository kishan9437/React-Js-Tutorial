import React, { useState } from 'react'

function PostMethod() {
    const [formData, setFormData] = useState({
        title: "",
        body: ""
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const apiUrl = "https://jsonplaceholder.typicode.com/posts";

        // create request object
        const requestOption = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData)
        };

        // send the post request
        fetch(apiUrl, requestOption).then((response) => response.json())
            .then((data) => {
                console.log("Response Data : ", data)
            }).catch((error) => {
                console.log('Error : ', error)
            })
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Title : </label>
                    <input type='text' name='title' value={formData.title} onChange={handleChange} />
                </div>
                <div>
                    <label>Body : </label>
                    <textarea name='body' value={formData.body} onChange={handleChange} />
                </div>
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default PostMethod
