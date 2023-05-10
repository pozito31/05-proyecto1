import React, { useState } from 'react';

export const Crear = () => {

  const titulo = "Añadir pelicula";
  const [peliState, setPeliState] = useState({
    titulo: '',
    descripcion: ''
  });

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

    setPeliState(peli);

    console.log(peliState);
  }

  return (
    <div className="add">
      <h3 className="title">{titulo}</h3>

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
