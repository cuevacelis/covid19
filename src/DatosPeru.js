import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function DatosPeru() {
    const [data, setData] = useState({ hits: [] });
    const [loadingMundial, setIsLoadingMundial] = useState(false);
    const [actualizarComponente, setActualizarComponente] = useState(false);

    useEffect( () => {
        const ObtensionDatos = async () =>{
            const result = await axios(
                'https://proyectosupnjose.website/api/coronavirus/countries',
            );
            var x=0;
            for(x=0; x<result.data.length; x++) {
                if(result.data[x].country === 'Peru'){
                    setData(result.data[x]);
                }
            setIsLoadingMundial(false);
            }
        }
        ObtensionDatos();

    }, [actualizarComponente]);

    return (
        <div>
            <section className="jumbotron text-center DatosPeru">
                <div className=" text-center">
                    <h1 className="display-4">Datos del Perú 🇵🇪</h1>
                    <p className="text-muted">
                        <em>(Mantenemos actualizada nuestra información a diario)</em> 
                        <button className="btn btn-outline-secondary" onClick={() => setActualizarComponente(true)}>Actualizar información ahora</button>
                    </p>
                    <div className="container">
                        <div className="row">
                        <div className="col-md-4">
                            <h2>Casos de Coronavirus</h2>
                            <p>Casos de <code>Covid-19</code> en el Perú. </p>
                            <div className="casesPeru" style={{color:"purple" }}>
                            {loadingMundial ? <div className="spinner-border text-primary" role="status"></div>  : <h4 className="">{data.total}</h4>}
                            </div>
                        </div>
                        <div className="col-md-4">
                            <h2>Nuevos Casos</h2>
                            <p>Nuevos casos de <code>Covid-19</code> en el Perú.</p>
                            <div className="deathsPeru" style={{color:"blue" }}>
                            {loadingMundial ? <div className="spinner-border text-primary" role="status"></div>  : <h4 className="">{data.newCases}</h4>}
                            </div>
                        </div>
                        <div className="col-md-4">
                            <h2>Muertes</h2>
                            <p>Total de muertes causadas por el <code>Covid-19</code> en el Perú.</p>
                            <div className="deathsPeru" style={{color:"red" }}>
                            {loadingMundial ? <div className="spinner-border text-primary" role="status"></div>  : <h4 className="">{data.totalDeaths}</h4>}
                            </div>
                        </div>
                        <div className="col-md-4">
                            <h2>Casos Serios</h2>
                            <p>Total de muertes causadas por el <code>Covid-19</code> en el Perú.</p>
                            <div className="deathsPeru">
                            {loadingMundial ? <div className="spinner-border text-primary" role="status"></div>  : <h4 className="">-{data.serious}-</h4>}
                            </div>
                        </div>
                        <div className="col-md-4">
                            <h2>Casos recuperados</h2>
                            <p>La cantidad de personas que se recuperaron del <code>Covid-19</code> en el Perú</p>
                            <div className="recoveredPeru" style={{color:"green" }}>
                            {loadingMundial ? <div className="spinner-border text-primary" role="status"></div>  : <h4 className="">-{data.totalRecovered}-</h4>}
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </section>
            <hr></hr>
        </div>
    )
}
