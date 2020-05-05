import React from 'react';
import ImagenPantallaDeCarga from '../../assets/img/covid_19.svg';
import '../../assets/styles/css/Loading.css';

function PantallaDeCargaPrincipal() {
  return (
    <div className="Loading">
      <div>
        <img src={ImagenPantallaDeCarga} alt="Pantalla de Carga" />
        <h1>Cargando ...</h1>
        <div className="d-flex justify-content-center">
          <div className="spinner-border text-info" role="status">
            <span className="sr-only">Cargando...</span>
          </div>
        </div>
      </div>
    </div>
  );
}
export default PantallaDeCargaPrincipal;
