import React from "react";
import Image from "react-image-webp";
import { Container, Card, CardDeck } from "react-bootstrap";
import Alertas from "../../components/Alertas";
import "./Servicios.scss";

export default function Servicios() {
  return (
    <>
      <Container>
        <CardDeck className="mt-3 mb-3">
          <Card>
            <Image
              variant="top"
              webp={require("../../assets/shot_200831_115718.png")}
              className="card-img-top"
            />
            <Card.Body>
              <Card.Text className="text-left">
                El servicio de Área Protegida está pensado para todas aquellas
                empresas que quieran brindar, tanto a sus empleados como a sus
                clientes o visitantes, el cuidado y la protección ante una
                situación de emergencia, en la cual la persona requiera ser
                atendida por personal idóneo.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Image
              variant="top"
              webp={require("../../assets/shot_200831_115746.png")}
              className="card-img-top"
            />
            <Card.Body>
              <Card.Text className="text-left">
                Hoy los recursos humanos son la parte más importante en las
                empresas, por lo que su rendimiento debe ser cuidado y
                monitoreado, tanto dentro como fuera de la empresa. En el campo
                de la medicina laboral, EMER brinda servicios como:
              </Card.Text>
              <ul className="text-left">
                <li>Control de ausentismo</li>
                <li>Exámenes preocupacionales</li>
                <li>Exámenes preventivos</li>
                <li>Psicodiagnóstico</li>
                <li>Juntas Médicas de Especialistas</li>
              </ul>
            </Card.Body>
          </Card>
        </CardDeck>
        <CardDeck className="mt-3 mb-3">
          <Card>
            <Image
              variant="top"
              webp={require("../../assets/shot_200831_115805.png")}
              className="card-img-top"
            />
            <Card.Body>
              <Card.Text className="text-left">
                EMER brinda la cobertura de salud necesaria para cualquier tipo
                de evento (recitales, actos, partidos de fútbol, rugby,
                maratones, excursiones y/o diferentes eventos sociales) con la
                presencia de un cuerpo de profesionales con ambulancias
                equipadas con la más alta tecnología, para brindar seguridad en
                el desarrollo de los mismos
              </Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Image
              variant="top"
              webp={require("../../assets/shot_200831_115912.png")}
              className="card-img-top"
            />
            <Card.Body>
              <Card.Text className="text-left">
                EMER cuenta con un nuevo servicio de salud. Se brinda a través
                del Centro de Especialidades Médicas. Esta pensado para el
                público en general. Se trata de una cobertura pre-hospitalaria
                para todas aquellas personas que requieran un servicio de salud,
                con o sin obra social.
              </Card.Text>
            </Card.Body>
          </Card>
        </CardDeck>
        <CardDeck className="mt-3 mb-3">
          <Card>
            <Image
              variant="top"
              webp={require("../../assets/shot_200831_115847.png")}
              className="card-img-top"
            />
            <Card.Body>
              <Card.Text className="text-left">
                EMER brinda la cobertura de salud necesaria para cualquier tipo
                de evento (recitales, actos, partidos de fútbol, rugby,
                maratones, excursiones y/o diferentes eventos sociales) con la
                presencia de un cuerpo de profesionales con ambulancias
                equipadas con la más alta tecnología, para brindar mayor
                seguridad.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Image
              variant="top"
              webp={require("../../assets/shot_200831_115931.png")}
              className="card-img-top"
            />
            <Card.Body>
              <Card.Text className="text-left">
                EMER brinda la cobertura de salud necesaria para cualquier tipo
                de evento (recitales, actos, partidos de fútbol, rugby,
                maratones, excursiones y/o diferentes eventos sociales) con la
                presencia de un cuerpo de profesionales con ambulancias
                equipadas con la más alta tecnología, para brindar mayor
                seguridad.
              </Card.Text>
            </Card.Body>
          </Card>
        </CardDeck>
        <Alertas />
      </Container>
    </>
  );
}
