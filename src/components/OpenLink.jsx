import React from "react";
import openIcon from "../assets/open.svg";

const OpenLink = ({ link }) => {
  const handleClick = () => {
    window.open(link, "_blank", "noopener,noreferrer");
  };

  return (
    <img
    src={openIcon}
    alt="Open Link"
    onClick={handleClick}
    style={{ cursor: "pointer" }}
    aria-label="Open Link in New Tab"
    />
  );
};

export default OpenLink;
