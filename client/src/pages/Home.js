import React from "react";
import Axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    Axios.get("http://localhost:3001/posts").then((response) => {
      console.log(response.data);
      setData(response.data);
    });
  }, []);

  const navigate = useNavigate();

  return (
    <div className="App">
      {data.map((val, index) => {
        return (
          <div
            className="post"
            key={index}
            onClick={() => {
              navigate(`/post/${val.id}`);
            }}
          >
            <div className="title">{val.title}</div>
            <div className="body">{val.body}</div>
          </div>
        );
      })}
    </div>
  );
};

export default Home;
