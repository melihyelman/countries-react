import React from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";

function Header() {
  const { theme, themeToggler } = useTheme();
  return (
    <div className="header">
      <div>
        <Link to="/">
          <h3>Where in the world?</h3>
        </Link>
        <button className="themeMod" onClick={themeToggler}>
          {theme === "light" ? (
            <>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-moon"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                fill="black"
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{ marginRight: "5px" }}
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z"></path>
              </svg>
              <p>Dark Mode</p>
            </>
          ) : (
            <>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-moon"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                style={{ marginRight: "5px" }}
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z"></path>
              </svg>
              <p>Light Mode</p>
            </>
          )}
        </button>
      </div>
    </div>
  );
}
export default Header;
