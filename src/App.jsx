import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Articles from "./pages/Article";
import { Analytics } from "@vercel/analytics/react";
import { BrowserRouter } from "react-router-dom";
import NavBar from "./components/navBar";
import Footer from "./components/footer";

const App = () => {
  return (
    <BrowserRouter>
      <Analytics />
      <NavBar />
      <div className="bg-gradient-to-r from-[#020213] to-[#091c38] -mt-2">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="posts/:slug" element={<Articles />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
