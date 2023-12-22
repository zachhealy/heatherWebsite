// NavBar.tsx
import React from 'react';
import { FaLayerGroup } from 'react-icons/fa'; // Import icons of your choice

const NavBar: React.FC = () => {
  return (
    <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
      <div className="container">
        <FaLayerGroup className="navbar-brand" />
        <span className="navbar-text">HH</span>
      </div>
    </nav>
  );
};

export default NavBar;
