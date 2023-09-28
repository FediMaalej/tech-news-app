import "./App.css";
import axios from "axios";
import React, { useState, useEffect } from "react";
import AnimatedTextAnimation from "./components/AntryAnimation.jsx";
import NavBar from "./components/NavBar.jsx";
import NewsPage from "./components/NewsPage.jsx";
import banner from "./assest/banner.jpg";
import Landing from "./components/Landing.jsx";
import CreatePost from "./components/CreatePost.jsx";

function App() {
  const [article, setArticle] = useState([]);
  const [category, setCategory] = useState([]);
  const [users, setUsers] = useState([]);
  const [updated, setUpdated] = useState(true);

  /* ------------- fetch data ------------- */

  const fetchArticleData = () => {
    axios
      .get("http://localhost:3001/api/article/getAllArticle")
      .then((res) => {
        setArticle(res.data);
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const fetchCategoryData = () => {
    axios
      .get("http://localhost:3001/api/category/getAllCategory")
      .then((res) => {
        setCategory(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const fetchUsersData = () => {
    axios
      .get("http://localhost:3001/api/users/getAllUser")
      .then((res) => {
        setUsers(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  /* ------------- fetch data ------------- */

  /* ------------- post data ------------- */

  const postArticleData = (data) => {
    axios
      .post("http://localhost:3001/api/article/addArticle", data)
      .then((res) => {
        setUpdated(!updated);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const postCategoryData = (data) => {
    axios
      .post("http://localhost:3001/api/category/addCategory", data)
      .then((res) => {
        setUpdated(!updated);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const postUsersData = (data) => {
    axios
      .post("http://localhost:3001/api/users/addUser", data)
      .then((res) => {
        setUpdated(!updated);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  /* ------------- post data ------------- */

  /* ------------- update data ------------- */

  const updateArticleData = (id, data) => {
    axios
      .put(`http://localhost:3001/api/article/updateArticle/${id}`, data)
      .then((res) => {
        setUpdated(!updated);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const updateCategoryData = (id, data) => {
    axios
      .put(`http://localhost:3001/api/category/updateCategory/${id}`, data)
      .then((res) => {
        setUpdated(!updated);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const updateUsersData = (id, data) => {
    axios
      .put(`http://localhost:3001/api/users/updateUser/${id}`, data)
      .then((res) => {
        setUpdated(!updated);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  /* ------------- update data ------------- */

  /* ------------- delete data ------------- */

  const deleteArticleData = (id) => {
    axios
      .delete(`http://localhost:3001/api/article/deleteArticle/${id}`)
      .then((res) => {
        setUpdated(!updated);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const deleteCategoryData = (id) => {
    axios
      .delete(`http://localhost:3001/api/category/deleteCategory/${id}`)
      .then((res) => {
        setUpdated(!updated);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const deleteUsersData = (id) => {
    axios
      .delete(`http://localhost:3001/api/users/deleteUser/${id}`)
      .then((res) => {
        setUpdated(!updated);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  /* ------------- delete data ------------- */

  useEffect(() => {
    fetchArticleData();
    fetchCategoryData();
    fetchUsersData();
  }, [updated]);

  return (
    <div className="App">
      <AnimatedTextAnimation />
      <div className="main_website">
        <NavBar postArticleData={postArticleData} />
        <Landing />
        <section id="body_page">
          <NewsPage article={article} deleteArticleData={deleteArticleData} updateArticleData={updateArticleData} />
        </section>
        <section id="post">
        </section>
      </div>
    </div>
  );
}

export default App;
