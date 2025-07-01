import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login'; // Updated import path
import signup from './pages/Signup';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        <main>
          <Routes>
            {/* Redirect from root path to login */}
            <Route path="/" element={<Navigate to="/login" replace />} />
            <Route path="/login" element={<Login />} />
             <Route path="/Signup" element={<Signup />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
