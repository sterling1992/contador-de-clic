import React from "react";
import  '../hojas-de-estilo/Boton.css';


function Boton({ texto, esBotonDeClic, manejarClic}){
  return(
    <button
      className={ esBotonDeClic ? 'boton-clic' : 'botonReiniciar' }
      onClick = {manejarClic}>
      {texto}
    </button>
  );
}

export default Boton;