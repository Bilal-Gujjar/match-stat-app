import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import AddPlayerInfo from './components/AddPlayerInfo';
import ShowPlayerInfo from './components/ShowPlayerInfo';

function App() {
  return (
    <Router>
      <Sidebar /> {/* Assuming you want to render it */}
      <Routes>
        <Route path="/add-player" element={<AddPlayerInfo />} />
        <Route path="/show-player" element={<ShowPlayerInfo />} />
      </Routes>
    </Router>
  );
}

export default App;
