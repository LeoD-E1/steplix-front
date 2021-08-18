import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import {
  Card,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  Row,
  Col,
  Container,
} from "reactstrap";

const DetailRate = () => {
  const { symbol } = useParams();
  const rates = useSelector((state) => state.rate);
  const rateTarget = rates.filter((rate) => rate.symbol === symbol);

  return (
    <Container>
      <Row>
        <Col md={{ size: 8, offset: 2 }}>
          <h3>
            Rates of "
            <s>
              <b>{symbol}</b>
            </s>
            "
          </h3>
          {rateTarget.length > 0 ? (
            rateTarget.map((item) => (
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
        </Col>
      </Row>
    </Container>
  );
};

export default DetailRate;
