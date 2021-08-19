import React from "react";
import { Line } from "@ant-design/charts";
import { Container } from "reactstrap";
import { useParams } from "react-router";
import { useSelector } from "react-redux";

const Chart = () => {
  const { symbol } = useParams();
  const rates = useSelector((state) => state.rate);
  const quotation = rates.filter((rate) => rate.symbol === symbol);

  const data = quotation
    .map((item) => ({
      date: item.created_at,
      value: item.value,
    }))
    .reverse();

  const config = {
    data,
    title: {
      visible: true,
      text: "Evolutionary chart of the price",
    },
    xField: "date",
    yField: "value",
    color: "#2593fc",
    point: {
      visible: true,
      size: 7,
      shape: "circle",
      style: {
        fill: "white",
        stroke: "#2593fc",
        lineWidth: 2,
      },
    },
  };

  return (
    <Container>
      <h3>Evolutionary chart of the price of {symbol}</h3>
      <br />
      {data.length > 3 ? (
        <Line {...config} />
      ) : (
        <h6>Data about {symbol} is not enough to show Chart</h6>
      )}
    </Container>
  );
};

export default Chart;
