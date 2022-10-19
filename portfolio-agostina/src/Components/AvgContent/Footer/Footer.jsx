import React from 'react'
import './footer.css'

export const Footer = () => {
    return (
        <footer className='footer'>
            <div className='greeting'>
                <h2 > Thank <span className='italic'>You!</span></h2>
            </div>
            <div className='media'>
                <div className='instagram'>
                    <box-icon type='logo' name='instagram' size='md'></box-icon>
                </div>
                <div className='gmail'>
                    <box-icon name='envelope' size='md'></box-icon>
                </div>
                <div className='developed' >
                    <box-icon name='github' type='logo' size='md'></box-icon>
                </div>
            </div>
            <div className='made-by'>
                <p> Web Site made by Santiago Bestoso &copy; </p>
            </div>
        </footer>
    )
}
