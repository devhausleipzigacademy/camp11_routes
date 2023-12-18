import React from "react";
import { redirect, useNavigate } from "react-router-dom";

function NewBlog() {
  const navigate = useNavigate();

  function handleSubmit(event: any) {
    event.preventDefault();
    console.log("You clicked submit.");
    navigate("/blog");
  }
  return (
    <div>
      <h1>hello new blog</h1>
      <form onSubmit={(e) => handleSubmit(e)}>
        <button type="submit">click me on submit</button>
      </form>
    </div>
  );
}

export default NewBlog;
