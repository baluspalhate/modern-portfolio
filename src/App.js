import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"; // Corrected import
import Header from "./templete/Header";
import Footer from "./templete/Footer";
import WebSite from "./component/WebSite";
import About from "./component/About";
import Resume from "./component/Resume";
import Services from "./component/Services";
import Contact from "./component/Contact";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<WebSite />} />
            <Route path="/about" element={<About />} />
            <Route path="/resume" element={<Resume />} />
            {/* <Route path="/portfolio" element={<Portfolio />} /> */}
            <Route path="/services" element={<Services />} />
            <Route path="/Contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
