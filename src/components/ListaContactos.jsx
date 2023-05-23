
import React from 'react'
import { Contacto } from '../model/contacto.class'
import ContactoComponent from './contacto'

const ListaContactos = () => {

    const defaultContacto = new Contacto('Juan','Perez','juan@gmail.com', false)

  return (
    <div>
    <h1>Mostrando listado de contactos</h1>
    <ContactoComponent contacto= {defaultContacto}></ContactoComponent>
      
    </div>
  )
}

export default ListaContactos;

  
