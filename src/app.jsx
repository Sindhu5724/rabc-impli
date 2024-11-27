import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import UserList from "./components/UserManagement/UserList";
import RoleList from "./components/RoleManagement/RoleList";
import "./styles/App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <Link to="/users">User Management</Link>
          <Link to="/roles">Role Management</Link>
        </nav>
        <Routes>
          <Route path="/users" element={<UserList />} />
          <Route path="/roles" element={<RoleList />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
