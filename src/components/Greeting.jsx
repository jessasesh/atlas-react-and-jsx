import React from 'react';

const Greeting = () => {
  const currentHour = new Date().getHours();

  const getGreeting = () => {
    if (currentHour >= 6 && currentHour < 12) return { text: 'Good Morning!', img: '/src/assets/day.svg' };
    if (currentHour >= 12 && currentHour < 17) return { text: 'Good Afternoon!', img: '/src/assets/day.svg' };
    if (currentHour >= 17 && currentHour < 21) return { text: 'Good Evening!', img: '/src/assets/evening.svg' };
    return { text: 'Good Night!', img: '/src/assets/night.svg' };
  };

  const { text, img } = getGreeting();

  return (
    <h1 className="greeting">
      <img src={img} alt={text} />
      {text}
    </h1>
  );
};

export default Greeting;