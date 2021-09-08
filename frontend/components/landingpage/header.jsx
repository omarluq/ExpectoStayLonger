import React from "react";
import { Link } from 'react-router-dom';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import MenuIcon from '@material-ui/icons/Menu';
import SearchBar from "../listing_index/search_bar";


class Header extends React.Component  {



    constructor(props){
        super(props)
        this.state = {scrollClass: "header"}
    }


    componentDidMount(){
        document.addEventListener("scroll", ()=>{
            if (window.scrollY > 5) {
                this.setState({scrollClass: "on-scroll"})
            } else {
                this.setState({scrollClass: "header"}) 
            }

        })
    }


    render(){

        const beforeLogin = () => (
            <div className={this.state.scrollClass} >
                <Link to="/">
                <div className ="logo"  > </div>
                </Link> 
                <SearchBar />
                <div className="dropDown" >
                <button className="dropDownb"> <MenuIcon/> <AccountCircleIcon/>  </button>
                <div className="content" >
                    <Link className="link" to="/login">Log in</Link>
                <br />
                    <Link className="link" to="/signup">Sign up</Link>
                </div>
                </div>
            </div>
        )

        const afterLogin = () => (
        <div className={this.state.scrollClass} >
                <Link to="/">
                <div className ="logo"  > </div>
                </Link> 
                <SearchBar />
                <div className="dropDown" >
                <button className="dropDownb"> <MenuIcon/> <AccountCircleIcon/>  </button>
                <div className="content" >
                <Link className="link" to={`/user/${this.props.session.id}`}> Profile </Link>
                <a className="link" onClick = {()=> this.props.logout()}> Logout </a>
                </div>
                </div>
        </div>
                
        
        )
    

        if(this.props.session.id){
            return afterLogin() 
        } else {
            return beforeLogin()  
        }
    }
}

export default Header