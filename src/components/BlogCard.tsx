import React, { useState } from "react";
import { Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router";

//css
import "./BlogCard.css";

type BlogCardProps = {
  id: number;
  title: string;
  subTitle: string;
  info:Array<string>;
  description: string;
  imgUrl: string;
  isOpen: Boolean;
};

export function BlogCard({
  id,
  title,
  subTitle,
  description,
  imgUrl,
  info,
  isOpen,
}: BlogCardProps) {
  const navigate = useNavigate();
  const setBackgroundImage = () => {
    return `url(${imgUrl})`;
  };

  const navigateExplore = () => {
    navigate("/explore/" + id, {
      state: {
        id: id,
        title: title,
        description: description,
        imgUrl: imgUrl,
        subTitle: subTitle,
        info:info
      },
    });
  };

  console.log(isOpen);
  return (
    <div
      onClick={navigateExplore}
      className="blogcard_container"
      style={{
        backgroundImage: setBackgroundImage(),
        width: !isOpen ? "23.813rem" : "20.813rem",
        height: !isOpen ? "28rem" : "25rem",
      }}
    >
      <div className="blogcard_sub">
        <p
          className="blogcard_heading"
          style={{ fontSize: !isOpen ? "20px" : "18px" }}
        >
          {title}
        </p>
        <p
          className="blogcard_description"
          style={{ fontSize: !isOpen ? "15px" : "15px" }}
        >
          {subTitle}
        </p>
      </div>
    </div>
  );
}
