import React from "react";
import { Row, Col } from "react-bootstrap";
import Image from "react-image-webp";
import "./Alertas.scss";

export default function Alertas() {
  return (
    <>
      <Row className="d-flex mt-2 mb-4">
        <Col>
          <div className="contenedor-alerta">
            <Image
              webp={require("../../assets/verde.webp")}
              className="pr-5 "
            />
            <p className="codigos">
              <strong>
                Situaciones médicas en las que no existe riesgo de muerte
              </strong>
              , ni necesidad urgente de evitar compicaciones. El paciente no
              puede trasladarse.
            </p>
          </div>
        </Col>
        <Col>
          <div className="contenedor-alerta">
            <Image
              webp={require("../../assets/amarillo.webp")}
              className="pr-5 "
            />
            <p className="codigos">
              <strong>
                Son situaciones en las que no hay riesgo de perder la vida en
                forma inminente
              </strong>
              , pero que deben ser atendidas en un periodo no mayor a treita
              minutos.
            </p>
          </div>
        </Col>
        <Col>
          <div className="contenedor-alerta">
            <Image webp={require("../../assets/rojo.webp")} className="pr-5 " />
            <p className="codigos">
              <strong>Riesgo inminente en la vida del paciente</strong>. Es
              imprescindible la asistencia inmediata, en lo posible en un
              término no mayor de diez minutos.
            </p>
          </div>
        </Col>
      </Row>
    </>
  );
}
