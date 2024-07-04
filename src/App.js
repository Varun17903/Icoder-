import React, { useState } from "react";
import Navbar from "./components/Navbar"; // Corrected import path
import TextForm from "./components/TextForm";
import About from "./components/About"; // Corrected import path
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes // Updated import for Routes
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light'); // Changed default mode to 'light'
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = "grey";
      document.title = "Textutils - Dark mode enabled";
    } else {
      setMode('light');
      document.body.style.backgroundColor = "white";
      document.title = "Textutils - Light mode enabled";
    }
  };

  return (
    <>
      <Router>
        <Navbar title="textutils" aboutText="about textutils" mode={mode} toggleMode={toggleMode} />
        <div className="container my-3">
          <Routes> {/* Updated Switch to Routes */}
            <Route exact path="/about" element={<About />} /> {/* Updated component to element */}
            <Route exact path="/" element={<TextForm heading="Text Converter Form" mode={mode} />} /> {/* Updated component to element */}
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
