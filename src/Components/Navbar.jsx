import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  // const { user, logout } = useAuth();
  const normalLink = "lg:font-bold lg:text-lg lg:mr-2 mt-2 lg:mt-0";
  const activeLink = `bg-gradient-to-r from-[#EA6A12] to-[#EA6A12] border border-blure-500 text-white border-none hover:bg-transparent focus:bg-transparent focus:text-white ${normalLink}`;
  const user = false;
  return (
    <div className="sticky top-0 z-40 bg-base-100 shadow-xl ">
      <div className="navbar bg-base-100 container mx-auto p-4 ">
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
              className=" menu menu-sm dropdown-content mt-3 z-[11] p-2 shadow bg-base-100 rounded-box w-52"
            >
             <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? activeLink : normalLink
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/allfoods"
                className={({ isActive }) =>
                  isActive ? activeLink : normalLink
                }
              >
                All Foods
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/gallery"
                className={({ isActive }) =>
                  isActive ? activeLink : normalLink
                }
              >
                Gallery
              </NavLink>
            </li>
              {user ? (
                <li className="md:hidden">
                  <button
                    // onClick={logout}
                    className="btn mt-4 bg-[#EA6A12] text-white font-bold hover:bg-[#C75A0F]"
                  >
                    Logout
                  </button>
                </li>
              ) : (
                <div className="mt-4">
                  <Link to="/login">
                    <button className="btn bg-[#EA6A12] text-white font-bold hover:bg-[#C75A0F]">
                      Login
                    </button>
                  </Link>
                  <Link to="/registration">
                    <button className="btn bg-[#EA6A12] text-white font-bold hover:bg-[#C75A0F]">
                      Register
                    </button>
                  </Link>
                </div>
              )}
            </ul>
          </div>
          <Link
            to="/"
            className="btn btn-ghost text-3xl font-garamond text-[#EA6A12]"
          >
            Flavor Junction
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? activeLink : normalLink
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/allfoods"
                className={({ isActive }) =>
                  isActive ? activeLink : normalLink
                }
              >
                All Foods
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/gallery"
                className={({ isActive }) =>
                  isActive ? activeLink : normalLink
                }
              >
                Gallery
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end flex ">
          {user ? (
            <div className="flex  items-center gap-2 pr-2 md:pr-0">
              <div className="dropdown dropdown-end">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-circle avatar"
                >
                  <div className="w-10 rounded-full">
                    <img
                      alt="Tailwind CSS Navbar component"
                      src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                    />
                  </div>
                </div>
                <ul
                  tabIndex={0}
                  className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
                >
                  <li>
                    <a className="justify-between">
                      Profile
                      <span className="badge">New</span>
                    </a>
                  </li>
                  <li>
                    <a>Settings</a>
                  </li>
                  <li>
                    <a>Logout</a>
                  </li>
                </ul>
              </div>
              <button
                // onClick={logout}
                className="btn bg-[#EA6A12] text-white font-bold hover:bg-[#EA6A12] hidden md:flex"
              >
                Logout
              </button>
            </div>
          ) : (
            <div className="hidden md:flex">
              <div>
                <Link to="/login">
                  <button className="btn bg-[#EA6A12] text-white font-bold hover:bg-[#C75A0F]">
                    Login
                  </button>
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;