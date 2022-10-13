import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Axios from "axios";

const Post = () => {
  let { id } = useParams();
  const [post, setPost] = useState({});

  useEffect(() => {
    Axios.get(`http://localhost:3001/posts/byId/${id}`)
      .then((res) => {
        setPost(res.data);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="postPage">
      <div className="leftSide">
        <div className="post" id="individual">
          <h1 className="title">{post.title}</h1>
          <p className="body">{post.body}</p>
        </div>
      </div>
      <div className="rightSide">Comment section</div>
    </div>
  );
};

export default Post;
