import React from "react";

const Button = ({ color, label = "Button", icon, newClass = "" }) => {
  return (
    <button
      className={`px-4 py-2 m-2 rounded shadow-lg bg-${color} ${newClass}`}
      type="button"
    >
      {icon}
      <span>{label}</span>
    </button>
  );
};

export default Button;
