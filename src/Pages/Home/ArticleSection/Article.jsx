/* eslint-disable no-unused-vars */
import React from "react";

const Article = () => {
  return (
    <div
      className="hero lg:h-[650px] my-4"
      style={{
        backgroundImage:
          "url(https://i.ibb.co/3yrH3t6/photo-collage-png.png)",
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-md">
          <h1 className="mb-5 lg:text-4xl md:text-2xl text-xl font-bold">The Best Time of Year To Rent in Dhaka,<br/> TX: When Renters Can Find Deals</h1>
          <button className="btn btn-accent btn-outline lg:text-xl">Read Article</button>
        </div>
      </div>
    </div>
  );
};

export default Article;
