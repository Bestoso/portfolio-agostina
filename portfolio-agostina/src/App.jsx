import React, { useEffect, useState } from "react";
import './loader.css';
import 'boxicons';
import Aos from "aos";
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

  useEffect(() => {
    Aos.init({duration: 1000});
  }, [])

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

export default App
