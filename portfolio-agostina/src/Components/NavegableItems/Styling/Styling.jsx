import React from 'react'
import { styling } from '../../../data/data';
import './styling.css'

export const Styling = () => {
    return (
        <section className='page-objetos'>
            <div className='objetos-container-styling animate__animated animate__fadeIn'>
                {
                    styling.map((objeto, index) => {
                        return (
                            <div
                                className='objeto-styling' key={ index }
                                data-aos='fade-up'>
                                <img src={objeto.img} className='objeto-img'/>
                                <h3 className='objeto-title-styling'> { objeto.nombre }</h3>
                            </div>
                        )
                    })
                }
            </div>
        </section>
    )
}