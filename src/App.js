import React from 'react';
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import DatosMundiales from './DatosMundiales'
import DatosPeru from './DatosPeru'
import DatosRegionesPeru from './DatosRegionesPeru'

function App (){
  
  return (
    <div>
      <Navbar />
      <DatosMundiales />
      <DatosPeru />
      <DatosRegionesPeru />
      <Footer />
    </div>
  );
}

export default App;
