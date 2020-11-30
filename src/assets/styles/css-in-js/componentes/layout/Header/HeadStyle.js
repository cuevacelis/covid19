/** @jsxRuntime classic */
/** @jsx jsx */
/*eslint-disable */
import { jsx } from 'theme-ui';
import { Link } from 'react-router-dom';

export function SocialNavItem({ href, title, children }) {
  return (
    <a
      href={ href }
      title={ title }
      className="css_icon"
      sx={ { color: 'socialLink' } }
    >
      {children }
    </a>
  );
}
export function NavItem({ linkTo, children }) {
  return (
    <li className="css_nav_item" style={ { fontFamily: 'Roboto, sans-serif' } }>
      <Link to={ linkTo } className="css_nav_item_a" sx={ { color: 'link' } }>
        { children }
      </Link>
    </li>
  );
}
export function Titulo({ children }) {
  return (
    <span
      sx={ { fontWeight: 'bold', color: 'text' } }
      style={ { fontFamily: 'Roboto, sans-serif' } }
    >
      {children }
    </span>
  );
}
export function HeaderStyle({ children }) {
  return (
    <header
      sx={ {
        bg: 'background',
        borderBottomStyle: 'solid',
        borderBottomColor: 'borderNavbar',
        borderBottomWidth: '1px',
      } }
      className="navbar_css"
    >
      {children }
    </header>
  );
}
