
import { Link } from "react-router-dom";
const Navbar = () => {
  // const [isOpen, setOpen] = useState(false)
  return (
    // #030637
    <div className="navbar bg-[#030637] fixed z-[999]">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            {/* <img className="h-8 w-8" src={ menuIcon} alt="" /> */}
            {/* <Hamburger color="#4FD1C5" /> */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link to="/">Home</Link>
            </li>

            <li>
              <Link to="/appartments">Appartments</Link>
            </li>
            <li>
              <Link to="/property">Property Management</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="navbar-center">
        {/* <img className=" w-12 h-12" src={logo} alt="" /> */}
        <a className="btn btn-ghost text-xl lg:text-2xl text-white">
          House Harbor
        </a>
      </div>
      <div className="navbar-end"></div>
    </div>
  );
};

export default Navbar;
