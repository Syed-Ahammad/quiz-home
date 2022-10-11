import React from "react";
import { Link } from "react-router-dom";

const Card = ({topic}) => {
  const {logo,name, id, total} = topic;
  return (
    <div>
      <div className="card card-compact w-70 bg-base-100 shadow-xl pt-3 mt-3">
        <figure>
          <img className="h-40 bg-slate-200" src={logo} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Quiz Topic: <span className="font-bold text-cyan-500 text-2xl">{name}</span></h2>
          <p className="text-base">Total Quiz: {total}</p>
          <div className="card-actions justify-end">
            <Link to={`/quiz/${id}`}><button className="btn btn-outline">Quiz Start</button></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
