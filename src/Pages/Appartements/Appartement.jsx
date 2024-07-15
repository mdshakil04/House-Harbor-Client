import React from "react";

const Appartement = ({ appartement }) => {
  const { address, title,city, main_image, monthly_rent } = appartement;
  return (
    <div>
      <div className="card bg-base-100 w-96 shadow-xl">
        <figure>
          <img
            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
           {title}
            <div className="badge badge-secondary">NEW</div>
          </h2>
          <p>{address}, <span className=" font-bold">{city}</span></p>
          <div className="card-actions justify-end">
            <div className="badge badge-outline">Fashion</div>
            <div className="badge badge-outline">Products</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Appartement;
