import axios from "axios";
import React, { useEffect, useState } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./browse.css";

const Browse = () => {
  const [postList, setPostList] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/api/v1/items").then((data) => {
      setPostList(data.data);
      console.log(data.data);
    });
  }, []);

  return (
    <div className="BrowsePage">
      <div className="TitleWrap">
        <h1>Browse ALl Posts</h1>
      </div>
      <div className="BrowseWrapper">
        <div className="InnerPost">
          <tr className="PostBar">
            <th className="text">Picture</th>
            <th className="text">Data</th>
            <th className="text">Title</th>
            <th className="text">Category</th>
            <th className="text">Location</th>
          </tr>
          <div className="PostBody">
            {postList.map((val, key) => {
              return (
                <tr className="Post" key={val.item_id}>
                  <td className="text">pic</td>
                  <td className="text">01/01/2023</td>
                  <td className="text">{val.title}</td>
                  <td className="text">{val.category}</td>
                  <td className="text">{val.location}</td>
                </tr>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Browse;
