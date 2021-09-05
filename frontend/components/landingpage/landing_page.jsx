import SignUpFormContainer from "../session_form/singup_form_container";
import React from "react";
import LoginFormContainer from "../session_form/login_form_container";
import { Link } from 'react-router-dom';


const LandingPage = props => {
    

    const beforeLogin = () => (
        <> 
            <h1 className ="logo">expectoStayLonger</h1>
            <Link to="/signup">Sign up</Link>
            <Link to="/login">Log in</Link>
        </>
    )

    const afterLogin = () => (
        <> 
            <h1 className="logo">expectoStayLonger</h1>
            <p>Welcome {props.user[props.session["id"]].name}</p>
            <p>{props.user[props.session["id"]].bio}</p>
            <button onClick={()=>props.logout()}>Log Out</button>
        </>
    )
  

    if(props.session.id){
        return afterLogin() 
    } else {
        return beforeLogin()  
    }
}

export default LandingPage