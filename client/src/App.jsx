import "./App.css";
import Axios from "axios";
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Home from "./pages/Home";
import CreatePost from "./pages/CreatePost";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Link to="/">Home</Link>
        <Link to="createPost">Create Post</Link>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="createPost" element={<CreatePost />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
