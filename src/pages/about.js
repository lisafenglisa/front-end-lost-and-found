import React from "react";
import "./about.css";

const About = () => {
  return (
    <div>
      <div className="about-wrap">
        <h2 className="about-title">About Broadlands</h2>
        <h3 className="welcome">Welcome to Broadlands, Virginia!</h3>
        <div className="pics">
          <a
            href="https://i0.wp.com/www.broadlandshoa.org/wp-content/uploads/2020/10/broadlands.sign_.stone_.close_.DSC_4597-scaled.jpg?fit=2860%2C2200"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="broadlands"
              src={require("./images/broadlands.webp")}
              alt="broadlands"
            />
          </a>
          <a
            href="https://i0.wp.com/www.broadlandshoa.org/wp-content/uploads/2020/10/broadlands.nc_.skees_.DSC_4528e-2-scaled.jpg?fit=2922%2C2200"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="broadlands"
              src={require("./images/broadlands1.webp")}
              alt="broadlands"
            />
          </a>
          <a
            href="https://i0.wp.com/www.broadlandshoa.org/wp-content/uploads/2020/10/broadlands.bridge.straight.DSC_4669-scaled.jpg?fit=2922%2C2200"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="broadlands"
              src={require("./images/broadlands2.webp")}
              alt="broadlands"
            />
          </a>
          <a
            href="https://i2.wp.com/www.broadlandshoa.org/wp-content/uploads/2020/10/broadlands.nc_.backlawn.DSC_4475-scaled.jpg?strip=info&w=1800&ssl=1"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="broadlands"
              src={require("./images/broadlands3.webp")}
              alt="broadlands"
            />
          </a>
        </div>
        <div className="read-about">
          <p className="content">
            With over 1,500 spacious acres, award-winning Broadlands, a master
            planned community in Ashburn, Virginia. The National Wildlife
            Federation has named Broadlands a Certified Wildlife Habitat
            Community, only the 25th community in the nation to achieve this
            certification. Broadlands is developed by the Van Metre Companies,
            winner of the 2008 Avid Award for Best Customer Experience. Van
            Metre, founded in 1955, is one of the largest privately owned
            homebuilders and developers in the nation’s capital area. For a
            community so diverse, Broadlands is close-knit, vibrant and growing,
            with families placing major emphasis on schools, quality of
            education, and sports and activities. For active 21st-century
            lifestyles, Broadlands is a natural way to live.
          </p>
        </div>
        <h2 className="about-title">About This Website</h2>
        <div className="web-wrap">
          <div className="purpose">
            <h2 className="welcome">Purpose</h2>
            <p className="content">
              Welcome to the Lost & Found Center designed especially for
              Boradlands residents. Our sole purpose is to ensure all lost and
              found pets and property are returned to their rightful owner
              promptly and efficiently. What could be more satisfying than
              returning the family dog or engagement ring to their respective
              owners?
            </p>
          </div>
          <div className="contact">
            <h2 className="welcome">Contact</h2>
            <p className="content">
              This website is designed and built by Lisa Feng who's your
              neighbor in the Broadlands community. If you are having tech
              issues using this website, or if you have any feedback, please
              feel free to contact Lisa at lisafenglisa@yahoo.com.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
