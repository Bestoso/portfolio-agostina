import React from 'react'
import { NameTransform } from '../../Animated/NameTransform'
import { About } from '../../AvgContent/About/About'
import { Footer } from '../../AvgContent/Footer/Footer'
import { HomeBanner } from '../../Banners/HomeBanner'
import { Objetos } from '../Objetos/Objetos'

export const Inicio = () => {
    return (
        <div className='inicio-container'
        >
            <HomeBanner />
            <NameTransform />
            <About />
            <Objetos />
            <Footer />
        </div>
    )
}
