/* eslint-disable array-callback-return */
import React from "react";
import "./Input.scss";

export default function Input(props) {
  return (
    <div>
      {props.type === "select" ? (
        <div>
          <label>{props.datas.title}</label>
          <select
            key={props.datas.title}
            onChange={props.dataChanged}
            id={props.datas.id}
            name={props.datas.id}
          >
            {props.datas.values.map((data) => (
              <option key={data} value={data}>
                {data}
              </option>
            ))}
          </select>
        </div>
      ) : props.type === "text" ? (
        <div>
          <label>{props.datas.title}</label>
          <input onChange={props.dataChanged} type="text"></input>
        </div>
      ) : (
        "-"
      )}
    </div>
  );
}
