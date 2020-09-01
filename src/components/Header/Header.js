import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import Image from "react-image-webp";
import "./Header.scss";

export default function Header() {
  return (
    <>
      <div className="justify-content-center NavMenu pt-3">
        <Image webp={require("../../assets/logo.webp")} className="pr-5 " />
        <Image webp={require("../../assets/emergencias.png")} />
        <Navbar className="border-bottom border-dark">
          <Nav className="mr-auto NavPaginas mt-2">
            <NavLink to="/" className="nav-link border-right border-danger">
              Quienes Somos
            </NavLink>
            <NavLink
              to="/Servicios"
              className="nav-link border-right border-danger"
            >
              Servicios
            </NavLink>
            <NavLink
              to="/Contacto"
              className="nav-link border-right border-danger"
            >
              Contacto
            </NavLink>
            <NavLink
              to="/Consultores"
              className="nav-link border-right border-danger"
            >
              EMER Consultores
            </NavLink>
            <NavLink to="/Alquiler" className="nav-link">
              Alquiler de Policonsultorios
            </NavLink>
          </Nav>
        </Navbar>
      </div>
    </>
  );
}
