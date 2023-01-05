import React from "react";
import { useLocation } from "react-router-dom";
import "./Explore.css";
import { useNavContext } from "../context/NavBarContext";

export function Explore() {
  const data = useLocation();
  console.log(data);

  const setImage = () => {
    return `${data.state.imgUrl}`;
  };

    const navFunctions = useNavContext();
    const currentNavState = navFunctions.NavState;

  return (
    <div className="contain">
      {currentNavState() ? (
        <div className="buttonNav" onClick={navFunctions.openNav} tabIndex={0}>
          <span className="buttonText">Menu</span>
        </div>
      ) : (
        <div className="buttonNav" tabIndex={0} onClick={navFunctions.openNav}>
          <span className="buttonText">Menu</span>
        </div>
      )}
      <h1 className="heading">{data.state.title}</h1>
      <div className="image_container">
        <img className="image" src={setImage()} />
        <span>{data.state.subTitle}</span>
      </div>
      <div className="description_container">
        {data.state.info.map((x: string) => (
          <span>
            <span className="description">{x}</span>
            <br />
            <br />
          </span>
        ))}
      </div>
    </div>
  );
}
