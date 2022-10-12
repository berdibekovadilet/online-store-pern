import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import { Context } from "..";
import { Card, Row } from "react-bootstrap";

const BrandBar = observer(() => {
  const { device } = useContext(Context);
  return (
    <Row md="auto">
      {device.brands.map((brand) => (
        <Card
          className="p-3 m-1"
          key={brand.id}
          style={{ cursor: "pointer" }}
          border={brand.id === device.selectedBrand.id ? "danger" : ""}
          onClick={() => device.setSelectedBrand(brand)}
        >
          {brand.name}
        </Card>
      ))}
    </Row>
  );
});

export default BrandBar;
