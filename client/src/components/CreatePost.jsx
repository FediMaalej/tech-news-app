import react, { useState } from "react";

function CreatePost({ postArticleData }) {
  const [image, setImage] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  return (
    <div>
      <button onClick={() => postArticleData({title, content, image})} >Add News</button>
    </div>
  );
}

export default CreatePost;
