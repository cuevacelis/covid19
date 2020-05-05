import React, { Suspense, lazy } from 'react';
import {
  Switch, Route,
} from 'react-router-dom';

const DatosMundiales = lazy(() => import('./pages/principal/DatosMundiales'));
/* const DatosCountry = lazy(() => import('./pages/principal/DatosCountry'));
const DatosRegionesPeru = lazy(() => import('./pages/principal/DatosRegionesPeru')); */
const AcercaDeLosDesarrolladores = lazy(() => import('./pages/informacion/AcercaDeLosDesarrolladores'));
const ComoHicimosLaPagina = lazy(() => import('./pages/informacion/ComoHicimosLaPagina'));
const PrevenirElCovid19 = lazy(() => import('./pages/informacion/PrevenirElCovid19'));

function Covid19() {
  return (
    <div className="contenido" style={{ paddingTop: '100px' }}>
      <Switch>
        <Suspense fallback={<div>cargando..</div>}>
          <Route exact path="/">
            <DatosMundiales />
          </Route>
          <Route path="/about" component={AcercaDeLosDesarrolladores} />
          <Route path="/coide-source" component={ComoHicimosLaPagina} />
          <Route path="/prevencion" component={PrevenirElCovid19} />
        </Suspense>
      </Switch>
    </div>

  );
}

export default Covid19;
