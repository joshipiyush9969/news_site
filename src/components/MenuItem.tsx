import React from "react";
import Figure from "react-bootstrap/Figure";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import { useNavigate } from "react-router-dom";

import "./MenuItem.css";

type MenuItemProps = {
  name: String;
  image: String;
  route: String;
};

export function MenuItem({ name, image, route }: MenuItemProps) {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate(`/${route}`)}
      className="m-item"
    >
      <p className="menu-item-text">{name}</p>
    </div>
  );
}
