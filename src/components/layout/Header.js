import React from 'react';
import { Link } from 'react-router-dom';
import { GoMarkGithub as GithubIcon } from 'react-icons/go';
import { FaTwitter as TwitterIcon } from 'react-icons/fa';
import {
  NavItem, SocialNavItem, HeaderStyle, Titulo,
} from '../../assets/styles/css-in-js/componentes/layout/Header/HeadStyle';
import ButtonDarkStyle from '../../assets/styles/css-in-js/componentes/ButtonDarkStyle';
import logo from '../../assets/img/covid_19.svg';
import '../../assets/styles/css/NavBarStyle.css';


export default function Header() {
  return (
    <HeaderStyle>
      <div className="div_navigation">
        <Link to="/" className="css_link_img">
          <img src={logo} alt="logo" className="css_logo" />
          <Titulo>Covid19</Titulo>
        </Link>
        <nav className="nav_navigation">
          <ul className="css_list">
            { /* <NavItem linkTo="/coide-source">About</NavItem> */}
            <NavItem linkTo="/about">Desarrolladores</NavItem>
            { /* <NavItem linkTo="/prevencion">Recomendaciones</NavItem> */}
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
          <ButtonDarkStyle />
        </div>
      </div>
    </HeaderStyle>
  );
}
