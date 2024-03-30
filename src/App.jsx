import { Route, Routes } from "react-router-dom";
import "./index.css";
import ReactDOM from "react";
import Home from "./pages/Home";
import Articles from "./pages/Article";
import { Analytics } from "@vercel/analytics/react";

const Page = () => {
  return (
    <Routes>
      <Route index element={<Home />} />

      <Route exact path="/posts/:slug" element={<Articles />} />
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
