/** @jsxImportSource theme-ui */
import axios from "axios";
import { useEffect, useState } from "react";
import logo from "../assets/img/covid_19.svg";
import Layout from "../components/layout/Layout";

function DatosMundiales() {
  const [dataMundial, setdataMundial] = useState<any>({});
  const [loadingMundial, setLoadingMundial] = useState<boolean>(true);

  const getFetchDataWorld = async () => {
    try {
      setLoadingMundial(true);
      const resultadoJSON = await axios(
        "https://deft-crepe-fe73b5.netlify.app/.netlify/functions/server/api/coronavirus/total"
      );
      setdataMundial(resultadoJSON.data);
      setLoadingMundial(false);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getFetchDataWorld();
  }, []);

  return (
    <Layout>
      <section className="container DatosMundiales">
        <div className=" text-center">
          <section className="container text-center">
            <div className="container">
              <img
                className="d-block mx-auto mb-4 logo"
                src={logo}
                alt="imgCovid19"
              />
              <h1 className="titulo">Datos del Covid-19</h1>
              <p className="lead">
                Aquí encontrarás información y noticias sobre el COVID-19 en
                Perú y en el mundo.
              </p>
              <p className="text-muted">
                <em>(Mantenemos actualizada nuestra información a diario)</em>
              </p>
            </div>
          </section>

          <hr
            sx={{
              borderBottomStyle: "solid",
              borderBottomColor: "borderNavbar",
              borderBottomWidth: "1px",
            }}
          />

          <section className="container text-center container">
            <div className="container">
              <h1 className="titulo-seccion">Datos del Mundo</h1>
              <span role="img" aria-label="map">
                🗺️
              </span>
              <div className="my-3">
                <button className="btn btn-primary" onClick={getFetchDataWorld}>
                  Actualizar información ahora
                </button>
              </div>

              <div className="row">
                <div className="col-md-4" sx={{ color: "casosCoronavirus" }}>
                  <h2>Casos de Coronavirus</h2>
                  <p>
                    Todos los casos confirmados de Covid-19 en todo el mundo.
                  </p>
                  <div className="cases">
                    {loadingMundial ? (
                      <div
                        className="spinner-border text-primary"
                        role="status"
                      />
                    ) : (
                      <h4 className="">{dataMundial.cases}</h4>
                    )}
                  </div>
                </div>
                <div className="col-md-4" sx={{ color: "totalMuertes" }}>
                  <h2>Muertes</h2>
                  <p>
                    La cantidad de muertes causadas por el Covid-19 en todo el
                    mundo.
                  </p>
                  <div className="deaths">
                    {loadingMundial ? (
                      <div
                        className="spinner-border text-danger"
                        role="status"
                      />
                    ) : (
                      <h4 className="">{dataMundial.deaths}</h4>
                    )}
                  </div>
                </div>
                <div className="col-md-4" sx={{ color: "casosRecuperados" }}>
                  <h2>Casos Recuperados</h2>
                  <p>La cantidad de personas que se recuperaron del Covid-19</p>
                  <div className="recovered">
                    {loadingMundial ? (
                      <div
                        className="spinner-border text-success"
                        role="status"
                      />
                    ) : (
                      <h4 className="">{dataMundial.recovered}</h4>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>
    </Layout>
  );
}
export default DatosMundiales;
