import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Inspiration from "./pages/Inspiration";
import About from "./pages/About";
import Services from "./pages/Services";
import Register from "./pages/Register";
import Footer from "./components/footer";
import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="bg-black text-white min-h-screen">
          <Header />
          <div className="pt-16">
            <Routes>
              <Route index element={<Home />} />
              <Route path="/contacts" element={<Contact />} />
              <Route path="/inspiration" element={<Inspiration />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/register" element={<Register />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
