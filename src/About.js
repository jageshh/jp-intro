import React from "react";
import Jp from "./Jp-Hr.jpg";
function About() {
  return (
    <>
      <div className="about-parent-div">
        <div className="left-div">
          <h1>
            <span className="aqa">01.</span>About Me <hr />
          </h1>
          <p className="about-para">
            Hello! My name is Jageshvar prajapati and I enjoy creating things
            that live on the internet. My interest in web development started
            back in 2020 when I decided to try editing custom Ecommerce website.
            — turns out hacking together a custom reblog button taught me a lot
            about HTML & CSS!
            <br />
            Looking for an opportunity as a frontend developer <br />
            to utilize my programming skills that can contribute to the
            company’s <br />
            growth as well as enhance my knowledge by exploring new things.
          </p>
          <h4>Here are a few technologies I’ve been working with recently:</h4>
          <div className="parent-about-content">
            <div className="first-child">
              <div>
                <h6>1. Data Structure & Algorithm</h6>
                <h6>2. Java</h6>
                <h6>3. HTML</h6>
              </div>
            </div>
            <div className="second-child">
              <div>
                <h6>4. CSS</h6>
                <h6>5. Java Scridivt</h6>
                <h6>6. Bootstradiv</h6>
              </div>
            </div>
            <div className="third-child">
              <div>
                <h6>7. React</h6>
                <h6>8. Node</h6>
                <h6>9. MySql</h6>
                <h6>10. MongoDB</h6>
              </div>
            </div>

            <div className="fourth-child">
                <div className="effect">
              <img src={Jp} alt="jp-hr" height={200} width={200} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
