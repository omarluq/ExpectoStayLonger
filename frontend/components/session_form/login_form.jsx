
import React from 'react';
import {Link} from 'react-router-dom'


class LoginForm extends React.Component {


    constructor(props){
        super(props)
        this.state = this.props.user
    }

    handleSubmit(e){
        e.preventDefault()
        this.props.login(this.state).then( (res) => this.props.closeModal())
    }

    handleChange(field){
        return (e) => {
                this.setState({[field]: e.target.value})
            }
    }

    demoUser(){
        this.setState({email: "dobbythehouseelef@gmail.com", password: 123456 })
        this.props.login(this.state)
    }

    componentWillUnmount(){
        this.props.clearErrors()
    }


    render(){
        let errors;
        if (this.props.errors){
            errors = this.props.errors.map((error, i)=> <li className="errors" key={i}>{error}</li>)} else {
                errors = <div></div>
            }

        return (
        
            <div className="session-div">
            <form className='loginsession' onSubmit={(e)=> this.handleSubmit(e)}>
                <button className="x" onClick={ ()=>this.props.closeModal()}>X</button>
                <h4 className="welcome" >Welcome to expectoStayLonger, lets log you in</h4>
                <br />
                    <input className="sessioninput" type="text" value={this.state.email} onChange={this.handleChange("email")} placeholder="Email" />
                <br />
                    <input className="sessioninput" type="password" value={this.state.password} onChange={this.handleChange("password")} placeholder="Password" />
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
                <p className='bottoms'>Not a current user? <Link onClick={()=>this.props.closeModal(), this.props.openModal}>Become brilliant!</Link></p>
            </form>
            
            </div>
        )
    }
}

export default LoginForm