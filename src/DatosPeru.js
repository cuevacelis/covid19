import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function DatosPeru() {
    const [dataPeru, setDataPeru] = useState({ hits: [] });
    const [loadingPeru, setLoadingPeru] = useState(true);
    const [actualizarComponente, setActualizarComponente] = useState(false);

    useEffect( () => {
        const ObtensionDatos = async () =>{
            setLoadingPeru(true);
            const result = await axios(
                'https://proyectosupnjose.website/api/coronavirus/countries',
            );
            var x=0;
            for(x=0; x<result.data.length; x++) {
                if(result.data[x].country === 'Peru'){
                    setDataPeru(result.data[x]);
                }
            }
            setLoadingPeru(false);
            setActualizarComponente(false);
        }
        ObtensionDatos();

    }, [actualizarComponente]);

    return (
        <div>
            <section className="jumbotron text-center DatosPeru">
                <div className=" text-center">
                    <h1 className="display-4">Datos del Perú 🇵🇪</h1>
                    <div className="my-3 p-3">
                        <p className="text-muted"><em>(Mantenemos actualizada nuestra información a diario)</em></p>
                        <button className="btn btn-primary" onClick={() => setActualizarComponente(true)}>Actualizar información ahora</button>
                    </div>
                    <div className="container">
                        <div className="row">
                        <div className="col-md-4">
                            <h2>Casos de Coronavirus</h2>
                            <p>Casos de <code>Covid-19</code> en el Perú. </p>
                            <div className="casesPeru" style={{color:"purple" }}>
                            {loadingPeru ? <div className="spinner-border text-primary" role="status"></div>  : <h4 className="">{dataPeru.total}</h4>}
                            </div>
                        </div>
                        <div className="col-md-4">
                            <h2>Nuevos Casos</h2>
                            <p>Nuevos casos de <code>Covid-19</code> en el Perú.</p>
                            <div className="deathsPeru" style={{color:"blue" }}>
                            {loadingPeru ? <div className="spinner-border text-primary" role="status"></div>  : <h4 className="">{dataPeru.newCases}</h4>}
                            </div>
                        </div>
                        <div className="col-md-4">
                            <h2>Muertes</h2>
                            <p>Total de muertes causadas por el <code>Covid-19</code> en el Perú.</p>
                            <div className="deathsPeru" style={{color:"red" }}>
                            {loadingPeru ? <div className="spinner-border text-secondary" role="status"></div>  : <h4 className="">{dataPeru.totalDeaths}</h4>}
                            </div>
                        </div>
                        <div className="col-md-4">
                            <h2>Casos Serios</h2>
                            <p>Total de muertes causadas por el <code>Covid-19</code> en el Perú.</p>
                            <div className="deathsPeru">
                            {loadingPeru ? <div className="spinner-border text-primary" role="status"></div>  : <h4 className="">-{dataPeru.serious}-</h4>}
                            </div>
                        </div>
                        <div className="col-md-4">
                            <h2>Casos recuperados</h2>
                            <p>La cantidad de personas que se recuperaron del <code>Covid-19</code> en el Perú</p>
                            <div className="recoveredPeru" style={{color:"green" }}>
                            {loadingPeru ? <div className="spinner-border text-success" role="status"></div>  : <h4 className="">-{dataPeru.totalRecovered}-</h4>}
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
