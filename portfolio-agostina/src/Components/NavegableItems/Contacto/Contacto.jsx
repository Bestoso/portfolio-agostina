import React from 'react'
import './contacto.css'

export const Contacto = () => {

    const enviarDatos = e => {
        e.preventDefault();
    }

    return (
        <section className='section-contacto'>
            <div className='contacto-title animate__animated animate__fadeIn animate__delay-1s' data-aos='fade-in'>
                <h1>CONTACTO</h1>
            </div>
            <form className='contacto-form animate__animated animate__fadeIn animate__delay-1s' onSubmit={ enviarDatos } data-aos='fade-in'>
                <div className='informacion'>
                    <input type='text' placeholder='Nombre' className='nombre'/>
                    <input type='text' placeholder='Apellido'className='apellido' />
                </div>
                <div className='mensaje'>
                    <textarea placeholder='Asunto' className='asunto'/>
                    <textarea placeholder='Mensaje' className='cuerpo'/>
                    <input type='submit' value='Enviar' className='enviar'/>
                </div>
            </form>
        </section>
    )
}
