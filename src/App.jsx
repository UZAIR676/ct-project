import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './pages/Navbar';
import Footer from './pages/Footer';
import AppRoute from './AppRoute/AppRoute';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <AppRoute />
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
