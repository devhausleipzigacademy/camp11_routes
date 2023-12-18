import axios from "axios";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

type Post = {
  title: string;
  body: string;
};

function SingleBlog() {
  const { id } = useParams();
  const [post, setPost] = React.useState<Post>({ title: "", body: "" });
  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => {
        setPost(res.data);
      });
  }, []);
  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
}

export default SingleBlog;
