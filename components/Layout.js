import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = () => {
  return (
    <>
      <Navbar />
      <main>
        <Outlet /> {/* Render the matched child route here */}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
