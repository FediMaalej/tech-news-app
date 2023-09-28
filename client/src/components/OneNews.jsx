import "./style.css";
import "../index.css";
import react, { useState } from "react";
import UpdateModal from "./UpdateModal.jsx";

const OneNews = (props) => {
  const [image, setImage] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");


  return (
    <div className="newsLetter">
      <img id="post_image" src={props.article.image} alt="" />
      <div className="news_desc">
        <p id="title">{props.article.title}</p>
        <p id="content">{props.article.content}</p>
        <p id="title">{props.article.author}</p>
        <div className="btns">
          <div className="form">
            <UpdateModal
              article={props.article}
              updateArticleData={props.updateArticleData}
            />
          </div>

          <button
            className="delete_btn"
            onClick={() => props.deleteArticleData(props.article.id)}
          >
            Delete Blog
          </button>
        </div>
      </div>
    </div>
  );
};

export default OneNews;
