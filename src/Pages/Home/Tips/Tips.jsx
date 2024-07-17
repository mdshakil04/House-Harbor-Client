const Tips = () => {
  return (
    <div className="card lg:card-side max-w-screen-2xl mx-auto mt-8 min-h-screen">
      <div className=" lg:w-1/2 mx-auto lg:mt-72 " >
        <h2 className=" md:text-8xl text-5xl">
          Renter tips
          <br /> and <span className=" text-blue-500">insights</span>
        </h2>
        <p>
          Advice from our experts to help you
          <br /> along your rental journey.
          <br />
          <button className=" btn btn-primary btn-outline text-xl mt-4">
            Visit Rent Blog
          </button>
        </p>
      </div>
      <div className=" lg:w-1/2 mx-auto container p-4 ">
        <div className="md:grid md:grid-cols-2 items-center gap-4 md:shadow-xl rounded-3xl transform transition-transform duration-300 lg:hover:scale-105">
          <div>
            <img
              className=" md:rounded-l-3xl h-[250px] w-full"
              src="https://i.ibb.co/c1ygPfL/1679.jpg"
              alt=""
            />
          </div>
          <div>
            <h2 className="text-3xl">
              Big Cities Where Rent Prices are Actually Decreasing
            </h2>
            <p>
            Rent is on the rise — but not everywhere. These big cities are seeing rent decreases.
            </p>
          </div>
        </div>
        <div className="md:grid md:grid-cols-2 items-center gap-4  md:shadow-xl rounded-3xl transform transition-transform duration-300 lg:hover:scale-105 mt-4">
          <div>
            <img
              className=" md:rounded-l-3xl h-[250px] w-full"
              src="https://i.ibb.co/9r3ByBK/high-angle-man-working-as-real-estate-agent.jpg"
              alt=""
            />
          </div>
          <div>
            <h2 className="text-3xl">
              11 Steps to Follow When
              <br /> Renting an Apartment
            </h2>
            <p>
              Apartment hunting can be exciting, yet overwhelming. Simplify the
              task by getting organized.
            </p>
          </div>
        </div>
        <div className="md:grid md:grid-cols-2 items-center gap-4  md:shadow-xl rounded-3xl transform transition-transform duration-300 lg:hover:scale-105 mt-4">
          <div>
            <img
              className=" md:rounded-l-3xl h-[250px] w-full"
              src="https://i.ibb.co/PCNFF9L/119.jpg"
              alt=""
            />
          </div>
          <div>
            <h2 className="text-3xl">
              Rent Calculator: How Much Should You Spend on Rent?
            </h2>
            <p>
              Let us know your income, expenses and desired location. We'll help
              you find the right rent budget.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tips;
