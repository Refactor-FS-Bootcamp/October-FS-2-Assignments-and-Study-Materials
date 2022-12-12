import React from 'react'
import './SpaceItem.css'

const h1Styled = {
    backgroundColor: 'yellow',
    padding: '5px'
}

const SpaceItem = ({ char }) => {
    return (
        <div className='container'>
            <h1 style={h1Styled}>Name: {char.name}</h1>
            <h3 style={{ backgroundColor: 'pink', padding: '5px' }}>Species: {char.species}</h3>
            <img src={char.img_url} alt={char.name} />
        </div>
    )
}

export default SpaceItem