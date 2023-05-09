/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";
import FooterStyle from "../../assets/styles/css-in-js/componentes/layout/Footer/FooterStyle";

export default function Footer() {
  return (
    <footer
      sx={{
        bg: "background",
      }}
      className="py-4 text-muted text-center text-small"
    >
      <FooterStyle />
      <p className="mb-1">Desarrollado con &hearts; en Javascript</p>
    </footer>
  );
}
