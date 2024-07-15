/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import { Link } from "react-router-dom";

const Appartement = ({ appartement }) => {
  const { address, title, city, main_image,bedroom_quantity, monthly_rent, ratings, flat_size } = appartement;
  return (
    <div>
      <Link>
        <div className="card bg-base-100 shadow-xl">
          <figure>
            <img src={main_image} />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {title}
              <div className="badge badge-secondary">{ratings}</div>
            </h2>
            <p>
              {address}, <span className=" font-bold">{city}</span>
            </p>
            <p>
              {bedroom_quantity} Beds, <span className=" font-bold">${monthly_rent}</span> per month
            </p>
            <div className="card-actions justify-end">
              <div className="badge badge-outline">{flat_size}</div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Appartement;
