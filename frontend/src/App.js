import './App.css';
import Header from "./components/Header";
import { render } from "react-dom";
import { Routes, Route, Link } from "react-router-dom";
import Picks from "./components/Picks";
import Weekly from "./components/Weekly";
import Overall from "./components/Overall";

function App() {
  return (
    <div className="App">
      <Header />
        <Routes>
          <Route path="/" element={<Picks />} />
          <Route path="weekly" element={<Weekly />} />
          <Route path="overall" element={<Overall />} />
        </Routes>
    </div>
  );
}

export default App;
