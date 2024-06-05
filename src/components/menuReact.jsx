import React, { useState, useEffect } from 'react';
import estilos from './menuReact.module.css';
import { IconHome, IconContact, IconCatalogo, IconServices, IconNosotros, IconDownloads } from './icons/IconHome';

const menu = [

  {
    title: 'Inicio',
    icon: 'home',
    link: '/',
  },
  {
    title: 'Nosotros',
    icon: 'us',
    link: '/nosotros',
  },
  {
    title: 'Servicios',
    icon: 'services',
    link: '/servicios',
  },
  {
    title: 'Contacto',
    icon: 'contact',
    link: '/contacto',
  },
  {
    title: 'Catálogo',
    icon: 'catalogo',
    link: '/catalogo',
  }
]


const MenuReact = () => {
  const [currentPage, setCurrentPage] = useState('');
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setCurrentPage(window.location.pathname)
  }, [])

  useEffect(() => {
    console.log('prueba')
    console.log(currentPage)
  }, [currentPage])

  return (
    <div>
      {menu.map((item, index) => (
        <a
          key={index}
          href={item.link}
          className={`${estilos.mena} ${currentPage === item.link ? estilos.dos : ''}`}
        >
          {item.link}
          {/* <div className={estilos.menadiv} style={{ marginLeft: '1rem', display: 'flex' }}>{item.link}</div> */}
          {/* <div style={{ display: 'flex', flex: '1', justifyContent: 'end', marginRight: '1rem' }}>
            {item.icon === 'us' && <IconHome />}
            {item.icon === 'home' && <IconNosotros />}
            {item.icon === 'services' && <IconServices />}
            {item.icon === 'contact' && <IconContact />}
            {item.icon === 'catalogo' && <IconCatalogo />}
            {item.icon === 'descargas' && <IconDownloads />}
          </div> */}
        </a>
      ))
      }
    </div >
  );
};

export default MenuReact;



