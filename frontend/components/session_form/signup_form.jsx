
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
                <br />
            <form className='session' onSubmit={(e)=> this.handleSubmit(e)}>
                <h4>Welcome to expectoStayLonger, lets sign you up</h4>
                <br />
                    <input type="text" value={this.state.email} onChange={this.handleChange("email")} placeholder="Email" className="input"/>
                <br />
                    <input type="text" value={this.state.name} onChange={this.handleChange("name")} placeholder="Name" className="input"/>
                <br />
                    <textarea value={this.state.bio} onChange={this.handleChange("bio")} placeholder="Bio" className="input"/>
                <br />
                    <input type="password" value={this.state.password} onChange={this.handleChange("password")} placeholder="Password" className="input"/>
                <br />
                <button>
                    Continue
                </button>
                <br />
                <ul>
                    {errors}
                </ul>
            </form>
            </div>
        )
    }
}

export default SignUpForm