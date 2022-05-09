import './App.css';
import React from 'react';
import Footer from './Components/Footer';
import NavRoutes from './Components/NavRoutes';
import Nav from './Components/Nav';

function App() {
  return (
      <React.Fragment>
            <Nav/>
            <NavRoutes/>
            <Footer/>
      </React.Fragment>
  );
}

export default App;
