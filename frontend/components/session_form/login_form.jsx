
import React from 'react';
import {Link} from 'react-router-dom'


class LoginForm extends React.Component {


    constructor(props){
        super(props)
        this.state = this.props.user
    }

    handleSubmit(e){
        e.preventDefault()
        this.props.login(this.state)
    }

    handleChange(field){
        return (e) => {
                this.setState({[field]: e.target.value})
            }
    }

    demoUser(){
        this.setState({email: "richard@gmail.com", password: 123456 })
        this.props.login(this.state)
    }


    render(){
            const errors = this.props.errors.map((error, i)=> <li className="errors" key={i}>{error}</li>)

        return (
        
            <div className="session-div">
            <form className='session' onSubmit={(e)=> this.handleSubmit(e)}>
                <h4 className="welcome" >Welcome to expectoStayLonger, lets log you in</h4>
                <br />
                    <input type="text" value={this.state.email} onChange={this.handleChange("email")} placeholder="Email" className="input"/>
                <br />
                    <input type="password" value={this.state.password} onChange={this.handleChange("password")} placeholder="Password" className="input"/>
                <br />
                <button className="sessionb">
                    Continue
                </button>
                <br />
                <button className="sessionb" onClick={()=>this.demoUser()}>
                    Demo User
                </button>
                <br />
                <ul>
                    {errors}
                </ul>
                <p className='bottoms'>Not a current user? <Link to="/signup">Become brilliant!</Link></p>
            </form>
            
            </div>
        )
    }
}

export default LoginForm