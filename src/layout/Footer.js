import React from 'react';
import FooterStyle from '../assets/styles/css-in-js/layout/Footer/FooterStyle';

export default function Footer() {
  return (
    <>
      <footer className="my-4 pt-2 text-muted text-center text-small">
        <FooterStyle />
        <p className="mb-1">Desarrollado con &hearts; en Javascript</p>
      </footer>
    </>
  );
}
