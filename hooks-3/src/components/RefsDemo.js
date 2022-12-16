import React, { useEffect, useRef } from 'react'

const RefsDemo = () => {
    const userRef = useRef()
    const commentRef = useRef()

    useEffect(() => {
        userRef.current.focus()
    },[])

    const handleSubmit = e => {
        e.preventDefault()
        console.log(userRef.current.value)
        console.log(commentRef.current.value)
    }

    return (
        <form onSubmit={handleSubmit}>
        <div>
            <label htmlFor="username">Username </label>
            <input type="text" id="username" ref={userRef} />
        </div>
        <br />
        <div>
            <label htmlFor="comment">Comment </label>
            <textarea id="comment" ref={commentRef}></textarea>
        </div>
        <br />
        <button type="submit">Send</button>
    </form>
    )
}

export default RefsDemo