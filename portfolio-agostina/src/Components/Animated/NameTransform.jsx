import React, { useEffect, useState } from 'react'
import './nametransform.css'

export const NameTransform = () => {

    const [transform, setTransform] = useState(0);

    const handleTransform = () => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                setTransform(`${window.scrollY / 2}px`);
            }
        })
    }

    useEffect(() => {
        handleTransform();
    }, [])

    return (
        <div className='transform-container'
        data-scroll-section>
            <h2 className='transform-text' style={{
                transform: 'translateX(' + transform + ')'
            }}>
                <span> Agostina M.</span>
                <span> Chilo </span>
                <span> Diaz </span>
                <span> Agostina M.</span>
                <span> Chilo </span>
                <span> Diaz </span>
                <span> Agostina M.</span>
                <span> Chilo </span>
                <span> Diaz </span>
            </h2>
        </div>
    )
}
