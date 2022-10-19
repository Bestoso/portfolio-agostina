import React, { useContext } from 'react'
import { LoaderContext } from '../../Context/LoaderContext'
import './loader.css'

export const Loader = () => {

    const context = useContext(LoaderContext);

    return (
        <>
            <div className={ context.loaderFirst }>
                <div className='text'>
                    <h2> AGOS </h2>
                </div>
            </div>
            <div className={ context.loaderSecond }>
            </div>
        </>
    )
}
