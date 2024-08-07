const Banner = () => {
  return (
    <div
      className="hero min-h-screen "
      style={{
        backgroundImage:
          "url(https://i.ibb.co/CbgWprf/r-architecture-2g-Dwl-Iim3-Uw-unsplash.jpg)",
      }}
    >
      <div className="hero-overlay bg-opacity-60 "></div>
      <div className="hero-content text-center text-neutral-content  ">
        <div className="">
          {/* max-w-md */}
          <h1 className="mb-5 text-3xl lg:text-8xl leading-none tracking-wide font-light text-white ">
            <span className=" text-blue-500">Discover</span> a Place<br/> You'll Love to <span className=" text-blue-500">Live</span> 
          </h1>
          <p className="mb-5 text-white lg:text-xl">
            Helping 10 million renters find their perfect fit.
          </p>
          <div>
            <label className="input input-bordered flex items-center gap-2">
              <input
                type="text"
                className="grow text-black "
                placeholder="Address, City, Zip"
              />
              <button className=" ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="w-8 h-8 text-black transform transition-transform duration-300 hover:scale-150"
                >
                  <path
                    fillRule="evenodd"
                    d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
