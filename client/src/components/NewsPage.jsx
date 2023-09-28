import "./style.css";
import "../index.css";
import OneNews from './OneNews.jsx'

const NewsPage = (props) => {
  return (
    <div className="news_grid">
      {props.article.map(e => {
        console.log(e);
        return <OneNews article={e} key={e.id} deleteArticleData={props.deleteArticleData} updateArticleData={props.updateArticleData} />})}
    </div>
  );
};

export default NewsPage;
