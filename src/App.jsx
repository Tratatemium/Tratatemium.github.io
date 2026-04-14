import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useId } from "react";

import styles from "./App.module.css";

import { ThemeProvider } from "./context/ThemeContext.jsx";

import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects/Projects";
import Hobbies from "./pages/Hobbies/Hobbies";
import SkipLink from "./components/SkipLink.jsx";
import ThemeToggle from "./components/ThemeToggle.jsx";
import Navbar from "./components/Navbar.tsx";
import Footer from "./components/Footer.tsx";
import MyPhoto from "./components/MyPhoto.tsx";
import Lightbox from "./components/Lightbox/Lightbox";
import { useLightbox } from "./components/Lightbox/useLightbox";

function AppContent({ mainId, openLightbox }) {
  const location = useLocation();
  const isAboutPage = location.pathname === "/about";

  return (
    <div className={styles.app}>
      <SkipLink mainId={mainId}/>
      <ThemeToggle />
      <main className={`${styles.content} ${isAboutPage ? styles.aboutContent : ''}`} id={mainId}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home PhotoComponent={MyPhoto} />} />
          <Route
            path="/about"
            element={<About PhotoComponent={MyPhoto} />}
          />
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
  );
}

function App() {
  const {
    lightbox,
    openLightbox,
    closeLightbox,
    goToNext,
    goToPrev,
    containerRef,
  } = useLightbox();

  const mainId = useId();

  return (
    <>
      <ThemeProvider>
        <Router>
          <AppContent mainId={mainId} openLightbox={openLightbox} />
        </Router>
      </ThemeProvider>
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
