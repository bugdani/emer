import React from "react";
import Image from "react-image-webp";
import "./Alquiler.scss";
import { Row, Col, Button, Container, Carousel } from "react-bootstrap";

export default function Alquiler() {
  return (
    <>
      <Container>
        <Row className="text-left mt-5">
          <h3 style={{ color: "#182983" }}>
            Alquiler de Consultorios, un lugar pensado a su medida
          </h3>
          <ul>
            <li>EXCELENTE UBICACIÓN SOBRE LEANDRO ALEM 661 Bº GORRITI</li>
            <li>
              LOS USUARIOS CUENTAN CON VENTAJAS CONSIDERABLES DE ACCESO POR LA
              GRAN CANTIDAD DE TRANSPORTE PUBLICO QUE CIRCULA POR LA ZONA
            </li>
            <li>
              NUESTRO POLICONSULTORIO POSEE 8 CONSULTORIOS MEDICOS EQUIPADOS,
              CON PATIOS INTERNOS ADAPTADOS PARA SU USO PROFESIONAL Y EL CONFORT
              DE SUS PACIENTES
            </li>
            <li>
              AMPLIO HORARIO DE ATENCION SUS PACIENTES PODRAN CONCRETAR VISITAS
              ENTRE LAS 08:00 Y 20.00 HS
            </li>
          </ul>
        </Row>
        <Row className="mt-4 mb-4">
          <Col className="text-left">
            <h3 style={{ color: "#182983" }}>Consultorios</h3>
            <ul>
              <li>
                ALQUILER POR MODULO HORARIOS(MODULOS DIURNOS Y MODULOS
                VESPERTINOS).
              </li>
              <li>CONSULTORIOS LIBRES 2(DOS)</li>
              <li>
                NUESTRO POLICONSULTORIO POSEE 8 CONSULTORIOS MEDICOS EQUIPADOS,
                CON PATIOS INTERNOS ADAPTADOS PARA SU USO PROFESIONAL Y EL
                CONFORT DE SUS PACIENTES
              </li>
              <li>ATENCION DISPONIBLE DE LUNES A SABADOS.</li>
              <li>HORARIOS : DE LUNES A VIERNES 08:00 A 20:00</li>
              <li>HORARIOS SABADOS: 09:00 A 12:00</li>
              <li>EDIFICIO APTO PROFESIONAL.</li>
              <li>
                HABILITACIONES: MINISTERIO DE SALUD JUJUY /SEGÚN NORMATIVAS
                U.F.E.S.
              </li>
              <li>CONSULTORIOS CON /SIN AIRE ACONDICIONADO</li>
              <li>COMODIDAD Y PRIVACIDAD PARA EL PROFESIONAL.</li>
              <li>
                ESPECIALIDADES VIGENTES: PEDIATRIA, CLINICA MEDICA,
                ENDOCRINOLOGIA, CARDIOLOGIA, TRAUMATOLOGIA,ODONTOLOGIA,
                NUTRICIONISTA, PSICOLOGIA, MEDICINA LABORAL,
                FISIOTERAPIA/KINESIOLOGIA.
              </li>
              <li>ESTACIONAMIENTO PRIVADO A MENOS DE 50 MTS.</li>
              <li>WI-FI.</li>
              <li>CON/SIN TELEFONIA INTERNA EN CONSULTORIO</li>
              <li>REQUISITOS MINIMOS.</li>
            </ul>
          </Col>
          <Col className="text-left">
            <h3 style={{ color: "#182983" }}>Servicios que ofrecemos</h3>
            <ul>
              <li>SECRETARIA Y APOYO ADMINISTRATIVO.</li>
              <li>CENTRAL TELEFONICA.</li>
              <li>RESERVA DE TURNOS TELEFONICOS</li>
              <li>POSNET DE PRINCIPALES PREPAGAS.</li>
              <li>FAX Y FOTOCOPIAS</li>
              <li>CONFORTABLE SALA DE ESPERA Y TV POR CABLE</li>
              <li>ACCESO A INTERNET</li>
              <li>BAÑO PRIVADO PARA MEDICOS</li>
              <li>BAÑO PARA PACIENTES.</li>
              <li>COCINA </li>
              <li>
                SERVICIO DE LIMPIEZA Y MANTENIMIENTO. TODO SIN COSTO ADICIONAL
              </li>
            </ul>
          </Col>
        </Row>
        <Row className="justify-content-center text-left mt-5 mb-5">
          <Carousel>
            <Carousel.Item>
              <Image webp={require("../../assets/alq1.webp")} />
            </Carousel.Item>
            <Carousel.Item>
              <Image webp={require("../../assets/alq2.webp")} />
            </Carousel.Item>
            <Carousel.Item>
              <Image webp={require("../../assets/alq3.webp")} />
            </Carousel.Item>
            <Carousel.Item>
              <Image webp={require("../../assets/alq4.webp")} />
            </Carousel.Item>
            <Carousel.Item>
              <Image webp={require("../../assets/alq5.webp")} />
            </Carousel.Item>
          </Carousel>
        </Row>
      </Container>
    </>
  );
}
