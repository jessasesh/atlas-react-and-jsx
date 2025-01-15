import React from "react";
import Header from "./components/Header";
import Section from "./components/Section";

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
    </div>
  );
}

export default App;