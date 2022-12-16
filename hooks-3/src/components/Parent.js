import React, { useContext } from 'react'
import { ChannelContext, UserContext } from '../App'
import Child from './Child'

const Parent = () => {
    const user = useContext(UserContext)
    const channel = useContext(ChannelContext)

    return (
        <div>
            <h1>Parent Component - {user} - {channel}</h1>
            <Child />
        </div>
    )
}

export default Parent