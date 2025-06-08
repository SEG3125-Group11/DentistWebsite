import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import NotFound from './components/NotFound';

import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import CallNow from './pages/CallNow';

import Services from './pages/Services';
import GeneralDentistry from './pages/GeneralDentistry';
import CosmeticDentistry from './pages/CosmeticDentistry';
import RootCanal from './pages/RootCanal';
import TeethWhitening from './pages/TeethWhitening';
import DentalImplants from './pages/DentalImplants';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />

        {/* Services main page */}
        <Route path="/services" element={<Services />} />

        {/* Service detail pages */}
        <Route path="/services/GeneralDentistry" element={<GeneralDentistry />} />
        <Route path="/services/CosmeticDentistry" element={<CosmeticDentistry />} />
        <Route path="/services/RootCanal" element={<RootCanal />} />
        <Route path="/services/TeethWhitening" element={<TeethWhitening />} />
        <Route path="/services/DentalImplants" element={<DentalImplants />} />

        <Route path="/contact" element={<Contact />} />
        <Route path="/call-now" element={<CallNow />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
