import React, { useState, useEffect, Suspense } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";
import NavBar from "./components/navBar";
import Footer from "./components/footer";
import LoadingAnimation from "./components/loading";

// Lazy load route components
const Home = React.lazy(() => import("./pages/Home"));
const Articles = React.lazy(() => import("./pages/Article"));
const AboutMe = React.lazy(() => import("./pages/AboutMe"));
const NoMatch = React.lazy(() => import("./components/NoMatch"));

const App = () => {
  const [loading, setLoading] = useState(true);
  const [contentReady, setContentReady] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
      // Add small delay before showing content animation
      setTimeout(() => {
        setContentReady(true);
      }, 100);
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
        <Suspense fallback={<LoadingAnimation />}>
          <div className={`transition-all duration-500 ${contentReady ? 'opacity-100' : 'opacity-0'}`}>
            <div className="bg-gradient-to-r from-[#020213] to-[#091c38] -mt-2 animate-fade-in-up">
              <Routes>
              <Route path="/" element={<Home selectedCategory={selectedCategory} />} />
                <Route path="/:slug" element={<Articles />} />
                <Route path="*" element={<NoMatch />} />
                <Route path="/404" element={<NoMatch />} />
                <Route path="about" element={<AboutMe />} />
              </Routes>
            </div>
            <Footer className="animate-fade-in-up stagger-delay-3" />
          </div>
        </Suspense>
      )}
    </Router>
  );
};

export default App;
