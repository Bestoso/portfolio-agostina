import React, { useEffect, useState } from 'react'
import  bg1  from '../../assets/images/logo.png'
import './homebanner.css'


export const HomeBanner = () => {

    const [scaleImage, setScaleImage] = useState(1);
    const handleScroll = (e) => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                setScaleImage(1 + (window.scrollY / 3000));
            } else {
                setScaleImage(1);
            }
        })
    }

    useEffect(() => {
        handleScroll();
    }, [])

    return (
        <section className='home-banner'
        >
            <img src={ bg1 } alt='banner' /* style={{
                transform: 'scale(' + scaleImage + ')',
            }} data-aos='fade-in' *//>
        </section>
    )
}
