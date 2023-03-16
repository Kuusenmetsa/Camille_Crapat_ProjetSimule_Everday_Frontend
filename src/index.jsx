import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./index.css";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import FirstConnexion from "./pages/FirstConnexion";
import AllPosts from "./pages/AllPosts";
import Error from "./pages/Error";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/firstconnexion" element={<FirstConnexion />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>
);
