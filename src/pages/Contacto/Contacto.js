import React from "react";
import Image from "react-image-webp";
import { Row, Col, Form } from "react-bootstrap";
import { Container, Card, CardDeck, Button } from "react-bootstrap";
import Alertas from "../../components/Alertas";
import Formulario from "../../components/Formulario";
import "./Contacto.scss";

export default function Contacto() {
  return (
    <>
      <Container>
        <h3 className="titulo mt-4">Contacto</h3>
        <Row className="mt-4 mb-4">
          <Col>
            <Image webp={require("../../assets/Contacto.png")} />
          </Col>
          <Col>
            <Formulario />
          </Col>
        </Row>
        <h3 className="titulo">Donde estamos</h3>
        <Row className="justify-content-center">
          <div className="google-map-code">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3639.4166539264957!2d-65.30074458445961!3d-24.19218299107556!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x941b0f455a72240d%3A0x4179bd898d31a509!2sEMER%20Emergecias%20M%C3%A9dicas!5e0!3m2!1ses-419!2sar!4v1598895786492!5m2!1ses-419!2sar"
              style={{
                width: 600,
                height: 450,
                frameborder: 0,
                border: 0,
                allowfullscreen: "",
              }}
            ></iframe>
          </div>
        </Row>
        <Alertas />
      </Container>
    </>
  );
}
