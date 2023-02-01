import React, { useState } from "react";
import "./index.css";
import CreateForm from "../components/CreateForm";
import { Navigate } from "react-router-dom";

const Home = () => {
  const [buttonPopup, setButtonPopup] = useState(false);
  const [goToBrowse, setGoToBrowse] = useState(false);

  if (goToBrowse) {
    return <Navigate to="/browse" />;
  }

  return (
    <div>
      {/* <h1>Lost & Found</h1> */}
      <div className="title">
        <img
          src={require("./images/lost-and-found.jpg")}
          alt="lost-and-found-icon"
        />
      </div>
      <div className="wrapper">
        <section className="found">
          <p>I Found Something!</p>
          <button onClick={() => setButtonPopup(true)}>Create A Post</button>
          <CreateForm
            trigger={buttonPopup}
            setTrigger={setButtonPopup}
          ></CreateForm>
        </section>
        <section className="lost">
          <p>I Lost Something!</p>
          <button
            onClick={() => {
              setGoToBrowse(true);
            }}
          >
            Start Browsing
          </button>
        </section>
      </div>
    </div>
  );
};

export default Home;
