import React from "react";
import "./Article.scss";

export default function Article(props) {
  return (
    <div className="article">
      <p>{props.story}</p>
    </div>
  );
}
