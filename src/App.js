import { Brand, CTA, Navbar } from "./Components/index";
import { Footer, Blog, Features, Header, Posibility, WhatGPT } from "./Containers/index";
import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="gradient_bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT />
      <Features />
      <Posibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
