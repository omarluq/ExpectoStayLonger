import SignUpFormContainer from "../session_form/singup_form_container";
import React from "react";
import LoginFormContainer from "../session_form/login_form_container";
import { Link } from 'react-router-dom';


const Header = props => {
    

    const beforeLogin = () => (
        <div className="header" >
            <h1 className ="logo"> ϟ expectoStayLonger</h1>
            <div className="dropDown" >
            <button className="dropDownb"> ≡ </button>
            <div className="content" >
            <Link to="/signup">Sign up</Link>
            <Link to="/login">Log in</Link>
            </div>
            </div>
        </div>
    )

    const afterLogin = () => (
       <div className="header" >
           <h1 className="logo">expectoStayLonger</h1>
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