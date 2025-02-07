import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home/Page";
import About from "./pages/About/Page";
import Services from "./pages/Services/Page";
import Tools from "./pages/Tools/Page";
import Contact from "./pages/Contact/Page";
import Blogs from "./pages/Blogs/Page";
import Error from "./pages/Error/Page";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/tools" element={<Tools />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/*" element={<Error />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
