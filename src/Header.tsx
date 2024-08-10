import React from "react";

interface Props {
  colorMode: string;
  setColorMode: Function;
}

export default function Header(props: Props) {
  return (
    <div className="header">
      <h1>Where in the world?</h1>
      <div
        className="color-mode-container"
        onClick={() =>
          props.colorMode === "dark"
            ? props.setColorMode("light")
            : props.setColorMode("dark")
        }
        tabIndex={0}
      >
        <img
          className="color-icon"
          src={
            props.colorMode === "dark"
              ? "./src/assets/icons/moon-solid.svg"
              : "./src/assets/icons/sun-solid.svg"
          }
          alt={
            props.colorMode === "dark" ? "dark mode icon" : "light mode icon"
          }
        />
        <p className="color-mode-text">
          {props.colorMode === "dark" ? "Dark" : "Light"} Mode
        </p>
      </div>
    </div>
  );
}
