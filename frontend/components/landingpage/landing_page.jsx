import React from "react";
import ModalContainer from "./modal_container";
import Footer from "./footer/footer";

const LandingPage = (props) => {
  return (
    <div>
      <div className="img"></div>
      <ModalContainer />
      <div className="featuedContainer">
        <div className="featuredtitlecontainer">
        <h4 className="featuredtitle">Featured</h4>
        </div>
        <div className="featured">
          <div className="featured-icon">
            
            <a
              className="featuredlink"
              href="https://www.wizardingworld.com/news/discover-your-hogwarts-house-on-wizarding-world"
              target="_blank"
            > <div className="sorting-hat"></div>
              <p>Discover your Hogwarts house</p>
            </a>
          </div>

          <div className="featured-icon">
            
            <a
              className="featuredlink"
              href="https://www.wizardingworld.com/features/everything-you-need-to-know-about-the-room-of-requirement"
              target="_blank"
            > <div className="room"></div>
              <p>Learn about the Room of Requirement</p>
            </a>
          </div>

          <div className="featured-icon">
            
            <a
              className="featuredlink"
              href="https://www.wizardingworld.com/features/what-is-a-patronus"
              target="_blank"
            ><div className="patronus"></div>
              <p>Discover your Patronus</p>
            </a>
          </div>

          <div className="featured-icon">
            
            <a
              className="featuredlink"
              href="https://www.wizardingworld.com/features/10-things-we-love-about-deathly-hallows"
              target="_blank"
            > <div className="hallows"></div>
              <p>Learn about the Deathly Hallows</p>
              
            </a>
          </div>

          <div className="featured-icon">
            
            <a
              className="featuredlink"
              href="https://www.wizardingworld.com/news/discover-your-wand-on-pottermore"
              target="_blank"
            > <div className="ollivanders"></div>
              <p>Discover your Wand</p>
              
            </a>
          </div>

          <div className="featured-icon">
            
            <a
              className="featuredlink"
              href="https://www.wizardingworld.com/features/things-you-would-use-broomsticks-for-other-than-flying"
              target="_blank"
            > <div className="broomstick"></div>
              <p>A Funny article about broomsticks</p>
              
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default LandingPage;
