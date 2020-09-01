import React from "react";
import Image from "react-image-webp";
import { Row, Col, Carousel, Card, Button, Container } from "react-bootstrap";
import "./QuienesSomos.scss";

import Alertas from "../../components/Alertas";

export default function QuienesSomos() {
  return (
    <>
      <Container>
        <Carousel>
          <Carousel.Item>
            <Image webp={require("../../assets/slide1.webp")} />
          </Carousel.Item>
          <Carousel.Item>
            <Image webp={require("../../assets/slide2.webp")} />
          </Carousel.Item>
          <Carousel.Item>
            <Image webp={require("../../assets/slide3.webp")} />
          </Carousel.Item>
          <Carousel.Item>
            <Image webp={require("../../assets/slide4.webp")} />
          </Carousel.Item>
          <Carousel.Item>
            <Image webp={require("../../assets/slide5.webp")} />
          </Carousel.Item>
          <Carousel.Item>
            <Image webp={require("../../assets/slide6.webp")} />
          </Carousel.Item>
          <Carousel.Item>
            <Image webp={require("../../assets/slide7.webp")} />
          </Carousel.Item>
        </Carousel>
        <Row className="mt-3 mb-3">
          <Col className="d-flex justify-content-center">
            <Card className="mr-3 shadow p-3 mb-5 bg-white rounded">
              <Card.Body>
                <Card.Title className="text-left">Turnos</Card.Title>
                <Card.Text className="text-left">
                  Sacá tu turno de forma anticipada, y recibí el mejor servicio
                  en Nuestro Centro de Especialidades Médicas...
                </Card.Text>
                <div className="text-right">
                  <Button variant="danger">Leer más</Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col className="d-flex justify-content-center">
            <Card className="shadow p-3 mb-5 bg-white rounded">
              <Card.Body>
                <Card.Title className="text-left">Servicios</Card.Title>
                <Card.Text className="text-left">
                  Conocé todos nuestros servicios y recibí la mejor cobertura...
                </Card.Text>
                <div className="text-right">
                  <Button variant="danger" style={{ marginTop: 24 }}>
                    Leer más
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Alertas />
      </Container>
    </>
  );
}
