import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Homepage from "./containers/Homepage/Homepage";
import './App.css'


const App = () =>{
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route path="/home" element={<Homepage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App