import React from 'react';
import './App.css';
import {
  HashRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { Provider } from "react-redux";

import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';
import Terms from './pages/Signup/Terms';
import UserSelect from './pages/Signup/UserSelect';
import Ready from './pages/Signup/Ready';
import Home from "./pages/Home/Home";
import User from "./pages/User/User";
import Setting from './pages/Setting/Setting';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/userselect" element={<UserSelect/>} />
          <Route path="/ready" element={<Ready/>} />
          <Route path="/home" element={<Home/>} />
          <Route path="/user" element={<User />} />
          <Route path="/setting" element={<Setting />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;