import React from 'react'
import './endbanner.css'
import endbanner from '../../assets/images/endbanner.jpg'

export const EndBanner = () => {
    return (
        <section className='endbanner' style={{
            backgroundImage: `url(${ endbanner })`
        }}
            data-scroll-section
        ></section>
    )
}
