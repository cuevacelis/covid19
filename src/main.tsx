import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/global.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DatosMundiales from "./pages/DatosMundiales";
import AcercaDeLosDesarrolladores from "./pages/AcercaDeLosDesarrolladores";
import ComoHicimosLaPagina from "./pages/ComoHicimosLaPagina";
import PrevenirElCovid19 from "./pages/PrevenirElCovid19";
import Layout from "./components/layout/Layout";
import NotFound from "./pages/not-found";
import CovidRecommendations from "./pages/Recommendations";
import AboutPage from "./pages/About";
import { ThemeProvider } from "./components/theme-provider";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    // errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <DatosMundiales />,
      },
      {
        path: "about",
        element: <AboutPage />,
      },
      {
        path: "developers",
        element: <AcercaDeLosDesarrolladores />,
      },
      {
        path: "coide-source",
        element: <ComoHicimosLaPagina />,
      },
      {
        path: "prevencion",
        element: <PrevenirElCovid19 />,
      },
      {
        path: "recommendations",
        element: <CovidRecommendations />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

createRoot(document.getElementById("root-covid")!).render(
  <StrictMode>
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <RouterProvider router={router} />
    </ThemeProvider>
  </StrictMode>
);
