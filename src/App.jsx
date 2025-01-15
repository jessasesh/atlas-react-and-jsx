import React from "react";
import Header from "./components/Header";
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
    </div>
  );
}

export default App;