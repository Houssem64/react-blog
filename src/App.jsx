import { Route, Routes } from "react-router-dom";
import "./index.css";
import ReactDOM from "react";
import Home from "./pages/Home";
import Article from "./pages/Article";

const Page = () => {
  return (
    <Routes>
      <Route exact path="/" Component={Home}></Route>
      <Route exact path="/article" Component={Article} />
    </Routes>
  );
};
function App() {
  return (
    <div className="bg-gradient-to-r from-[#020213] to-[#091c38] -mt-2">
      <Page />
    </div>
  );
}

export default App;
