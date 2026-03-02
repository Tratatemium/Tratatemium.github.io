import styles from "./App.module.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Hobbies from "./pages/Hobbies";
import ModeToggle from "./components/ModeToggle";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import MyPhoto from "./components/MyPhoto";

function App() {
  return (
    <Router>
      <div className={styles.app}>
        <ModeToggle />
        <main className={styles.content}>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home MyPhoto={MyPhoto} />} />
            <Route path="/about" element={<About MyPhoto={MyPhoto} />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/hobbies" element={<Hobbies />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
