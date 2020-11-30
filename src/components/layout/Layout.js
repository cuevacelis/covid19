import React, { lazy } from 'react';

const Header = lazy(() => import('./Header'));
// const Layout = lazy(() => import('./Navbar'));
const Footer = lazy(() => import('./Footer'));

export default function Layout({ children }) {
  return (
    <>
      <Header />
      {children }
      <Footer />
    </>
  );
}
