import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Loader } from '../Loader/Loader';
import { LoaderContext } from '../../Context/LoaderContext'
import logoheader from '../../assets/images/logoheader.png';
import './navbar.css';

export const NavBar = () => {
    
    /* VARAIBLES */

    const context = useContext(LoaderContext);
    const navigate = useNavigate();
    const [menuClass, setMenuClass] = useState('menu');


    const toggleMenu = () => {
        if (menuClass === 'menu'){
            setMenuClass('menu active');
        } else {
            setMenuClass('menu');
        }
    }

    const initLoader = () => {
        context.setLoaderFirst('notdelayed active');
        context.setLoaderSecond('delayed active');
        setTimeout(() => {
            context.setLoaderFirst('notdelayed activegone');
            context.setLoaderSecond('delayed activegone');
        }, 1300)
        setTimeout(() => {
            context.setLoaderFirst('notdelayed xd');
            context.setLoaderSecond('delayed xd');
        },2300)
        setTimeout(() => {
            context.setLoaderFirst('notdelayed');
            context.setLoaderSecond('delayed');
        }, 2350)
    }

    const nHome = () => {
        setMenuClass('menu');
        setTimeout(() => {
            initLoader();
        },300)
        setTimeout(() => {
            navigate('/');
        }, 1300);
    }
    const nObj = () => {
        setMenuClass('menu');
        setTimeout(() => {
            initLoader();
        },300)
        setTimeout(() => {
            navigate('/objetos');
        }, 1300)
    }
    const nStyle = () => {
        setMenuClass('menu');
        setTimeout(() => {
            initLoader();
        },300)
        setTimeout(() => {
            navigate('/styling');
        }, 1300);
    }
    const nCont = () => {
        setMenuClass('menu');
        setTimeout(() => {
            initLoader();
        },300)
        setTimeout(() => {
            navigate('/contacto');
        }, 1300);
    }

    /* RENDERIZADO */

    return (
        <div>
        <Loader />
            <header className='header'
            data-scroll-section
            >
                <div className='logo'>
                    <a href='#' onClick={ nHome }>
                    <img src={ logoheader } alt='logo' className='logo animate__animated animate__fadeIn' />
                    </a>
                </div>
                <div className='menu-icon' data-aos='fade-in'>
                    <box-icon name='menu' size='md' onClick={ toggleMenu }></box-icon>
                </div>
                <nav className={menuClass}>
                    <ul>
                        <li>
                            <p onClick={ nHome }> Inicio </p>
                        </li>
                        <li>
                            <p onClick={ nObj }> Objetos </p>
                        </li>
                        <li>
                            <p onClick={ nStyle }> Styling </p>
                        </li>
                        <li>
                            <p onClick={ nCont }> Contacto </p>
                        </li>
                    </ul>
                </nav>
            </header>
        </div>
    )
}
