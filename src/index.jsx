import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./index.css";

import Home from "./pages/Home";
import FirstConnexion from "./pages/FirstConnexion";
import AllPosts from "./pages/AllPosts";
import Error from "./pages/Error";
import CreatePost from "./pages/CreatePost";
import Params from "./pages/Params";
import Profile from "./pages/Profile";

import Toasts from "./components/Toast";

import { ToastsProvider } from "./utils/context";
import { NavProvider } from "./utils/context";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <ToastsProvider>
      <NavProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/firstconnexion" element={<FirstConnexion />} />
            <Route path="/allposts" element={<AllPosts />} />
            <Route path="/createpost" element={<CreatePost />} />
            <Route path="/params" element={<Params />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="*" element={<Error />} />
          </Routes>
          <Toasts />
        </Router>
      </NavProvider>
    </ToastsProvider>
  </React.StrictMode>
);
