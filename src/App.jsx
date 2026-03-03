import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";

import styles from "./App.module.css";

import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Hobbies from "./pages/Hobbies/Hobbies";
import ModeToggle from "./components/ModeToggle";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import MyPhoto from "./components/MyPhoto";
import Lightbox from "./components/Lightbox/Lightbox";

function App() {
  const [lightbox, setLightbox] = useState({
    isOpen: false,
    images: [],
    index: 0,
  });

  function openLightbox(images, index) {
    setLightbox({ isOpen: true, images, index });
  }

  function closeLightbox() {
    setLightbox((prev) => ({ ...prev, isOpen: false }));
  }

  function handleNext() {
    setLightbox((prev) => ({
      ...prev,
      index: (prev.index + 1) % prev.images.length,
    }));
  }

  function handlePrev() {
    setLightbox((prev) => ({
      ...prev,
      index: (prev.index - 1 + prev.images.length) % prev.images.length,
    }));
  }

  return (
    <>
      <Router>
        <div className={styles.app}>
          <ModeToggle />
          <main className={styles.content}>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home MyPhoto={MyPhoto} />} />
              <Route path="/about" element={<About MyPhoto={MyPhoto} />} />
              <Route
                path="/projects"
                element={<Projects openLightbox={openLightbox} />}
              />
              <Route
                path="/hobbies"
                element={<Hobbies openLightbox={openLightbox} />}
              />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
      <Lightbox
        isOpen={lightbox.isOpen}
        images={lightbox.images}
        index={lightbox.index}
        onClose={closeLightbox}
        onNext={handleNext}
        onPrev={handlePrev}
      />
    </>
  );
}

export default App;
