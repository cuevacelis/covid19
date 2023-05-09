import React, { Suspense, lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "theme-ui";
import tema from "./assets/styles/css-in-js/theme";
import "./assets/styles/css/fonts.css";
import PantallaDeCargaPrincipal from "./components/pantallas-de-carga/PantallaDeCargaPrincipal";

const DatosMundiales = lazy(() => import("./pages/principal/DatosMundiales"));
const AcercaDeLosDesarrolladores = lazy(() =>
  import("./pages/informacion/AcercaDeLosDesarrolladores")
);
const ComoHicimosLaPagina = lazy(() =>
  import("./pages/informacion/ComoHicimosLaPagina")
);
const PrevenirElCovid19 = lazy(() =>
  import("./pages/informacion/PrevenirElCovid19")
);

function App() {
  return (
    <ThemeProvider theme={tema}>
      <Suspense fallback={<PantallaDeCargaPrincipal />}>
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<DatosMundiales />} />
            <Route path="/about" element={<AcercaDeLosDesarrolladores />} />
            <Route path="/coide-source" element={<ComoHicimosLaPagina />} />
            <Route path="/prevencion" element={<PrevenirElCovid19 />} />
          </Routes>
          {/* <Layout>
						<Covid19 />
					</Layout> */}
        </BrowserRouter>
      </Suspense>
    </ThemeProvider>
  );
}

export default App;
