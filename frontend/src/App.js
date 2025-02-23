import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Navbar from './components/Navbar';
import Auth from './components/Auth';
import Events from './components/Events';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/login" element={<Auth isLogin={true} />} />
          <Route path="/register" element={<Auth isLogin={false} />} />
          <Route path="/events" element={<Events />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
