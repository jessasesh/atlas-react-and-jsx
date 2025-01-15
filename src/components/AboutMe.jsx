import React from "react";

const AboutMe = () => {
  return (
    <div className="about-me">
      <img
        src="src\assets\aboutmephoto.png"
        alt="Photo of Jess"
        className="about-me-image"
      />
      <p>
        Hi, I’m Jess, a market development manager and software engineering student with a focus on full stack web development.
        Currently, I’m in my fifth trimester of school, honing my skills in building dynamic, user-friendly web applications.
        My passion lies in merging my technical expertise with my marketing experience to create impactful digital tools
        and solutions for businesses.
        <br/>
        <br/>
        I enjoy working with React, JavaScript, and Bootstrap because they allow me to design accessible, responsive,
        and visually engaging applications. My goal after graduation is to work for or establish a consulting firm that bridges
        the gap between digital tools and business needs, helping small businesses thrive in a competitive market.
        <br/>
        <br/>
        When I’m not working or coding, you’ll find me spending time with my three kids, exploring new creative
        ventures, or on a vacation. I’m driven by the opportunity to make a meaningful impact, both personally and professionally.
      </p>
    </div>
  );
};

export default AboutMe;