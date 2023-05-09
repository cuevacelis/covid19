import { Suspense, lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "theme-ui";
import PantallaDeCargaPrincipal from "./components/pantallas-de-carga/PantallaDeCargaPrincipal";
import theme from "./components/css-in-js/theme";

const DatosMundiales = lazy(() => import("./pages/DatosMundiales"));
const AcercaDeLosDesarrolladores = lazy(
  () => import("./pages/AcercaDeLosDesarrolladores")
);
const ComoHicimosLaPagina = lazy(() => import("./pages/ComoHicimosLaPagina"));
const PrevenirElCovid19 = lazy(() => import("./pages/PrevenirElCovid19"));

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Suspense fallback={<PantallaDeCargaPrincipal />}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<DatosMundiales />} />
            <Route path="/about" element={<AcercaDeLosDesarrolladores />} />
            <Route path="/coide-source" element={<ComoHicimosLaPagina />} />
            <Route path="/prevencion" element={<PrevenirElCovid19 />} />
          </Routes>
        </BrowserRouter>
      </Suspense>
    </ThemeProvider>
  );
}

export default App;
