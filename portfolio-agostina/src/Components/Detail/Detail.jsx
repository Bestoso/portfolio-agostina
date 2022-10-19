import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { objetos } from '../../data/data';
import './detail.css'

export const Detail = () => {

    const objetoId = useParams();
    const [objeto, setObjeto] = useState({});

    const filterObject = () => {
        let objsFilter = objetos.filter(objeto => objeto.id == parseInt(objetoId.id));
        setObjeto(objsFilter[0]);
    }

    useEffect(() => {
        filterObject();
    }, [])

    return (
        <section className='detail-section'>
            <div className='detail-title'>
                <h1>{ objeto.detail }</h1>
            </div>
            <div className='detail-info'>
                <div className='detail-img'>
                    <img src={ objeto.img } className='img'/>
                </div>
                <div className='detail-text'>
                    <h2> Gafoide reformulador </h2>
                    <p className='text'>
                        { objeto.description }
                    </p>
                </div>
            </div>
            <div className='detail-title'>
                <h1>{ objeto.detail2 }</h1>
            </div>
            <div className='detail-info'>
            <div className='detail-img'>
                <img src={ objeto.img2} className='img'/>
            </div>
            <div className='detail-text'>
                <h2> Gafoide Innovador </h2>
                <p className='text'>
                    { objeto.description2 }
                </p>
            </div>
            
        </div>
        </section>
    )
}
