import React, { useState, useEffect } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Articles from "./pages/Article";
import { Analytics } from "@vercel/analytics/react";
import NavBar from "./components/navBar";
import Footer from "./components/footer";
import NoMatch from "./components/NoMatch";
import LoadingAnimation from "./components/loading";
import AboutMe from "./pages/AboutMe";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <Router>
      <Analytics />
      <NavBar />
      {loading ? (
        <LoadingAnimation />
      ) : (
        <>
          <div className="bg-gradient-to-r from-[#020213] to-[#091c38] -mt-2">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/:slug" element={<Articles />} />
              <Route path="*" element={<NoMatch />} />
              <Route path="/404" element={<NoMatch />} />
              <Route path="about" element={<AboutMe />} />
            </Routes>
          </div>
          <Footer />
        </>
      )}
    </Router>
  );
};

export default App;
