import React from 'react'
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';

const Footer =  () => {



    return (
        <div className="footer">
            <div className="social"> 

                <h4>Social</h4>

                <a className="footerlink" href="https://github.com/omarluq" target="_blank">
                    <GitHubIcon className="icon" /> omarluq
                </a>
                <a className="footerlink" href="https://www.linkedin.com/in/omar-luqman-147011183/" target="_blank">
                    <LinkedInIcon className="icon" /> Omar Luqman
                </a>
                <a className="footerlink" href="https://twitter.com/therealomarluq" target="_blank">
                    <TwitterIcon className="icon" /> therealomarluq
                </a>
                <a className="footerlink" href="https://www.instagram.com/nottherealomarluq/" target="_blank">
                    <InstagramIcon className="icon" /> nottherealomarluq
                </a>
            </div>

            <div className="otherprojection"> 
                <h4>My other projects</h4>
                <a className="footerlink" href="https://omarluq.github.io/CyberWars/" target="_blank">
                    Cyberwars
                </a>
            </div>

            <div className="contact">
                <h4>Reach me at</h4>
                <h5>Email:</h5>
                <p className="footerp">omaralanii@outlook.com</p>
                <h5>Mobile:</h5>
                <p className="footerp">(480) 352-4966</p>
                <h5></h5>
            </div>




        </div>
    )


}


export default Footer