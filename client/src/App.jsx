import "./App.css";
import Axios from "axios";
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Home from "./pages/Home";
import CreatePost from "./pages/CreatePost";
import Post from "./pages/Post";

const App = () => {
  return (
    <div className="App">
      <Router>
        <nav className="navbar">
          <Link to="/">Home</Link>
          <Link to="/createPost">Create Post</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/createPost" element={<CreatePost />} />
          <Route path="/post/:id" element={<Post />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
