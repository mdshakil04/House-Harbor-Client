import React from "react";
import img1 from "../../../assets/images/Offer/BuyAHome.svg"
import img2 from "../../../assets/images/Offer/Neighborhoods.svg"
import img3 from "../../../assets/images/Offer/RentAHome.svg"
const Offer = () => {
  return (
    <div className="  container mx-auto ">
        <h2 className="text-4xl text-center">See how House-Harbor can help</h2>
      <div className="md:flex justify-center gap-12 mb-8 p-4">
        <div className=" text-center  w-80">
            <img
              src={img1}
            />
          <div className=" -mt-8">
            <h2 className="text-3xl text-center">Find a home</h2>
            <p>With over 1 million+ homes for sale available on the website, House-Harvor can match you with a house you will want to call home.</p>
            <div className="justify-center">
              <button className="btn btn-outline btn-primary mt-4">Buy Now</button>
            </div>
          </div>
        </div>
        <div className=" text-center  w-80">
            <img
              src={img2}
            />
          <div className=" -mt-8">
            <h2 className="text-3xl text-center">Rent a home</h2>
            <p>With 35+ filters and custom keyword search, Trulia can help you easily find a home or apartment for rent that you'll love.</p>
            <div className="justify-center">
              <button className="btn btn-outline btn-primary mt-4">Find Rental</button>
            </div>
          </div>
        </div>
        <div className=" text-center w-80">
            <img
              src={img3}
            />
          <div className=" -mt-8">
            <h2 className="text-3xl text-center">See Neighborhoods</h2>
            <p>With more neighborhood insights than any other real estate website, we've captured the color and diversity of communities.</p>
            <div className="justify-center">
              <button className="btn btn-outline btn-primary mt-4">Learn More</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offer;
