import React from 'react';

const SocialLinks = () => {
  return (
    <div className="social-links">
      <a
        href="https://www.linkedin.com/in/jessica-dison/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src="/src/assets/linkedin.svg" alt="LinkedIn" />
      </a>
      <a
        href="https://github.com/jessasesh/atlas-react-and-jsx"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src="/src/assets/github.svg" alt="GitHub" />
      </a>
    </div>
  );
};

export default SocialLinks;