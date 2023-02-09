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
      <div className="title">
        <img
          src={require("./images/lost-and-found.jpg")}
          alt="lost-and-found-icon"
        />
      </div>
      <div className="sub-title">
        <h2>- Boradlands, VA -</h2>
      </div>
      <div className="wrapper">
        <section className="found">
          <p className="sth">I Found Something!</p>
          <button className="button-55" onClick={() => setButtonPopup(true)}>
            Create A Post
          </button>
          <CreateForm
            trigger={buttonPopup}
            setTrigger={setButtonPopup}
          ></CreateForm>
        </section>
        <section className="lost">
          <p className="sth">I Lost Something!</p>
          <button
            className="button-55"
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
