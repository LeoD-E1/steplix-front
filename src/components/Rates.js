import React from "react";
import {
  Card,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  Row,
  Container,
  Col,
} from "reactstrap";
import { useSelector } from "react-redux";
import "./styles/rates.css";
import ModalAddRate from "./ModalAddRate";

const Currencies = () => {
  let rates = useSelector((state) => state.rate);

  return (
    <Container>
      <Row>
        <Col md={{ size: 8, offset: 2 }}>
          <Row className="mb-3">
            <Col md="9">
              <h3>Crypto Quotation</h3>
            </Col>
            <Col md="3">
              <ModalAddRate />
            </Col>
          </Row>

          <div className="rates">
            {rates.length > 0 ? (
              rates.map((item) => (
                <Card key={item.id_rate}>
                  <CardBody>
                    <Row>
                      <Col>
                        <CardTitle tag="h5">{item.name}</CardTitle>
                      </Col>
                      <Col>
                        <CardSubtitle tag="h6" className="mb-2 text-muted">
                          {item.created_at}
                        </CardSubtitle>
                      </Col>
                    </Row>
                    <CardSubtitle tag="h6" className="mb-2 text-muted">
                      {item.symbol}
                    </CardSubtitle>
                    <Row>
                      <Col>
                        <CardText>{item.description}</CardText>
                      </Col>
                      <Col>
                        <CardSubtitle tag="h4" className="mb-2">
                          {item.value}
                        </CardSubtitle>
                      </Col>
                    </Row>
                    <Button color="primary">View</Button>
                  </CardBody>
                </Card>
              ))
            ) : (
              <h6>Nothing to show about Rates</h6>
            )}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Currencies;
