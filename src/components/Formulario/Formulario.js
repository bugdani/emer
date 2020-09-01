import React from "react";
import Image from "react-image-webp";
import { Row, Col, Form } from "react-bootstrap";
import { Container, Card, CardDeck, Button } from "react-bootstrap";

export default function Formulario() {
  return (
    <>
      <Form>
        <Form.Group as={Row} controlId="formHorizontalEmail">
          <Form.Label column sm={2}>
            Nombre
          </Form.Label>
          <Col sm={10}>
            <Form.Control placeholder="Nombre" />
          </Col>
        </Form.Group>
        <Form.Group as={Row} controlId="formHorizontalEmail">
          <Form.Label column sm={2}>
            Email
          </Form.Label>
          <Col sm={10}>
            <Form.Control type="email" placeholder="Email" />
          </Col>
        </Form.Group>
        <Form.Group as={Row} controlId="formHorizontalEmail">
          <Form.Label column sm={2}>
            Asunto
          </Form.Label>
          <Col sm={10}>
            <Form.Control placeholder="Asunto" />
          </Col>
        </Form.Group>
        <Form.Group as={Row} controlId="formHorizontalEmail">
          <Form.Label column sm={2}>
            Mensaje
          </Form.Label>
          <Col sm={10}>
            <Form.Control as="textarea" rows="3" />
          </Col>
        </Form.Group>
        <Form.Group as={Row}>
          <Col sm={{ span: 10, offset: 2 }}>
            <Button type="submit">Enviar</Button>
          </Col>
        </Form.Group>
      </Form>
    </>
  );
}
