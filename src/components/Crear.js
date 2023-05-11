import React, { useState } from 'react';
import { GuardarEnStorage } from '../helpers/GuardarEnStorage';

export const Crear = ({setListadoState}) => {

  const tituloComponent = "Añadir pelicula";
  const [peliState, setPeliState] = useState({
    titulo: '',
    descripcion: ''
  });

  const { titulo, descripcion } = peliState;

  const conseguirDatorForm = e => {
    e.preventDefault();

    //Conseguir datos del formulario
    let target = e.target;
    let titulo = target.titulo.value;
    let descripcion = target.descripcion.value;

    //Crear objeto de La pelicula a guardar
    let peli = {
      id: new Date().getTime(),
      titulo,
      descripcion
    };

    //Guardar estado
    setPeliState(peli);

    //Actualizar el estado del listado principal
    setListadoState(elementos => {
      return [...elementos, peli];
    });

    //Guardar en el almacenamiento Local
    GuardarEnStorage("pelis", peli);
  }

  return (
    <div className="add">
      <h3 className="title">{tituloComponent}</h3>

      <strong>
        {(titulo && descripcion) && "Has creado la pelicula: " + titulo}
      </strong>

      <form onSubmit={conseguirDatorForm}>
        <input type="text"
          id="titulo"
          name="titulo"
          placeholder="Titulo" />
        
        <textarea
          id="descripcion"
          name="descripcion"
          placeholder="Descripcion"></textarea>
        
        <input type="submit"
          id="save"
          value="Guardar" />
        
      </form>
    </div>
  );
}
