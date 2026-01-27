import React from "react";
import { Navbar, Nav, Container, FormControl } from "react-bootstrap";

import "./Navbar.css";

const Navigation: React.FC = () => {
  
  return (
    <>
      {/* 1. Top Utility Bar (White) - Standard Flow */}
      <div className="bg-white border-bottom top-nav d-none d-lg-block p-2">
        <Container
          fluid
          className="d-flex justify-content-between small text-muted top-nav-container"
        >
          <div className="fw-bold top-nav-switch">
            <span className="text-dark pe-2 border-end border-2">Personal</span>
            <span className="ps-2 cursor-pointer">Business</span>
          </div>
          <div className="d-flex top-nav-links">
            <a href="#" className="nav-link-top">
              Coverage Map
            </a>
            <a href="#" className="nav-link-top">
              | BYOD
            </a>
            <a href="#" className="nav-link-top">
              | Travel Plans
            </a>
            <a href="#" className="nav-link-top">
              | Top ups
            </a>
            <a href="#" className="nav-link-top">
              | International Calls
            </a>
            <a href="#" className="nav-link-top">
              | Device Protection
            </a>
            <a href="#" className="nav-link-top">
              | Help & Support
            </a>
          </div>
        </Container>
      </div>

      {/* 2. Main Navigation (Orange) - Sticky Part */}
      <Navbar
        expand="xl"
        variant="dark"
        className="main-nav-bg sticky-top shadow-sm px-3"
      >
        <Container fluid>
          <Navbar.Brand href="#" className="bg-white rounded px-2">
            <img src="../logo.png" height="40" alt="GoLite" />
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="main-nav" />

          <Navbar.Collapse id="main-nav">
            <Nav className="me-auto fw-bold">
              <Nav.Link href="#">Prepaid Plans</Nav.Link>
              <Nav.Link href="#">Postpaid Plans</Nav.Link>
              <Nav.Link href="#">Family Plans</Nav.Link>
              <Nav.Link href="#">Phones</Nav.Link>
              <Nav.Link href="#">Special Plans</Nav.Link>
            </Nav>

            <div className="d-flex align-items-center gap-3 mt-3 mt-xl-0">
              <div className="search-container bg-white rounded-pill px-3 py-1 d-flex align-items-center">
                <FormControl
                  type="search"
                  placeholder="Search..."
                  className="border-0 no-shadow p-0"
                />
                <span className="text-danger ms-2">🔍</span>
              </div>
              <div className="text-white d-flex gap-3 fs-5">
                <span>🔔</span>
                <span>👤</span>
                <span>🛒</span>
                {/* <button className="btn btn-outline-light btn-sm rounded-pill px-3">English ⌵</button> */}
                <select className="btn btn-outline-light btn-sm rounded-pill px-3 bg-transparent text-black">
                  <option value="en">English</option>
                  <option value="es">Español</option>
                  <option value="hi">हिंदी</option>
                </select>
              </div>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Navigation;
