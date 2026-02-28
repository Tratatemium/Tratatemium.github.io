import styles from "./App.module.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import ModeToggle from "./components/ModeToggle";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div lassName={styles.app}>
        <header>
          <ModeToggle />
          <Navbar />
        </header>
        <main className={styles.content}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
          <Footer />
        </main>
      </div>
    </Router>
  );
}

export default App;
