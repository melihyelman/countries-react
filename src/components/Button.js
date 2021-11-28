import React from "react";

function Button(props) {
  return (
    <button className="back" {...props}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="icon icon-tabler icon-tabler-arrow-left"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        strokeWidth="2"
        stroke="currentColor"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
        <line x1="5" y1="12" x2="19" y2="12"></line>
        <line x1="5" y1="12" x2="11" y2="18"></line>
        <line x1="5" y1="12" x2="11" y2="6"></line>
      </svg>
      Back
    </button>
  );
}

export default Button;
