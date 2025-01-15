import React from "react";
import copyIcon from "../assets/copy.svg";

const CopyLink = ({ link }) => {
  const handleCopyLink = () => {
    navigator.clipboard.writeText(link).then(
      () => alert("Link copied to clipboard"),
      () => alert("Failed to copy link")
    );
  };

  return (
    <img
      src={copyIcon}
      alt="Copy Link"
      onClick={handleCopyLink}
      style={{ cursor: "pointer" }}
      aria-label="Copy Link to Clipboard"
    />
  );
};

export default CopyLink;