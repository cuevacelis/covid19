import React from 'react';
export default function DatosRegionesPeru() {
    return (
        <div>
            <section className="DatosRegionesPeru jumbotron text-center">
                <div className=" text-center">
                    <h2 className="display-4">Reporte Diario</h2>
                    <figure className="figure text-center">
                        <img src="https://pbs.twimg.com/media/ETZziGoWAAMnrCN?format=jpg&name=large" className="figure-img img-fluid rounded" alt="Reporte de Coronovirus"/>
                        <figcaption className="figure-caption">Reporte Diario del Covid-19 en las regiones del Perú.</figcaption>
                    </figure>
                </div>
            </section>

            <hr></hr>

            <section className="DatosRegionesPeru jumbotron text-center">
                <div className=" text-center">
                <h2 className="display-4">Sigue las actualizacion del Minsa</h2>
                    <a className="twitter-timeline" href="https://twitter.com/Minsa_Peru?ref_src=twsrc%5Etfw">Tweets by Minsa_Peru</a> <script async src="https://platform.twitter.com/widgets.js" charSet="utf-8"></script>
                </div>
            </section>


            
        </div>
    )
}
