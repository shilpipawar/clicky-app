import React from "react";
import "./style.css";

function PictureCard(props) {
  return (
    <div className="card">
      <div className="img-container">
        {/* <img alt={props.name} src={props.image} /> */}
        <img className="img-thumbnail img-responsive" alt={props.name} src={props.image} onClick={() => props.clickOnPicture(props.id)}/>
      </div>
    </div>
  );
}

export default PictureCard;
