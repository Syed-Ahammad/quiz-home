import React from "react";
import { Link } from "react-router-dom";

const Card = ({topic}) => {
  const {logo,name} = topic;
  return (
    <div>
      <div className="card card-compact w-70 bg-base-100 shadow-xl">
        <figure>
          <img src={logo} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Quiz Topic: <span className="font-bold text-cyan-500 text-2xl">{name}</span></h2>
          <div className="card-actions justify-end">
            <Link><button className="btn btn-outline">Quiz Start</button></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
