"use strict";
import React, {useState,useEffect} from 'react';
import logo from './logo.svg'

const useFetch = (url) => {
    const [dataMundial, setdataMundial] = useState(null);
    const [loadingMundial, setLoadingMundial] = useState(true);
    //Similar a comonente DidMount y DidUpdate
    useEffect(async () => {
      const response = await fetch(url)
      const dataMundial = await response.json()
      setdataMundial(dataMundial);
      setLoadingMundial(false);
    }, []);
    return {dataMundial, loadingMundial};
  };

export default function DatosMundiales() {
    const {dataMundial,loadingMundial} = useFetch("https://proyectosupnjose.website/api/coronavirus/total")
    return (
        <div>
            <section className="DatosMundiales">
                <div className=" text-center">
                    
                    <section className="jumbotron text-center">
                        <div className="container">
                            <img className="d-block mx-auto mb-4" src={logo} alt="imgCovid19"/>
                            <h1 className="display-4">Coronavirus en el Perú</h1>
                            <p className="lead">Aquí encontrarás información y noticias sobre el COVID-19 en Perú y en el mundo.🦠</p>
                            <p className="lead text-muted">(Mantenemos actualizada nuestra información a diario.) </p>
                        </div>

                    </section>
                    <hr></hr>
                    <section className="jumbotron text-center">
                        <div className="container">
                            <h1 className="display-4">Datos del Mundo 🗺️</h1>
                            <p className="lead text-muted">(Mantenemos actualizada nuestra información a diario.) </p>
                            <div className="row">
                                <div className="col-md-4">
                                    <h2>Casos de Coronavirus</h2>
                                    <p>Todos los casos confirmados de <code>Covid-19</code> en todo el mundo. </p>
                                    <div className="cases" style={{color:"purple" }}>
                                    {loadingMundial ? <div className="spinner-border text-primary" role="status"></div>  : <h4 className="">{dataMundial.cases}</h4>}
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <h2>Muertes</h2>
                                    <p>La cantidad de muertes causadas por el <code>Covid-19</code> en todo el mundo.</p>
                                    <div className="deaths" style={{color:"red" }}>
                                    {loadingMundial ?<div className="spinner-border text-primary" role="status"></div>  : <h4 className="">{dataMundial.deaths}</h4>}
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <h2>Casos recuperados</h2>
                                    <p>La cantidad de personas que se recuperaron del <code>Covid-19</code></p>
                                    <div className="recovered" style={{color:"green" }}>
                                    {loadingMundial ? <div className="spinner-border text-sucess" role="status"></div> : <h4 className="">{dataMundial.recovered}</h4>}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <hr></hr>
                </div>
            </section>
        </div>
    )
}
