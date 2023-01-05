import React from "react";
import { useNavContext } from "../context/NavBarContext";

export function About() {
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
      <div className="p-5">
        <p
          className="fs-1"
          style={{ color: "#ffffff", fontFamily: "Merienda" }}
        >
          Live It Up!
        </p>
        <p
          className="fs-3"
          style={{ color: "#82a2c1", fontFamily: "Merienda" }}
        >
          Crafted by piyush
        </p>
      </div>

      <div
        className="d-flex flex-column align-items-center justify-content-center mt-5"
        style={{
          color: "#82a2c1",
          position: "fixed",
          left: "50%",
          bottom: "20px",
          transform: "translate(-50%, -50%)",
          width: "100%",
        }}
      >
        <div
          style={{
            height: 3,
            width: 25,
            backgroundImage: "linear-gradient(to right, #60788f , #82a2c1)",
            borderRadius: 50,
            marginBottom: 15,
          }}
        ></div>
        <div className="mb-1">
          <span>Find an issue with this page?</span>
          <a
            style={{ textDecoration: "none" }}
            href="https://github.com/joshipiyush9969/news_site/issues"
          >
            &nbsp;Fix it on GitHub
          </a>
        </div>
        <div className="mb-2">
          <p>
            Email:{" "}
            <span style={{ fontWeight: "bold" }}>piyushjb7@hotmail.com</span>
          </p>
        </div>
        <div className="d-flex flex-row align-items-center justify-content-space-between">
          <a href="https://github.com/joshipiyush9969">
            <img
              src="/images/git.png"
              alt="logo.png"
              width="35px"
              height="35px"
              style={{ marginLeft: 10 }}
            />
          </a>
          <a href="https://www.instagram.com/piyush_j.__/">
            <img
              src="/images/insta.png"
              alt="logo.png"
              width="30px"
              height="30px"
              style={{ marginLeft: 10 }}
            />
          </a>
          <a href="https://www.youtube.com/channel/UCiOy8w9RnUXVtbqdVjy0T2g">
            <img
              src="/images/youtube.png"
              alt="logo.png"
              width="30px"
              height="30px"
              style={{ marginLeft: 10 }}
            />
          </a>
        </div>
      </div>
    </div>
  );
}
