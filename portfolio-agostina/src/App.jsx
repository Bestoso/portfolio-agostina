import React, { useEffect, useRef, useState } from "react";
import './loader.css';
import 'boxicons';
import Aos from "aos";
import CountUp from 'react-countup';
import { NavBar } from "./Components/Navegacion/NavBar";
import { BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import { Inicio } from "./Components/NavegableItems/Inicio/Inicio";
import { Objetos } from "./Components/NavegableItems/Objetos/Objetos";
import { Styling } from "./Components/NavegableItems/Styling/Styling";
import { Contacto } from "./Components/NavegableItems/Contacto/Contacto";
import { LoaderContext } from "./Context/LoaderContext";
import { Detail } from "./Components/Detail/Detail";

function App() {

  const [loaderFirst, setLoaderFirst] = useState('notdelayed');
  const [loaderSecond, setLoaderSecond] = useState('delayed');
  const [loader, setLoader] = useState(true);
  const [loaderClass, setLoaderClass] = useState('loader');
  const [loaderClass2, setLoaderClass2] = useState('loadername');
  const loaderRef = useRef();
  
  const endLoader = () => {
    setLoaderClass('loader gone');
    setLoaderClass2('loadername gone');
    setTimeout(() => {
      setLoader(false);
    }, 800)
  }

  useEffect(() => {
    console.log(loaderRef)
    Aos.init({duration: 1000});
    scroll();
  }, [])

  
  if (!loader){
    return (
      <CountUp
        start={0}
        end={100}
        delay={1}
        duration={10}
        useEasing={true}
        useGrouping={true}
        suffix={'%'}
        onEnd={ endLoader }
        >
      {({ countUpRef }) => (
        <div className="preloader-container">
          <h1
            className={ loaderClass }
            ref={ countUpRef } />
          <div className='name-container'>
            <h1 className={ loaderClass2 }>AGOSTINA M.</h1>
            <h1 className={ loaderClass2 }>CHILO DIAZ</h1>
          </div>
          <div className="progress-container">
            <div className="progress-bar"/>
          </div>
        </div>
      )}
    </CountUp>
    )
  } else {
    return (
      <div id="main-container"
      data-scroll-container
      >
        <LoaderContext.Provider value={{
          loaderFirst,
          setLoaderFirst,
          loaderSecond,
          setLoaderSecond
        }}>
          <BrowserRouter>
            <NavBar />
            <Routes>
              <Route path="/" element={<Navigate to= '/inicio' />} />
              <Route path="/inicio" element={<Inicio />} />
              <Route path="/portfolio-agostina/inicio" element={<Inicio />} />
              <Route path="/objetos" element={<Objetos />} />
              <Route path="/objetos/:id" element={<Detail />} />
              <Route path="/portfolio-agostina/objetos" element={<Objetos />} />
              <Route path="/styling" element={<Styling />} />
              <Route path="/portfolio-agostina/styling" element={<Styling />} />
              <Route path="/contacto" element={<Contacto />} />
              <Route path="/portfolio-agostina/contacto" element={<Contacto />} />
              <Route path="*" element={<Navigate to= '/inicio' />} />
            </Routes>
          </BrowserRouter>
        </LoaderContext.Provider>
      </div>
    )
  }
}

export default App
