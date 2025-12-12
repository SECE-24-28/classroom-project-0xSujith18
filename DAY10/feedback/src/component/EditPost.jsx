import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { DataContext } from "../context/DataContext";

export const EditPost = () => 
{
  const { id } = useParams();
  const { posts, title, setTitle, body, setBody, handleSubmit ,handleDelete} =
    useContext(DataContext);

  const post = posts.find((post) => post.id == id);
  if (!post) {
    return (
      <div>
        <h1>Post not found</h1>
      </div>
    );
  }

  return (
    <div>
      <h1>Edit Post</h1>
      <hr />
      <input type="text" value={post.title} onChange={(e) => setTitle(e.target.value)} />
      <textarea value={post.body} onChange={(e) => setBody(e.target.value)} />
      <br />
      <button onClick={()=>handleDelete(post.id)} >Delete</button>
    </div>
  );
}
