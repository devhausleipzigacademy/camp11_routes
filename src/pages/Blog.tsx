import axios from "axios";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";

function Blog() {
  const [posts, setPosts] = React.useState([]);
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((res) => {
      setPosts(res.data);
    });
  }, []);
  return (
    <div>
      {posts.map((post: any) => (
        <Link to={`/blog/${post.id}`} key={post.id}>
          <h1>{post.title}</h1>
        </Link>
      ))}
    </div>
  );
}

export default Blog;
