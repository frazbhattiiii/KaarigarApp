import React from 'react';
import { BrowserRouter as  Router, Routes,Route,Redirect} from "react-router-dom";

import Dashboard from './Dashboard/Dashboard';
import './App.css';
import AlertNotifications from './shared/components/AlertNotifications';

function App() {
  return (
    <Router>
    <Routes>

      <Route path="/dashboard" element={<Dashboard />} />
      <Route
        path="/"
        element={<Dashboard to="/dashboard" replace />}
    />
   
    </Routes>
    <AlertNotifications/> 
  </Router>
  );
}

export default App;
