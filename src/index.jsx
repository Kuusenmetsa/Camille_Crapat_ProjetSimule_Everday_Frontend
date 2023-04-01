import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./index.css";

import Footer from "./components/Footer";

import Home from "./pages/Home";
import FirstConnexion from "./pages/FirstConnexion";
import AllPosts from "./pages/AllPosts";
import Error from "./pages/Error";

import Toasts from "./components/Toast";

import { ToastsProvider } from "./utils/context";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <ToastsProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/firstconnexion" element={<FirstConnexion />} />
          <Route path="/allposts" element={<AllPosts />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Toasts />
        <Footer />
      </Router>
    </ToastsProvider>
  </React.StrictMode>
);
