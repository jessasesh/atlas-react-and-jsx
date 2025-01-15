import React from 'react';

// Section component which accepts title and children as props
// The children prop renders any nested content passed to the component
const Section = ({ title, children }) => {
  return (
    <div className="section">
      <h1>{title}</h1>
      {children}
    </div>
  );
};

export default Section;