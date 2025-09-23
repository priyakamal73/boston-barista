import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Homepage from "./containers/Homepage/Homepage";
import Menu from "./containers/Menu/Menu";
import AboutPage from "./containers/About page/AboutPage";
import ScrollToTop from "./components/Scroll To Top/ScrollToTop";
import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route path="/home" element={<Homepage />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
