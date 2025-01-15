import React from "react";
import links from "../assets/links.json";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <ul>
        {links.map((linkItem, index) => (
          <li key={index}>
            <a href={linkItem.link} target="_blank" rel="noopener noreferrer">
              {linkItem.label}
            </a>
          </li>
        ))}
      </ul>
      <p>© {currentYear} Atlas School</p>
    </footer>
  );
};

export default Footer;