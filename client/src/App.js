import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Add from "./Pages/Add";
import Errors from "./Pages/Errors";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<Add />} />
        <Route path="/edit/:id" element={<Add />} />
        <Route path="/*" element={<Errors />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
