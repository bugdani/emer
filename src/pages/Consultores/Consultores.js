import React from "react";
import Image from "react-image-webp";
import { Link } from "react-router-dom";
import { Row, Col, Form } from "react-bootstrap";
import { Container, Card, CardDeck, Button } from "react-bootstrap";
import Alertas from "../../components/Alertas";
import Formulario from "../../components/Formulario";
import "./Consultores.scss";

export default function Consultores() {
  return (
    <>
      <Container>
        <Row className="justify-content-center mt-5">
          <Image webp={require("../../assets/consultores.webp")} />
        </Row>
        <Row className="mt-4 mb-4">
          <Col>
            <div className="texto-consultores ml-5">
              <h3 className="text-left" style={{ color: "#182983" }}>
                De qué se trata EMER Consultores?
              </h3>
              <p className="leyenda-consultores">
                Somos un equipo multidiciplinario compuesto por profesionales
                que ofrecen un servicio integral en materia de seleccion de
                personal.
                <br />
                <br />
                Contamos con las herramietas y recursos necesarios.
                <br />
                <br /> Ofrecemos un servicio de la mas alta calidad con los
                estandares que hoy exige el mercado.
                <br />
                <br /> Nuestro servicio comienza en la convocatoria de
                participantes para finalmente afianzar el vinculo con nuestros
                clientes en el seguimiento del personal ingresado.
                <br />
                <br /> 18 años de experiencia en la provicia de Jujuy avalan
                nuestros servicios.
              </p>
            </div>
            <div className="text-right">
              <Link to="/Contacto">
                <Button variant="danger">Contacto</Button>
              </Link>
            </div>
          </Col>
          <Col>
            <Image webp={require("../../assets/consultores2.webp")} />
            {/* <Formulario /> */}
          </Col>
        </Row>
        <Alertas />
      </Container>
    </>
  );
}
