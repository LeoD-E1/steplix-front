import React, { Fragment } from "react";
import {
  Card,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Row,
  Col,
  Container,
  Button,
} from "reactstrap";
import { useSelector } from "react-redux";
import "./styles/currencies.css";
import { Link } from "react-router-dom";

const Currencies = () => {
  const currencies = useSelector((state) => state.currency);

  return (
    <Fragment>
      <Container>
        <h3>Cryptos</h3>
        <div className="currencies">
          <Row>
            {currencies.length > 0 ? (
              currencies.map((item) => (
                <Col md="4" key={item.id_currency}>
                  <Card className="card">
                    <CardBody>
                      <CardTitle tag="h5">{item.name}</CardTitle>
                      <CardSubtitle tag="h6" className="mb-2 text-muted">
                        {item.symbol}
                      </CardSubtitle>
                      <CardText>{item.description}</CardText>
                      <Link to={`/rates/${item.symbol}`}>
                        <Button color="primary">View quotation</Button>
                      </Link>
                    </CardBody>
                  </Card>
                </Col>
              ))
            ) : (
              <h6>No data about Currencies</h6>
            )}
          </Row>
        </div>
      </Container>
    </Fragment>
  );
};

export default Currencies;
