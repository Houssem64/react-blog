import { Route, Routes } from "react-router-dom";
import "./index.css";
import ReactDOM from "react";
import Home from "./pages/Home";
import Article from "./pages/Article";
import { Analytics } from "@vercel/analytics/react";

const Page = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/article" element={<Article />} />
      <Route exact path="/posts/:slug" element={<Article />} />
    </Routes>
  );
};

function App() {
  return (
    <>
      <Analytics />
      <div className="bg-gradient-to-r from-[#020213] to-[#091c38] -mt-2">
        <Page />
      </div>
    </>
  );
}

export default App;
