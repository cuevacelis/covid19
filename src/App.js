import React, { Suspense, lazy } from 'react';
import { HashRouter } from 'react-router-dom';
import { ThemeProvider } from 'theme-ui';
import tema from './assets/styles/css-in-js/theme';
import PantallaDeCargaPrincipal from './components/pantallas-de-carga/PantallaDeCargaPrincipal';
import './assets/styles/css/fonts.css';

const Layout = lazy(() => import('./components/layout/Layout'));
const Covid19 = lazy(() => import('./Covid19'));

function App() {
  return (
    <HashRouter>
      <ThemeProvider theme={ tema }>
        <Suspense fallback={ <PantallaDeCargaPrincipal /> }>
          <Layout>
            <Covid19 />
          </Layout>
        </Suspense>
      </ThemeProvider>
    </HashRouter>
  );
}

export default App;
