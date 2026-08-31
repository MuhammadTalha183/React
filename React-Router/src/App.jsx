import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Products from "./components/products";
import ProductDetails from "./components/ProductDetails";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Hero />} />

        <Route path="/products" element={<Products />} />

        <Route
          path="/products/:id"
          element={<ProductDetails />}
        />

        <Route path="/about" element={<h1>About</h1>} />

        <Route path="/services" element={<h1>Services</h1>} />

        <Route path="/projects" element={<h1>Projects</h1>} />

        <Route path="/contact" element={<h1>Contact</h1>} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;