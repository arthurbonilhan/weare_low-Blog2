import React from 'react'
import cupom from '../../static/videos/cupom.gif'

function Cupom() {
    return (
        <div className='sidebar-cupom'>
            <a href='https://blacktag.com.br' target='_blank' rel="noreferrer">
                <img src={cupom} alt=""/>
            </a>
        </div>
    )
}

export default Cupom