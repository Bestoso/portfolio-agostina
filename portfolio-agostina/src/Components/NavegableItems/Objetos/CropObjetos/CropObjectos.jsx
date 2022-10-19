import React, { useEffect, useState } from 'react'
import { objetos } from '../../../../data/data';
import '../objetos.css'

export const CropObjectos = () => {

    let cropObjs = objetos.filter(objeto => objeto.num < 3);

    return (
        <section className='page-objetos-croped'>
        <div className='objetos-container-croped animate__animated animate__fadeIn'>
            {
                cropObjs.map((objeto, index) => {
                    return (
                        <div
                            className='objeto' key={ index }
                            data-aos='fade-up'>
                            <img src={objeto.img} className='objeto-img'/>
                            <h3 className='objeto-title'> { objeto.nombre }</h3>
                        </div>
                    )
                })
            }
        </div>
        </section>
    )
}
