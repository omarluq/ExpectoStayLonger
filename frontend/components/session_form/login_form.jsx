
import React from 'react';


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
            const errors = this.props.errors.map((error, i)=> <li key={i}>{error}</li>)

        return (
            <div className="session-div">
            <form className='session' onSubmit={(e)=> this.handleSubmit(e)}>
                <h4>Welcome to expectoStayLonger, lets log you in</h4>
                <label>Email:
                    <input type="text" value={this.state.email} onChange={this.handleChange("email")}/>
                </label>
                <label>Password:
                    <input type="password" value={this.state.password} onChange={this.handleChange("password")}/>
                </label>
                   
                <button>
                    Continue
                </button>
                <button onClick={()=>this.demoUser()}>
                    Demo User
                </button>
                <ul>
                    {errors}
                </ul>
            </form>
            </div>
        )
    }
}

export default LoginForm