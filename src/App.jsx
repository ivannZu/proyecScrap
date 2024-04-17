import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './screens/Home';
import Reporte from './screens/Reporte';



function App() {
  return (
    <div className="">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/reporte" element={<Reporte />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
