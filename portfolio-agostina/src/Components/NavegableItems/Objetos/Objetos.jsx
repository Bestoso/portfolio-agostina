import React from 'react';
import { useNavigate } from 'react-router-dom';
import { objetos } from '../../../data/data';
import './objetos.css'

export const Objetos = () => {
    
    const navigate = useNavigate();

    return (
        <section className='page-objetos'>
            <div className='objetos-container animate__animated animate__fadeIn'>
                {
                    objetos.map((objeto, index) => {
                        return (
                            <div
                                className='objeto' key={ index }
                                onClick={() => {
                                    navigate(`/objetos/${ objeto.id }`)
                                } }
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
