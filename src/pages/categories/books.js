import axios from "axios";
import React, { useEffect, useState } from "react";
import FinderInfo from "../../components/FinderInfo";
import "../browse.css";

const Books = () => {
  const [bookList, setBookList] = useState([]);
  const [buttonPopup, setButtonPopup] = useState(false);
  const [post, setPost] = useState({});

  useEffect(() => {
    axios
      .get("https://lost-n-found.herokuapp.com/api/v1/items")
      .then((data) => {
        // console.log(data.data);
        let books = [];
        for (let item of data.data) {
          if (item.category === "Books") {
            books.push(item);
          }
        }
        setBookList(books);
      });
  }, []);

  const getPost = (id) => {
    for (let post of bookList) {
      if (post.item_id === id) {
        setPost(post);
      }
    }
  };

  return (
    <div className="BrowsePage">
      <div className="TitleWrap">
        <h1>Books</h1>
      </div>
      <div className="BrowseWrapper">
        <div className="InnerPost">
          <div className="PostBody">
            {bookList.map((val, key) => {
              return (
                <div className="Post" key={val.item_id}>
                  <a href={val.image_url} target="_blank" rel="noreferrer">
                    <img
                      className="item-image"
                      src={val.image_url}
                      alt="item"
                    />
                  </a>
                  <h3 className="title1">{val.title}</h3>
                  <p className="text">Category: {val.category}</p>
                  <p className="text">Found Date: {val.date}</p>
                  <p className="text">Found Location: {val.location}</p>
                  <p className="text">Description: {val.description}</p>
                  <button
                    className="button-35"
                    onClick={(event) => {
                      setButtonPopup(true);
                      getPost(val.item_id);
                    }}
                  >
                    Claim
                  </button>
                  <FinderInfo
                    post={post}
                    trigger={buttonPopup}
                    setTrigger={setButtonPopup}
                  ></FinderInfo>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Books;
