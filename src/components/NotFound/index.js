import React from "react";
import "./NotFound.scss";
import { Grid, Col, Row } from "antd";
import { useNavigate } from "react-router-dom";

export default function NotFound() {
  const navigate = useNavigate();

  return (
      <div className={"error"}>
        <div className={"error-image"}>
          <img src={"/images/404.png"} alt={"404"} />
        </div>
        <div className={"error-text"}>
          <h1> Oops! </h1>
          <p> The page you're looking for does not exist</p>
          <div className={`error-buttons`}>
            <button onClick={() => navigate(-1)} className="go-back-button">Go Back</button>
            <button className="report-error-button">Report Error</button>
          </div>
        </div>
      </div>
  );
}
