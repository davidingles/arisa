import { useState, useEffect } from 'react';
import estilos from './menu.module.css';
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



export default function MenuReact() {
  const [currentPage, setCurrentPage] = useState('');

  useEffect(() => {
    const path = window.location.pathname;
    setCurrentPage(path);
  }, []);

  return (
    <div className={estilos.d}>
      {menu.map((item, index) => (

        <a key={index} href={item.link} className={`${estilos.menu} ${currentPage === item.link ? estilos.menu2 : ''}`}>{item.title}</a>
      ))}
    </div>
  )
}
