import React from 'react'
import spotify from '../../static/videos/spoti-low.gif'

function Propaganda() {
    return (
        <div className='sidebar-propaganda'>
            <a href='https://open.spotify.com/playlist/2rQBfTUbssBtKzrltWNn3j' target='_blank' rel="noreferrer">
                <img src={spotify} alt=""/>
            </a>
        </div>
    )
}

export default Propaganda

