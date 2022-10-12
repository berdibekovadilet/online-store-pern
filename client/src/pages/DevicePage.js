import React from "react";
import { Button, Card, Col, Container, Image, Row } from "react-bootstrap";
import bigStar from "../assets/bigStar.svg";

const DevicePage = () => {
  const device = {
    id: 1,
    name: "Iphone 14",
    price: 25000,
    rating: 5,
    img: "https://www.ixbt.com/img/n1/news/2022/9/6/Apple-iPhone-14-iPhone-14-Plus-hero-220907-geo_Full-Bleed-Image.jpg.large_large.jpg",
  };
  const description = [
    {
      id: 1,
      title: "Оперативная память",
      description: "12гб",
    },
    {
      id: 2,
      title: "Камера",
      description: "12мп",
    },
    {
      id: 3,
      title: "Процессор",
      description: "M1 Apple Chip",
    },
    {
      id: 4,
      title: "Количество ядер",
      description: "8",
    },
    {
      id: 5,
      title: "Аккумулятор",
      description: "4200",
    },
  ];
  return (
    <Container className="mt-3">
      <Row>
        <Col md={4}>
          <Image width={300} height={300} src={device.img} />
        </Col>
        <Col md={4}>
          <Row className="d-flex flex-column align-items-center">
            <h2 className="text-center">{device.name}</h2>
            <div
              className="d-flex align-items-center justify-content-center"
              style={{
                background: `url(${bigStar}) no-repeat center center`,
                width: 240,
                height: 240,
                backgroundSize: "cover",
                fontSize: 64,
              }}
            >
              {device.rating}
            </div>
          </Row>
        </Col>
        <Col md={4}>
          <Card
            className="d-flex flex-column align-items-center justify-content-around"
            style={{
              width: 300,
              height: 300,
              fontSize: 32,
              border: "5px solid lightgray",
            }}
          >
            <h3>{device.price}</h3>
            <Button>Добавить в корзину</Button>
          </Card>
        </Col>
      </Row>
      <Row className="m-3">
        <h3>Характеристики:</h3>
        {description.map((info, index) => (
          <Row
            key={info.id}
            style={{
              background: index % 2 === 0 ? "lightgray" : "transparent",
              padding: 10,
            }}
          >
            {info.title}: {info.description}
          </Row>
        ))}
      </Row>
    </Container>
  );
};

export default DevicePage;
