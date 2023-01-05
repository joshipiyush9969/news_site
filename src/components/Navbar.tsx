import React from 'react'
import Offcanvas from 'react-bootstrap/Offcanvas'
import { useNavContext } from '../context/NavBarContext';
import { MenuItem } from './MenuItem';

type Nav = {
  isOpen: Boolean;
}

export function Navbar({ isOpen }:Nav) {
  const navFunctions = useNavContext();
  return (
    <Offcanvas
      style={{ backgroundColor: "#000000", height: "10rem" }}
      placement="top"
      show={isOpen}
      onHide={navFunctions.closeNav}
    >
      <Offcanvas.Body className="d-flex flex-row  justify-content-center mt-3">
        <MenuItem
          route={''}
          name={"Home"}
          image={
            "https://firebasestorage.googleapis.com/v0/b/todo-55d72.appspot.com/o/home.png?alt=media&token=73bfe720-18da-4824-8760-8dfbb0e53e0e"
          }
        />
        <MenuItem
          route={'about'}
          name={"About"}
          image={
            "https://firebasestorage.googleapis.com/v0/b/todo-55d72.appspot.com/o/dev.jpeg?alt=media&token=7e325900-1f20-44cd-981c-c56372c3ae22"
          }
        />
      </Offcanvas.Body>
    </Offcanvas>
  );
}
