import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Topbar from "./components/Topbar";

import Home from "./pages/Home";
import Products from "./pages/Products";
import Single from "./pages/Single";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Topbar />
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/single" element={<Single />}>
            <Route path=":id" element={<Single />} />
          </Route>
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
