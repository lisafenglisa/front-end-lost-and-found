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
          {/* <tr className="PostBar">
            <th className="text">Picture</th>
            <th className="text">Data</th>
            <th className="text">Title</th>
            <th className="text">Category</th>
            <th className="text">Location</th>
          </tr> */}
          <div className="PostBody">
            {postList.map((val, key) => {
              return (
                <div className="Post" key={val.item_id}>
                  {/* <td className="text">pic</td> */}
                  <h3 className="title1">{val.title}</h3>
                  <p className="text">Category: {val.category}</p>
                  <p className="text">Found Date: {val.date}</p>
                  <p className="text">Found Location: {val.location}</p>
                  <p className="text">Description: {val.description}</p>
                  <button className="button-35">Claim</button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Browse;
