import React from "react";
import { motion } from "framer-motion";
import '../estilos/componentes/pagina/Aic.css';

const Aic = (props) => {
    return (
        <main className="holder-main">
            <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="aic"
            >
                <h1 className="titulo-aic-pei">Titutlo del aic</h1>
                <h2>Sutitulo</h2>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem cupiditate vitae
                    iusto libero, expedita architecto dolorum quae nesciunt aspernatur deserunt, voluptatum delectus illum? Maxime repellendus perferendis illum quam dolores eum.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur doloremque illum aperiam. Asperiores repellat sunt earum sit unde illum minus sed reprehenderit labore rerum reiciendis eligendi, debitis corporis ipsum aperiam.</p>
                <h2>Sutitulo</h2>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem cupiditate vitae iusto libero, expedita architecto dolorum quae nesciunt aspernatur deserunt, voluptatum delectus illum? Maxime repellendus perferendis illum quam dolores eum.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur doloremque illum aperiam. Asperiores repellat sunt earum sit unde illum minus sed reprehenderit labore rerum reiciendis eligendi, debitis corporis ipsum aperiam.</p>
                <h2>Sutitulo</h2>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem cupiditate vitae iusto libero, expedita architecto dolorum quae nesciunt aspernatur deserunt, voluptatum delectus illum? Maxime repellendus perferendis illum quam dolores eum.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur doloremque illum aperiam. Asperiores repellat sunt earum sit unde illum minus sed reprehenderit labore rerum reiciendis eligendi, debitis corporis ipsum aperiam.</p>
                <h2>Sutitulo</h2>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem cupiditate vitae iusto libero, expedita architecto dolorum quae nesciunt aspernatur deserunt, voluptatum delectus illum? Maxime repellendus perferendis illum quam dolores eum.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur doloremque illum aperiam. Asperiores repellat sunt earum sit unde illum minus sed reprehenderit labore rerum reiciendis eligendi, debitis corporis ipsum aperiam.</p>
                <h2>Sutitulo</h2>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem cupiditate vitae iusto libero, expedita architecto dolorum quae nesciunt aspernatur deserunt, voluptatum delectus illum? Maxime repellendus perferendis illum quam dolores eum.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur doloremque illum aperiam. Asperiores repellat sunt earum sit unde illum minus sed reprehenderit labore rerum reiciendis eligendi, debitis corporis ipsum aperiam.</p>
            </motion.div>
        </main>
    );
}

export default Aic;
