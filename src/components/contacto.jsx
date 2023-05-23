import React from 'react';
import PropTypes from 'prop-types';
import { Contacto  } from '../model/contacto.class';

const ContactoComponent = ({contacto})=> {
    
        return (
            <div>
                <h2>Nombre: {contacto.nombre}</h2>
                <h3>Apellido: {contacto.apellido}</h3>
                <h4>Email: {contacto.email}</h4>
                <h5>Este usuario esta: {contacto.conectado ? 'Contacto En Linea':'Contacto No Disponible'}</h5>
            </div>
        );
    
}


ContactoComponent.propTypes = {
 contacto: PropTypes.instanceOf(Contacto)
};


export default ContactoComponent;
