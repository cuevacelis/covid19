/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";
import Footer from "./Footer";
import Header from "./Header";
import React from "react";

export default function Layout({ children }) {
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
