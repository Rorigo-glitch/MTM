import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Classes from "./pages/Classes";
import ClassDetail from "./pages/ClassDetail";
import Gallery from "./pages/Gallery";
import Trainers from "./pages/Trainers";
import Plans from "./pages/Plans";
import About from "./pages/About";
import Booking from "./pages/Booking";
import Contact from "./pages/Contact";
import Weather from "./pages/Weather";
import Faq from "./pages/Faq";
import Blog from "./pages/Blog";
import NotFound from "./pages/NotFound";

const App: React.FC = () => {
  return (
    <>
      <Header />
      <main id="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/clases" element={<Classes />} />
          <Route path="/clases/:id" element={<ClassDetail />} />
          <Route path="/galeria" element={<Gallery />} />
          <Route path="/entrenadores" element={<Trainers />} />
          <Route path="/planes" element={<Plans />} />
          <Route path="/nosotros" element={<About />} />
          <Route path="/reservas" element={<Booking />} />
          <Route path="/contacto" element={<Contact />} />
          <Route path="/clima" element={<Weather />} />
          <Route path="/preguntas" element={<Faq />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
};

export default App;
