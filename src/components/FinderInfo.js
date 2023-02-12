import React from "react";
import "./FinderInfo.css";

const FinderInfo = (props) => {
  return props.trigger ? (
    <div>
      <div className="finder-info">
        <div className="inner-info">
          <h3>
            Contact Info for{" "}
            <strong className="contact-title">{props.post.title}</strong>
          </h3>
          <p>
            Finder's Name: <em>{props.post.finder_name}</em>
          </p>
          <p>
            Email: <em>{props.post.email}</em>
          </p>
          <p>
            Phone: <em>{props.post.phone}</em>
          </p>
          <p>You can contact the finder for more details</p>
          <button className="close" onClick={() => props.setTrigger(false)}>
            X
          </button>
        </div>
      </div>
    </div>
  ) : (
    ""
  );
};

export default FinderInfo;
