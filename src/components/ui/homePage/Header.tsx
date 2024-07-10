import { NavLink } from "react-router-dom";
import { navLinks } from "../../../utils/navlinks";

const Header = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {/* mapping navlinks and showing */}
            {navLinks.map((navlink, index) => (
              <li key={index}>
                <a>
                  <NavLink to={navlink.path}>{navlink.name}</NavLink>
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex justify-center items-center navbar-center">
          <img className="size-7" src="../../../../public/favicon.png" alt="" />
          <a className="text-xl font-bold ml-2">
            Fitness <span className="text-primary">H</span>ub
          </a>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex navbar-end">
        <ul className="menu menu-horizontal px-1">
          {/* mapping navlinks and showing */}
          {navLinks.map((navlink, index) => (
            <li key={index}>
              <a>
                <NavLink to={navlink.path}>{navlink.name}</NavLink>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Header;
