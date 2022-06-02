import React from "react";
import Dashboard from "./dashboard";
import ResponsiveDrawer from "./mainlayout";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

export default function Approuter() {
  
    return (
<Router>
      <Routes>
          <Route path="/*" element={<Dashboard />} />
          <Route path="/mainlayout" element={<ResponsiveDrawer />} />
      </Routes>
  </Router>
    );
}
