import {useState} from "react";
import {Link, NavLink} from "react-router-dom";

const Navbar = () => {
  const [isShowNav, setIsShowNav] = useState(false);
  const linkStyleActive =
    "block py-2 pl-3 pr-4 text-primary-200 bg-primary-700 rounded md:bg-transparent md:text-primary-200 md:p-0 dark:text-white md:dark:text-white";
  const linkStyle =
    "block py-2 pl-3 pr-4 text-primary-50 rounded hover:bg-primary-500 md:hover:bg-transparent md:border-0 md:hover:text-primary-200 md:p-0 dark:text-white md:dark:hover:text-white dark:hover:bg-white dark:hover:text-white md:dark:hover:bg-transparent";

  return (
    <nav className="border-gray-200">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link to="/" className="flex items-center">
          <img src="logo.svg" className="h-14 mr-1" alt="Feel Nature Logo" />
        </Link>
        <button
          onClick={() => setIsShowNav(!isShowNav)}
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 ml-3 text-sm text-white rounded-lg md:hidden hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false">
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg">
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"></path>
          </svg>
        </button>
        <div
          className={`${isShowNav ? "" : "hidden"} w-full md:block md:w-auto`}
          id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <NavLink
                to="/"
                className={({isActive, isPending}) =>
                  isPending ? "pending" : isActive ? linkStyleActive : linkStyle
                }>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({isActive, isPending}) =>
                  isPending ? "pending" : isActive ? linkStyleActive : linkStyle
                }>
                About
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
