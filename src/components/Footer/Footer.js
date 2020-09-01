import React from "react";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import Image from "react-image-webp";

import "./Footer.scss";

export default function Footer() {
  return (
    <>
      <footer
        id="sticky-footer"
        className="py-4 text-white border-top border-dark"
      >
        <Row>
          <Col>
            <div className="d-flex container justify-content-center">
              <div className="p-2 bd-highlight">
                <Image
                  webp={require("../../assets/logo.webp")}
                  className="pr-5 "
                />
              </div>
              <div className="p-2 bd-highlight mt-3">
                <Link to="/Contacto" className="dondeEstamos">
                  Donde estamos
                </Link>
              </div>
            </div>
            <div className="container text-center">
              <div className="d-flex justify-content-center">
                <div className="p-2 bd-highlight">
                  <Image webp={require("../../assets/LogoGrupoSicom.webp")} />
                </div>
                <div className="p-2 bd-highlight">
                  <Image
                    webp={require("../../assets/LogoSicomCreditos.webp")}
                  />
                </div>
                <div className="p-2 bd-highlight">
                  <Image webp={require("../../assets/LogoGenial.webp")} />
                </div>
                <div className="p-2 bd-highlight">
                  <Image webp={require("../../assets/LogoSicomPagos.webp")} />
                </div>
              </div>
            </div>
          </Col>
          <Col>
            <div className="ubicacion">
              <h5 className="direccion">Alem 661 - S. S. de Jujuy</h5>
              <h5 className="horario">
                Lun. a Vier. 8.30 a 13hs & 16.30 a 21hs
              </h5>
              <h5 className="horario">Sábados 9 a 13hs</h5>
              <h5 className="emerFrase">EMER te cuida...</h5>
            </div>
            <p className="copyright">2020 EMER - GRUPO SICOM S.A.</p>
          </Col>
        </Row>
      </footer>
    </>
  );
}
