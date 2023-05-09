/** @jsxImportSource theme-ui */

import { useColorMode } from "theme-ui";
import { FaTwitter as TwitterIcon } from "react-icons/fa";
import { GoMarkGithub as GithubIcon } from "react-icons/go";
import { Link } from "react-router-dom";
import logo from "../../assets/img/covid_19.svg";
import { NavLink } from "react-router-dom";
import { GiMoon as Luna } from "react-icons/gi";
import { FaSun as Sol } from "react-icons/fa";

export function SocialNavItem({ href, title, children }: any) {
  return (
    <a
      href={href}
      title={title}
      className="css_icon"
      sx={{ color: "socialLink" }}
    >
      {children}
    </a>
  );
}
export function NavItem({ linkTo, children }: any) {
  return (
    <li className="css_nav_item" style={{ fontFamily: "Roboto, sans-serif" }}>
      <NavLink to={linkTo} className="css_nav_item_a" sx={{ color: "link" }}>
        {children}
      </NavLink>
    </li>
  );
}
export function Titulo({ children }: any) {
  return (
    <span
      sx={{ fontWeight: "bold", color: "text" }}
      style={{ fontFamily: "Roboto, sans-serif" }}
    >
      {children}
    </span>
  );
}

export default function Header() {
  const [colorMode, setColorMode] = useColorMode();

  const CambioColor = () => {
    setColorMode(colorMode === "default" ? "dark" : "default");
  };

  return (
    <header
      sx={{
        bg: "background",
        borderBottomStyle: "solid",
        borderBottomColor: "borderNavbar",
        borderBottomWidth: "1px",
      }}
      className="navbar_css"
    >
      <div className="div_navigation">
        <Link to="/" className="css_link_img">
          <img src={logo} alt="logo" className="css_logo" />
          <Titulo>Covid19</Titulo>
        </Link>
        <nav className="nav_navigation">
          <ul className="css_list">
            {/* <NavItem linkTo="/coide-source">About</NavItem> */}
            <NavItem linkTo="/about">Desarrolladores</NavItem>
            {/* <NavItem linkTo="/prevencion">Recomendaciones</NavItem> */}
          </ul>
        </nav>
        <div className="css_icons">
          <SocialNavItem
            href="https://github.com/Covid19-Peru/Covid19-Peru"
            title="GitHub"
          >
            <GithubIcon />
          </SocialNavItem>
          <SocialNavItem
            href="https://twitter.com/Minsa_Peru?ref_src=twsrc%5Etfw"
            title="Twitter"
          >
            <TwitterIcon />
          </SocialNavItem>
          <span
            onClick={CambioColor}
            tabIndex={0}
            role="button"
            onKeyDown={CambioColor}
            sx={{
              color: "socialLink",
              fontSize: "1.25rem",
              paddingLeft: "0.5rem",
              paddingRight: "0.5rem",
            }}
          >
            {colorMode === "default" ? <Luna /> : <Sol />}
          </span>
        </div>
      </div>
    </header>
  );
}
