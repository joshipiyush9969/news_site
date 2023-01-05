import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { BlogCard } from "../components/BlogCard";
import { useNavContext } from "../context/NavBarContext";
import data from "../data/items.json";
import "./Home.css"

export function Home() {
  const navFunctions = useNavContext();
  const currentNavState = navFunctions.NavState;
  return (
    <div>
      {currentNavState() ? (
        <div className="buttonNav" onClick={navFunctions.openNav} tabIndex={0}>
          <span className="buttonText">Menu</span>
        </div>
      ) : (
        <div className="buttonNav" tabIndex={0} onClick={navFunctions.openNav}>
          <span className="buttonText">Menu</span>
        </div>
      )}
      <Row md={2} xs={1} lg={3}>
        {data.map((item) => (
          <Col
            key={item.id}
            className="d-flex align-items-center justify-content-center"
          >
            <BlogCard {...item} isOpen={currentNavState()} />
          </Col>
        ))}
      </Row>
      <div className="home_footer"></div>
    </div>
  );
}
