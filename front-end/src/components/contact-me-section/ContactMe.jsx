import React from 'react'
import './contact-me.scss'
import {FaRegEnvelope} from 'react-icons/fa'
const ContactMe = () => {
  return (
    <div style={{display:'flex', justifyContent: 'center'}}>
        <div>
            <h3 style={{display: 'flex', alignItems: 'center',gap: '10px'}}>
                Contactame   <FaRegEnvelope />
            </h3>
            <p><b>Correo:</b> luisgonzalezaldana84@gmail.com</p>
            <p><b>Celular:</b> (+502) 3044-2833</p>

        </div>

    </div>
  )
}

export default ContactMe