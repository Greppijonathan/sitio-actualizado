import React from "react";
import '../estilos/componentes/pagina/Institucional.css';
import { motion } from 'framer-motion';

const Institucional = (props) => {
    return (
        <main className="holder">
            <div>
                <motion.section
                    className="presentacion"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="titulo-presentacion">Presentacion Institucional</h2>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque laborum ipsam iure qui alias eveniet
                        est incidunt excepturi optio. Blanditiis sapiente itaque id enim commodi ut assumenda numquam
                        repellat corporis?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque laborum ipsam iure qui alias eveniet
                        est incidunt excepturi optio. Blanditiis sapiente itaque id enim commodi ut assumenda numquam
                        repellat corporis?</p>
                </motion.section>
            </div>
            <div>
                <motion.img
                    className="foto-escuela"
                    src="EscuelaFoto.png"
                    alt="escuela"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                />
            </div>
            <div className="columnas">
                <motion.section
                    className="novedad"
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h2>Novedad 1</h2>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque laborum ipsam iure qui alias eveniet
                        est incidunt excepturi optio. Blanditiis sapiente itaque id enim commodi ut assumenda numquam
                        repellat corporis?</p>
                </motion.section>
                <motion.section
                    className="novedad"
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <h2>Novedad 2</h2>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque laborum ipsam iure qui alias eveniet
                        est incidunt excepturi optio. Blanditiis sapiente itaque id enim commodi ut assumenda numquam
                        repellat corporis?</p>
                </motion.section>
                <motion.section
                    className="novedad"
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                >
                    <h2>Novedad 3</h2>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque laborum ipsam iure qui alias eveniet
                        est incidunt excepturi optio. Blanditiis sapiente itaque id enim commodi ut assumenda numquam
                        repellat corporis?</p>
                </motion.section>
            </div>
        </main>
    );
}

export default Institucional;
