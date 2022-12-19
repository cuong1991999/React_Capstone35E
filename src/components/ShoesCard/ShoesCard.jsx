import React from "react";
import { NavLink } from "react-router-dom";

const ShoesCard = ({ prod }) => {
  return (
    <div className="card shoes__card">
      <img
        src={
          prod?.image
            ? prod?.image
            : "/img/799d5aa6f69bed4a46a282456a6ab37e.png"
        }
        className="w-100"
        alt=""
      />
      <div className="shoes__card-body">
        <h3>{prod?.name ? prod?.name : "Name"}</h3>
        <p>{prod?.shortDescription ? prod?.shortDescription : "description"}</p>
        <div className="d-flex  shoes__card-footer">
          <NavLink to={`/detail/${prod?.id}`} className="w-50">
            View detail
          </NavLink>
          <p className="w-50 m-0 text-center ">{prod?.price}$</p>
        </div>
      </div>
    </div>
  );
};

export default ShoesCard;
