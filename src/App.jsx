import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import Reservation from "./pages/Reservation";
import Order from "./pages/Order";
import Menu from "./pages/Menu";
import Profile from "./pages/Profile";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/reservation" element={<Reservation />} />
        <Route path="/order" element={<Order/>}/>
        <Route path="/menu" element={<Menu />} />
        <Route path="/profile"element={<Profile/>}/>
      </Routes>
    </Router>
  );
}

export default App;
