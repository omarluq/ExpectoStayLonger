import React from 'react';
import ModalContainer from './modal_container';
import Footer from "./footer/footer";



const LandingPage = (props) => {



    return (
        <div>
             
            <div className="img"></div>
            < ModalContainer />
            <h4 className="featuredtitle">Featured</h4>
            <div className="featured"> 
                
                <div className="featured-icon">
                    <div className="sorting-hat"></div>
                    <a className="footerlink" href="https://www.wizardingworld.com/news/discover-your-hogwarts-house-on-wizarding-world" target="_blank">Discover your Hogwarts house</a>
                </div>

                <div className="featured-icon">
                    <div className="room"></div>
                    <a className="footerlink" href="https://www.wizardingworld.com/features/everything-you-need-to-know-about-the-room-of-requirement" target="_blank">Learn about the Room of Requirement </a>
                </div>
                
                <div className="featured-icon">
                    <div className="patronus"></div>
                    <a className="footerlink" href="https://www.wizardingworld.com/features/what-is-a-patronus" target="_blank">Discover your Patronus </a>
                </div>

                <div className="featured-icon">
                    <div className="hallows"></div>
                    <a className="footerlink" href="https://www.wizardingworld.com/features/10-things-we-love-about-deathly-hallows" target="_blank">Learn about the Deathly Hallows</a>
                </div>

                <div className="featured-icon">
                    <div className="ollivanders"></div>
                    <a className="footerlink" href="https://www.wizardingworld.com/news/discover-your-wand-on-pottermore" target="_blank">Discover your Wand</a>
                </div>

                <div className="featured-icon">
                    <div className="broomstick"></div>
                    <a className="footerlink" href="https://www.wizardingworld.com/features/things-you-would-use-broomsticks-for-other-than-flying" target="_blank">A Funy article about broomsticks</a>
                </div>
            </div>
            < Footer/>
        </div>
    )
}
export default LandingPage