
// import { useState } from "react";
// import logo from "../../../assets/images/logo/logo.png"
import menuIcon from "../../../assets/images/logo/icons8-menu.gif"
// import Hamburger from "hamburger-react";
import { Sling as Hamburger } from 'hamburger-react'
const Navbar = () => {
  // const [isOpen, setOpen] = useState(false)
  return (
    // #030637
    <div className="navbar bg-[#030637] fixed z-[999]">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <img className="h-8 w-8" src={ menuIcon} alt="" />
            {/* <Hamburger color="#4FD1C5" /> */}
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>Homepage</a>
            </li>
            <li>
              <a>Property Listing</a>
            </li>
            <li>
              <a>About</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="navbar-center">
        {/* <img className=" w-12 h-12" src={logo} alt="" /> */}
        <a className="btn btn-ghost text-xl lg:text-2xl text-white">House Harbor</a>
      </div>
      <div className="navbar-end">
      


      </div>
    </div>
  );
};

export default Navbar;
