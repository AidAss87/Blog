import { NavLink } from "react-router-dom";
import ComedyButton from "./ui/ComedyButton/ComedyButton";
import SignUpButton from "./ui/SignUpButton/SignUpButton";

export const Header = () => {
  return (
    <div className="top-0 flex items-center h-16 bg-white px-20 justify-between fixed w-full">
      <div>
        <img src="/header-logo.svg" alt="" />
      </div>
      <div>
        <nav>
          {" "}
          <ul className="flex gap-10">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "relative after:content-[''] after:absolute after:rounded-full after:top-[24px] after:left-0 after:h-[2px] after:bg-[#313131] after:transition-all after:duration-300 after:w-full"
                    : ""
                }
              >
                <ComedyButton>Home</ComedyButton>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/connect"
                className={({ isActive }) =>
                  isActive
                    ? "relative after:content-[''] after:absolute after:rounded-full after:top-[24px] after:left-0 after:h-[2px] after:bg-[#313131] after:transition-all after:duration-300 after:w-full"
                    : ""
                }
              >
                <ComedyButton>Connect</ComedyButton>
              </NavLink>
            </li>
            <li>
              <NavLink to="/signup">
                <SignUpButton>SignUp</SignUpButton>
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/login"
                className={({ isActive }) =>
                  isActive
                    ? "relative after:content-[''] after:absolute after:rounded-full after:top-[24px] after:left-0 after:h-[2px] after:bg-[#313131] after:transition-all after:duration-300 after:w-full"
                    : ""
                }
              >
                <ComedyButton>Login</ComedyButton>
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;
