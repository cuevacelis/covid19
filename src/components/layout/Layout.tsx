import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

export default function Layout() {
  return (
    <>
      <Header />
      <div className="contenido" style={{ paddingTop: "100px" }}>
        <Outlet />
      </div>
      <Footer />
    </>
  );
}
