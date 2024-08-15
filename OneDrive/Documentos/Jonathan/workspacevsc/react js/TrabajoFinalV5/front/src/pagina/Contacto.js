import React from "react";
import { motion } from "framer-motion";
import '../estilos/componentes/pagina/Contacto.css';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaTwitter, FaInstagram, FaSkype } from 'react-icons/fa';

const Contacto = (props) => {
    return (
        <main className="holder-contacto">
            <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="contactorapido"
            >
                <h2>Dejanos tu consulta</h2>
                <form action="" method="" className="formulario">
                    <p>
                        <label htmlFor="Nombre">Nombre</label>
                        <input type="text" name="Nombre" />
                    </p>
                    <p>
                        <label htmlFor="email">E-mail</label>
                        <input type="text" name="email" />
                    </p>
                    <p>
                        <label htmlFor="Telefono">Teléfono</label>
                        <input type="text" name="Telefono" />
                    </p>
                    <p>
                        <label htmlFor="Mensaje">Mensaje</label>
                        <input type="text" name="Mensaje" />
                    </p>
                    <p>
                        <input type="submit" name="Enviar" />
                    </p>
                </form>
            </motion.div>
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="datos"
            >
                <h2>Otras formas de contacto</h2>
                <p>Nos puede contactar por los siguientes medios:</p>
                <ul>
                    <li><FaPhone /> Teléfono: 0237 488 888</li>
                    <li><FaEnvelope /> Email: uncorreo@abc.gob.ar</li>
                    <li><FaMapMarkerAlt /> Dirección: unaDireccion</li>
                </ul>
            </motion.div>
            <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="Nuestras-Redes"
            >
                <h2>Nuestras Redes</h2>
                <p>Encontranos en las siguientes redes sociales:</p>
                <ul>
                    <li><FaFacebook /> Facebook: unFacebook</li>
                    <li><FaTwitter /> Twitter: unTwiter</li>
                    <li><FaInstagram /> Instagram: unInstagram</li>
                    <li><FaSkype /> Skype: unSkype</li>
                </ul>
            </motion.div>
        </main>
    );
}

export default Contacto;
