import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import styles from "./App.module.css";

import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects/Projects";
import Hobbies from "./pages/Hobbies/Hobbies";
import ModeToggle from "./components/ModeToggle";
import Navbar from "./components/Navbar.tsx";
import Footer from "./components/Footer";
import MyPhoto from "./components/MyPhoto.tsx";
import Lightbox from "./components/Lightbox/Lightbox";
import { useLightbox } from "./components/Lightbox/useLightbox";

function App() {
  const {
    lightbox,
    openLightbox,
    closeLightbox,
    goToNext,
    goToPrev,
    containerRef,
  } = useLightbox();

  return (
    <>
      <Router>
        <div className={styles.app}>
          <ModeToggle />
          <main className={styles.content}>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home PhotoComponent={MyPhoto} />} />
              <Route path="/about" element={<About PhotoComponent={MyPhoto} />} />
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
        containerRef={containerRef}
        isOpen={lightbox.isOpen}
        images={lightbox.images}
        index={lightbox.index}
        onClose={closeLightbox}
        onNext={goToNext}
        onPrev={goToPrev}
      />
    </>
  );
}

export default App;
