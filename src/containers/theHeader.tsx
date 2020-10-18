import React from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import { titles } from './routeToTitle';

const TheHeader: React.FC = () => {
  const location = useLocation();

  return (
    <Navbar bg="light" expand="lg" className="the-header">
      <Navbar.Brand as={RouterLink} to="/">
        {titles[location.pathname]}
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse className="justify-content-end">
        <Nav>
          <Nav.Link as={RouterLink} to="/home">
            Home
          </Nav.Link>
          <Nav.Link as={RouterLink} to="/units">
            Units
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default TheHeader;
