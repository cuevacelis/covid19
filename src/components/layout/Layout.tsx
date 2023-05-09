/** @jsxImportSource theme-ui */

import Footer from "./Footer";
import Header from "./Header";

export default function Layout({ children }: any) {
  return (
    <>
      <Header />
      <div
        className="contenido"
        sx={{
          bg: "background",
        }}
        style={{ paddingTop: "100px" }}
      >
        {children}
      </div>
      <Footer />
    </>
  );
}
