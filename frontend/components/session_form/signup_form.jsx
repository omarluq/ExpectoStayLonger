
import React from 'react';


class SignUpForm extends React.Component {


    constructor(props){
        super(props)
        this.state = this.props.user
    }

    handleSubmit(e){
        e.preventDefault()
        this.props.signup(this.state)
    }

    handleChange(field){
        return (e) => {
                this.setState({[field]: e.target.value})
            }
    }

 


    render(){
            const errors = this.props.errors.map((error, i)=> <li key={i}>{error}</li>)

        return (
            <div className="session-div">
            <form className='session' onSubmit={(e)=> this.handleSubmit(e)}>
                <h4>Welcome to expectoStayLonger, let sign you up</h4>
                <label>Email:
                    <input type="text" value={this.state.email} onChange={this.handleChange("email")}/>
                </label>
                <label>Name: 
                    <input type="text" value={this.state.name} onChange={this.handleChange("name")}/>
                </label>
                <label>Bio:
                    <textarea value={this.state.bio} onChange={this.handleChange("bio")}/>
                </label>
                <label>Password:
                    <input type="password" value={this.state.password} onChange={this.handleChange("password")}/>
                </label>
                <button>
                    Continue
                </button>
                <ul>
                    {errors}
                </ul>
            </form>
            </div>
        )
    }
}

export default SignUpForm