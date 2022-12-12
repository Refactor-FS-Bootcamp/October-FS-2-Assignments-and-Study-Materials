import axios from 'axios'
import React, { useState } from 'react'

const PostForm = () => {
    const [userId, setUserId] = useState('')
    const [body, setBody] = useState('')
    const [title, setTitle] = useState('react')

    const handleSubmit = async e => {
        e.preventDefault()
        const url = 'https://jsonplaceholder.typicode.com/posts'
        const res = await axios.post(url, {userId, body, title})
        console.log(res.data)
    }
    
    return (
        <form onSubmit={handleSubmit}>
        <div>
            <label htmlFor="userId">UserID </label>
            <input type="text" id="userId" value={userId} onChange={e => setUserId(e.target.value)} />
        </div>
        <br />
        <div>
            <label htmlFor="body">Body </label>
            <textarea id="body" value={body} onChange={e => setBody(e.target.value)}></textarea>
        </div>
        <br />
        <div>
            <label htmlFor="title">Title </label>
            <select id="title" value={title} onChange={e => setTitle(e.target.value)}>
                <option value="react">React</option>
                <option value="angular">Angular</option>
                <option value="reactnative">React Native</option>
            </select>
        </div>
        <br />
        <button type="submit">Send</button>
    </form>
    )
}

export default PostForm