import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import NavBar from "./components/navBar.jsx";
import Footer from "./components/footer.jsx";
import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Articles from "./pages/Article";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <NavBar />
      <div className="bg-gradient-to-r from-[#020213] to-[#091c38] -mt-2">
        <Routes>
          <Route index element={<Home />} />
          <Route path="posts/:slug" element={<Articles />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>
);
