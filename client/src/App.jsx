import "./App.css";
import Axios from "axios";
import React, { useEffect, useState } from "react";

const App = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Axios.get("http://localhost:3001/posts").then((response) => {
      console.log(response.data);
      setData(response.data);
    });
  }, []);

  return (
    <div className="App">
      {data.map((val, index) => {
        return (
          <div className="post" key={index}>
            <div className="title">{val.title}</div>
            <div className="body">{val.body}</div>
          </div>
        );
      })}
    </div>
  );
};

export default App;
