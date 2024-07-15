/* eslint-disable no-unused-vars */
import React from "react";

const PropertyOffers = () => {
  return (
    <div>
      <h2 className="lg:text-5xl text-center text-3xl">
        The Perfect Place to Manage Your Property
      </h2>
      <p className="md:text-2xl  font-extralight text-center">
        Work with the best suite of property management tools on the market.
      </p>
      <div className=" container mx-auto my-4">
        <div className=" lg:grid lg:grid-cols-2">
          <div className=" justify-center flex flex-col text-start mx-auto md:p-12 p-4 gap-4">
            <h2 className=" text-3xl font-semibold">Advertise Your Rental</h2>
            <p>
              Connect with more than 75 million renters looking for new homes
              using our comprehensive marketing platform.
            </p>
            <button className=" btn btn-outline btn-accent text-xl">
              List Your Property
            </button>
          </div>
          <div>
            <img
              src="https://i.ibb.co/5vVh8Ln/high-angle-man-working-as-real-estate-agent.jpg"
              alt="City"
            />
          </div>
        </div>
        <div className="lg:grid lg:grid-cols-2">
          <div>
            <img
              src="https://i.ibb.co/jGrs4r6/architecture-small-residential-cottage-surrounded-by-nature-generative-ai.jpg"
              alt="City"
            />
          </div>
          <div className=" justify-center flex flex-col text-start mx-auto md:p-12 p-4 gap-4">
            <h2 className=" text-3xl font-semibold">Lease 100% Online</h2>
            <p>
            Accept applications, process rent payments online, and sign digital leases all powered on a single platform.
            </p>
            <button className=" btn btn-outline btn-primary text-xl">
              Manage Your Property
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyOffers;
