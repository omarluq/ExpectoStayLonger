import SignUpFormContainer from "../session_form/singup_form_container";
import React from "react";
import LoginFormContainer from "../session_form/login_form_container";
import { Link } from 'react-router-dom';
import { NavLink } from "react-router-dom";


// ϟ expectoStayLonger


const Header = props => {
    

    const beforeLogin = () => (
        <div className="header" >
            <div className ="logo"> </div>
            <div className="dropDown" >
            <button className="dropDownb"> ≡ </button>
            <div className="content" >
            <Link className="link" to="/signup">Sign up</Link>
            <br />
            <Link className="link" to="/login">Log in</Link>
            </div>
            </div>
        </div>
    )

    const afterLogin = () => (
       <div className="header" >
           <div className ="logo"> </div>
            <div className="dropDown" >
            <button className="dropDownb"> ≡ </button>
            <div className="content" >
            <a onClick = {()=> props.logout()}> Logout </a>
            </div>
            </div>
       </div>
            
    
    )
  

    if(props.session.id){
        return afterLogin() 
    } else {
        return beforeLogin()  
    }
}

export default Header