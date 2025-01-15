import React from "react";
import Header from "./components/Header";
import Section from "./components/Section";
import HelpfulResource from "./components/HelpfulResource";
import AboutMe from "./components/AboutMe";

function App() {
  return ( 
    <div className="app">
     <Header />
     <Section title="What is react?">
      <p>
      React is a JavaScript library that makes building responsive,
      scalable user interfaces straightforward and efficient.
      By using a component-based structure,
      it allows you to break your UI into reusable pieces of code.
      Its virtual DOM boosts performance by only updating what’s necessary,
      rather than re-rendering the whole page.
      </p>
     </Section>

     <Section title="Benefits of react">
      <ul>
        <li>Component-Based Architecture</li>
        <li>Virtual DOM</li>
        <li>Declarative Syntax</li>
        <li>Strong Community Support</li>
        <li>Flexibility and Integration</li>
      </ul>
     </Section>

     <Section title="Helpful resources">
        <HelpfulResource
          link="https://react.dev/learn"
          label="React Learning Guide"
        />
        <HelpfulResource
          link="https://www.freecodecamp.org/news/learn-react-2024/"
          label="FreeCodeCamp - Learn React from Bob Ziroll"
        />
        <HelpfulResource
          link="https://www.w3schools.com/REACT/"
          label="W3 Schools React Tutorial"
        />
      </Section>

      <AboutMe />
    </div>
  );
}

export default App;