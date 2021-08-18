import React from "react";
import { Line } from "@ant-design/charts";
import { Container } from "reactstrap";

const Chart = () => {
  const data = [
    { date: "2021-08-18T19:32:09.000Z", value: 14 },
    { date: "2021-08-18T19:32:50.000Z", value: 18 },
    { date: "2021-08-18T19:33:09.000Z", value: 16 },
    { date: "2021-08-18T19:33:59.000Z", value: 4 },
    { date: "2021-08-18T19:34:09.000Z", value: 30 },
    { date: "2021-08-18T19:34:59.000Z", value: 28 },
    { date: "2021-08-18T19:35:09.000Z", value: 22 },
    { date: "2021-08-18T19:35:59.000Z", value: 16 },
    { date: "2021-08-18T19:36:19.000Z", value: 22 },
    { date: "2021-08-18T19:37:09.000Z", value: 23 },
  ];

  const config = {
    data,
    title: {
      visible: true,
      text: "evolutionary chart of the price",
    },
    xField: "date",
    yField: "value",
    color: "#2593fc",
    point: {
      visible: true,
      size: 5,
      shape: "diamond",
      style: {
        fill: "white",
        stroke: "#2593fc",
        lineWidth: 2,
      },
    },
  };

  return (
    <Container>
      <br />
      <br />
      <Line {...config} />
    </Container>
  );
};

export default Chart;
