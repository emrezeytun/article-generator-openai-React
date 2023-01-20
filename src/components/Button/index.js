import React from "react";
import "./Button.scss";

export default function Button(props) {
  return (
    <div>
      <button onClick={props.buttonClicked}>{props.value}</button>
    </div>
  );
}
