import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar" role="navigation" aria-label="Main navigation">
      <h1 className="logo">SmileBright Dental Clinic</h1>
      <ul className="nav-links">
        {[
          { to: "/", label: "Home", end: true },
          { to: "/about", label: "About Us" },
          { to: "/services", label: "Services" },

          { to: "/contact", label: "Contact" }
        ].map(({ to, label, end }) => (
          <li key={to}>
            <NavLink
              to={to}
              end={end}
              className={({ isActive }) => (isActive ? "active-link" : "")}
            >
              {label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
