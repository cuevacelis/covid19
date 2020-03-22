import React, { Fragment, useState, useEffect } from 'react';
import axios from 'axios';

function DatosCountry() {
    const [datosCountry, setDatosCountry] = useState([{}]);
    const [indexDatosCountry, setIndexDatosCountry] = useState(43);
    const [loadingCounrty, setLoadingCountry] = useState(true);
    const [actualizarComponente, setActualizarComponente] = useState(false);
    useEffect( () => {
        const ObtensionDatos = async () =>{
            setLoadingCountry(true);
            const result = await axios(
                'https://proyectosupnjose.website/api/coronavirus/countries',
            );
            setDatosCountry(result.data)
            setLoadingCountry(false)
        }
        ObtensionDatos();

    }, [actualizarComponente]);

    return (
        <div>
            <section className="jumbotron text-center DatosPeru">
                <div className="text-center">

                    <div className="container form-group">
                        <label className="display-4">Selecciona tu País :</label>
                        <select id="select_country" className="form-control" onChange={e => setIndexDatosCountry(e.currentTarget.value)}>
                            {
                                datosCountry.map((datoCountry,index) => (
                                    <option key={index} selected={index===indexDatosCountry} value={index}>{datoCountry.country +" - "+ "Top: "+(index+1)}</option>
                                    )
                                )
                            }
                        </select>
                    </div>
                    {
                        console.log()
                    }

                    {loadingCounrty ? <h1 className="display-4">Cargando ...</h1>  : <h1 className="display-4">Datos de {datosCountry[indexDatosCountry].country}</h1>}
                    <div className="my-3">
                        <p className="text-muted"><em>(Mantenemos actualizada nuestra información a diario)</em></p>
                        <button className="btn btn-primary" onClick={() => setActualizarComponente(!actualizarComponente)}>Actualizar información ahora</button>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-4">
                                <h2>Casos de Coronavirus</h2>
                                {loadingCounrty ? <p>Casos de <code>Covid-19</code> en ...</p>  : <p>Casos de <code>Covid-19</code> en {datosCountry[indexDatosCountry].country}.</p>}
                                <div className="casesPeru" style={{color:"purple" }}>
                                {loadingCounrty ? <div className="spinner-border text-primary" role="status"></div>  : <h4 className="">{datosCountry[indexDatosCountry].total}</h4>}
                                </div>
                            </div>
                            <div className="col-md-4">
                                <h2>Nuevos Casos</h2>
                                {loadingCounrty ? <p>Nuevos casos de <code>Covid-19</code> en ...</p>  : <p>Nuevos casos de <code>Covid-19</code> en {datosCountry[indexDatosCountry].country}.</p>}
                                <div className="deathsPeru" style={{color:"blue" }}>
                                {loadingCounrty ? <div className="spinner-border text-primary" role="status"></div>  : <h4 className="">{datosCountry[indexDatosCountry].newCases}</h4>}
                                </div>
                            </div>
                            <div className="col-md-4">
                                <h2>Total de Muertes</h2>
                                {loadingCounrty ? <p>Total de muertes causadas por el <code>Covid-19</code> en ...</p>  : <p>Total de muertes causadas por el <code>Covid-19</code> en {datosCountry[indexDatosCountry].country}.</p>}
                                <div className="deathsPeru" style={{color:"red" }}>
                                {loadingCounrty ? <div className="spinner-border text-danger" role="status"></div>  : <h4 className="">{datosCountry[indexDatosCountry].totalDeaths}</h4>}
                                </div>
                            </div>
                            <div className="col-md-4">
                                <h2>Nuevas Muertes</h2>
                                {loadingCounrty ? <p>Nuevas muertes <code>Covid-19</code> en ...</p>  : <p>Nuevas muertes <code>Covid-19</code> en {datosCountry[indexDatosCountry].country}.</p>}
                                <div className="deathsPeru" style={{color:"red" }}>
                                {loadingCounrty ? <div className="spinner-border text-danger" role="status"></div>  : <h4 className="">{datosCountry[indexDatosCountry].newDeaths}</h4>}
                                </div>
                            </div>
                            <div className="col-md-4">
                                <h2>Casos Serios</h2>
                                {loadingCounrty ? <p>Total de casos graves ocasionados por el <code>Covid-19</code> en ...</p>  : <p>Total de casos graves ocasionados por el <code>Covid-19</code> en {datosCountry[indexDatosCountry].country}.</p>}
                                <div className="deathsPeru">
                                {loadingCounrty ? <div className="spinner-border text-primary" role="status"></div>  : <h4 className="">{datosCountry[indexDatosCountry].serious}</h4>}
                                </div>
                            </div>
                            <div className="col-md-4">
                                <h2>Casos recuperados</h2>
                                {loadingCounrty ? <p>La cantidad de personas que se recuperaron del <code>Covid-19</code> en ...</p>  : <p>La cantidad de personas que se recuperaron del <code>Covid-19</code> en {datosCountry[indexDatosCountry].country}</p>}
                                <div className="recoveredPeru" style={{color:"green" }}>
                                {loadingCounrty ? <div className="spinner-border text-success" role="status"></div>  : <h4 className="">{datosCountry[indexDatosCountry].totalRecovered}</h4>}
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </section>
            
        </div>
    )
}
export default DatosCountry