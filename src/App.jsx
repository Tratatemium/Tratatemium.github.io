import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";

import styles from "./App.module.css";

import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Hobbies from "./pages/Hobbies";
import ModeToggle from "./components/ModeToggle";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import MyPhoto from "./components/MyPhoto";
import Lightbox from "./components/lightbox";

function App() {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [currentImages, setCurrentImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  function openLightbox(images, index) {
    setCurrentImages(images);
    setCurrentIndex(index);
    setIsLightboxOpen(true);
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
        isOpen={isLightboxOpen}
        images={currentImages}
        index={currentIndex}
        onClose={() => setIsLightboxOpen(false)}
      />
    </>
  );
}

export default App;
