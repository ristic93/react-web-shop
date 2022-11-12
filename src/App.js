import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ProductsProvider } from "./contexts/ProductsContext";

// components
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Topbar from "./components/Topbar";

// pages
import Home from "./pages/Home";
import Products from "./pages/Products";
import Single from "./pages/Single";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";
import ScrollToTop from "./components/ScrollToTop";

const App = () => {

  return (
    <>
      <ProductsProvider>
        <BrowserRouter>
          <ScrollToTop />
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
      </ProductsProvider>
    </>
  );
};

export default App;
