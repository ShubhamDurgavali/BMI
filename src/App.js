import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Products from "./pages/Products";
import BMI from "./pages/BMI";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route exact path="/products" element={<Products />} />
        <Route exact path="/bmi" element={<BMI />} />
      </Routes>
    </div>
  );
}

export default App;
